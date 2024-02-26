export default class NewHireDependenciesResponse {
    public dependenciesList: NewHireDependenciesDetailResponse[] = [];
    public isReadonly: boolean;
}
export class NewHireDependenciesDetailResponse {
    public name: string;
    public identityDocumentNumber: string;
    public gender: string;
    public relationship: string;
    public occupation: string;
    public isInSchool: boolean;
}
