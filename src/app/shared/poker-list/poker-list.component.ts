import { Component, OnInit } from '@angular/core';
import { PokerApiService } from 'src/app/service/poker-api.service';

@Component({
  selector: 'poker-list',
  templateUrl: './poker-list.component.html',
  styleUrls: ['./poker-list.component.scss']
})
export class PokerListComponent implements OnInit {

  public getAllPokemons: any;
  private setAllPokemons: any;  

  public apiError : boolean = false;

  constructor(
    private pokerApiService: PokerApiService
  ){}
  ngOnInit(): void {
    this.pokerApiService.apiListaAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());

    })
    this.getAllPokemons = filter;
  }


}
