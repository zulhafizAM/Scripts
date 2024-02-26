import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import CandidateServices from 'App/Services/CandidateServices';
import CandidateSchema from 'App/Validators/CandidateValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class CandidatesController extends BaseController {
    constructor(private candidateService: CandidateServices) {
        super();
    }

    public async getCandidates({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const candidateSchema =
                CandidateSchema.safeParse(requestParams);
            if (!candidateSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        candidateSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.candidateService.getCandidates(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getCandidate({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.candidateService.getCandidate,
        );
    }

    public async addCandidate({ request }: HttpContextContract) {
        const candidate = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const CandidateValidate =
                CandidateSchema.safeParse(candidate);
            if (!CandidateValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        CandidateValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.candidateService.addCandidate(candidate);
            return this.responseStatusService.showSuccess(
                'create',
                candidate,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editCandidate({ request }: HttpContextContract) {
        const candidate = request.body();

        try {
            const CandidateValidate =
                CandidateSchema.safeParse(candidate);
            if (!CandidateValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        CandidateValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.candidateService.editCandidate(candidate);
            return this.responseStatusService.showSuccess(
                'update',
                candidate,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
