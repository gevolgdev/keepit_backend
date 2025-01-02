import { FastifyInstance } from 'fastify'
import { GoalCheckPointsFactory } from './factories/goalCheckPoints.factory'

export function goalCheckPointsRoutes(server: FastifyInstance) {
	const goalCheckPointsController = GoalCheckPointsFactory.controller()

	server.post('/create', (req, res) =>
		goalCheckPointsController.createCheckPoint(req, res),
	)
}
