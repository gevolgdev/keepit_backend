import { Prisma, PrismaClient } from '@prisma/client'
import { BaseRepository } from './base/baseRepository'
import { IGoalCheckPoints } from '../modules/goalCheckPoints/interface/goalCheckPoints.interface'

export class GoalCheckPointsRepository extends BaseRepository<any> {
	constructor(prisma: PrismaClient) {
		super(prisma, 'GoalCheckPoints')
	}

	async createCheckPoint(goalId: number, data: IGoalCheckPoints) {
		return this.prisma.goalCheckPoints.create({
			data: {
				goalId,
				...data,
			},
		})
	}
}
