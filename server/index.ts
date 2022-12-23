import express from 'express';
import path from 'path';

const app: express.Application = express()

const PORT: string = process.env.PORT || '3000'

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (_req, _res) => {
    _res.sendFile('index.html')
})

app.listen(PORT, () => console.log(`glistening on port ${PORT}`))