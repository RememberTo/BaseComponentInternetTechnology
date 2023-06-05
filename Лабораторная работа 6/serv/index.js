import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const PORT = 3001
const app = express()

app.use(express.static(path.resolve(__dirname, 'page')))

// app.get('/', (req, res,) => {
//    res.sendFile(path.resolve(__dirname, 'page', 'index.html' ))
// })
// app.get('/features', (req, res,) => {
//    res.sendFile(path.resolve(__dirname, 'page', 'index.html' ))
// })

app.listen(PORT, () => {
   console.log(`Server ${PORT} is running...`)
})