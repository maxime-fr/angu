import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {ActivatedRoute} from '@angular/router';
import {EmployeService} from '../service/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  @Input() name: string;
  @Input() firstname: string;
  @Input() age: number;
  @Input() email: string;
  @Input() fonction: string;

  constructor() { }

  ngOnInit() {
  }

}
