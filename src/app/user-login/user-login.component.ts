import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  

  constructor(private api:ApiService, private route: Router){}

  email=""
  password=""

  readValues=()=>{
    let data:any={"email":this.email,"password":this.password}
    console.log(data)

    this.api.fetchUser(data).subscribe(
      (response:any)=>{
        if (response.length==0) {
          alert("Invalid Credentials")
          
        } else {
          this.route.navigate(['/userview'])
          
        }
      }
    )
  }

}
