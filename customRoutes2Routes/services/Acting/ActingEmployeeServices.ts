import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingEmployeeServices {
    public async getEmployee(
        payload,
    ): Promise<DefaultDataResponse<ActingEmployeeResponse>> {
        let employee = new DefaultDataResponse<ActingEmployeeResponse>();
        const readEmployee = await Employee.query()
            .where('id', payload.id)
            .firstOrFail();
        employee = {
            details: {
                id: Number(readEmployee.id),
            },
        } as DefaultDataResponse<ActingEmployeeResponse>;
        return employee;
    }
}
