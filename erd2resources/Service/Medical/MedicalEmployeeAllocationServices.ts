import Database from '@ioc:Adonis/Lucid/Database';
import ListMedicalEmployeeAllocationResponse from 'App/Models/DTO/Medical/EmployeeAllocation/ListMedicalEmployeeAllocationResponse';
import GetMedicalEmployeeAllocationResponse, { MedicalEmployeeAllocationResponse } from 'App/Models/DTO/Medical/EmployeeAllocation/GetMedicalEmployeeAllocationResponse';
import EmployeeAllocation from 'App/Models/EmployeeAllocation';
import BaseService from 'App/Services/Shared/BaseService';
export default class MedicalEmployeeAllocationServices extends BaseService {
    public async getEmployeeAllocations(payload): Promise<ListMedicalEmployeeAllocationResponse> {
        let employeeAllocationList: ListMedicalEmployeeAllocationResponse = new ListMedicalEmployeeAllocationResponse();
        const readEmployeeAllocations = await EmployeeAllocation.query();

        employeeAllocationList = {
            pageNum: payload.pageNum,
            totalData: readEmployeeAllocations.length,
            totalPage: Math.ceil(readEmployeeAllocations.length / payload.pageSize),
            employeeAllocations: readEmployeeAllocations.map((result) => ({
                employeeId: result.employeeId,
                covered: result.covered,
                remainder: result.remainder,
                status: result.status,
                remark: result.remark,
            })),
        } as ListMedicalEmployeeAllocationResponse;

        if (payload.orderBy !== null) {
            this.ordering(payload, employeeAllocationList, 'employeeAllocations');
        }

        employeeAllocationList.employeeAllocations =
            employeeAllocationList.employeeAllocations.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        return employeeAllocationList;
    }
    public async getEmployeeAllocation(id: number): Promise<GetMedicalEmployeeAllocationResponse> {
        let details: GetMedicalEmployeeAllocationResponse = new GetMedicalEmployeeAllocationResponse();
        const result = await EmployeeAllocation.query()
            .where('id', id)
            .firstOrFail();

        details.employeeAllocation = {
            employeeId: result.employeeId,
            covered: result.covered,
            remainder: result.remainder,
            status: result.status,
            remark: result.remark,
        } as MedicalEmployeeAllocationResponse;

        return details;
    }

    public async addEmployeeAllocation(payload): Promise<void> {
        const transaction = await Database.transaction();
        try {
            let employeeAllocation = new EmployeeAllocation();
            employeeAllocation.employeeId = payload.employeeId;
            employeeAllocation.covered = payload.covered;
            employeeAllocation.remainder = payload.remainder;
            employeeAllocation.status = payload.status;
            employeeAllocation.remark = payload.remark;
            await employeeAllocation.save();

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
    public async editEmployeeAllocation(payload): Promise<void> {
        const transaction = await Database.transaction();
        try {
            const employeeAllocation = await EmployeeAllocation.query()
                .where('id', payload.id)
                .firstOrFail();

            employeeAllocation.employeeId = payload.employeeId;
            employeeAllocation.covered = payload.covered;
            employeeAllocation.remainder = payload.remainder;
            employeeAllocation.status = payload.status;
            employeeAllocation.remark = payload.remark;
            await employeeAllocation.save();

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
