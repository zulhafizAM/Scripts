import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import CargoShippingReimbursementServices from 'App/Services/CargoShippingReimbursementServices';
import CargoShippingReimbursementSchema from 'App/Validators/CargoShippingReimbursementValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class CargoShippingReimbursementsController extends BaseController {
    constructor(private cargoShippingReimbursementService: CargoShippingReimbursementServices) {
        super();
    }

    public async getCargoShippingReimbursements({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const cargoShippingReimbursementSchema =
                CargoShippingReimbursementSchema.safeParse(requestParams);
            if (!cargoShippingReimbursementSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        cargoShippingReimbursementSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.cargoShippingReimbursementService.getCargoShippingReimbursements(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getCargoShippingReimbursement({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.cargoShippingReimbursementService.getCargoShippingReimbursement,
        );
    }

    public async addCargoShippingReimbursement({ request }: HttpContextContract) {
        const cargoShippingReimbursement = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const CargoShippingReimbursementValidate =
                CargoShippingReimbursementSchema.safeParse(cargoShippingReimbursement);
            if (!CargoShippingReimbursementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        CargoShippingReimbursementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.cargoShippingReimbursementService.addCargoShippingReimbursement(cargoShippingReimbursement);
            return this.responseStatusService.showSuccess(
                'create',
                cargoShippingReimbursement,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editCargoShippingReimbursement({ request }: HttpContextContract) {
        const cargoShippingReimbursement = request.body();

        try {
            const CargoShippingReimbursementValidate =
                CargoShippingReimbursementSchema.safeParse(cargoShippingReimbursement);
            if (!CargoShippingReimbursementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        CargoShippingReimbursementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.cargoShippingReimbursementService.editCargoShippingReimbursement(cargoShippingReimbursement);
            return this.responseStatusService.showSuccess(
                'update',
                cargoShippingReimbursement,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
