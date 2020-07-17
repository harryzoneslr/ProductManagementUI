import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Routes, RouterModule, RouterOutlet } from '@angular/router'; // CLI imports router

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title;

  constructor(
    private route: ActivatedRoute) {
    this.title = 'Product List';
  }

  ngOnInit() {
  }

}
