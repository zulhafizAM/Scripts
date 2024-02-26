import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import GradePromotionProcessServices from 'App/Services/GradePromotionProcessServices';
import GradePromotionProcessSchema from 'App/Validators/GradePromotionProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class GradePromotionProcessesController extends BaseController {
    constructor(private gradePromotionProcessService: GradePromotionProcessServices) {
        super();
    }

    public async getGradePromotionProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const gradePromotionProcessSchema =
                GradePromotionProcessSchema.safeParse(requestParams);
            if (!gradePromotionProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        gradePromotionProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.gradePromotionProcessService.getGradePromotionProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getGradePromotionProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.gradePromotionProcessService.getGradePromotionProcess,
        );
    }

    public async addGradePromotionProcess({ request }: HttpContextContract) {
        const gradePromotionProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const GradePromotionProcessValidate =
                GradePromotionProcessSchema.safeParse(gradePromotionProcess);
            if (!GradePromotionProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GradePromotionProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.gradePromotionProcessService.addGradePromotionProcess(gradePromotionProcess);
            return this.responseStatusService.showSuccess(
                'create',
                gradePromotionProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editGradePromotionProcess({ request }: HttpContextContract) {
        const gradePromotionProcess = request.body();

        try {
            const GradePromotionProcessValidate =
                GradePromotionProcessSchema.safeParse(gradePromotionProcess);
            if (!GradePromotionProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GradePromotionProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.gradePromotionProcessService.editGradePromotionProcess(gradePromotionProcess);
            return this.responseStatusService.showSuccess(
                'update',
                gradePromotionProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
