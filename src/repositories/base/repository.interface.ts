export interface IRepository<T> {
	create(data: T): Promise<T>
	read(): Promise<T[]>
	findOne(id: string): Promise<T>
	update(id: string, data: T): Promise<T>
	delete(id: string): Promise<void>
}
