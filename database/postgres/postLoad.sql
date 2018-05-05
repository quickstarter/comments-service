\copy projects FROM './database/postgres/projects.csv' (DELIMITER ',');
\copy updates FROM './database/postgres/updates.csv' (DELIMITER ',');
\copy updateComments FROM './database/postgres/updateComments.csv' (DELIMITER ',');
\copy projectComments FROM './database/postgres/projectComments.csv' (DELIMITER ',');


CREATE INDEX ON updates(project_id);
CREATE INDEX ON updateComments(update_id);
CREATE INDEX ON projectComments(project_id);