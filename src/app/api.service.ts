import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchProduct=()=>{
    return this.http.get("http://localhost:8080/viewproduct")
  }

  addProduct=(productData:any)=>{
    return this.http.post("http://localhost:8080/addproduct",productData)
  }


  fetchUser=(loginData:any)=>{
    return this.http.post("http://localhost:8080/login",loginData)
  }

  addUser=(userData:any)=>{
    return this.http.post("http://localhost:8080/useradd",userData)
  }

  searchProduct=(dataToSearch:any)=>{
    return this.http.post("http://localhost:8080/search",dataToSearch)
  }


}
