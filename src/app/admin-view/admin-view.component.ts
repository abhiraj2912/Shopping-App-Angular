import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
  name=""

  productData:any={}
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
