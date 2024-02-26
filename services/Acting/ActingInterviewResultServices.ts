import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingInterviewResultServices {
    public async getInterviewResults(
        payload,
    ): Promise<DefaultListResponse<ActingInterviewResultsResponse>> {
        let interviewResults = new DefaultListResponse<ActingInterviewResultsResponse>();
        const interviewResultList = await InterviewResult.query()
        interviewResults = {
            meta: {
                pageNum: payload.pageNum,
                totalData: interviewResultList.length,
                totalPage: Math.ceil(interviewResultList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: interviewResultList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<ActingInterviewResultsResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, interviewResults, 'dataList');
        }

        interviewResults.dataList = interviewResults.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        interviewResults.meta!.pageSize = interviewResults.dataList.length;
        return interviewResults;
    }
}
