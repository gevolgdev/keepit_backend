import { FastifyInstance } from 'fastify'
import { UserFactory } from './factories/user.factory'

export function userRoutes(server: FastifyInstance) {
	const userController = UserFactory.controller()

	server.post('/create-user', (req, res) =>
		userController.createUser(req, res),
	)

	server.post('/sign-in', (req, res) =>
		userController.signIn(req, res),
	)
}
