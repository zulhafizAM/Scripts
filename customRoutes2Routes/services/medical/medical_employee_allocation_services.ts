import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import UserAccount from '#models/user_account'
@inject()
export default class MedicalEmployee_allocationServices {
    constructor(protected commonService: CommonServices) {}
    async getEmployee_allocations(payload: Record<string, any>) {
        try {
            const query = await Employee_allocation.query()
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
    async addEmployee_allocation(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let createEmployee_allocation = new Employee_allocation()
            createEmployee_allocation.useTransaction(trx)
            createEmployee_allocation.createdBy = user!.username

            await createEmployee_allocation.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(createEmployee_allocation.id),
                },
            }
            return response
        } catch (error) {
            await trx.rollback()
            console.log(error)
            throw error
        }
    }
    async editEmployee_allocation(
        payload: Record<string, any>,
        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined
    ){
        const trx = await db.transaction()
        try {
            let editEmployee_allocation = await Employee_allocation.query()
                .where('id', payload.id)
                .firstOrFail()
            editEmployee_allocation.useTransaction(trx)
            editEmployee_allocation.modifiedBy = user!.username

            await editEmployee_allocation.save()

            await trx.commit()
            let response = {
                details: {
                    id: Number(editEmployee_allocation.id),
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
