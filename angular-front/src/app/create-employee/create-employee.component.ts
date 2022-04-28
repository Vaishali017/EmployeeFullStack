import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component//decorater
({
  selector: 'app-create-employee',// css selector for the component.Every component requires a CSS selector. 
  // A selector instructs Angular to instantiate this component wherever it finds the corresponding tag in template HTML
  //To define a template as an external file, add a templateUrl property to the @Component decorator.
  templateUrl: './create-employee.component.html',//A template is a block of HTML that tells Angular how to render the component in your application. 
  //Define a template for your component in one of two ways: by referencing an external file, or directly within the component.
  // To define a template within the component, add a template property to the @Component decorator that contains the HTML you want to use.
  // template: '<h1>Hello World!</h1>',
  // If you want your template to span multiple lines, use backticks (`). for example:  template: `
    //<h1>Hello World!</h1>
    //<p>This template definition spans multiple lines.</p>
  //`
  styleUrls: ['./create-employee.component.css']
  //To declare the styles for a component in a separate file, add a styleUrls property to the @Component decorator.
  //To declare the styles within the component, add a styles property to the @Component decorator that contains the styles you want to use.
  //styles: ['h1 { font-weight: normal; }']
  // The styles property takes an array of strings that contain the CSS rule declarations.
})
export class CreateEmployeeComponent implements OnInit {
employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error)
    
    );
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

  onSubmit(){
   console.log(this.employee);
   this.saveEmployee();
  }

}
