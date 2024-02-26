import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import GradeActingTypesProcessServices from 'App/Services/GradeActingTypesProcessServices';
import GradeActingTypesProcessSchema from 'App/Validators/GradeActingTypesProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class GradeActingTypesProcessesController extends BaseController {
    constructor(private gradeActingTypesProcessService: GradeActingTypesProcessServices) {
        super();
    }

    public async getGradeActingTypesProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const gradeActingTypesProcessSchema =
                GradeActingTypesProcessSchema.safeParse(requestParams);
            if (!gradeActingTypesProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        gradeActingTypesProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.gradeActingTypesProcessService.getGradeActingTypesProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getGradeActingTypesProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.gradeActingTypesProcessService.getGradeActingTypesProcess,
        );
    }

    public async addGradeActingTypesProcess({ request }: HttpContextContract) {
        const gradeActingTypesProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const GradeActingTypesProcessValidate =
                GradeActingTypesProcessSchema.safeParse(gradeActingTypesProcess);
            if (!GradeActingTypesProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GradeActingTypesProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.gradeActingTypesProcessService.addGradeActingTypesProcess(gradeActingTypesProcess);
            return this.responseStatusService.showSuccess(
                'create',
                gradeActingTypesProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editGradeActingTypesProcess({ request }: HttpContextContract) {
        const gradeActingTypesProcess = request.body();

        try {
            const GradeActingTypesProcessValidate =
                GradeActingTypesProcessSchema.safeParse(gradeActingTypesProcess);
            if (!GradeActingTypesProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        GradeActingTypesProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.gradeActingTypesProcessService.editGradeActingTypesProcess(gradeActingTypesProcess);
            return this.responseStatusService.showSuccess(
                'update',
                gradeActingTypesProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
