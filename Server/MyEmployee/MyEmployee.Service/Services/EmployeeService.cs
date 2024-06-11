using MyEmployee.Domain.Models;
using MyEmployee.Domain.ResponseType;
using MyEmployee.Service.Data;
using MyEmployee.Service.Views_DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEmployee.Service.Services
{
    public class EmployeeService
    {
        private readonly ApplicationDbContext _db;

        public EmployeeService(ApplicationDbContext db) 
        {
            _db = db;
        }
        public async Task<ServerResponse<bool>> Create(Employeedto employee)
        {
            var response = new ServerResponse<bool>();
            try
            {
                var user = new Employee()
                {
                    Name = employee.Name,
                    Description = employee.Description,
                    Role = employee.Role
                };
                _db.Employees.Add(user);
                _db.SaveChanges();
                response.Result = true;
                response.IsValid = true;
            }
            catch (Exception ex)
            {
                response.Result = false;
                response.IsValid = false;
                response.ResponseMessage = ex.Message;
            }
            return response;
        }

        public ServerResponse<List<Employee>> ReadAll()
        {
            var response = new ServerResponse<List<Employee>>();
            try
            {
                var employees = _db.Employees.ToList();
                
                response.Result = employees;
                response.IsValid = true;
            }
            catch (Exception ex)
            {
                response.IsValid = false;
                response.ResponseMessage = ex.Message;
            }
            return response;
        }

        public ServerResponse<bool> Delete(int id)
        {
            var response = new ServerResponse<bool>();
            var employee = _db.Employees.SingleOrDefault(x => x.Id == id);
            _db.Employees.Remove(employee);
            _db.SaveChanges();
            response.Result = true;
            response.IsValid = true;
            return response;
        }
    }
}
