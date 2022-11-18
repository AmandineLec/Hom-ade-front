import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host : {'class' : 'menu'}
})
export class MenuComponent implements OnInit {
  @Output() jouer = new EventEmitter<boolean>();
  constructor(private apiService : ApiService, private http: HttpClient, private router: Router){
  }
 
  authenticated = true;

  logout(){
    this.apiService.logout().subscribe(response => {
      console.log("déconnecté");
      this.router.navigateByUrl('/acount');
      this.apiService.authStatus = {logged : false};
    })
  }

  ngOnInit(): void {

  }

  play(value : boolean){
    this.jouer.emit(value);
    this.router.navigateByUrl('/jeu/c');
  }

  logged(): boolean{
    return false;
  }

}
