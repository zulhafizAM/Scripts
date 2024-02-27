import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PensionDetailSalaryServices {
    public async getSalary(
        payload,
    ): Promise<DefaultDataResponse<PensionDetailSalaryResponse>> {
        let salary = new DefaultDataResponse<PensionDetailSalaryResponse>();
        const readSalary = await Salary.query()
            .where('id', payload.id)
            .firstOrFail();
        salary = {
            details: {
                id: Number(readSalary.id),
            },
        } as DefaultDataResponse<PensionDetailSalaryResponse>;
        return salary;
    }
}
