const faker = require('faker');
const fs = require('fs');
var i = 1;

const generateOneProjectCSVRow = (id) => {
  return `${id}|` + faker.date.past().toISOString()
}

const generateOneUpdateCSVRow = (id, foreignLimit) => {
  return `${id}|"${faker.random.words()}"|${JSON.stringify(faker.lorem.paragraphs())}|${faker.date.past().toISOString()}|${faker.random.number()}|${Math.ceil(Math.random()*foreignLimit)}`
}

const generateOneCommentCSVRow = (id, foreignLimit) =>{
  return `${id}| ${faker.random.number()}|${faker.image.avatar()}|${faker.internet.userName()}|${faker.date.recent().toISOString()}|"${faker.lorem.sentence()}"|${Math.ceil(Math.random()*foreignLimit)}`
}

const createTestFile = function createTestFile(filename, dataGen, recordNum, foreignLimit){
  let loop = 1;
  projects = [];
  console.time('seeding');
  while(loop<=recordNum){
    projects.push(dataGen(loop, foreignLimit))
    if (loop % 50000 === 0) {
      let num = Math.ceil(loop/5000000);
      fs.appendFileSync(`${filename}${num}.txt`, `${projects.join('\n')}\n`);
      projects = [];
      process.stdout.write('.');
      if (loop % 500000 === 0) {
        console.log(loop);
      }
    }
    loop++;
  }
  console.timeEnd('seeding');
}


const createTestDataSet = function createTestDataSet() {
  createTestFile('database/postgres/seedFiles/projects', generateOneProjectCSVRow, 10000000);
  createTestFile('database/postgres/seedFiles/updates', generateOneUpdateCSVRow, 30000000, 10000000);
  createTestFile('database/postgres/seedFiles/updateComments', generateOneCommentCSVRow, 30000000, 30000000);
  createTestFile('database/postgres/seedFiles/projectComments', generateOneCommentCSVRow, 30000000, 10000000);
};

createTestDataSet();
