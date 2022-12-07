import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private api:ApiService){}

  name=""
  image=""
  category=""
  price=""
  description=""

  readValues=()=>{
    let data:any={"name":this.name,"image":this.image,"category":this.category,"description":this.description,"price":this.price}
    console.log(data)

    this.api.addProduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Product Added Successfully")
          this.name=""
          this.image=""
          this.category=""
          this.price=""
          this.description=""
        } else {
          alert("Something went wrong")
        }
      }
    )
  }
}
