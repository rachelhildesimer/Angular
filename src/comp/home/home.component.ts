import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './home.component.html',
  // styleUrl: './home.component.css'
})
export class HomeComponent {

}
