import Fastify from 'fastify'
import modules from './modules'

function buildServer() {
	const server = Fastify({
		logger: {
			level: 'debug',
		},
	})

	server.get('/', async (request, reply) => {
		return { hello: 'world' }
	})

	for (const { module, prefix } of modules) {
		server.register(module, { prefix })
	}

	return server
}

export default buildServer
