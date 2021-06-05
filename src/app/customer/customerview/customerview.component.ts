import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../../models/customer';
import {select, Store} from '@ngrx/store';
import {selectCustomers} from '../store/selector/customer.selectors';
import {CustomerState} from '../store/reducer/customer.reducer';

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent implements OnInit {

  customers$ : Observable<Customer[]>;
  constructor(private store:Store<CustomerState>) { 
    this.customers$ = this.store.pipe(select(selectCustomers));
  }

  ngOnInit(): void {
  }

}
