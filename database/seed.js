const faker = require('faker');
const db = require('./db.js');

const projects = [];

for (let i = 0; i < 100; i++) {
  const project = {};
  project.id = i;
  project.createdAt = faker.date.past();
  project.updates = [{
    title: faker.random.words(),
    body: faker.lorem.paragraphs(),
    date: faker.date.past(),
    likes: faker.random.number(),
    comments: [{
      userId: faker.random.number(),
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      date: faker.date.recent(),
      body: faker.lorem.sentence(),
    }, {
      userId: faker.random.number(),
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      date: faker.date.recent(),
      body: faker.lorem.sentence(),
    }],
  }, {
    title: faker.random.words(),
    body: faker.lorem.paragraphs(),
    date: faker.date.past(),
    likes: faker.random.number(),
    comments: [{
      userId: faker.random.number(),
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      date: faker.date.recent(),
      body: faker.lorem.sentence(),
    }, {
      userId: faker.random.number(),
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      date: faker.date.recent(),
      body: faker.lorem.sentence(),
    }],
  }, {
    title: faker.random.words(),
    body: faker.lorem.paragraphs(),
    date: faker.date.past(),
    likes: faker.random.number(),
    comments: [{
      userId: faker.random.number(),
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      date: faker.date.recent(),
      body: faker.lorem.sentence(),
    }, {
      userId: faker.random.number(),
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      date: faker.date.recent(),
      body: faker.lorem.sentence(),
    }],
  }];
  project.comments = [{
    userId: faker.random.number(),
    avatar: faker.image.avatar(),
    username: faker.internet.userName(),
    date: faker.date.recent(),
    body: faker.random.words(),
  }, {
    userId: faker.random.number(),
    avatar: faker.image.avatar(),
    username: faker.internet.userName(),
    date: faker.date.recent(),
    body: faker.random.words(),
  }, {
    userId: faker.random.number(),
    avatar: faker.image.avatar(),
    username: faker.internet.userName(),
    date: faker.date.recent(),
    body: faker.random.words(),
  }];
  projects.push(project);
}

const insertProjects = () => {
  db.UpdatesAndComments.create(projects);
};

insertProjects();

