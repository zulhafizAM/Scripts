import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import GradeActingPostponeProcessServices from 'App/Services/GradeActingPostponeProcessServices';
import GradeActingPostponeProcessSchema from 'App/Validators/GradeActingPostponeProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class GradeActingPostponeProcessesController extends BaseController {
    constructor(private gradeActingPostponeProcessService: GradeActingPostponeProcessServices) {
        super();
    }

    public async getGradeActingPostponeProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const gradeActingPostponeProcessSchema =
                GradeActingPostponeProcessSchema.safeParse(requestParams);
            if (!gradeActingPostponeProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        gradeActingPostponeProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.gradeActingPostponeProcessService.getGradeActingPostponeProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getGradeActingPostponeProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.gradeActingPostponeProcessService.getGradeActingPostponeProcess,
        );
    }

    public async addGradeActingPostponeProcess({ request }: HttpContextContract) {
        const gradeActingPostponeProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const GradeActingPostponeProcessValidate =
                GradeActingPostponeProcessSchema.safeParse(gradeActingPostponeProcess);
            if (!GradeActingPostponeProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GradeActingPostponeProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.gradeActingPostponeProcessService.addGradeActingPostponeProcess(gradeActingPostponeProcess);
            return this.responseStatusService.showSuccess(
                'create',
                gradeActingPostponeProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editGradeActingPostponeProcess({ request }: HttpContextContract) {
        const gradeActingPostponeProcess = request.body();

        try {
            const GradeActingPostponeProcessValidate =
                GradeActingPostponeProcessSchema.safeParse(gradeActingPostponeProcess);
            if (!GradeActingPostponeProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GradeActingPostponeProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.gradeActingPostponeProcessService.editGradeActingPostponeProcess(gradeActingPostponeProcess);
            return this.responseStatusService.showSuccess(
                'update',
                gradeActingPostponeProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
