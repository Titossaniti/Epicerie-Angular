import { Injectable } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  produits:Produit[]=[
  {name:'cerise', img:'/assets/fruits/cerise.jpg', price: 5, stock:10},
  {name:'citron', img:'/assets/fruits/citron.jpg', price: 4, stock:4},
  {name:'fraise', img:'/assets/fruits/fraise.jpg', price: 3, stock:10},
  {name:'poire', img:'/assets/fruits/poire.jpg', price: 2, stock:0},
  {name:'abricot', img:'/assets/fruits/abricot.jpg', price: 2, stock:3},
  {name:'mangue', img:'/assets/fruits/mangue.jpg', price: 4, stock:9},
  {name:'orange', img:'/assets/fruits/orange.jpg', price: 3, stock:7},
  {name:'pasteque', img:'/assets/fruits/pasteque.jpg', price: 5, stock:1},
  {name:'pomme', img:'/assets/fruits/pomme.jpg', price: 1, stock:5},
  {name:'raisin', img:'/assets/fruits/raisin.jpg', price: 4, stock:8}];
  
  constructor() { }
  readProduits() {
    /* ici, on fera une demande à l'API */
    return this.produits;
  }
  readProduit(id:number){
    return this.produits[id];
  }
  deleteProduitService(i:number){
    this.produits.splice(i,1);
  }
}
