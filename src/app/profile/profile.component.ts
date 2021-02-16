import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: Profile = {
    age: 0,
    name: 'Name'
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}
