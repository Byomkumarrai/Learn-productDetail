import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiServices} from '../services/apiService';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  userId: any;
  userData: any;

  constructor(private route: ActivatedRoute, private FreeApi: ApiServices) {
  }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;
    console.log(this.userId);
    this.UserData(this.userId);
  }

  UserData(userId) {
    this.FreeApi.UserData(userId).subscribe((data: any) => {
      this.userData = data;
      console.log(this.userData);
    });
  }
}

