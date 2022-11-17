import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host : {'class' : 'menu'}
})
export class MenuComponent implements OnInit {
  @Output() jouer = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  play(value : boolean){
    this.jouer.emit(value);
  }

}
