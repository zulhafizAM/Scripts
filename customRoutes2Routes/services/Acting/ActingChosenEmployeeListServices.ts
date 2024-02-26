import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingChosenEmployeeListServices {
    public async getChosenEmployeeLists(
        payload,
    ): Promise<DefaultListResponse<ActingChosenEmployeeListsResponse>> {
        let chosenEmployeeLists = new DefaultListResponse<ActingChosenEmployeeListsResponse>();
        const chosenEmployeeListList = await ChosenEmployeeList.query()
        chosenEmployeeLists = {
            meta: {
                pageNum: payload.pageNum,
                totalData: chosenEmployeeListList.length,
                totalPage: Math.ceil(chosenEmployeeListList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: chosenEmployeeListList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<ActingChosenEmployeeListsResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, chosenEmployeeLists, 'dataList');
        }

        chosenEmployeeLists.dataList = chosenEmployeeLists.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        chosenEmployeeLists.meta!.pageSize = chosenEmployeeLists.dataList.length;
        return chosenEmployeeLists;
    }
    public async addChosenEmployeeList(
        payload,
    ): Promise<DefaultDataResponse<ActingChosenEmployeeListResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingChosenEmployeeListResponse>();
            let chosenEmployeeList = new ChosenEmployeeList();

            await chosenEmployeeList.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(chosenEmployeeList.id),
                },
            } as DefaultDataResponse<ActingChosenEmployeeListResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
