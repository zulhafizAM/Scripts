import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import VehicleLoanServices from 'App/Services/VehicleLoanServices';
import VehicleLoanSchema from 'App/Validators/VehicleLoanValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class VehicleLoansController extends BaseController {
    constructor(private vehicleLoanService: VehicleLoanServices) {
        super();
    }

    public async getVehicleLoans({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const vehicleLoanSchema =
                VehicleLoanSchema.safeParse(requestParams);
            if (!vehicleLoanSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        vehicleLoanSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.vehicleLoanService.getVehicleLoans(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getVehicleLoan({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.vehicleLoanService.getVehicleLoan,
        );
    }

    public async addVehicleLoan({ request }: HttpContextContract) {
        const vehicleLoan = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const VehicleLoanValidate =
                VehicleLoanSchema.safeParse(vehicleLoan);
            if (!VehicleLoanValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        VehicleLoanValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.vehicleLoanService.addVehicleLoan(vehicleLoan);
            return this.responseStatusService.showSuccess(
                'create',
                vehicleLoan,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editVehicleLoan({ request }: HttpContextContract) {
        const vehicleLoan = request.body();

        try {
            const VehicleLoanValidate =
                VehicleLoanSchema.safeParse(vehicleLoan);
            if (!VehicleLoanValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        VehicleLoanValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.vehicleLoanService.editVehicleLoan(vehicleLoan);
            return this.responseStatusService.showSuccess(
                'update',
                vehicleLoan,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
