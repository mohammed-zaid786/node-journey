import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const API_URL = 'http://localhost:3000/api/tasks';

  const fetchTasks = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (data.success) {
        setTasks(data.data);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      });
      if (res.ok) {
        setTitle('');
        fetchTasks();
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTask = async (id, currentCompleted) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !currentCompleted }),
      });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div style={{ maxWidth: '450px', margin: '50px auto', fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Task Manager Pro</h2>
      
      <form onSubmit={addTask} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a new task..."
          style={{ flex: 1, padding: '8px', fontSize: '14px' }}
        />
        <button type="submit" style={{ padding: '8px 16px', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              borderBottom: '1px solid #eee',
            }}
          >
            <span
              onClick={() => toggleTask(task.id, task.completed)}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#888' : '#000',
                cursor: 'pointer',
                flex: 1,
              }}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{ background: '#ff4d4d', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;