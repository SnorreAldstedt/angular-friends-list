import { Component, EventEmitter, Input, Output, ɵgetOutputDestroyRef } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() name: string = "";
  @Input() isFav: boolean= false;
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteFav: EventEmitter<string> = new EventEmitter<string>();

  addToFavs(p: string){
    this.addFav.emit(p);
  }

  deleteFromFavs(p: string){
    this.deleteFav.emit(p);
  }
}
