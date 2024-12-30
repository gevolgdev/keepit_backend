import Fastify from 'fastify'

function buildServer() {
	const server = Fastify({
		logger: {
			level: 'debug',
		},
	})

	server.get('/', async (request, reply) => {
		return { hello: 'world' }
	})

	return server
}

export default buildServer
