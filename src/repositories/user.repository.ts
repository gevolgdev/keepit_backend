import { PrismaClient } from '@prisma/client'
import { IUser } from '../modules/user/interface/user.interface'
import { BaseRepository } from './base/baseRepository'

export class UserRepository extends BaseRepository<IUser> {
	constructor(prisma: PrismaClient) {
		super(prisma, 'User')
	}

	async createUser(data: IUser) {
		return this.create(data)
	}
}
