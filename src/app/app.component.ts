import { Component,OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './products.service';
//import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ViewEncapsulation} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import * as myGlobals from './globals'; //<==== this one
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
 // template:'<div> Testing Template </div>',

  styleUrls: ['./app.component.css'],
  styles: [`
    .card {
      height: 70px;
      width: 100px;
    }
  `],
  providers: [ProductService],
 //  encapsulation: ViewEncapsulation.None
})
export class AppComponent  implements OnInit{
  title = 'app works';
   showSelected : boolean;
   istrue:boolean=false;
   columnDefs;
    rowData;
dangerousUrl:string;
trustedUrl:string;
    public helloString: string="hello " + myGlobals.version + " there";
iproducts: IProduct[];
   constructor(private _product: ProductService ,private sanitizer: DomSanitizer,private router: Router) {
      //this.dangerousUrl = 'javascript:alert("Hi there")';
 //this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
     this.columnDefs = [
            {headerName: "Make", field: "make", width: 300},
            {headerName: "Model", field: "model", width: 300},
            {headerName: "Price", field: "price", width: 300}
        ];
        this.rowData = [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ]
   }
  
   ngOnInit() {
   
      this._product.getproducts()
     .subscribe(iproducts => this.iproducts = iproducts);
     // console.log("iprodcts",  this.iproducts);
   }
   btnClick(){

     alert("Button Clicked");
      this.router.navigate(['/header']);
   }
  showdata(event){
    
 //   alert("hello");
var  appStatus = true;
    this.showSelected=true;
     this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
      
  }
   deleteUser(user: IProduct) {
    console.log('Delete User', user.id);
    
    if (user) {
      this._product.deleteUserById(user.id).subscribe(
        res => {
         this.showdata(event);
       //   this.router.navigate(['/user']);
          console.log('done');
        }
      );
    }

  }
}
