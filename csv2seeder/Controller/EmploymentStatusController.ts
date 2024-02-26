import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';
import EmploymentStatusServices from 'App/Services/Lookup/EmploymentStatusServices';
import EmploymentStatusListFilterSchema from 'App/Validators/Lookup/EmploymentStatus/EmploymentStatusListFilterSchema';
import EmploymentStatusAddSchema from 'App/Validators/Lookup/EmploymentStatus/EmploymentStatusAddSchema';
import EmploymentStatusEditSchema from 'App/Validators/Lookup/EmploymentStatus/EmploymentStatusEditSchema';

@inject()
export default class EmploymentStatusController extends BaseController {
    constructor(private employmentStatusService: EmploymentStatusServices) {
        super();
    }

    public async getEmploymentStatus({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.employmentStatusService.getEmploymentStatus,
        );
    }
}
