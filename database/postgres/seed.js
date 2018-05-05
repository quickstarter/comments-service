const faker = require('faker');
const fs = require('fs');
var i = 1;
// const projects = [];
//project row
const generateOneProjectCSVRow = (id) => {
  return `${id},` + faker.date.past().toISOString()
}

const generateOneUpdateCSVRow = (id, foreignLimit) => {
  return `${id},"${faker.random.words()}",${JSON.stringify(faker.lorem.paragraphs())},${faker.date.past().toISOString()},${faker.random.number()},${Math.ceil(Math.random()*foreignLimit)}`
}

const generateOneCommentCSVRow = (id, foreignLimit) =>{
  return `${id}, ${faker.random.number()},${faker.image.avatar()},${faker.internet.userName()},${faker.date.recent().toISOString()},"${faker.lorem.sentence()}",${Math.ceil(Math.random()*foreignLimit)}`
}


// const writeOneTable = function writeOneTable(dataNumber, stream, dataGen) {
//   let loop = dataNumber;
//   const writer = function writer() {
//     let ok = true;
//     do {
//       loop--;
//       if (loop === 0) {
//         stream.write(JSON.stringify(dataGen(loop)), 'utf8');
//       } else {
//         ok = stream.write(JSON.stringify(dataGen(loop)), 'utf8');
//       }
//     } while (loop > 0 && ok);
//     if (loop > 0) {
//       stream.once('drain', writer);
//     }
//   };
//   writer();
// };

// const createTestFile = function createTestFile(filename, dataGen) {
//   console.time('seeding')
//   const stream = fs.createWriteStream(filename, { flags: 'a' });
//   writeOneTable(10000000, stream, dataGen);
//   console.timeEnd('seeding');
//   stream.on('finish', () => stream.end());
// };
const createTestFile = function createTestFile(filename, dataGen, recordNum, foreignLimit){
  let loop = 1;
  projects = [];
  console.time('seeding');
  while(loop<=recordNum){
    projects.push(dataGen(loop, foreignLimit))
    if (loop % 50000 === 0) {
      // let num = loop<2500000 ? 1 : (loop<5000000 ? 2 : (loop<7500000 ? 3 : 4));
      fs.appendFileSync(`${filename}.csv`, `${projects.join('\n')}\n`);
      projects = [];
      process.stdout.write('.');
      if (i % 100000 === 0) {
        console.log(loop);
      }
    }
    loop++;
  }
  console.timeEnd('seeding');
}


const createTestDataSet = function createTestDataSet() {
  createTestFile('database/postgres/projects', generateOneProjectCSVRow, 10000000);
  createTestFile('database/postgres/updates', generateOneUpdateCSVRow, 30000000, 10000000);
  createTestFile('database/postgres/updateComments', generateOneCommentCSVRow, 30000000, 30000000);
  createTestFile('database/postgres/projectComments', generateOneCommentCSVRow, 30000000, 10000000);
};

createTestDataSet();
