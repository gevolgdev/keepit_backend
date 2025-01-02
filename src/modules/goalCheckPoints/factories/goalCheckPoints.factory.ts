import prismaInstance from '../../../common/utils/prismaInstance'
import { GoalCheckPointsRepository } from '../../../repositories/goalCheckPoints.repository'
import { GoalCheckPointsController } from '../goalCheckPoints.controller'
import { GoalCheckPointsService } from '../goalCheckPoints.service'

export class GoalCheckPointsFactory {
	static service() {
		const repository = new GoalCheckPointsRepository(prismaInstance)
		return new GoalCheckPointsService(repository)
	}

	static controller() {
		const service = this.service()
		return new GoalCheckPointsController(service)
	}
}
