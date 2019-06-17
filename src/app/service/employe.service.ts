import { Injectable } from '@angular/core';
import {Employee} from '../../model/employee';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  employes: Employee[];
  employeSubject = new Subject<Employee[]>();

  constructor() { }
  emitEmployes() {
    this.employeSubject.next(this.employes);
  }
  saveEmployes() {
    firebase.database().ref('/employes').set(this.employes);
  }
  getEmployes() {
    firebase.database().ref('/employes').on('value', (data) => {
      this.employes = data.val() ? data.val() : [];
      this.emitEmployes();
    });
  }
  createNewEmploye(newEmploye: Employee){
    this.employes.push(newEmploye);
    this.saveEmployes();
    this.emitEmployes();
  }
}
