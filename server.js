const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const weatherRoutes = require('./routes/weather')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173'

app.use(
  cors({
    origin: CLIENT_ORIGIN,
    credentials: true,
  })
)
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Weather API is running. Use /api/health or /api/weather?city=CityName',
  })
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' })
})

app.use('/api', weatherRoutes)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({
    message: 'Something went wrong on the server.',
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
