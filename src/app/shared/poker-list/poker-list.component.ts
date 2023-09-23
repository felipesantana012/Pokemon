import { Component, OnInit , HostListener } from '@angular/core';
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


  showButton: boolean = false; // Inicialmente, o botão está oculto

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 300) {
      this.showButton = true; // Mostrar o botão quando o usuário rolar abaixo de 200 pixels
    } else {
      this.showButton = false; // Ocultar o botão quando o usuário estiver no topo
    }
  }


}
