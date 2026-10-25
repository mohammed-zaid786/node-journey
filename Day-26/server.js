const app = require('./app');
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running smoothly on port ${PORT}`);
});