import { UserRepository } from '../../repositories/user.repository'
import { ISignIn } from './dto/user.dto'
import { IUser } from './interface/user.interface'

export class UserService {
	constructor(private readonly userRepository: UserRepository) {
		this.userRepository = userRepository
	}

	async createUser(data: IUser) {
		const user = await this.userRepository.findUserByEmail(data.email)

		if (user) return null

		const userCreated = await this.userRepository.createUser(data)

		return { ...userCreated }
	}

	async signIn(data: ISignIn) {
		const user = await this.userRepository.findUserByEmail(data.email)

		if (!user) return null

		return { ...user }
	}
}
