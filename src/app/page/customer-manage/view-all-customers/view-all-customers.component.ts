import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-customers',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './view-all-customers.component.html',
  styleUrl: './view-all-customers.component.css'
})
export class ViewAllCustomersComponent {

  public customerList: any;

  constructor(private http: HttpClient) {
    this.loadCustomerTable();
  }

  loadCustomerTable() {
      this.http.get("http://localhost:8080/customer-controller/get-all-cust").subscribe(
        res =>{
          this.customerList=res;
          console.log(this.customerList);
          
        }
      )
  }
}
