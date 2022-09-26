const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	const { q } = req.query;
	axios({
		url: 'https://localhost:3000/evatitan',
		params: { q }
	}).then((response) => {
		console.log('server 3000');
	});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
