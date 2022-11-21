import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss'],
  host : {'id': 'paramsBody'}
})
export class ParametresComponent implements OnInit {
  imgPerso: string = "../../assets/img/Divers/f2.png";
  @Output() display = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  compte(){
    this.router.navigateByUrl('/account');
    this.displayMenus(true);
  }

  accueil(){
    this.router.navigateByUrl('/');
    this.displayMenus(true);
  }

  displayMenus(value: boolean){
    this.display.emit(value);
  }

}
