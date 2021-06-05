import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerviewComponent } from './customerview/customerview.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import {StoreModule} from '@ngrx/store';
import {customerFeatureKey, reducer} from './store/reducer/customer.reducer';


@NgModule({
  declarations: [
    CustomerviewComponent,
    CustomerAddComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer)
  ],
  exports:[
    CustomerviewComponent,
    CustomerAddComponent
  ]
})
export class CustomerModule { 
  name = '';
}
