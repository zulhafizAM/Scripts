import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Employee from 'App/Models/Employee';
import Permission from 'App/Models/Permission';
import Role from 'App/Models/Role';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const roles = await Role.all();
		await Permission.createMany([
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[5]!.id,
				action: "add",
				resource: "meeting result",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[16]!.id,
				action: "confirm",
				resource: "Pergerakan Gaji",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[5]!.id,
				action: "view",
				resource: "search list of employee involved",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[5]!.id,
				action: "edit",
				resource: "Perubahan Gaji dan Elaun-elaun",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[5]!.id,
				action: "download",
				resource: "employee's pay slip",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[16]!.id,
				action: "view",
				resource: "search the list of employee involved",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[16]!.id,
				action: "edit",
				resource: "status to approve the list of employee involved",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[5]!.id,
				action: "view",
				resource: "Pemotongan Gaji Secara Bulanan",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[5]!.id,
				action: "edit",
				resource: "Pemotongan Gaji",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[5]!.id,
				action: "download",
				resource: "employee's pay slip",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[16]!.id,
				action: "view",
				resource: "search the list of employee involved",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[16]!.id,
				action: "edit",
				resource: "status to approve the list of employee involved",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[5]!.id,
				action: "view",
				resource: "filter and search list of employee that will be retired",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[5]!.id,
				action: "update",
				resource: "salary details (included loan and elaun)",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[5]!.id,
				action: "download",
				resource: "employee's pay slip",
				module: "Gaji",
				active: true,
				createdBy: "Admin",
			},
		])
	}
}
