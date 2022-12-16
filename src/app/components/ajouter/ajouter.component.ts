import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent {
  AddReceived: string;
 onUpdate(info:string) {
 this.AddReceived = info;
 }
}
