import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class LoanApproveServices {
    constructor(protected commonService: CommonServices) {}
    async getApprove(
        try {            const query = await Approve.query()
                .where('id', payload.id)
                .firstOrFail()
            let response = {
                details: {
                    id: Number(query.id),
                },
            }
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async editApprove(
        payload,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await Database.transaction()
        try {
            let editApprove = await Approve.query()
                .where('id', payload.id)
                .firstOrFail()
            editApprove.useTransaction(trx)

            await editApprove.save()

            await trx.commit()
            response = {
                details: {
                    id: Number(editApprove.id),
                },
            }
            return response
        } catch (error) {
            await trx.rollback()
            console.log(error)
            throw error
        }
    }
}
