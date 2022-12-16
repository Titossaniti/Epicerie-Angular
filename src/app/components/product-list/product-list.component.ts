import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitsService } from 'src/app/services/produits.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(private _produit: ProduitsService,private activatedRoute: ActivatedRoute){  }
  produits:Produit[]= [];
  error:string='';
  ngOnInit(): void {
    this.produits = this._produit.produits;
    if(this.activatedRoute.snapshot.queryParams['noproduct']){
      this.error = 'Ce produit n\'existe pas'
    }   
  }
  deleteProduit(i:number){
    this._produit.deleteProduitService(i);
  }

}
