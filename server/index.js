import express from 'express'
import postRoutes from './routes/posts.routes.js'
import {connectDb} from './db.js'
import {PORT} from './config.js'

const app = express()
connectDb()

app.use(postRoutes)


app.listen(PORT)
console.log('Server is Running in port', PORT)