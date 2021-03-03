import { Component } from '@angular/core';
import { Producto } from './models/productos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrComida: Producto[];
  arrBebida: Producto[];

  constructor(){
    this.arrComida= [
      new Producto( 'Hamburguesa','https://www.profesionalhoreca.com/wp-content/uploads/2020/02/profesionalhoreca-The-Fitzgerald-Burger-Company-1.jpg', 350),
      new Producto( 'Hamburguesa','https://www.profesionalhoreca.com/wp-content/uploads/2020/02/profesionalhoreca-The-Fitzgerald-Burger-Company-1.jpg', 350),
      new Producto( 'Hamburguesa','https://www.profesionalhoreca.com/wp-content/uploads/2020/02/profesionalhoreca-The-Fitzgerald-Burger-Company-1.jpg', 350),
      new Producto( 'Hamburguesa','https://www.profesionalhoreca.com/wp-content/uploads/2020/02/profesionalhoreca-The-Fitzgerald-Burger-Company-1.jpg', 350),
      new Producto( 'Hamburguesa','https://www.profesionalhoreca.com/wp-content/uploads/2020/02/profesionalhoreca-The-Fitzgerald-Burger-Company-1.jpg', 350),
      new Producto( 'Hamburguesa','https://www.profesionalhoreca.com/wp-content/uploads/2020/02/profesionalhoreca-The-Fitzgerald-Burger-Company-1.jpg', 350),
      new Producto( 'Hamburguesa','https://www.profesionalhoreca.com/wp-content/uploads/2020/02/profesionalhoreca-The-Fitzgerald-Burger-Company-1.jpg', 350),
      new Producto( 'Hamburguesa','https://www.profesionalhoreca.com/wp-content/uploads/2020/02/profesionalhoreca-The-Fitzgerald-Burger-Company-1.jpg', 350),
    ]
    
    this.arrBebida= [
      new Producto( 'Gaseosa','https://s03.s3c.es/imag/_v0/770x420/5/3/f/600x400_Latas-de-Coca-Cola-y-Pepsi.jpg', 350),
      new Producto( 'Hamburguesa','https://s03.s3c.es/imag/_v0/770x420/5/3/f/600x400_Latas-de-Coca-Cola-y-Pepsi.jpg', 350),
      new Producto( 'Hamburguesa','https://s03.s3c.es/imag/_v0/770x420/5/3/f/600x400_Latas-de-Coca-Cola-y-Pepsi.jpg', 350),
      new Producto( 'Hamburguesa','https://s03.s3c.es/imag/_v0/770x420/5/3/f/600x400_Latas-de-Coca-Cola-y-Pepsi.jpg', 350),
      new Producto( 'Hamburguesa','https://s03.s3c.es/imag/_v0/770x420/5/3/f/600x400_Latas-de-Coca-Cola-y-Pepsi.jpg', 350),

    ]
    
  }
}
