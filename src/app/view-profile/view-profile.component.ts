import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {

   userID:any=""
   data:any=[]
  constructor(private api:ApiService){
    this.userID=localStorage.getItem("userInfo")
    let data:any={"id":this.userID}
    api.userProfile(data).subscribe(
      (response:any)=>{
        this.data=response
      }
    )

  }

}
