require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./src/routes/TasksRoutes');
const errorMiddleware = require('./src/middlewares/ErrorMiddleware');

const app = express();
app.use(bodyParser.json());

app.use('/tasks', taskRoutes);
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
