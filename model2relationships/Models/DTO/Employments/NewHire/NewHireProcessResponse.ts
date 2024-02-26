export class NewHireProcessResponse {
    public personalDetail: NewHireProcessPersonalDdetailResponse;
    public academic: NewHireProcessAcademicResponse;
    public experience: NewHireProcessExperienceResponse;
    public experties: NewHireProcessExpertiesResponse;
    public family: NewHireProcessFamilyResponse;
    public dependency: NewHireProcessDependencyResponse;
    public heirs: NewHireProcessHeirResponse;
    public document: NewHireProcessDocumentResponse;
}
export class NewHireProcessPersonalDdetailResponse {
    public candidateId: bigint;
}
export class NewHireProcessAcademicResponse {
    public candidateId: bigint;
}
export class NewHireProcessExperienceResponse {
    public candidateId: bigint;
}
export class NewHireProcessExpertiesResponse {
    public candidateId: bigint;
}
export class NewHireProcessFamilyResponse {
    public candidateId: bigint;
}
export class NewHireProcessDependencyResponse {
    public candidateId: bigint;
}
export class NewHireProcessHeirResponse {
    public candidateId: bigint;
}
export class NewHireProcessDocumentResponse {
    public candidateId: bigint;
}
