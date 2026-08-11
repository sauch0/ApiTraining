
import express from 'express';
import { initializeDatabase } from "./config/data-source"
import studentRoutes from "./routes/student.routes"
import courseRoutes from "./routes/course.routes"

const app = express();
app.use(express.json());

const baseRoute = '/api/v1'
const port = 5000;

app.use(baseRoute, studentRoutes)
app.use(baseRoute, courseRoutes)

initializeDatabase()
    .then(() => {
        app.use(baseRoute, studentRoutes)

        app.listen(port, () => {
            console.log(`Server is Running at http://localhost:${port}`)
        })

    })
    .catch((error) => {
        console.log(error)
    })



