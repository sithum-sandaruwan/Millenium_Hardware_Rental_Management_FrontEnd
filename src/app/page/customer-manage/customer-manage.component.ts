import { Component } from '@angular/core';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@Component({
  selector: 'app-customer-manage',
  standalone: true,
  imports: [AddCustomerComponent],
  templateUrl: './customer-manage.component.html',
  styleUrl: './customer-manage.component.css'
})
export class CustomerManageComponent {

}
