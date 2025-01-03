import { PrismaClient } from '@prisma/client'
import { IUser } from '../modules/user/interface/user.interface'

export class UserRepository {
	constructor(private readonly prisma: PrismaClient) {
		this.prisma = prisma
	}

	async createUser(data: IUser) {
		return this.prisma.user.create({
			data,
		})
	}

	async findUserByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: { email },
		})
	}
}
