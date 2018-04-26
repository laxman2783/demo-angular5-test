import {Component,OnInit} from "@angular/core";
import { Router } from '@angular/router'
@Component ({
  selector:'login-root',
  templateUrl:'./login.component.html'
    
})
export class LoginComponent implements OnInit{
    constructor(private router: Router){


    }
    ngOnInit(){
alert("In NgOnit login");

    }

   btnClick= function () {
       alert("hello");
        this.router.navigate(['app']);
        return true;
};

}