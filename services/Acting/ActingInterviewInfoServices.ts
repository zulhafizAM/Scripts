import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingInterviewInfoServices {
    public async getInterviewInfos(
        payload,
    ): Promise<DefaultListResponse<ActingInterviewInfosResponse>> {
        let interviewInfos = new DefaultListResponse<ActingInterviewInfosResponse>();
        const interviewInfoList = await InterviewInfo.query()
        interviewInfos = {
            meta: {
                pageNum: payload.pageNum,
                totalData: interviewInfoList.length,
                totalPage: Math.ceil(interviewInfoList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: interviewInfoList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<ActingInterviewInfosResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, interviewInfos, 'dataList');
        }

        interviewInfos.dataList = interviewInfos.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        interviewInfos.meta!.pageSize = interviewInfos.dataList.length;
        return interviewInfos;
    }
    public async editInterviewInfo(
        payload,
    ): Promise<DefaultDataResponse<ActingInterviewInfoResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingInterviewInfoResponse>();
            const interviewInfo = await InterviewInfo.query()
                .where('id', payload.id)
                .firstOrFail();

            await interviewInfo.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(interviewInfo.id),
                },
            } as DefaultDataResponse<ActingInterviewInfoResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
