import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class ClinicClaimClaim_detailServices {
    constructor(protected commonService: CommonServices) {}
    async getClaim_detail(payload: Record<string, any>) {
        try {
            const query = await Claim_detail.query()
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
    async editClaim_detail(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let editClaim_detail = await Claim_detail.query()
                .where('id', payload.id)
                .firstOrFail()
            editClaim_detail.useTransaction(trx)
            editClaim_detail.modifiedBy = user!.username

            await editClaim_detail.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(editClaim_detail.id),
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
