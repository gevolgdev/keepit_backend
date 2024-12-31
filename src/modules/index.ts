import { userRoutes } from './user/user.routes'

export default [
	{
		module: userRoutes,
		prefix: '/api/user',
	},
]
