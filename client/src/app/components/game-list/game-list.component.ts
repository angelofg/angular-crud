import { Component, OnInit, HostBinding } from '@angular/core';

import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  games: any = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
   this.getGames();
  }

  getGames(){
    this.gameService.getGames().subscribe(
      //res => console.log(res),
      res => {
        this.games = res;
      },
      err => console.log(err)
    );
  }

  deleteGame(id: string){
    //console.log(id);
    this.gameService.deleteGame(id).subscribe(
      res => {
        console.log(res);
        this.getGames();
      },
      err => console.log(err)
    )
  }

  /*editGame(id: string){
    console.log(id);
  }*/

}
