import { UserDto, UserJson } from "../(interface)";


export namespace UserProvider{
    export const userinfoDto = (key: string, json: any): UserDto =>({
        id: key,
        email: json['email'],
        createdAt: json['createdAt'],
        username: json['username'],
        position: json['position'],
        updatedAt: json['updatedAt'],
        socialType: json['socialType'],
        role: json['role']
    } satisfies UserDto)

    export const toJson = (userinfoDto: UserDto) : UserJson => ({
        [`${userinfoDto.id}`]:{
            email: userinfoDto.email,
            createdAt: userinfoDto.createdAt,
            username: userinfoDto.username,
            position: userinfoDto.position,
            updatedAt: userinfoDto.updatedAt,
            socialType: userinfoDto.socialType,
            role: userinfoDto.role
        }
    })
}