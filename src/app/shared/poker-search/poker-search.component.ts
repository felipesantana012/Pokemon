import { Component, EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'poker-search',
  templateUrl: './poker-search.component.html',
  styleUrls: ['./poker-search.component.scss']
})
export class PokerSearchComponent {

  @Output() public emmitSearch: EventEmitter <string> = new EventEmitter();

  public search(value : string){
    this.emmitSearch.emit(value);
  }

}
