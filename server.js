import express from 'express';

const app = express();
const port = 5001;

const stepData = new Map();

app.use(express.json());
app.get('/', (req, res) => {
	res.send('I am alive people');
});

app.post('/create', (req, res) => {
	const { stepLevel } = req.body;
	console.log('request body', req.body);
	stepData.set(stepLevel, { ...req.body });
	res.json({ verified: true, ...stepData.get(stepLevel) });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
