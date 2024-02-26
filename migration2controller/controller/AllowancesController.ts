import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import AllowanceServices from 'App/Services/AllowanceServices';
import AllowanceSchema from 'App/Validators/AllowanceValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class AllowancesController extends BaseController {
    constructor(private allowanceService: AllowanceServices) {
        super();
    }

    public async getAllowances({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const allowanceSchema =
                AllowanceSchema.safeParse(requestParams);
            if (!allowanceSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        allowanceSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.allowanceService.getAllowances(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getAllowance({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.allowanceService.getAllowance,
        );
    }

    public async addAllowance({ request }: HttpContextContract) {
        const allowance = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const AllowanceValidate =
                AllowanceSchema.safeParse(allowance);
            if (!AllowanceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AllowanceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.allowanceService.addAllowance(allowance);
            return this.responseStatusService.showSuccess(
                'create',
                allowance,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editAllowance({ request }: HttpContextContract) {
        const allowance = request.body();

        try {
            const AllowanceValidate =
                AllowanceSchema.safeParse(allowance);
            if (!AllowanceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        AllowanceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.allowanceService.editAllowance(allowance);
            return this.responseStatusService.showSuccess(
                'update',
                allowance,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
