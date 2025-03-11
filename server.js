require ('dotenv').config() 

const express = require('express')
const mongoose = require('mongoose')
const usuariosRoutes = require('./routes/usersRoutes')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifieldTopology: true
})

.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Database connection error', err))

app.use('/usuarios',usuariosRoutes)

// Test route
app.get('/', (req, res) => {
  res.send('API RESTful is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});