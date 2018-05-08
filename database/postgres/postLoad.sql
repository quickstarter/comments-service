CREATE INDEX ON updates(project_id);
CREATE INDEX ON updateComments(update_id);
CREATE INDEX ON projectComments(project_id);

ALTER TABLE updates CONSTRAINT update_prj_id FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE;
ALTER TABLE updateComments CONSTRAINT upComm_up_id FOREIGN KEY (update_id) REFERENCES updates (id) ON DELETE CASCADE;
ALTER TABLE projectComments CONSTRAINT prjComm_prj_id FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE;