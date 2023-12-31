import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

//components
import { PokerHeaderComponent } from './poker-header/poker-header.component';
import { PokerSearchComponent } from './poker-search/poker-search.component';
import { PokerListComponent } from './poker-list/poker-list.component';



@NgModule({
  declarations: [
    PokerHeaderComponent,
    PokerSearchComponent,
    PokerListComponent
  ],

  exports:[
    PokerHeaderComponent,
    PokerSearchComponent,
    PokerListComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
