import { IceBreakingDto, IceBreakingJson } from "./icebreaking.dto"
import { TaskDto, TaskJson } from "./task.dto"

export interface UserDto{
    readonly id: string
    readonly email: string
    readonly createdAt: Date
    myTodos: TaskDto[]
    myQuestions: IceBreakingDto[]
    position: string
    username: string
    updatedAt: Date
    socialType: string
    role: string
}

export type UserJson = {
    [id: string]:{
        email: string
        createdAt: Date
        position: string
        myTodos: TaskJson[]
        myQuestions: IceBreakingJson[]
        username: string
        updatedAt: Date
        socialType: string
        role: string
    }
}