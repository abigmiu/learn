import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize'
import sequelize from 'src/database/sequelize';

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

            if (user) {
                return {
                    code: 200,
                    data: {
                        user,
                    },
                    msg: 'Success'
                }
            } else {
                return {
                    code: 200,
                    msg: '没得这个人',
                    data: '',
                }
            }
        } catch(err) {
            return {
                code: 503,
                msg: `err ${err}`
            }
        }
    }
}
