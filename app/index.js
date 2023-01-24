const express = require('express');

const sequelize = require('./utils/database')
//const User = require('./models/users')

const app = express();

const PORT = process.env.EXTERNAL_PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// need middleware folder for best practices
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST','PUT','DELETE');
  next();
})

// my routes here
app.use('/users', require('./routes/users'))

// the power that let async function call just after its implementation
(async () => {
  try {
    await sequelize.sync(
      {force: false}
    )
    console.log('test')
    app.listen(PORT || 3001)
  } catch (error) {
    console.log(error)
  }
})()