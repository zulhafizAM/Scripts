import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class MovingInSecretaryApprovalServices {
    constructor(protected commonService: CommonServices) {}
    async getSecretaryApproval(payload: Record<string, any>) {
        try {
            const query = await SecretaryApproval.query()
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
    async editSecretaryApproval(
        payload,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let editSecretaryApproval = await SecretaryApproval.query()
                .where('id', payload.id)
                .firstOrFail()
            editSecretaryApproval.useTransaction(trx)

            await editSecretaryApproval.save()

            await trx.commit()
            response = {
                details: {
                    id: Number(editSecretaryApproval.id),
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
