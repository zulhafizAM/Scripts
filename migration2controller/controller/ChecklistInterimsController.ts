import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ChecklistInterimServices from 'App/Services/ChecklistInterimServices';
import ChecklistInterimSchema from 'App/Validators/ChecklistInterimValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ChecklistInterimsController extends BaseController {
    constructor(private checklistInterimService: ChecklistInterimServices) {
        super();
    }

    public async getChecklistInterims({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const checklistInterimSchema =
                ChecklistInterimSchema.safeParse(requestParams);
            if (!checklistInterimSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        checklistInterimSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.checklistInterimService.getChecklistInterims(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getChecklistInterim({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.checklistInterimService.getChecklistInterim,
        );
    }

    public async addChecklistInterim({ request }: HttpContextContract) {
        const checklistInterim = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ChecklistInterimValidate =
                ChecklistInterimSchema.safeParse(checklistInterim);
            if (!ChecklistInterimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ChecklistInterimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.checklistInterimService.addChecklistInterim(checklistInterim);
            return this.responseStatusService.showSuccess(
                'create',
                checklistInterim,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editChecklistInterim({ request }: HttpContextContract) {
        const checklistInterim = request.body();

        try {
            const ChecklistInterimValidate =
                ChecklistInterimSchema.safeParse(checklistInterim);
            if (!ChecklistInterimValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ChecklistInterimValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.checklistInterimService.editChecklistInterim(checklistInterim);
            return this.responseStatusService.showSuccess(
                'update',
                checklistInterim,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
