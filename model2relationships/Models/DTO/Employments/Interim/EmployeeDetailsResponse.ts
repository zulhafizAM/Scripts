import { DateTime } from 'luxon';

export default class EmployeeResponse {
    public activityList: EmployeeDetailResponse[] = [];
    public isReadonly: boolean;
}
export class EmployeeDetailResponse {
    public name: string;
    public identityCardNumber: string;
    public serviceDate: DateTime; //Current Service Date
    public confirmPositionDate: DateTime; //Confirm Service Date
    public positionWithGrade: DateTime;
    public effectiveDate: DateTime; // Tarikh Mula Bertugas di Jawatan Sekarang
    public placement: string;
}
