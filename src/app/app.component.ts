import { Component } from '@angular/core';

import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem(23,'Learn Angular'),
    new WishItem(345,'Learn Vuejs', true),
    new WishItem(122,'Drink a coffee'),
  ]
  title = 'wishlist';

  toggleItem(item:any) {
    item.isComplete = !item.isComplete
  }
}
