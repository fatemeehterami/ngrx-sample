import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataShowComponent } from './data-show/data-show.component';
import { DataInputComponent } from './data-input/data-input.component';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: DataInputComponent },
  { path: 'showData', component: DataShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

}
