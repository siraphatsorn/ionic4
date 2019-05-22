import { Component, OnInit } from '@angular/core';
import {CatActivityService} from '../services/cat-activity.service';
//import {Subscription} from 'rxjs/Subscription';
import { Subscription } from 'rxjs';
import {Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  subscription : Subscription;
  dataList : any = [];
  dataRow = 0;
  IDproduct : string;

  constructor(private catActSV : CatActivityService ,private route:Router,private router: ActivatedRoute) {
    this.showData(); 
  }
  showData(){
    let IDproduct = this.IDproduct = (this.router.snapshot.paramMap.get('IDproduct'));
    this.subscription=this.catActSV.get(IDproduct)
    .subscribe(
      data =>{
        this.dataList = data['rs'];
      }
    )
  }

  edit(form) {
    let IDproduct = this.IDproduct = (this.router.snapshot.paramMap.get('IDproduct'));
    let nameproduct	 = form.nameproduct	;
    let price = form.price;
    let category = form.category;
    
    this.catActSV.edit(IDproduct , nameproduct, price,category).subscribe(
      
       );
       this.route.navigateByUrl("home");
       console.log(IDproduct  + nameproduct + price+category);
       
  }

  ngOnInit() {
  }

}