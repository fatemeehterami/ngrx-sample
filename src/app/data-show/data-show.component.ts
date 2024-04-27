import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrl: './data-show.component.css'
})
export class DataShowComponent implements OnInit{
  constructor(private store:Store<{text:{text:string}}>,private router :Router){

  }
  fullname!:string;
  ngOnInit(): void {
    this.store.select('text').subscribe(data=>{
      this.fullname =data.text;
    })
  }
  back(){
    this.router.navigate(['form'])
  }
  
}
