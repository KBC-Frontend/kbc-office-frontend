import { 
    UserDto, 
    UserJson 
} from "../(interface)";
import { APIManager } from "../(api)";
import { LocalStorage } from "../(storage)";
import { UserProvider } from "../(provider)";

class UserModel {
    private userData: UserDto | null = null

    public getUserData() { return this.userData }

    public async login(args: IUserLoginArgs): Promise<boolean> {
        const response = await APIManager.post<UserJson>({
            route: "/login",
            body:{
                username: args.username,
                password: args.password,
            },
        });

        if("data" in response && response.data){
            const token = response.Authorization;
            if(token) {
                const key = Object.keys(response.data)[0]
                this.userData = UserProvider.userinfoDto(key, response.data[key])
                LocalStorage.set("token", token)
            }
            else throw new Error("로그인 실패: 응답에 토큰이 없습니다.")
            return true
        }

        return false
    }

    /** 회원가입 로직은 s3 테스트가 필요함 */
    // public async signUp(args: IUserSignUpArgs): Promise<boolean> {
    //     if(args.image && args.image_name) {
    //         const isUploadImage = await this.uploadProfileImage(args.image)
    //         if(isUploadImage === "failed") return false
    //     }
        
    //     const response = await APIManager.post({
    //         route: "/join",
    //         body: {
    //             email: args.email,
    //             username: args.username,
    //             password: args.password,
    //             filename: args.image_name,
    //         }
    //     })
    //     return true
    // }

    // private async uploadProfileImage(file: File): Promise<string | "failed"> {
    //     const response = await APIManager.post({
    //         route: "/",
    //         body: {
                
    //         },
    //         headers: { "Content-Type": "application/octet-stream" }
    //     })

    //     if(response.code === 200) return ""
    //     return "failed"
    // }
}

export const userModel = new UserModel()

interface IUserLoginArgs {
    readonly username: string
    readonly password: string
}

interface IUserSignUpArgs {
    readonly email: string
    readonly password: string
    readonly username: string
    readonly image?: File
    readonly image_name?: string
}