import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import AccruedAnnualLeaveServices from 'App/Services/AccruedAnnualLeaveServices';
import AccruedAnnualLeaveSchema from 'App/Validators/AccruedAnnualLeaveValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class AccruedAnnualLeavesController extends BaseController {
    constructor(private accruedAnnualLeaveService: AccruedAnnualLeaveServices) {
        super();
    }

    public async getAccruedAnnualLeaves({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const accruedAnnualLeaveSchema =
                AccruedAnnualLeaveSchema.safeParse(requestParams);
            if (!accruedAnnualLeaveSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        accruedAnnualLeaveSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.accruedAnnualLeaveService.getAccruedAnnualLeaves(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getAccruedAnnualLeave({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.accruedAnnualLeaveService.getAccruedAnnualLeave,
        );
    }

    public async addAccruedAnnualLeave({ request }: HttpContextContract) {
        const accruedAnnualLeave = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const AccruedAnnualLeaveValidate =
                AccruedAnnualLeaveSchema.safeParse(accruedAnnualLeave);
            if (!AccruedAnnualLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AccruedAnnualLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.accruedAnnualLeaveService.addAccruedAnnualLeave(accruedAnnualLeave);
            return this.responseStatusService.showSuccess(
                'create',
                accruedAnnualLeave,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editAccruedAnnualLeave({ request }: HttpContextContract) {
        const accruedAnnualLeave = request.body();

        try {
            const AccruedAnnualLeaveValidate =
                AccruedAnnualLeaveSchema.safeParse(accruedAnnualLeave);
            if (!AccruedAnnualLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AccruedAnnualLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.accruedAnnualLeaveService.editAccruedAnnualLeave(accruedAnnualLeave);
            return this.responseStatusService.showSuccess(
                'update',
                accruedAnnualLeave,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
