import { prisma } from '../../../common/utils/prisma'
import { UserRepository } from '../../../repositories/user.repository'
import { UserController } from '../user.controller'
import { UserService } from '../user.service'

export class UserFactory {
	static service() {
		const userRepository = new UserRepository(prisma)
		return new UserService(userRepository)
	}

	static controller() {
		const userService = this.service()
		return new UserController(userService)
	}
}
