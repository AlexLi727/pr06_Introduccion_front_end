import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login(name: string, password: string){
    var data = [
      {"name": "Alex", "password": "123"},
      {"name": "Xavi", "password": "AlexAlabau"},
      {"name": "Cookiezi", "password": "Valorant"},
      {"name": "Antonio", "password": "BigBoss"},
      {"name": "Manolito", "password": "GollumGOTY"}
    ];
    
    
  };
}

