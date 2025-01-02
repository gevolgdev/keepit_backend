export interface IRepository<T> {
	create(data: T): Promise<T>
	read(id: number): Promise<T[]>
	findOne(id: number): Promise<T>
	update(id: number, data: T): Promise<T>
	delete(id: number): Promise<void>
}
