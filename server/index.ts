import express from 'express';
import path from 'path';
import morgan from 'morgan';

const app: express.Application = express();

const PORT: string = process.env.PORT || '3000';

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../dist')));

//router routes go here

app.get('*', (_req, _res) => {
    _res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => console.log(`glistening on port ${PORT}`));
