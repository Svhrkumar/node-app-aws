const express = require('express');

const app = express();
const port = 3000;
app.listen(port, (req, res) => {
	console.log(`port is running on ${port}`);
});

app.get('/', (req, res) => {
	res.send('<h1>Server is running in aws</h1>');
});
