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
    this.apiService.authenticate(undefined, undefined);
  }
 
  logout(){
    this.http.post('logout', {}).subscribe(() => {
      this.apiService.authenticated = false;
      this.router.navigateByUrl('/login');
    })
  }

  authenticated() { return this.apiService.authenticated; }

  ngOnInit(): void {
  }

  play(value : boolean){
    this.jouer.emit(value);
  }

}
