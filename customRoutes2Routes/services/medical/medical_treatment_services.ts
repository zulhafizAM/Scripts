import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class MedicalTreatmentServices {
    constructor(protected commonService: CommonServices) {}
    async getTreatments(payload: Record<string, any>) {
        try {
            const query = await Treatment.query()
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
    async getTreatment(payload: Record<string, any>) {
        try {
            const query = await Treatment.query()
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
    async addTreatment(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let createTreatment = new Treatment()
            createTreatment.useTransaction(trx)
            createTreatment.createdBy = user!.username

            await createTreatment.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(createTreatment.id),
                },
            }
            return response
        } catch (error) {
            await trx.rollback()
            console.log(error)
            throw error
        }
    }
    async editTreatment(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let editTreatment = await Treatment.query()
                .where('id', payload.id)
                .firstOrFail()
            editTreatment.useTransaction(trx)
            editTreatment.modifiedBy = user!.username

            await editTreatment.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(editTreatment.id),
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
