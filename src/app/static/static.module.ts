import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact/contact.component';

const staticRoutes: Routes = [
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(staticRoutes)
  ]
})
export class StaticModule { }
