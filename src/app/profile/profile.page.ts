import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  //variables
  firstname: string;
  phoneN: number;
  emails: string;
  foods: string;

  //constructor
  constructor(private storage: Storage) { }

  //show name,phone No, emails, food method
  ngOnInit() {
    this.storage.get("name").then(
      (data) => {
        this.firstname = data;
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );

    this.storage.get("phoneNo").then(
      (data) => {
        this.phoneN = data;
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );

    this.storage.get("email").then(
      (data) => {
        this.emails = data;
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );

    this.storage.get("food").then(
      (data) => {
        this.foods = data;
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );

  }
}
