import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import HouseMovingAllowanceServices from 'App/Services/HouseMovingAllowanceServices';
import HouseMovingAllowanceSchema from 'App/Validators/HouseMovingAllowanceValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class HouseMovingAllowancesController extends BaseController {
    constructor(private houseMovingAllowanceService: HouseMovingAllowanceServices) {
        super();
    }

    public async getHouseMovingAllowances({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const houseMovingAllowanceSchema =
                HouseMovingAllowanceSchema.safeParse(requestParams);
            if (!houseMovingAllowanceSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        houseMovingAllowanceSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.houseMovingAllowanceService.getHouseMovingAllowances(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getHouseMovingAllowance({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.houseMovingAllowanceService.getHouseMovingAllowance,
        );
    }

    public async addHouseMovingAllowance({ request }: HttpContextContract) {
        const houseMovingAllowance = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const HouseMovingAllowanceValidate =
                HouseMovingAllowanceSchema.safeParse(houseMovingAllowance);
            if (!HouseMovingAllowanceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        HouseMovingAllowanceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.houseMovingAllowanceService.addHouseMovingAllowance(houseMovingAllowance);
            return this.responseStatusService.showSuccess(
                'create',
                houseMovingAllowance,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editHouseMovingAllowance({ request }: HttpContextContract) {
        const houseMovingAllowance = request.body();

        try {
            const HouseMovingAllowanceValidate =
                HouseMovingAllowanceSchema.safeParse(houseMovingAllowance);
            if (!HouseMovingAllowanceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        HouseMovingAllowanceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.houseMovingAllowanceService.editHouseMovingAllowance(houseMovingAllowance);
            return this.responseStatusService.showSuccess(
                'update',
                houseMovingAllowance,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
