import {Component, OnDestroy, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {Subscription} from 'rxjs';
import {EmployeService} from '../service/employe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit, OnDestroy {

  employes: Employee[];
  employesSubscription: Subscription;

  constructor( private employeService: EmployeService,
               private router: Router) { }

  ngOnInit() {
    this.employeService.getEmployes();
    this.employeService.emitEmployes();
  }
  ngOnDestroy() {
    this.employesSubscription.unsubscribe();
  }

}
