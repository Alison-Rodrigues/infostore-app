import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  products: any;


  constructor(private productsService: ProductService) {}


  ngOnInit(): void {
    this.listProducts()
  }

  listProducts(): void {
    this.productsService.listProducts()
    .subscribe({
      next: data => this.products = data,
      error: (error) => console.log(error)
    })
  }



}
