import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class EmployeeClaimEmployeeClaimServices {
    constructor(protected commonService: CommonServices) {}
    async getEmployeeClaims(payload: Record<string, any>) {
        try {
            const query = await EmployeeClaim.query()
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
    async getEmployeeClaim(payload: Record<string, any>) {
        try {
            const query = await EmployeeClaim.query()
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
    async addEmployeeClaim(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let createEmployeeClaim = new EmployeeClaim()
            createEmployeeClaim.useTransaction(trx)
            createEmployeeClaim.createdBy = user!.username

            await createEmployeeClaim.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(createEmployeeClaim.id),
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
