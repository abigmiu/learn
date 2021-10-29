import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize'
import sequelize from 'src/database/sequelize';
import { encryptPassword, makeSalt } from 'src/util/cryptogram';

@Injectable()
export class UserService {
    async findOne(username: string): Promise<any | undefined> {
        const sql = `
            select
                user_id id, real_name realName, role
            from
                admin_user
            where
                account_name = '${username}'
        `

        try {
            const res = await sequelize.query(sql, {
                type: Sequelize.QueryTypes.SELECT,
                raw: true,
                logging: true,
            })
            const user = res[0]

            return user
        } catch(err) {
            return {
                code: 503,
                msg: `err ${err}`
            }
        }
    }


    async register(requestBody: any): Promise<any> {
        const { accountName, realName, password, repassword, mobile } = requestBody

        if (password !== repassword) {
            return {
                code: 400,
                data: '',
                msg: '两次密码输入不一致'
            }
        }

        const user = await this.findOne(accountName)

        if (user) {
            return {
                code: 400,
                data: '',
                msg: '用户已存在',
            }
        }

        const salt = makeSalt()
        const hashPwd = encryptPassword(password, salt)
        const registerSQL = `
            INSERT INTO admin_user
                (account_name, real_name, passwd, passwd_salt, mobile, user_status, role, create_by)
            VALUES
                ('${accountName}', '${realName}', '${hashPwd}', '${salt}', '${mobile}', 1, 3, 0)
        `

        try {
            await sequelize.query(registerSQL, { logging: false })
            return {
                code: 200,
                msg: 'success'
            }
        } catch (error) {
            return {
                code: 503,
                msg: `${error}`
            }
        }
    }
}
