import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAN5wH6hgG06wVRDTtSpRuPCwQ86vxJIfk',
      authDomain: 'ng-recipe-book-838b7.firebaseapp.com',
    };
    firebase.initializeApp(config);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
