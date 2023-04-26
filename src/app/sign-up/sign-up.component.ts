import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router: Router){}
  myLogin(pageName : string):void{
    this.router.navigate([`${pageName}`])
    }

}
