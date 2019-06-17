import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
    apiKey: "AIzaSyDBVjZu0W5KMzayb8v_vn75B8k0XbIiIM0",
    authDomain: "tpemployee-126f6.firebaseapp.com",
    databaseURL: "https://tpemployee-126f6.firebaseio.com",
    projectId: "tpemployee-126f6",
    storageBucket: "",
    messagingSenderId: "322903725716",
    appId: "1:322903725716:web:9662f36cc0a5de77"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  title = 'TpAngu';
}
