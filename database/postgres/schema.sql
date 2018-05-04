DROP TABLE projects CASCADE;
DROP TABLE updates CASCADE;
DROP TABLE updateComments CASCADE;
DROP TABLE projectComments CASCADE;

CREATE TABLE projects (
  id integer NOT NULL PRIMARY KEY,
  createdAt timestamp with time zone
);


CREATE TABLE updates (
  id integer NOT NULL  PRIMARY KEY,
  title varchar(255),
  body text[],
  createdAt timestamp with time zone,
  likes integer,
  project_id integer REFERENCES projects(id)
);


CREATE TABLE updateComments(
  id integer NOT NULL PRIMARY KEY,
  userId integer,
  avatar varchar(1024),
  username varchar(255),
  createdAt timestamp with time zone,
  body text[],
  update_id integer REFERENCES updates(id)
);


CREATE TABLE projectComments(
  id integer NOT NULL PRIMARY KEY,
  userId integer,
  avatar varchar(1024),
  username varchar(255),
  createdAt timestamp with time zone,
  body text[],
  project_id integer REFERENCES projects(id)
);
