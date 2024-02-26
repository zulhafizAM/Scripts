import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import DistrictServices from 'App/Services/DistrictServices';
import DistrictSchema from 'App/Validators/DistrictValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class DistrictsController extends BaseController {
    constructor(private districtService: DistrictServices) {
        super();
    }

    public async getDistricts({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const districtSchema =
                DistrictSchema.safeParse(requestParams);
            if (!districtSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        districtSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.districtService.getDistricts(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getDistrict({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.districtService.getDistrict,
        );
    }

    public async addDistrict({ request }: HttpContextContract) {
        const district = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const DistrictValidate =
                DistrictSchema.safeParse(district);
            if (!DistrictValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        DistrictValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.districtService.addDistrict(district);
            return this.responseStatusService.showSuccess(
                'create',
                district,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editDistrict({ request }: HttpContextContract) {
        const district = request.body();

        try {
            const DistrictValidate =
                DistrictSchema.safeParse(district);
            if (!DistrictValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        DistrictValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.districtService.editDistrict(district);
            return this.responseStatusService.showSuccess(
                'update',
                district,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
