import 'dotenv/config.js';
import "../../config/database.js";
import Employee from "../Employee.js";

let employees = [
    { name: "John Doe", position: "Software Engineer", salary: 80000 },
    { name: "Jane Smith", position: "Product Manager", salary: 95000 },
    { name: "Michael Johnson", position: "Data Scientist", salary: 85000 },
    { name: "Emily Davis", position: "UX Designer", salary: 75000 },
    { name: "David Wilson", position: "DevOps Engineer", salary: 90000 },
    { name: "Sarah Brown", position: "Marketing Specialist", salary: 60000 },
    { name: "James Miller", position: "Sales Manager", salary: 70000 },
    { name: "Linda Garcia", position: "HR Coordinator", salary: 55000 },
    { name: "Robert Martinez", position: "Financial Analyst", salary: 78000 },
    { name: "Patricia Anderson", position: "Customer Support", salary: 50000 },
    { name: "William Taylor", position: "System Administrator", salary: 72000 },
    { name: "Jennifer Thomas", position: "Content Writer", salary: 48000 },
    { name: "Charles Moore", position: "Network Engineer", salary: 83000 },
    { name: "Elizabeth Jackson", position: "Business Analyst", salary: 77000 },
    { name: "Daniel Lee", position: "Quality Assurance", salary: 68000 }
];

Employee.insertMany(employees)