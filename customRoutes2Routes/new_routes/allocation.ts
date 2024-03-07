const AllocationsController = () => import('#controllers/employment/allocations_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function allocationRoutes() {
    router
        .group(() => {
            router
                .group(() => {
                    router.post('list', [AllocationsController, 'getHistories'])
                })
                .prefix('history')
            router
                .group(() => {
                    router.post('get', [AllocationsController, 'getTreatment_detail'])
                })
                .prefix('treatment_detail')
            router
                .group(() => {
                    router.post('get', [AllocationsController, 'getPatient_detail'])
                })
                .prefix('patient_detail')
            router
                .group(() => {
                    router.post('get', [AllocationsController, 'getEmployee_detail'])
                })
                .prefix('employee_detail')
            router
                .group(() => {
                    router.post('list', [AllocationsController, 'getClaims'])
                    router.post('get', [AllocationsController, 'getClaim'])
                    router.post('add', [AllocationsController, 'addClaim'])
                })
                .prefix('claim')
        })
        .prefix('allocation')
        .use(middleware.auth({ guards: ['api'] }))
}
