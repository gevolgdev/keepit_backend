import { PrismaClient, Prisma } from '@prisma/client'
import { IRepository } from './repository.interface'

export class BaseRepository<T> implements IRepository<T> {
	private readonly prisma: PrismaClient
	private readonly modelName: Prisma.ModelName

	constructor(
		prisma: PrismaClient,
		modelName: Prisma.ModelName,
	) {
		this.prisma = prisma
		this.modelName = modelName
	}
	public async findOne(id: string): Promise<T> {
		return this.prisma[this.modelName].findUnique({
			where: { id },
		}) as Promise<T>
	}

	public async create(data: Partial<T>): Promise<T> {
		return this.prisma[this.modelName].create({
			data,
		}) as Promise<T>
	}

	public async read(): Promise<T[]> {
		return this.prisma[
			this.modelName
		].findMany() as Promise<T[]>
	}

	public async update(
		id: string,
		data: Partial<T>,
	): Promise<T> {
		return this.prisma[this.modelName].update({
			where: { id },
			data,
		}) as Promise<T>
	}

	public async delete(id: string): Promise<void> {
		await this.prisma[this.modelName].delete({
			where: { id },
		})
	}
}
