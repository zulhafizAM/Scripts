import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MainGradeActingPromotionProcessServices from 'App/Services/MainGradeActingPromotionProcessServices';
import MainGradeActingPromotionProcessSchema from 'App/Validators/MainGradeActingPromotionProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class MainGradeActingPromotionProcessesController extends BaseController {
    constructor(private mainGradeActingPromotionProcessService: MainGradeActingPromotionProcessServices) {
        super();
    }

    public async getMainGradeActingPromotionProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const mainGradeActingPromotionProcessSchema =
                MainGradeActingPromotionProcessSchema.safeParse(requestParams);
            if (!mainGradeActingPromotionProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        mainGradeActingPromotionProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.mainGradeActingPromotionProcessService.getMainGradeActingPromotionProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getMainGradeActingPromotionProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.mainGradeActingPromotionProcessService.getMainGradeActingPromotionProcess,
        );
    }

    public async addMainGradeActingPromotionProcess({ request }: HttpContextContract) {
        const mainGradeActingPromotionProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const MainGradeActingPromotionProcessValidate =
                MainGradeActingPromotionProcessSchema.safeParse(mainGradeActingPromotionProcess);
            if (!MainGradeActingPromotionProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MainGradeActingPromotionProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.mainGradeActingPromotionProcessService.addMainGradeActingPromotionProcess(mainGradeActingPromotionProcess);
            return this.responseStatusService.showSuccess(
                'create',
                mainGradeActingPromotionProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editMainGradeActingPromotionProcess({ request }: HttpContextContract) {
        const mainGradeActingPromotionProcess = request.body();

        try {
            const MainGradeActingPromotionProcessValidate =
                MainGradeActingPromotionProcessSchema.safeParse(mainGradeActingPromotionProcess);
            if (!MainGradeActingPromotionProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MainGradeActingPromotionProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.mainGradeActingPromotionProcessService.editMainGradeActingPromotionProcess(mainGradeActingPromotionProcess);
            return this.responseStatusService.showSuccess(
                'update',
                mainGradeActingPromotionProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
