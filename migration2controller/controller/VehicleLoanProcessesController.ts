import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import VehicleLoanProcessesServices from 'App/Services/VehicleLoanProcessesServices';
import VehicleLoanProcessesSchema from 'App/Validators/VehicleLoanProcessesValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class VehicleLoanProcessesController extends BaseController {
    constructor(private vehicleLoanProcessesService: VehicleLoanProcessesServices) {
        super();
    }

    public async getVehicleLoanProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const vehicleLoanProcessesSchema =
                VehicleLoanProcessesSchema.safeParse(requestParams);
            if (!vehicleLoanProcessesSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        vehicleLoanProcessesSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.vehicleLoanProcessesService.getVehicleLoanProcessess(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getVehicleLoanProcesses({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.vehicleLoanProcessesService.getVehicleLoanProcesses,
        );
    }

    public async addVehicleLoanProcesses({ request }: HttpContextContract) {
        const vehicleLoanProcesses = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const VehicleLoanProcessesValidate =
                VehicleLoanProcessesSchema.safeParse(vehicleLoanProcesses);
            if (!VehicleLoanProcessesValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        VehicleLoanProcessesValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.vehicleLoanProcessesService.addVehicleLoanProcesses(vehicleLoanProcesses);
            return this.responseStatusService.showSuccess(
                'create',
                vehicleLoanProcesses,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editVehicleLoanProcesses({ request }: HttpContextContract) {
        const vehicleLoanProcesses = request.body();

        try {
            const VehicleLoanProcessesValidate =
                VehicleLoanProcessesSchema.safeParse(vehicleLoanProcesses);
            if (!VehicleLoanProcessesValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        VehicleLoanProcessesValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.vehicleLoanProcessesService.editVehicleLoanProcesses(vehicleLoanProcesses);
            return this.responseStatusService.showSuccess(
                'update',
                vehicleLoanProcesses,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
