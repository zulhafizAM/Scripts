import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class ClinicSupporter_approverServices {
    constructor(protected commonService: CommonServices) {}
    async getSupporter_approver(payload: Record<string, any>) {
        try {
            const query = await Supporter_approver.query()
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
    async addSupporter_approver(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let createSupporter_approver = new Supporter_approver()
            createSupporter_approver.useTransaction(trx)
            createSupporter_approver.createdBy = user!.username

            await createSupporter_approver.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(createSupporter_approver.id),
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
