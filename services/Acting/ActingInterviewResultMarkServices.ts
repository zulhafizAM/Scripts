import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingInterviewResultMarkServices {
    public async getInterviewResultMarks(
        payload,
    ): Promise<DefaultListResponse<ActingInterviewResultMarksResponse>> {
        let interviewResultMarks = new DefaultListResponse<ActingInterviewResultMarksResponse>();
        const interviewResultMarkList = await InterviewResultMark.query()
        interviewResultMarks = {
            meta: {
                pageNum: payload.pageNum,
                totalData: interviewResultMarkList.length,
                totalPage: Math.ceil(interviewResultMarkList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: interviewResultMarkList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<ActingInterviewResultMarksResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, interviewResultMarks, 'dataList');
        }

        interviewResultMarks.dataList = interviewResultMarks.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        interviewResultMarks.meta!.pageSize = interviewResultMarks.dataList.length;
        return interviewResultMarks;
    }
    public async editInterviewResultMark(
        payload,
    ): Promise<DefaultDataResponse<ActingInterviewResultMarkResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingInterviewResultMarkResponse>();
            const interviewResultMark = await InterviewResultMark.query()
                .where('id', payload.id)
                .firstOrFail();

            await interviewResultMark.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(interviewResultMark.id),
                },
            } as DefaultDataResponse<ActingInterviewResultMarkResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
