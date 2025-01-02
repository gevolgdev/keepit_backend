import { FastifyReply, FastifyRequest } from 'fastify'
import { GoalService } from './goal.service'
import { IGoalDto } from './dto/goal.dto'

export class GoalController {
	constructor(private readonly goalService: GoalService) {}

	async getAllGoals(req: FastifyRequest, res: FastifyReply) {
		const userIdParam = (req.params as { userId: string }).userId

		const goals = await this.goalService.getAllGoals(
			Number(userIdParam),
		)

		return res.status(201).send({ data: goals })
	}

	async createGoal(req: FastifyRequest, res: FastifyReply) {
		const data = req.body as IGoalDto
		const goalCreated = await this.goalService.createGoal(data)

		if (!goalCreated) {
			res.status(400).send({
				message: 'Sua meta já foi cadastrada anteriormente!',
			})
		}

		return res.status(201).send({
			message: 'Sua meta foi cadastrada com sucesso!',
			data: { ...goalCreated },
		})
	}

	async updateGoal(req: FastifyRequest, res: FastifyReply) {
		const goalIdParam = Number(
			(req.params as { goalId: string }).goalId,
		)
		const goalData = req.body as IGoalDto

		await this.goalService.updateGoal(goalIdParam, goalData)

		return res
			.status(201)
			.send({ message: 'Sua meta foi atualizada com sucesso!' })
	}

	async deleteGoal(req: FastifyRequest, res: FastifyReply) {
		const goalIdParam = Number(
			(req.params as { goalId: string }).goalId,
		)

		await this.goalService.deleteGoal(goalIdParam)

		return res
			.status(201)
			.send({ message: 'Sua meta foi exclúida com sucesso!' })
	}
}
