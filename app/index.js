const express = require('express');

const app = express();

const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// need middleware folder for best practices
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST','PUT','DELETE');
  next();
})

app.listen(PORT, () => {
  console.log(`succefully connected to :${PORT}`)
})