import { FastifyReply, FastifyRequest } from 'fastify'
import { IUser } from './interface/user.interface'
import { UserService } from './user.service'
import { ISignIn } from './dto/user.dto'

export class UserController {
	constructor(private readonly userService: UserService) {
		this.userService = userService
	}

	async createUser(req: FastifyRequest, res: FastifyReply) {
		const data = req.body as IUser
		const user = await this.userService.createUser(data)

		if (!user) {
			return res
				.status(400)
				.send({ message: 'Usuario já cadastrado!' })
		}

		return res
			.status(201)
			.send({ message: 'Usuario criado com sucesso!', data: user })
	}

	async signIn(req: FastifyRequest, res: FastifyReply) {
		const data = req.body as ISignIn
		const user = await this.userService.signIn(data)

		if (!user)
			return res.status(400).send({ message: 'Email inválido!' })

		return res
			.status(201)
			.send({ message: 'Login efetuado com sucesso!' })
	}
}
