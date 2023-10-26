import { Component } from '@angular/core';

import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Learn Vuejs',true),
    new WishItem('Drink a coffee'),
  ]
  title = 'wishlist';
}
