import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  colorTS:string='red'
  valid:boolean=false;
  valid2:boolean=true;
  animaux:string[]=['Chien','Chat','Tigre','Loup'];
  animauxObjet:Animal []=[
    {name : 'chien', quantity :10},
    {name : 'chat', quantity :14},
    {name : 'tigre', quantity :30},
    {name : 'loup', quantity :70}
  ];
}
