import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import PersonalDetail from './PersonalDetail';

export default class GeneralAssessment extends BaseModel {
    public static table = 'generalAssessments';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'personalDetailId', serializeAs: null })
    public personalDetailId: bigint;

    @column({ columnName: 'diseases' })
    public diseases: string;

    //Pemeriksaan Am
    @column({ columnName: 'height' })
    public height: number;
    @column({ columnName: 'weight' })
    public weight: number;

    @column({ columnName: 'BMI' })
    public BMI: number;
    @column({ columnName: 'BPM' })
    public BPM: number;

    @column({ columnName: 'BP' })
    public BP: string;

    @column({ columnName: 'paleSkin' })
    public paleSkin: boolean;

    @column({ columnName: 'cycnosis' })
    public cycnosis: boolean;

    @column({ columnName: 'edema' })
    public edema: boolean;

    @column({ columnName: 'jaundice' })
    public jaundice: boolean;

    @column({ columnName: 'lymphGlands' })
    public lymphGlands: boolean;

    @column({ columnName: 'skinDisease' })
    public skinDisease: boolean;

    //Vision
    @column({ columnName: 'unaidedVisionLeft' })
    public unaidedVisionLeft: string;

    @column({ columnName: 'unaidedVisionRight' })
    public unaidedVisionRight: string;

    @column({ columnName: 'aidedVisionLeft' })
    public aidedVisionLeft: string;

    @column({ columnName: 'aidedVisionRight' })
    public aidedVisionRight: string;

    @column({ columnName: 'colourVision' })
    public colourVision: string;

    //Others
    @column({ columnName: 'fundoscopic' })
    public fundoscopic: string;
    @column({ columnName: 'ear' })
    public ear: string;
    @column({ columnName: 'dental' })
    public dental: string;
    @column({ columnName: 'neck' })
    public neck: string;
    @column({ columnName: 'cardiovascular' })
    public cardiovascular: string;
    @column({ columnName: 'breathingExam' })
    public breathingExam: string;
    @column({ columnName: 'xray' })
    public xray: string;

    @column.dateTime({
        columnName: 'xrayTaken',
        autoCreate: true,
        serializeAs: null,
    })
    public xrayTaken: DateTime;

    @column({ columnName: 'xrayLocation' })
    public xrayLocation: string;

    @column({ columnName: 'xrayReference' })
    public xrayReference: string;
    @column({ columnName: 'abdomenHernia' })
    public abdomenHernia: string;
    @column({ columnName: 'mentalState' })
    public mentalState: string;
    @column({ columnName: 'musculoskeletal' })
    public musculoskeletal: string;

    @column({ columnName: 'sugar' })
    public sugar: boolean;
    @column({ columnName: 'albumin' })
    public albumin: boolean;

    @column({ columnName: 'microscopic' })
    public microscopic: string;
    @column({ columnName: 'active', serializeAs: null })
    public active: boolean;

    @column({ columnName: 'createdBy', serializeAs: null })
    public createdBy: string;

    @column.dateTime({
        columnName: 'createdAt',
        autoCreate: true,
        serializeAs: null,
    })
    public createdAt: DateTime;

    @column({ columnName: 'modifiedBy', serializeAs: null })
    public modifiedBy: string;

    @column.dateTime({
        columnName: 'modifiedAt',
        autoCreate: true,
        autoUpdate: true,
        serializeAs: null,
    })
    public modifiedAt: DateTime;

    @belongsTo(() => PersonalDetail, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public personalDetail: BelongsTo<typeof PersonalDetail>;
}
