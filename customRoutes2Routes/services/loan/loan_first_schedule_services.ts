import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class LoanFirstScheduleServices {
    constructor(protected commonService: CommonServices) {}
    async getFirstSchedule(payload: Record<string, any>) {
        try {
            const query = await FirstSchedule.query()
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
    async editFirstSchedule(
        payload,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let editFirstSchedule = await FirstSchedule.query()
                .where('id', payload.id)
                .firstOrFail()
            editFirstSchedule.useTransaction(trx)

            await editFirstSchedule.save()

            await trx.commit()
            response = {
                details: {
                    id: Number(editFirstSchedule.id),
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
