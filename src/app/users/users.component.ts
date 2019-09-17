import { Component, OnInit } from '@angular/core';
import {ApiServices} from '../services/apiService';

@Component({
  selector: 'app-userlist',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   data: any;
  constructor(private FreeApi: ApiServices) { }

  ngOnInit() {
    this.FreeApi.getUserData().subscribe((data: any) => {
      this.data = data;
      console.log(data);
  });
}
}
