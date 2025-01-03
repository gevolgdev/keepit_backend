import { PrismaClient } from '@prisma/client'
import { IGoalDto } from '../modules/goal/dto/goal.dto'
import { IGoal } from '../modules/goal/interface/goal.interface'

export class GoalRepository {
	constructor(private readonly prisma: PrismaClient) {
		this.prisma = prisma
	}

	async getGoalsByUserId(userId: number) {
		return await this.prisma.goal.findMany({
			where: {
				userId,
			},
			include: {
				GoalCheckPoints: true,
			},
		})
	}

	async createGoal(data: IGoal) {
		return await this.prisma.goal.create({
			data,
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
