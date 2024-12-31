// DTOs para o módulo user

export interface ICreateUser {
	name: string
	email: string
	password: string
}

export interface ISignIn {
	email: string
	password: string
}
