import { PrismaClient } from '@prisma/client'
import { IGoal } from '../modules/goal/interface/goal.interface'
import { BaseRepository } from './base/baseRepository'
import { IGoalDto } from '../modules/goal/dto/goal.dto'

export class GoalRepository extends BaseRepository<IGoal> {
	constructor(prisma: PrismaClient) {
		super(prisma, 'Goal')
	}

	async getGoalsByUserId(userId: number) {
		return await this.prisma.goal.findMany({
			where: {
				userId,
			},
		})
	}

	async findGoalByTitle(title: string) {
		return await this.prisma.goal.findFirst({
			where: {
				title,
			},
		})
	}

	async updateGoalById(goalId: number, data: IGoalDto) {
		return await this.prisma.goal.update({
			where: {
				id: goalId,
			},
			data,
		})
	}

	async deleteGoalById(goalId: number) {
		return await this.prisma.goal.delete({
			where: {
				id: goalId,
			},
		})
	}
}
