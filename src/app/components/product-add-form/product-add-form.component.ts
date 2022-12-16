import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.scss']
})
export class ProductAddFormComponent implements OnInit {
  @Output() AddEvent = new EventEmitter<string>();
  ngOnInit(): void {    
  }
  onSubmit(AddForm: NgForm) {
    console.log(AddForm.value);
    this.AddEvent.emit('Votre produit a bien été ajouté !');
    AddForm.resetForm()
  }
}
