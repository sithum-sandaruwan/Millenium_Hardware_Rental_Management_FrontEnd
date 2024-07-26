import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  constructor(private http: HttpClient) { }

  public customerObj = {
    name: "",
    city: "",
    contact: ""
  }

  addCustomer() {
    this.http.post("http://localhost:8080/customer-controller/add-customer", this.customerObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Employee Added !",
          text: "You clicked the button!",
          icon: "success"
        });

        console.log("Add Customer");

      }
    )
  }
}
