import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class MedicalMedical_claimServices {
    constructor(protected commonService: CommonServices) {}
    async getMedical_claims(payload: Record<string, any>) {
        try {
            const query = await Medical_claim.query()
            let response = {
                meta: {
                    pageNum: payload.pageNum,
                    totalData: query.length,
                    totalPage: Math.ceil(query.length / payload.pageSize),
                    pageSize: 0,
                },
                dataList: query.map((result) => ({
                    id: Number(result.id),                })),
            }
    
            if (payload.orderBy !== null) {
                this.commonService.ordering(payload, response, 'dataList')
            }
    
            response.dataList = response.dataList.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async getMedical_claim(payload: Record<string, any>) {
        try {
            const query = await Medical_claim.query()
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
    async addMedical_claim(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let createMedical_claim = new Medical_claim()
            createMedical_claim.useTransaction(trx)
            createMedical_claim.createdBy = user!.username

            await createMedical_claim.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(createMedical_claim.id),
                },
            }
            return response
        } catch (error) {
            await trx.rollback()
            console.log(error)
            throw error
        }
    }
    async editMedical_claim(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let editMedical_claim = await Medical_claim.query()
                .where('id', payload.id)
                .firstOrFail()
            editMedical_claim.useTransaction(trx)
            editMedical_claim.modifiedBy = user!.username

            await editMedical_claim.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(editMedical_claim.id),
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
