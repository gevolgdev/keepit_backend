import { prisma } from '../../../common/utils/prisma'
import { GoalRepository } from '../../../repositories/goal.repository'
import { GoalController } from '../goal.controller'
import { GoalService } from '../goal.service'

export class GoalFactory {
	static goalService() {
		const goalRepository = new GoalRepository(prisma)
		return new GoalService(goalRepository)
	}

	static goalController() {
		const goalService = this.goalService()
		return new GoalController(goalService)
	}
}
