const EmployeeClaimsController = () => import('#controllers/employment/employee_claims_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function employee_claimRoutes() {
    router
        .group(() => {
            router
                .group(() => {
                    router.post('list', [EmployeeClaimsController, 'getEmployeeClaims'])
                    router.post('get', [EmployeeClaimsController, 'getEmployeeClaim'])
                    router.post('add', [EmployeeClaimsController, 'addEmployeeClaim'])
                })
                .prefix('employee_claim')
            router
                .group(() => {
                    router.post('get', [EmployeeClaimsController, 'getPersonal_detail'])
                })
                .prefix('personal_detail')
        })
        .prefix('employee_claim')
        .use(middleware.auth({ guards: ['api'] }))
}
