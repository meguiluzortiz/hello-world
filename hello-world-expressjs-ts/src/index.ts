import { app } from './server';

const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
