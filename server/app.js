import express from 'express'
import fileupload from 'express-fileupload'
import postRoutes from './routes/posts.routes.js'
const app = express()
app.use(express.json())
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

app.use(postRoutes)


export default app