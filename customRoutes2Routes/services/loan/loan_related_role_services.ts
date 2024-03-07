import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class LoanRelatedRoleServices {
    constructor(protected commonService: CommonServices) {}
    async getRelatedRole(payload: Record<string, any>) {
        try {
            const query = await RelatedRole.query()
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
    async editRelatedRole(
        payload,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let editRelatedRole = await RelatedRole.query()
                .where('id', payload.id)
                .firstOrFail()
            editRelatedRole.useTransaction(trx)

            await editRelatedRole.save()

            await trx.commit()
            response = {
                details: {
                    id: Number(editRelatedRole.id),
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
