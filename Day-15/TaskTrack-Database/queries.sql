-- 1. Insert a sample user
INSERT INTO users (username, email) VALUES ('yash_verma', 'yash@example.com');

-- 2. Insert a task linked to the user
INSERT INTO tasks (title, description, user_id) VALUES ('Complete Day 15', 'Relational database modeling and schema setup', 1);

-- 3. Fetch all tasks with their users using JOIN
SELECT tasks.id, tasks.title, users.username, tasks.created_at 
FROM tasks 
JOIN users ON tasks.user_id = users.id;