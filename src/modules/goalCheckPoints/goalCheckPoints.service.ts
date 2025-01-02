import { GoalCheckPointsRepository } from '../../repositories/goalCheckPoints.repository'
import { IGoalCheckPointsDto } from './dto/goalCheckPoints.dto'
import { IGoalCheckPoints } from './interface/goalCheckPoints.interface'

export class GoalCheckPointsService {
	constructor(
		private readonly goalCheckPointsRepository: GoalCheckPointsRepository,
	) {
		this.goalCheckPointsRepository = goalCheckPointsRepository
	}

	async createCheckPoint(goalId: number, data: IGoalCheckPointsDto) {
		const date = new Date().toISOString().split('T')[0]

		const goalCheckPoint: IGoalCheckPoints = {
			date,
			goalAssessment: data.goalAssessment,
		}

		return await this.goalCheckPointsRepository.createCheckPoint(
			goalId,
			goalCheckPoint,
		)
	}
}
