const faker = require('faker');
const db = require('./db.js');

const projects = [];

for (let i = 1; i <= 100; i++) {
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

var defaultData = {
  id: 0,
  createdAt: "2018-04-10T13:16:31.413Z",
  updates: [{
    title: "Peep These Updates Though",
    body: "Amazing work fellas! Shoutout to the NotAirBnB team for making such a sick website",
    date: "2018-04-20T13:16:31.413Z",
    likes: 210,
    comments: [{
      userId: 10,
      avatar: "https://avatars0.githubusercontent.com/u/28763918?s=460&v=4",
      username: "cam",
      date: "2018-04-24T13:16:31.413Z",
      body: "amazing stuff man nice job!!",
    }, {
      userId: 100,
      avatar: "https://avatars3.githubusercontent.com/u/24502574?s=400&v=4",
      username: "ryan",
      date: "2018-04-21T13:16:31.413Z",
      body: "cool story br000000",
    }, {
      userId: 420,
      avatar: "https://avatars3.githubusercontent.com/u/31649275?s=460&v=4",
      username: "sam",
      date: "2018-04-20T13:16:31.413Z",
      body: "your component is wack",
    }]
  }, {
    title: "Product Summary!!!",
    body: "I am just so excited that product summary component is all finished. Gotta shoutout my boy mike for just being such a cool dude.",
    date: "2018-04-18T13:16:31.413Z",
    likes: 17,
    comments: [{
      userId: 420,
      avatar: "https://avatars3.githubusercontent.com/u/31649275?s=460&v=4",
      username: "sam",
      date: "2018-04-11T13:16:31.413Z",
      body: "wow so sick man",
    }, {
      userId: 100,
      avatar: "https://avatars3.githubusercontent.com/u/24502574?s=400&v=4",
      username: "ryan",
      date: "2018-04-13T13:16:31.413Z",
      body: "cool story bro",
    }, {
      userId: 1,
      avatar: "https://avatars1.githubusercontent.com/u/30758373?s=460&v=4",
      username: "mic",
      date: "2018-04-18T13:16:31.413Z",
      body: "nice job! looks good",
    }]
  }, {
    title: "WOW the Navbar is Finished",
    body: "yo the navbar is finished and it looks niiiiiiiiiceeeee. u see that line moving tho when u click stuff???? yeeee.",
    date: "2018-04-13T13:16:31.413Z",
    likes: 9,
    comments: [{
      userId: 10,
      avatar: "https://avatars0.githubusercontent.com/u/28763918?s=460&v=4",
      username: "cam",
      date: "2018-04-16T13:16:31.413Z",
      body: "lookin good!!",
    }, {
      userId: 1,
      avatar: "https://avatars1.githubusercontent.com/u/30758373?s=460&v=4",
      username: "mic",
      date: "2018-04-14T13:16:31.413Z",
      body: "back this project should be animated when u scroll tho",
    }, {
      userId: 100,
      avatar: "https://avatars3.githubusercontent.com/u/24502574?s=400&v=4",
      username: "ryan",
      date: "2018-04-13T13:16:31.413Z",
      body: "omg sam your so cool",
    }]
  }, {
    title: "omg just finished campaign module",
    body: "wow im so awesome i finished the campaign module. took me like forever but its cool. shoutout to mike hes awesome.",
    date: "2018-04-11T13:16:31.413Z",
    likes: 7,
    comments: [{
      userId: 1,
      avatar: "https://avatars1.githubusercontent.com/u/30758373?s=460&v=4",
      username: "mic",
      date: "2018-04-13T13:16:31.413Z",
      body: "appreciate the shoutout bro",
    }, {
      userId: 10,
      avatar: "https://avatars0.githubusercontent.com/u/28763918?s=460&v=4",
      username: "cam",
      date: "2018-04-12T13:16:31.413Z",
      body: "nice work!",
    }, {
      userId: 420,
      avatar: "https://avatars3.githubusercontent.com/u/31649275?s=460&v=4",
      username: "sam",
      date: "2018-04-11T13:16:31.413Z",
      body: "wow so cooooooool",
    }]
  }],
  comments: []
}


var commentsArray = [];
//faker to create fake comments (51 comments)
for (var i = 0; i < 51; i++) {
  var fakeComment = {
    userId: faker.random.number(),
    avatar: faker.image.avatar(),
    username: faker.internet.userName(),
    date: faker.date.recent(),
    body: faker.random.words(),
  }
  commentsArray.push(fakeComment);
}

defaultData.comments = commentsArray;

projects.unshift(defaultData);

const insertProjects = () => {
  db.UpdatesAndComments.create(projects);
};

insertProjects();

