import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class ClinicClinic_accountServices {
    constructor(protected commonService: CommonServices) {}
    async addClinic_account(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let createClinic_account = new Clinic_account()
            createClinic_account.useTransaction(trx)
            createClinic_account.createdBy = user!.username

            await createClinic_account.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(createClinic_account.id),
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
