import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmsreviewService } from './smsreview.service';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-smsreview',
  templateUrl: './smsreview.component.html',
  styleUrls: ['./smsreview.component.scss'],
  providers: [SmsreviewService]
})
export class SmsreviewComponent implements OnInit {
  physician_id: number;
  patient_id: number;
  key: string;
  physician: any;
  patient: any;
  selectedValue = 0;
  reviewSubmitted = false;
  loaded = false;
  constructor(private activeRoute: ActivatedRoute, private smsReviewService: SmsreviewService) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(param => {
      this.physician_id = +param['physician_id'];
      this.patient_id = +param['patient_id'];
      this.key = param['key'];      
    }); 
    this.smsReviewService.getPhysician(this.physician_id)
    .pipe(
      map(res => res['data'])
    )
    .subscribe(response => {
      this.physician = response;
      this.physician.profile_photo = this.physician.links.filter(item => {
        return item.rel == 'profile_photo';
      })[0].href;
      // this.physician.qualificationsList = this.physician.qualifications.map(item => item.specialty).filter(item => item);
      this.physician.specializationsList = this.physician.specializations.map(item => item.subspecialty).filter(item => item);
      this.loaded = true;
    });    
  };

  selectedReview(value) {
    if(!this.reviewSubmitted)
    {
      this.selectedValue = value;
    }       
  }

  submitReview(){
    this.reviewSubmitted = true;
  }

}
