import { PrismaClient } from '@prisma/client'
import { IGoalCheckPoints } from '../modules/goalCheckPoints/interface/goalCheckPoints.interface'

export class GoalCheckPointsRepository {
	constructor(private readonly prisma: PrismaClient) {
		this.prisma = prisma
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
