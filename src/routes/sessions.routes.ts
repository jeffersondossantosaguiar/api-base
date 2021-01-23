import { Router } from 'express'
import { uuid } from 'uuidv4'

const sessionsRouter = Router()

sessionsRouter.post('/', (request, response) => {
  const { email, password } = request.body

  const authentication = {
    id: uuid(),
    email,
    password
  }

  return response.json({ authentication })
})

export default sessionsRouter
