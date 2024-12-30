import buildServer from './server'

const server = buildServer()

async function app() {
	server
		.listen({ port: 3333, host: '0.0.0.0' })
		.then(() => {
			console.log('🚀 Server is running!')
		})
		.catch((err) => {
			console.error('::: Erro no Server :::', err)
		})
}

app()
