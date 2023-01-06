import app from './api';

const PORT: string = process.env.PORT || '3000';

app.listen(PORT, () => console.log(`glistening on port ${PORT}`));
