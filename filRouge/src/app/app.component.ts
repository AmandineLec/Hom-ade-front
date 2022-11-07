import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filRouge';
  play(){
    document.getElementById("app-menu")!.style.display = "none";
    document.createElement('button').style.backgroundImage = "../assets/img/Divers/IconParametre.png";
  }
}
