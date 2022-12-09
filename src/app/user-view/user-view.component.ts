import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {

  name=""

  productData:any=[]
  constructor(private api:ApiService){
    api.fetchProduct().subscribe(
      (response:any)=>{
        this.productData=response
      }
    )
  }

  readValues=()=>{
    let data={"name":this.name}
    console.log(data)

    this.api.searchProduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("Product Not Found")
          
        } else {
          this.productData = response
          
        }

      }
    )
    
  }

  

}
