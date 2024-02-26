import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Employee from 'App/Models/Employee'
import { DateTime } from 'luxon'
import PersonalDetail from 'App/Models/PersonalDetail'
import Role from 'App/Models/Role'
import Position from 'App/Models/Position'
import Grade from 'App/Models/Grade'
import ServiceType from 'App/Models/ServiceType'
import ServiceGroup from 'App/Models/ServiceGroup'
import Unit from 'App/Models/Unit'

export default class extends BaseSeeder {
  
  public async run () {
    const personalDetail = await PersonalDetail.all();
    const role = await Role.all();
    const position = await Position.all();
    const grade = await Grade.all();
    const serviceType = await ServiceType.all();
    const serviceGroup = await ServiceGroup.all();
    const unit = await Unit.all();

    await Employee.createMany([
      {
        personalDetailId: personalDetail![1].id,
        roleId: role![1].id,
        positionId: position[17].id,
        gradeId: grade![27].id,
        serviceTypeId: serviceType![1].id,
        serviceGroupId: serviceGroup![1].id,
        unitId: unit![22].id,
        employeeNumber: '00001',
        firstServiceDate: DateTime.fromISO('1989-04-01T00:00:00.000Z'),
        currentServiceDate: DateTime.fromISO('2013-04-01T00:00:00.000Z'),
        placement: 'LKIM Kuching',
        officeNumber: '082-855 5555',
        active: true,
        createdBy: 'Admin',
        modifiedBy: 'Admin',
        
      },
      {
        personalDetailId: personalDetail![2].id,
        roleId: role![2].id,
        positionId: position[17].id,
        gradeId: grade![27].id,
        serviceTypeId: serviceType![1].id,
        serviceGroupId: serviceGroup![1].id,
        unitId: unit![22].id,
        employeeNumber:'00002',
        firstServiceDate: DateTime.fromISO('1989-04-01T00:00:00.000Z'),
        currentServiceDate: DateTime.fromISO('2013-05-01T00:00:00.000Z'),
        placement: 'LKIM Kuching',
        officeNumber: '082-855 5555',
        active: true,
        createdBy: 'Admin',  
        modifiedBy: 'Admin',
      }
    ])
  }
}
