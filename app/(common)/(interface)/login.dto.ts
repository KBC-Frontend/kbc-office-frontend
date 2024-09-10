export interface UserDto{
    readonly id: string
    readonly email: string
    readonly createdAt: Date
    readonly position: string
    username: string
    updatedAt: Date
    socialType: string
    role: string
}

export type UserJson = {
    [id: string]:{
        email: string
        createdAt: Date
        username: string
        position: string
        updatedAt: Date
        socialType: string
        role: string
    }
}
