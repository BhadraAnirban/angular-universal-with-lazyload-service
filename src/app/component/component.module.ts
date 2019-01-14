import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsreviewComponent } from './smsreview/smsreview.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SmsreviewComponent],
  imports: [
    CommonModule,
    HttpClientModule,   
  ],
  
})
export class ComponentModule { }
