const express = require('express');
const Service = require('./service/service');

const app = express();
const port = 3000;

const service = new Service();

app.post('/update', async (req, res) => {
  try {
    await service.update();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(port, () => console.log(`Medical app listening at http://localhost:${port}`));
