export default class SelfTransferProcessesResponse {
    public selfTransferProcessList: SelfTransferProcessResponse[] = [];
}

export class SelfTransferProcessResponse {
    public directorFirstChoiceName: string;
    public directorFirstSupportedRemark: string;
    public directorFirstdirectorSupportedStatus: string;

    public directorSecondChoiceName: string;
    public directorSecondSupportedRemark: string;
    public directordirectorSecondSupportedStatus: string;
}
