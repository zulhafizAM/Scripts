import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class PromotionApplicationServices {
    constructor(protected commonService: CommonServices) {}
    async getApplication(
        try {            const query = await Application.query()
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
    async editApplication(
        payload,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await Database.transaction()
        try {
            let editApplication = await Application.query()
                .where('id', payload.id)
                .firstOrFail()
            editApplication.useTransaction(trx)

            await editApplication.save()

            await trx.commit()
            response = {
                details: {
                    id: Number(editApplication.id),
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
