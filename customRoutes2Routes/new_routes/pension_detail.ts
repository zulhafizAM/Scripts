const PensionDetailsController = () => import('#controllers/employment/pension_details_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function pension_detailRoutes() {
    router
        .group(() => {
            router
                .group(() => {
                    router.post('get', [PensionDetailsController, 'getPersonalDetail'])
                })
                .prefix('personal_details')
            router
                .group(() => {
                    router.post('get', [PensionDetailsController, 'getService'])
                })
                .prefix('services')
            router
                .group(() => {
                    router.post('get', [PensionDetailsController, 'getSalary'])
                })
                .prefix('salaries')
            router
                .group(() => {
                    router.post('get', [PensionDetailsController, 'getRolesRelated'])
                    router.put('edit', [PensionDetailsController, 'editRolesRelated'])
                })
                .prefix('roles_relateds')
            router
                .group(() => {
                    router.post('list', [PensionDetailsController, 'getApproves'])
                    router.put('edit', [PensionDetailsController, 'editApprove'])
                })
                .prefix('approves')
            router
                .group(() => {
                    router.post('list', [PensionDetailsController, 'getSupports'])
                    router.put('edit', [PensionDetailsController, 'editSupport'])
                })
                .prefix('supports')
        })
        .prefix('pension_detail')
        .use(middleware.auth({ guards: ['api'] }))
}
