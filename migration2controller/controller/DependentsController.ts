import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import DependentServices from 'App/Services/DependentServices';
import DependentSchema from 'App/Validators/DependentValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class DependentsController extends BaseController {
    constructor(private dependentService: DependentServices) {
        super();
    }

    public async getDependents({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const dependentSchema =
                DependentSchema.safeParse(requestParams);
            if (!dependentSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        dependentSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.dependentService.getDependents(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getDependent({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.dependentService.getDependent,
        );
    }

    public async addDependent({ request }: HttpContextContract) {
        const dependent = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const DependentValidate =
                DependentSchema.safeParse(dependent);
            if (!DependentValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        DependentValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.dependentService.addDependent(dependent);
            return this.responseStatusService.showSuccess(
                'create',
                dependent,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editDependent({ request }: HttpContextContract) {
        const dependent = request.body();

        try {
            const DependentValidate =
                DependentSchema.safeParse(dependent);
            if (!DependentValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        DependentValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.dependentService.editDependent(dependent);
            return this.responseStatusService.showSuccess(
                'update',
                dependent,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
