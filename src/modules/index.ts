import { goalRoutes } from './goal/goal.routes'
import { goalCheckPointsRoutes } from './goalCheckPoints/goalCheckPoints.routes'
import { userRoutes } from './user/user.routes'

export default [
	{
		module: userRoutes,
		prefix: '/api/user',
	},
	{
		module: goalRoutes,
		prefix: '/api/goal',
	},
	{
		module: goalCheckPointsRoutes,
		prefix: '/api/goalCheckPoints',
	},
]
