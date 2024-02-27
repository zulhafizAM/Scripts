import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PromotionEmployeePromotionServices {
    public async getEmployeePromotions(
        payload,
    ): Promise<DefaultListResponse<PromotionEmployeePromotionsResponse>> {
        let employeePromotions = new DefaultListResponse<PromotionEmployeePromotionsResponse>();
        const employeePromotionList = await EmployeePromotion.query()
        employeePromotions = {
            meta: {
                pageNum: payload.pageNum,
                totalData: employeePromotionList.length,
                totalPage: Math.ceil(employeePromotionList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: employeePromotionList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<PromotionEmployeePromotionsResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, employeePromotions, 'dataList');
        }

        employeePromotions.dataList = employeePromotions.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        employeePromotions.meta!.pageSize = employeePromotions.dataList.length;
        return employeePromotions;
    }
    public async getEmployeePromotion(
        payload,
    ): Promise<DefaultDataResponse<PromotionEmployeePromotionResponse>> {
        let employeePromotion = new DefaultDataResponse<PromotionEmployeePromotionResponse>();
        const readEmployeePromotion = await EmployeePromotion.query()
            .where('id', payload.id)
            .firstOrFail();
        employeePromotion = {
            details: {
                id: Number(readEmployeePromotion.id),
            },
        } as DefaultDataResponse<PromotionEmployeePromotionResponse>;
        return employeePromotion;
    }
    public async editEmployeePromotion(
        payload,
    ): Promise<DefaultDataResponse<PromotionEmployeePromotionResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<PromotionEmployeePromotionResponse>();
            const employeePromotion = await EmployeePromotion.query()
                .where('id', payload.id)
                .firstOrFail();

            await employeePromotion.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(employeePromotion.id),
                },
            } as DefaultDataResponse<PromotionEmployeePromotionResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
