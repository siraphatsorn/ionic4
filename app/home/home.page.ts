import { Component } from '@angular/core';
import {CatActivityService} from '../services/cat-activity.service';
//import {Subscription} from 'rxjs/Subscription';
import { Subscription } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
import { insertView } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subscription : Subscription;
  dataList : any=[];
  datarow = 0;
constructor(private catActSV : CatActivityService , private route:Router){  //เห็นได้แค่เฉพาะคลาสนี้
this.showData(); //นำข้อมูลมาโชว์

}
showData(){
  this.subscription = this.catActSV.getCatAtivity()
  .subscribe(data => 
    {
      //console.log("data:"+data['rs'].length);
      this.dataList = data['rs'];
    }
    );
    
}
adddata(){
  this.route.navigateByUrl("add");
  
}

deletedata(IDproduct){
  this.catActSV.del(IDproduct).subscribe();
  console.log(IDproduct);
}

editdata(IDproduct){
  this.route.navigate(['/edit',{IDproduct : IDproduct}]);
  console.log(IDproduct);
}

}



