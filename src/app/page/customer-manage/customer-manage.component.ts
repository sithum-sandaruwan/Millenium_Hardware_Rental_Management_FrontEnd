import { Component } from '@angular/core';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewAllCustomersComponent } from './view-all-customers/view-all-customers.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

@Component({
  selector: 'app-customer-manage',
  standalone: true,
  imports: [AddCustomerComponent,ViewAllCustomersComponent,DeleteCustomerComponent,UpdateCustomerComponent],
  templateUrl: './customer-manage.component.html',
  styleUrl: './customer-manage.component.css'
})
export class CustomerManageComponent {

}
