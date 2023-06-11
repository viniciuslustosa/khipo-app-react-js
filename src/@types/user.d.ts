export interface User {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    deleted: boolean,
    deletedAt: Date,
    createdAt: Date,
    updatedAt: Date,
}