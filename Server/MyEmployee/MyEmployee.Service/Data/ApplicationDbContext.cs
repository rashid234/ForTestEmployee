using Microsoft.EntityFrameworkCore;
using MyEmployee.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEmployee.Service.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
           : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            var employees = new Employee[]
            {
                new Employee()
                {
                    Id = 1,
                    Name = "Test",
                    Role = "Test",
                    Description = "Test"
                },
                new Employee()
                {
                    Id = 2,
                    Name = "Rashid",
                    Role = "Software Enginneer",
                    Description = "Dynamic and detail-oriented Full Stack Developer with over 1+ years of experience specializing in .NET and Angular technologies. Adept at collaborating with large teams of 40+ members to drive major improvements and resolve critical issues. Proven track record in enhancing application performance, delivering robust solutions, and contributing to the success of high-impact projects. Passionate about continuous learning and staying updated with the latest industry trends to provide innovative solutions that exceed client expectations."
                },
                new Employee()
                {
                    Id = 3,
                    Name = "John",
                    Role = "Software Architect",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                new Employee()
                {
                    Id = 4,
                    Name = "Susan Joseph",
                    Role = "Test Enginneer",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                new Employee()
                {
                    Id = 5,
                    Name = "Karthik C",
                    Role = "Business Analyst",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                new Employee()
                {
                    Id = 6,
                    Name = "John Jacob",
                    Role = "Devops Engineer",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            };
            builder.Entity<Employee>().HasData(employees);
        }

        public DbSet<Employee> Employees { get; set; }
    }
}
