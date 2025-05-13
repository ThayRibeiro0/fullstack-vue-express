import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173' // Frontend URL
}));

app.get('/helloworld', (_req, res) => {
  res.send({ message: 'Hello from the server!' });
}
);

app.listen(5000, () => {
  console.log('🛫 Server is running on port 5000'); // Backend URL
});