import { FastifyReply, FastifyRequest } from 'fastify'
import { GoalCheckPointsService } from './goalCheckPoints.service'
import { IGoalCheckPointsDto } from './dto/goalCheckPoints.dto'

export class GoalCheckPointsController {
	constructor(
		private readonly goalCheckPointsService: GoalCheckPointsService,
	) {
		this.goalCheckPointsService = goalCheckPointsService
	}

	async createCheckPoint(req: FastifyRequest, res: FastifyReply) {
		const goalId = Number(
			(
				req.query as {
					goalId: string
				}
			).goalId,
		)

		const body = req.body as IGoalCheckPointsDto

		const checkPoint = await this.goalCheckPointsService.createCheckPoint(
			goalId,
			body,
		)

		if (!checkPoint)
			return res
				.status(500)
				.send({ message: 'Houve um erro ao criar seu checkpoint!' })

		return res.status(201).send({ message: 'Seu progresso foi salvo!' })
	}
}
