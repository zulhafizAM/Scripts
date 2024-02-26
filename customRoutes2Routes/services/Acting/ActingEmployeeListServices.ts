import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingEmployeeListServices {
    public async getEmployeeLists(
        payload,
    ): Promise<DefaultListResponse<ActingEmployeeListsResponse>> {
        let employeeLists = new DefaultListResponse<ActingEmployeeListsResponse>();
        const employeeListList = await EmployeeList.query()
        employeeLists = {
            meta: {
                pageNum: payload.pageNum,
                totalData: employeeListList.length,
                totalPage: Math.ceil(employeeListList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: employeeListList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<ActingEmployeeListsResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, employeeLists, 'dataList');
        }

        employeeLists.dataList = employeeLists.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        employeeLists.meta!.pageSize = employeeLists.dataList.length;
        return employeeLists;
    }
}
