import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class ClinicClinicServices {
    constructor(protected commonService: CommonServices) {}
    async getClinics(payload: Record<string, any>) {
        try {
            const query = await Clinic.query()
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
    async getClinic(payload: Record<string, any>) {
        try {
            const query = await Clinic.query()
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
    async addClinic(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let createClinic = new Clinic()
            createClinic.useTransaction(trx)
            createClinic.createdBy = user!.username

            await createClinic.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(createClinic.id),
                },
            }
            return response
        } catch (error) {
            await trx.rollback()
            console.log(error)
            throw error
        }
    }
    async editClinic(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let editClinic = await Clinic.query()
                .where('id', payload.id)
                .firstOrFail()
            editClinic.useTransaction(trx)
            editClinic.modifiedBy = user!.username

            await editClinic.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(editClinic.id),
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
