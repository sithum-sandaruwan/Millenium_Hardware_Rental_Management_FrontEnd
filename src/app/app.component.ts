import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerManageComponent } from './page/customer-manage/customer-manage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomerManageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-manage-system';
}
