import { write } from './../shared/store/save.actions';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrl: './data-input.component.css'
})
export class DataInputComponent {
  constructor(private store:Store<{text:{text:string}}>,private router:Router){}
  writeName(fisrtname: string,lastname:string) {
    let inputValue = fisrtname +" "+ lastname
    this.store.dispatch(write({ value: inputValue }));
    this.router.navigate(['showData'])
  }
}
