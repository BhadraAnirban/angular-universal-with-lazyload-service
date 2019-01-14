import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { HeaderComponent } from '../header/header/header.component';
import { SmsreviewComponent } from '../component/smsreview/smsreview.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'head', component: HeaderComponent},
  {path: 'sms-reviews', component: SmsreviewComponent},
  {path: 'static', loadChildren: "../static/static.module#StaticModule"}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
