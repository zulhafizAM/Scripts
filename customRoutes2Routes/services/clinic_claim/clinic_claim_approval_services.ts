import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class ClinicClaimApprovalServices {
    constructor(protected commonService: CommonServices) {}
    async addApproval(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let createApproval = new Approval()
            createApproval.useTransaction(trx)
            createApproval.createdBy = user!.username

            await createApproval.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(createApproval.id),
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
