import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ExamsTypeServices from 'App/Services/ExamsTypeServices';
import ExamsTypeSchema from 'App/Validators/ExamsTypeValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ExamsTypesController extends BaseController {
    constructor(private examsTypeService: ExamsTypeServices) {
        super();
    }

    public async getExamsTypes({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const examsTypeSchema =
                ExamsTypeSchema.safeParse(requestParams);
            if (!examsTypeSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        examsTypeSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.examsTypeService.getExamsTypes(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getExamsType({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.examsTypeService.getExamsType,
        );
    }

    public async addExamsType({ request }: HttpContextContract) {
        const examsType = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ExamsTypeValidate =
                ExamsTypeSchema.safeParse(examsType);
            if (!ExamsTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ExamsTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.examsTypeService.addExamsType(examsType);
            return this.responseStatusService.showSuccess(
                'create',
                examsType,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editExamsType({ request }: HttpContextContract) {
        const examsType = request.body();

        try {
            const ExamsTypeValidate =
                ExamsTypeSchema.safeParse(examsType);
            if (!ExamsTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ExamsTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.examsTypeService.editExamsType(examsType);
            return this.responseStatusService.showSuccess(
                'update',
                examsType,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
