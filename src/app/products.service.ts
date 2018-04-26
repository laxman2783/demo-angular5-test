import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IProduct } from './products';

@Injectable()

export class ProductService {
   private _producturl='https://jsonplaceholder.typicode.com/posts';
   constructor(private _http: Http){}
   
   getproducts(): Observable<IProduct[]> {
      return this._http.get(this._producturl)
      .map((response: Response) => <IProduct[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }



 deleteUserById(id: number): Observable<boolean> {
     console.log("id",id);
     var urlid='https://jsonplaceholder.typicode.com/posts'+'/'+id;
    alert("url id" + urlid);
     return this._http.delete('https://jsonplaceholder.typicode.com/posts/1').map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    //  console.log("res",res);
 }

//W    return this._http.delete(this._producturl + '/' + id)
   
}