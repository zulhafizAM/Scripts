import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class ClinicSupporter_approvalServices {
    constructor(protected commonService: CommonServices) {}
    async getSupporter_approval(payload: Record<string, any>) {
        try {
            const query = await Supporter_approval.query()
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
    async addSupporter_approval(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let createSupporter_approval = new Supporter_approval()
            createSupporter_approval.useTransaction(trx)
            createSupporter_approval.createdBy = user!.username

            await createSupporter_approval.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(createSupporter_approval.id),
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
