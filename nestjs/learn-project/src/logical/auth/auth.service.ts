import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { encryptPassword } from 'src/util/cryptogram';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtServices: JwtService) {}

    async validateUser(username: string, password: string): Promise<any> {
        console.log('jwt: 验证用户信息');
        const user = await this.userService.findOne(username)

        if (user) {
            const hashedPassword = user.password
            const salt = user.makeSalt

            const hashPassword = encryptPassword(password, salt)
            if (hashedPassword === hashPassword) {
                return {
                    code: 1,
                    user,
                }
            } else {
                return {
                    code: 2,
                    user: null,
                }
            }
        }

        return {
            code: 3,
            user: null,
        }
    }

    async certificate(user: any) {
        const payload = {
            username: user.username,
            sub: user.userId,
            realName: user.realName,
            role: user.role
         }
         console.log('jwt 处理jwt 签证');
         try {
             const token = this.jwtServices.sign(payload)
             return {
                 code: 200,
                 data: {
                     token,
                 },
                 msg: '登录成功'
             }
         } catch (error) {
             return {
                 code: 600,
                 msg: '账户或密码错误'
             }
         }
    }
}
