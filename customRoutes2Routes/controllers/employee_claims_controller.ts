import { roleUser } from '#abilities/main'
import EmployeeClaimEmployeeClaimServices from 'App/Services/EmployeeClaim/EmployeeClaimEmployeeClaimServices';
import EmployeeClaimPersonal_detailServices from 'App/Services/EmployeeClaim/EmployeeClaimPersonal_detailServices';
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import jsend from 'jsend'

@inject()
export default class EmployeeClaimsController {
    constructor(
        protected employeeClaimEmployeeClaimService: EmployeeClaimEmployeeClaimServices,
        protected employeeClaimPersonal_detailService: EmployeeClaimPersonal_detailServices,
        ) {
    }

    async getEmployeeClaims({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.employeeClaimEmployeeClaimService.getEmployeeClaims(payload)))
    }
    async getEmployeeClaim({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.employeeClaimEmployeeClaimService.getEmployeeClaim(payload.id)))
    }
    async addEmployeeClaim({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddEmployeeClaimEmployeeClaimValidator)
        return response
            .status(200)
            .send(jsend.success(await this.employeeClaimEmployeeClaimService.addEmployeeClaim(payload, auth.user!)))
    }

    async getPersonal_detail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.employeeClaimPersonal_detailService.getPersonal_detail(payload.id)))
    }
}
