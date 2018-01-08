import express from 'express';

import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));
// star all routes for staticrouter
app.get('*', (req, res) => {
	res.send(renderer(req));
});

app.listen(3000, () => {
	console.log('listen');
});