import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import CandidateTypeServices from 'App/Services/CandidateTypeServices';
import CandidateTypeSchema from 'App/Validators/CandidateTypeValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class CandidateTypesController extends BaseController {
    constructor(private candidateTypeService: CandidateTypeServices) {
        super();
    }

    public async getCandidateTypes({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const candidateTypeSchema =
                CandidateTypeSchema.safeParse(requestParams);
            if (!candidateTypeSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        candidateTypeSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.candidateTypeService.getCandidateTypes(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getCandidateType({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.candidateTypeService.getCandidateType,
        );
    }

    public async addCandidateType({ request }: HttpContextContract) {
        const candidateType = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const CandidateTypeValidate =
                CandidateTypeSchema.safeParse(candidateType);
            if (!CandidateTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        CandidateTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.candidateTypeService.addCandidateType(candidateType);
            return this.responseStatusService.showSuccess(
                'create',
                candidateType,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editCandidateType({ request }: HttpContextContract) {
        const candidateType = request.body();

        try {
            const CandidateTypeValidate =
                CandidateTypeSchema.safeParse(candidateType);
            if (!CandidateTypeValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        CandidateTypeValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.candidateTypeService.editCandidateType(candidateType);
            return this.responseStatusService.showSuccess(
                'update',
                candidateType,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
