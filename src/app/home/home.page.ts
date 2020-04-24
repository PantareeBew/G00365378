import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //variables
  name: string;
  phoneNo: number;
  email: string;
  food: string;

  //constructor
  constructor(private storage: Storage) { }

  //onSave method
  onSave() {
    console.log(this.name);
    console.log(this.phoneNo);
    console.log(this.email);
    console.log(this.food);
    this.storage.set("name", this.name);
    this.storage.set("phoneNo", this.phoneNo);
    this.storage.set("email", this.email);
    this.storage.set("food", this.food);
  }

  ngOnInit() {
  }

}
