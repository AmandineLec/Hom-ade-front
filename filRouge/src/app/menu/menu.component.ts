import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host : {'class' : 'menu'}
})
export class MenuComponent implements OnInit {
  @Output() jouer = new EventEmitter<boolean>();
  constructor(private apiService: ApiService, private http: HttpClient, private router: Router){
  }
 
  authenticated = this.apiService.authStatus.logged;



  logout(){
    this.http.post('logout', {}).subscribe(() => {
      console.log('déconnecté')
    })
  }

  ngOnInit(): void {

  }

  play(value : boolean){
    this.jouer.emit(value);
    this.router.navigateByUrl('/jeu/c');
  }

}
