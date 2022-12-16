import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit{
  id:number=this.activatedRoute.snapshot.params['numero'];
  produit:Produit = this._produit.readProduit(this.id);
  constructor(private activatedRoute: ActivatedRoute, 
    private _produit: ProduitsService,
    private router: Router){
      if(!this.produit){
        this.router.navigate(['produits'], {queryParams:{noproduct: true}});
      }
    }

  ngOnInit(): void {

  }
}
