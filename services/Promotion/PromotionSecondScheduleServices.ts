import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class PromotionSecondScheduleServices {
    constructor(protected commonService: CommonServices) {}
    async getSecondSchedule(
        try {            const query = await SecondSchedule.query()
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
    async editSecondSchedule(
        payload,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await Database.transaction()
        try {
            let editSecondSchedule = await SecondSchedule.query()
                .where('id', payload.id)
                .firstOrFail()
            editSecondSchedule.useTransaction(trx)

            await editSecondSchedule.save()

            await trx.commit()
            response = {
                details: {
                    id: Number(editSecondSchedule.id),
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
