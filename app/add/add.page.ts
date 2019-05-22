import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CatActivityService} from '../services/cat-activity.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private catActSV : CatActivityService ,private route:Router) { }
 
  ngOnInit() {
  }
  insert(form) {
    let IDproduct = form.IDproduct;
    let nameproduct = form.nameproduct;
    let price = form.price;
    let category = form.category;
   
   
    
    this.catActSV.insert(IDproduct, nameproduct,price,category).subscribe(
      
       );
       this.route.navigateByUrl("home");
       
  }

}
