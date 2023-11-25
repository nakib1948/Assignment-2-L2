import express, { Application, Request, Response } from "express"
import { userRoutes } from "./routes/user.route";
import cors from 'cors'
const app: Application = express()

app.use(express.json())
app.use(cors())
app.use('/api/users',userRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('server is roun!')
})

export default app
