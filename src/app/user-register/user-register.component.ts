import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  constructor(private api:ApiService){}

  name=""
  address=""
  phone=""
  email=""
  password=""
  cpassword=""

  readValues=()=>{
    if (this.password==this.cpassword) {
      let data:any={"name":this.name,"address":this.address,"phone":this.phone,"email":this.email,"password":this.password}
      this.api.addUser(data).subscribe(
        (response:any)=>{
          console.log(response)
          if (response.status=="success") {
            alert("User Registered Successfully")
            this.name=""
            this.address=""
            this.phone=""
            this.email=""
            this.password=""
            this.cpassword=""
          } else {
            alert("Something went wrong")
          }
        }
      )
      
    } else {
      alert("Password Not Matching")
      
    }
  }

}
