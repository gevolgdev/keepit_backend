import { FastifyInstance } from 'fastify'
import { GoalFactory } from './factories/goal.factory'

export function goalRoutes(server: FastifyInstance) {
	const goalFactory = GoalFactory.goalController()

	server.get('/:userId', (req, res) =>
		goalFactory.getAllGoals(req, res),
	)

	server.post('/create', (req, res) =>
		goalFactory.createGoal(req, res),
	)

	server.put('/update/:goalId', (req, res) =>
		goalFactory.updateGoal(req, res),
	)

	server.delete('/delete/:goalId', (req, res) =>
		goalFactory.deleteGoal(req, res),
	)
}
