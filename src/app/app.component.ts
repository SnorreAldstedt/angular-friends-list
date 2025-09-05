import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];
  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFav(person: string): void {
    if (!this.favorites.includes(person)){
      this.favorites.push(person)
    }
  }
  deleteFav(person: string): void {
    if(this.favorites.includes(person)){
          this.favorites = this.favorites.filter(p => p!=person)
    }
  }
}
