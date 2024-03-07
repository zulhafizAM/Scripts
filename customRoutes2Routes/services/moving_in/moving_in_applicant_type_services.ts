import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class MovingInApplicantTypeServices {
    constructor(protected commonService: CommonServices) {}
    async getApplicantType(payload: Record<string, any>) {
        try {
            const query = await ApplicantType.query()
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
    async editApplicantType(
        payload,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let editApplicantType = await ApplicantType.query()
                .where('id', payload.id)
                .firstOrFail()
            editApplicantType.useTransaction(trx)

            await editApplicantType.save()

            await trx.commit()
            response = {
                details: {
                    id: Number(editApplicantType.id),
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
