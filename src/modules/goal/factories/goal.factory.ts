import prismaInstance from '../../../common/utils/prismaInstance'
import { GoalRepository } from '../../../repositories/goal.repository'
import { GoalController } from '../goal.controller'
import { GoalService } from '../goal.service'

export class GoalFactory {
	static goalService() {
		const goalRepository = new GoalRepository(prismaInstance)
		return new GoalService(goalRepository)
	}

	static goalController() {
		const goalService = this.goalService()
		return new GoalController(goalService)
	}
}
