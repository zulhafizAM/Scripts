import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ClothingAssistanceProcessServices from 'App/Services/ClothingAssistanceProcessServices';
import ClothingAssistanceProcessSchema from 'App/Validators/ClothingAssistanceProcessValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ClothingAssistanceProcessesController extends BaseController {
    constructor(private clothingAssistanceProcessService: ClothingAssistanceProcessServices) {
        super();
    }

    public async getClothingAssistanceProcesses({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const clothingAssistanceProcessSchema =
                ClothingAssistanceProcessSchema.safeParse(requestParams);
            if (!clothingAssistanceProcessSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        clothingAssistanceProcessSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.clothingAssistanceProcessService.getClothingAssistanceProcesss(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getClothingAssistanceProcess({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.clothingAssistanceProcessService.getClothingAssistanceProcess,
        );
    }

    public async addClothingAssistanceProcess({ request }: HttpContextContract) {
        const clothingAssistanceProcess = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ClothingAssistanceProcessValidate =
                ClothingAssistanceProcessSchema.safeParse(clothingAssistanceProcess);
            if (!ClothingAssistanceProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ClothingAssistanceProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.clothingAssistanceProcessService.addClothingAssistanceProcess(clothingAssistanceProcess);
            return this.responseStatusService.showSuccess(
                'create',
                clothingAssistanceProcess,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editClothingAssistanceProcess({ request }: HttpContextContract) {
        const clothingAssistanceProcess = request.body();

        try {
            const ClothingAssistanceProcessValidate =
                ClothingAssistanceProcessSchema.safeParse(clothingAssistanceProcess);
            if (!ClothingAssistanceProcessValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ClothingAssistanceProcessValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.clothingAssistanceProcessService.editClothingAssistanceProcess(clothingAssistanceProcess);
            return this.responseStatusService.showSuccess(
                'update',
                clothingAssistanceProcess,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
