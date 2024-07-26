import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule, HttpClientModule,CommonModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})

export class AddCustomerComponent {

  public customerObj = {
    name: "",
    city: "",
    contact: ""
  }

  constructor(private http: HttpClient) { }

  addCustomer() {
    this.http.post("http://localhost:8080/customer-controller/add-customer",this.customerObj).subscribe(
      (data) => {
        console.log("data")
      }
    )
   }

}
