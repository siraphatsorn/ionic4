import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  //อิงมาจากrootหน้าแรก
})
export class CatActivityService {
  apiUrl : string ="http://localhost/si/process/ss.php"; //Url ที่จะคอลไป

  constructor(public http: HttpClient) {  //ถูกทำงานก่อนอันดับแรกเสมอ
   

   } 

   
   getCatAtivity(){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'select'
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }

  get(IDproduct : any){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'selectone',
      'IDproduct' : IDproduct
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }
  
  insert( IDproduct: string, nameproduct: any, price: any, category: any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'insert',
      'IDproduct': IDproduct,
      'nameproduct': nameproduct,
      'price': price,
      'category': category,
      
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }

  del( IDproduct : any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'delete',
      'IDproduct' : IDproduct
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
  
  edit( IDproduct: string, nameproduct: string, price: any, category: string	){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'edit',
      'IDproduct': IDproduct,
      'nameproduct': nameproduct,
      'price': price,
      'category': category,
     
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
}
