import express from 'express'
import { UserController } from '../controller/user-controller'

export const publicRouter = express.Router()

publicRouter.post('/registration', UserController.register )
publicRouter.post('/login', UserController.login )

