import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import CargoShippingProcessServices from 'App/Services/CargoShippingProcessServices';
import CargoShippingProcessSchema from 'App/Validators/CargoShippingProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class CargoShippingProcessesController extends BaseController {
    constructor(private cargoShippingProcessService: CargoShippingProcessServices) {
        super();
    }

    public async getCargoShippingProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const cargoShippingProcessSchema =
                CargoShippingProcessSchema.safeParse(requestParams);
            if (!cargoShippingProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        cargoShippingProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.cargoShippingProcessService.getCargoShippingProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getCargoShippingProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.cargoShippingProcessService.getCargoShippingProcess,
        );
    }

    public async addCargoShippingProcess({ request }: HttpContextContract) {
        const cargoShippingProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const CargoShippingProcessValidate =
                CargoShippingProcessSchema.safeParse(cargoShippingProcess);
            if (!CargoShippingProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        CargoShippingProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.cargoShippingProcessService.addCargoShippingProcess(cargoShippingProcess);
            return this.responseStatusService.showSuccess(
                'create',
                cargoShippingProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editCargoShippingProcess({ request }: HttpContextContract) {
        const cargoShippingProcess = request.body();

        try {
            const CargoShippingProcessValidate =
                CargoShippingProcessSchema.safeParse(cargoShippingProcess);
            if (!CargoShippingProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        CargoShippingProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.cargoShippingProcessService.editCargoShippingProcess(cargoShippingProcess);
            return this.responseStatusService.showSuccess(
                'update',
                cargoShippingProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
