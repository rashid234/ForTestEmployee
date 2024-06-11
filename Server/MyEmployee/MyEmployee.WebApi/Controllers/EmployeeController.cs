using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyEmployee.Domain.Models;
using MyEmployee.Domain.ResponseType;
using MyEmployee.Service.Services;
using MyEmployee.Service.Views_DTO;

namespace MyEmployee.WebApi.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly EmployeeService _employeeService;

        public EmployeeController(EmployeeService employeeService) 
        {
            _employeeService = employeeService;
        }

        // POST: EmployeeController/Create
        [HttpPost("create")]
        public async Task<IActionResult> Create(Employeedto employee)
        {
            var response = new ServerResponse<bool>();
            try
            {
                response = await _employeeService.Create(employee);
            }
            catch(Exception ex) 
            {
                response.IsValid = false;
                response.Result = false;
                response.ResponseMessage = ex.Message;
            }
            return Ok(response);
        }

        // Get: EmployeeController/ReadAll
        [HttpGet("readall")]
        public ServerResponse<List<Employee>> ReadAll()
        {
            var response = new ServerResponse<List<Employee>>();
            try
            {
                response = _employeeService.ReadAll();
            }
            catch (Exception ex)
            {
                response.IsValid = false;
                response.ResponseMessage = ex.Message;
            }
            return response;
        }
        // POST: EmployeeController/Edit/5
        [HttpPost("update")]
        public async Task<IActionResult> Update(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // Detele: EmployeeController/Delete/5
        [HttpDelete("delete/{id}")]
        public ServerResponse<bool> Delete(int id)
        {
            var response = new ServerResponse<bool>();
            try
            {
                response = _employeeService.Delete(id);
            }
            catch (Exception ex)
            {
                response.IsValid = false;
                response.ResponseMessage = ex.Message;
            }
            return response;
        }
    }
}
