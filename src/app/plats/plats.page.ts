import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PlatsService } from '../Services/plats.service';

@Component({
  selector: 'app-plats',
  templateUrl: 'plats.page.html',
  styleUrls: ['plats.page.scss']
})
export class Plats implements OnInit {
  plats=[];
  constructor(private router:Router,private services:PlatsService) {}

  ngOnInit(){
    console.log(this.services.getPlatofRestaurant(1).then((data:any)=>{
      this.plats = data.plats;
      // console.log(this.plats);
    }));
  }

  update(id:number){
    this.router.navigate(['tabs/plats/modifier/'+id])
  }
  
}
