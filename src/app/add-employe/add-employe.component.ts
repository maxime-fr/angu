import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeService} from '../service/employe.service';
import {Router} from '@angular/router';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  employeForm: FormGroup;

  constructor(private formbuilder: FormBuilder,
              private employeService: EmployeService,
              private router: Router ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.employeForm = this.formbuilder.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      fonction: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required],
    });
  }
  onSaveEmploye() {
    const name = this.employeForm.get('name').value;
    const firstname = this.employeForm.get('firstname').value;
    const fonction = this.employeForm.get('fonction').value;
    const email = this.employeForm.get('email').value;
    const age = this.employeForm.get('age').value;
    const newEmploye = new Employee(name, firstname, fonction, email, age);
    this.employeService.createNewEmploye(newEmploye);
    this.router.navigate(['/employes']);
  }
}
