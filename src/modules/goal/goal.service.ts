import { GoalRepository } from '../../repositories/goal.repository'
import { IGoalDto } from './dto/goal.dto'
import { IGoal } from './interface/goal.interface'

export class GoalService {
	constructor(private readonly goalRepository: GoalRepository) {
		this.goalRepository = goalRepository
	}

	async getAllGoals(userId: number) {
		const getAllGoals = await this.goalRepository.getGoalsByUserId(userId)

		return getAllGoals
	}

	async createGoal(data: IGoalDto) {
		const searchGoals = await this.goalRepository.findGoalByTitle(
			data.title,
		)

		if (!!searchGoals) {
			return null
		}

		const goalCreated = await this.goalRepository.createGoal(data)

		return goalCreated
	}

	async updateGoal(goalId: number, data: IGoalDto) {
		const goalUpdated = await this.goalRepository.updateGoalById(
			goalId,
			data,
		)

		return goalUpdated
	}

	async deleteGoal(goalId: number) {
		const goalDeleted = await this.goalRepository.deleteGoalById(goalId)

		return goalDeleted
	}
}
