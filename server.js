import express from 'express';

const app = express();
const port = 5001;

app.use(express.json());
app.get('/', (req, res) => {
	res.send('I am alive people');
});

app.post('/create', (req, res) => {
	console.log('request body', req.body);
	res.json({ verified: true });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
