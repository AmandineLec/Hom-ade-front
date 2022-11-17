import { Component, Input } from '@angular/core';
import { ModalService } from './_modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filRouge';

  constructor(private modalService : ModalService){}
  ngOnInit() {
  }

  openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  
  play(){
    document.getElementById("app-menu")!.style.display = "none";
    document.getElementById('params')!.style.display = "block";
    document.getElementById('menuJeu')!.style.display = "block";
  }

}
