import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import WithoutPayLeaveServices from 'App/Services/WithoutPayLeaveServices';
import WithoutPayLeaveSchema from 'App/Validators/WithoutPayLeaveValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class WithoutPayLeavesController extends BaseController {
    constructor(private withoutPayLeaveService: WithoutPayLeaveServices) {
        super();
    }

    public async getWithoutPayLeaves({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const withoutPayLeaveSchema =
                WithoutPayLeaveSchema.safeParse(requestParams);
            if (!withoutPayLeaveSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        withoutPayLeaveSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.withoutPayLeaveService.getWithoutPayLeaves(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getWithoutPayLeave({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.withoutPayLeaveService.getWithoutPayLeave,
        );
    }

    public async addWithoutPayLeave({ request }: HttpContextContract) {
        const withoutPayLeave = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const WithoutPayLeaveValidate =
                WithoutPayLeaveSchema.safeParse(withoutPayLeave);
            if (!WithoutPayLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        WithoutPayLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.withoutPayLeaveService.addWithoutPayLeave(withoutPayLeave);
            return this.responseStatusService.showSuccess(
                'create',
                withoutPayLeave,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editWithoutPayLeave({ request }: HttpContextContract) {
        const withoutPayLeave = request.body();

        try {
            const WithoutPayLeaveValidate =
                WithoutPayLeaveSchema.safeParse(withoutPayLeave);
            if (!WithoutPayLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        WithoutPayLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.withoutPayLeaveService.editWithoutPayLeave(withoutPayLeave);
            return this.responseStatusService.showSuccess(
                'update',
                withoutPayLeave,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
