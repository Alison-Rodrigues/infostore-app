import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

  constructor(
    private productService: ProductService,
    private router: Router) {}



  ngOnInit(): void {


  }

  productName: any;
  specification: any;
  manufacturer: any;
  supplier: any;
  ncm: any;
  guarantee: any;
  comments: any;
  productType: any;
  costPrice: any;
  salePrice: any;

  save(): void {
    const product = {
      productName:this.productName,
      specification:this.specification,
      manufacturer:this.manufacturer,
      supplier:this.supplier,
      ncm:this.ncm,
      guarantee:this.guarantee,
      comments:this.comments,
      productType:this.productType,
      costPrice:this.costPrice,
      salePrice:this.salePrice
    };
    console.log(product);
    this.productService.createProduct(product)
    .subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
    this.router.navigate(['/']);

  }

}
