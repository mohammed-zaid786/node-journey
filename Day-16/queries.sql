-- Day-16: Core SQL Queries, Filters and Joins

-- 1. Inserting mock data into users and tasks
INSERT INTO users (username, email, password) VALUES 
('yash_verma', 'yash@example.com', '1234'),
('megha_chauhan', 'megha@example.com', '1234');

INSERT INTO tasks (title, description, completed, user_id) VALUES 
('Practice JavaScript', 'Complete array methods practice', false, 1),
('Setup Git Repository', 'Push code to GitHub safely', true, 1),
('Database Indexing', 'Learn about query performance', false, 2);

-- 2. Filtering tasks using WHERE and AND condition
SELECT * FROM tasks 
WHERE completed = false AND user_id = 1;

-- 3. Joining tables using INNER JOIN
SELECT tasks.id, tasks.title, tasks.completed, users.username, users.email
FROM tasks
INNER JOIN users ON tasks.user_id = users.id;

-- 4. Pagination using LIMIT and OFFSET
SELECT * FROM tasks 
ORDER BY id 
LIMIT 2 OFFSET 0;

-- 5. Updating a task status
UPDATE tasks 
SET completed = true 
WHERE id = 1;

-- 6. Aggregates and GROUP BY
SELECT users.username, COUNT(tasks.id) AS total_tasks
FROM users
LEFT JOIN tasks ON users.id = tasks.user_id
GROUP BY users.id, users.username;