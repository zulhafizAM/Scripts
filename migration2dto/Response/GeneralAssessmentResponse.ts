import { DateTime } from 'luxon';

export default class GetGeneralAssessmentResponse {
    public generalAssessment: GeneralAssessmentResponse =
        new GeneralAssessmentResponse();
}
export class GeneralAssessmentResponse {
    public personalDetailId: bigint;
    public height: number;
    public weight: number;
    public BMI: number;
    public BPM: number;
    public BP: string = '';
    public paleSkin: boolean;
    public cycnosis: boolean;
    public edema: boolean;
    public jaundice: boolean;
    public lymphGlands: boolean;
    public skinDisease: boolean;
    public unaidedVisionLeft: string = '';
    public unaidedVisionRight: string = '';
    public aidedVisionLeft: string = '';
    public aidedVisionRight: string = '';
    public colourVision: string = '';
    public fundoscopic: string = '';
    public ear: string = '';
    public dental: string = '';
    public neck: string = '';
    public cardiovascular: string = '';
    public breathingExam: string = '';
    public xray: string = '';
    public xrayTaken: DateTime;
    public xrayLocation: string = '';
    public xrayReference: string = '';
    public abdomenHernia: string = '';
    public mentalState: string = '';
    public musculoskeletal: string = '';
    public sugar: boolean;
    public albumin: boolean;
    public microscopic: string = '';

    public getFull(data) {
        this.personalDetailId = data.personalDetailId;
        this.height = data.height;
        this.weight = data.weight;
        this.BMI = data.BMI;
        this.BPM = data.BPM;
        this.BP = data.BP;
        this.paleSkin = data.paleSkin;
        this.cycnosis = data.cycnosis;
        this.edema = data.edema;
        this.jaundice = data.jaundice;
        this.lymphGlands = data.lymphGlands;
        this.skinDisease = data.skinDisease;
        this.unaidedVisionLeft = data.unaidedVisionLeft;
        this.unaidedVisionRight = data.unaidedVisionRight;
        this.aidedVisionLeft = data.aidedVisionLeft;
        this.aidedVisionRight = data.aidedVisionRight;
        this.colourVision = data.colourVision;
        this.fundoscopic = data.fundoscopic;
        this.ear = data.ear;
        this.dental = data.dental;
        this.neck = data.neck;
        this.cardiovascular = data.cardiovascular;
        this.breathingExam = data.breathingExam;
        this.xray = data.xray;
        this.xrayTaken = data.xrayTaken;
        this.xrayLocation = data.xrayLocation;
        this.xrayReference = data.xrayReference;
        this.abdomenHernia = data.abdomenHernia;
        this.mentalState = data.mentalState;
        this.musculoskeletal = data.musculoskeletal;
        this.sugar = data.sugar;
        this.albumin = data.albumin;
        this.microscopic = data.microscopic;
    }
}