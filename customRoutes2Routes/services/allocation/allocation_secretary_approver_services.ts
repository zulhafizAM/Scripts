import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class AllocationSecretary_approverServices {
    constructor(protected commonService: CommonServices) {}
    async getSecretary_approver(payload: Record<string, any>) {
        try {
            const query = await Secretary_approver.query()
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
    async addSecretary_approver(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let createSecretary_approver = new Secretary_approver()
            createSecretary_approver.useTransaction(trx)
            createSecretary_approver.createdBy = user!.username

            await createSecretary_approver.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(createSecretary_approver.id),
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
