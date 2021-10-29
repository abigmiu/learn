import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from "@nestjs/common";
import { jwtConstants } from './constansts'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        })
    }

    async validate(payload: any) {
        console.log('jwt 验证');
        return {
            userId: payload.sub,
            username: payload.username,
            realName: payload.realName,
            role: payload.role
        }
    }
}
