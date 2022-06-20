import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApisharedService {
  headers =new HttpHeaders();
  url='https://api.airtable.com/v0/appzoLh5b0y8mV3WF/Angular-Test-Users';
  constructor(private httpclient:HttpClient) { }
  getMethod(){
    this.getHeader()
    return this.httpclient.get(this.url, {headers:this.headers})
  }
   getHeader(){
    this.headers = this.headers.set('Authorization','Bearer key3GnfHvdYoWedr5')
    return this.headers;
   }
  
   postData(body:any){
    return this.httpclient.post('http://localhost:3000/comments', body)
   }
   getData(){
    return this.httpclient.get('http://localhost:3000/comments')
   }
  
   getProduct(form:any,id:number) {
    return this.httpclient.put('http://localhost:3000/comments/' + id,form)
  }
}
