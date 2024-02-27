import { roleUser } from '#abilities/main'
import { inject } from '@adonisjs/core/build/standalone';
import { error, fail, success } from 'App/Models/DTO/Shared/DefaultResponse';import PensionDetailPersonalDetailServices from 'App/Services/PensionDetail/PensionDetailPersonalDetailServices';
import PensionDetailServiceServices from 'App/Services/PensionDetail/PensionDetailServiceServices';
import PensionDetailSalaryServices from 'App/Services/PensionDetail/PensionDetailSalaryServices';
import PensionDetailRolesRelatedServices from 'App/Services/PensionDetail/PensionDetailRolesRelatedServices';
import PensionDetailApproveServices from 'App/Services/PensionDetail/PensionDetailApproveServices';
import PensionDetailSupportServices from 'App/Services/PensionDetail/PensionDetailSupportServices';
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import jsend from 'jsend'

@inject()
export default class PensionDetailsController {
    constructor(
        protected pensionDetailPersonalDetailService: PensionDetailPersonalDetailServices,
        protected pensionDetailServiceService: PensionDetailServiceServices,
        protected pensionDetailSalaryService: PensionDetailSalaryServices,
        protected pensionDetailRolesRelatedService: PensionDetailRolesRelatedServices,
        protected pensionDetailApproveService: PensionDetailApproveServices,
        protected pensionDetailSupportService: PensionDetailSupportServices,
        ) {
    }

    async getPersonalDetail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.pensionDetailPersonalDetailService.getPersonalDetail(payload.id)))
    }
    async getService({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.pensionDetailServiceService.getService(payload.id)))
    }
    async getSalary({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.pensionDetailSalaryService.getSalary(payload.id)))
    }
    async getRolesRelated({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.pensionDetailRolesRelatedService.getRolesRelated(payload.id)))
    }
    async editRolesRelated({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPensionDetailRolesRelatedValidator)
        return response
            .status(200)
            .send(jsend.success(await this.pensionDetailRolesRelatedService.editRolesRelated(payload, auth.user!)))
    }

    async getApproves({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.pensionDetailApproveService.getApproves(payload)))
    }
    async editApprove({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPensionDetailApproveValidator)
        return response
            .status(200)
            .send(jsend.success(await this.pensionDetailApproveService.editApprove(payload, auth.user!)))
    }

    async getSupports({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.pensionDetailSupportService.getSupports(payload)))
    }
    async editSupport({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPensionDetailSupportValidator)
        return response
            .status(200)
            .send(jsend.success(await this.pensionDetailSupportService.editSupport(payload, auth.user!)))
    }

}
