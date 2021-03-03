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
  }
}
