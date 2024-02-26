import Database from '@ioc:Adonis/Lucid/Database';
import ListMedicalClinicAllocationResponse from 'App/Models/DTO/Medical/ClinicAllocation/ListMedicalClinicAllocationResponse';
import GetMedicalClinicAllocationResponse, { MedicalClinicAllocationResponse } from 'App/Models/DTO/Medical/ClinicAllocation/GetMedicalClinicAllocationResponse';
import ClinicAllocation from 'App/Models/ClinicAllocation';
import BaseService from 'App/Services/Shared/BaseService';
export default class MedicalClinicAllocationServices extends BaseService {
    public async getClinicAllocations(payload): Promise<ListMedicalClinicAllocationResponse> {
        let clinicAllocationList: ListMedicalClinicAllocationResponse = new ListMedicalClinicAllocationResponse();
        const readClinicAllocations = await ClinicAllocation.query();

        clinicAllocationList = {
            pageNum: payload.pageNum,
            totalData: readClinicAllocations.length,
            totalPage: Math.ceil(readClinicAllocations.length / payload.pageSize),
            clinicAllocations: readClinicAllocations.map((result) => ({
                current: result.current,
                remainder: result.remainder,
                newAllocation: result.newAllocation,
                status: result.status,
                remark: result.remark,
            })),
        } as ListMedicalClinicAllocationResponse;

        if (payload.orderBy !== null) {
            this.ordering(payload, clinicAllocationList, 'clinicAllocations');
        }

        clinicAllocationList.clinicAllocations =
            clinicAllocationList.clinicAllocations.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        return clinicAllocationList;
    }
    public async getClinicAllocation(id: number): Promise<GetMedicalClinicAllocationResponse> {
        let details: GetMedicalClinicAllocationResponse = new GetMedicalClinicAllocationResponse();
        const result = await ClinicAllocation.query()
            .where('id', id)
            .firstOrFail();

        details.clinicAllocation = {
            current: result.current,
            remainder: result.remainder,
            newAllocation: result.newAllocation,
            status: result.status,
            remark: result.remark,
        } as MedicalClinicAllocationResponse;

        return details;
    }

    public async addClinicAllocation(payload): Promise<void> {
        const transaction = await Database.transaction();
        try {
            let clinicAllocation = new ClinicAllocation();
            clinicAllocation.current = payload.current;
            clinicAllocation.remainder = payload.remainder;
            clinicAllocation.newAllocation = payload.newAllocation;
            clinicAllocation.status = payload.status;
            clinicAllocation.remark = payload.remark;
            await clinicAllocation.save();

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
    public async editClinicAllocation(payload): Promise<void> {
        const transaction = await Database.transaction();
        try {
            const clinicAllocation = await ClinicAllocation.query()
                .where('id', payload.id)
                .firstOrFail();

            clinicAllocation.current = payload.current;
            clinicAllocation.remainder = payload.remainder;
            clinicAllocation.newAllocation = payload.newAllocation;
            clinicAllocation.status = payload.status;
            clinicAllocation.remark = payload.remark;
            await clinicAllocation.save();

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
