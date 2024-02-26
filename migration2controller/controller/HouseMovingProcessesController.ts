import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import HouseMovingProcessServices from 'App/Services/HouseMovingProcessServices';
import HouseMovingProcessSchema from 'App/Validators/HouseMovingProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class HouseMovingProcessesController extends BaseController {
    constructor(private houseMovingProcessService: HouseMovingProcessServices) {
        super();
    }

    public async getHouseMovingProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const houseMovingProcessSchema =
                HouseMovingProcessSchema.safeParse(requestParams);
            if (!houseMovingProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        houseMovingProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.houseMovingProcessService.getHouseMovingProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getHouseMovingProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.houseMovingProcessService.getHouseMovingProcess,
        );
    }

    public async addHouseMovingProcess({ request }: HttpContextContract) {
        const houseMovingProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const HouseMovingProcessValidate =
                HouseMovingProcessSchema.safeParse(houseMovingProcess);
            if (!HouseMovingProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        HouseMovingProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.houseMovingProcessService.addHouseMovingProcess(houseMovingProcess);
            return this.responseStatusService.showSuccess(
                'create',
                houseMovingProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editHouseMovingProcess({ request }: HttpContextContract) {
        const houseMovingProcess = request.body();

        try {
            const HouseMovingProcessValidate =
                HouseMovingProcessSchema.safeParse(houseMovingProcess);
            if (!HouseMovingProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        HouseMovingProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.houseMovingProcessService.editHouseMovingProcess(houseMovingProcess);
            return this.responseStatusService.showSuccess(
                'update',
                houseMovingProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
