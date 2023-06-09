export interface User {
    _id: string,
    name: string,
    email: string,
    avatarUrl: string;
    deleted: boolean,
    deletedAt: Date,
    createdAt: Date,
    updatedAt: Date,
}