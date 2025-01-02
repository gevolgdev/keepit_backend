import prismaInstance from '../../../common/utils/prismaInstance'
import { UserRepository } from '../../../repositories/user.repository'
import { UserController } from '../user.controller'
import { UserService } from '../user.service'

export class UserFactory {
	static service() {
		const userRepository = new UserRepository(prismaInstance)
		return new UserService(userRepository)
	}

	static controller() {
		const userService = this.service()
		return new UserController(userService)
	}
}
