import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

    API_BASE: string = 'https://api-fac.herokuapp.com/productos';

  constructor(
    private http: Http
  ) { }

  getProductos(){
  	return this.http.get(`${this.API_BASE}`)
  		.pipe(map(res => res.json()));
  }

  saveProducto(producto){
    delete producto._id;
  	return this.http.post(`${this.API_BASE}/add-producto`,{producto})
  		.pipe(map(res => res.json()));
  }

  deleteProducto(id){
  	return this.http.get(`${this.API_BASE}/delete/${id}`)
  		.pipe(map(res => res.json()));
  }

  updateProducto(p){

    var producto = Object.assign({},p);
    var id = producto._id;

    delete producto._id;

  	return this.http.post(`${this.API_BASE}/update/${id}`,{producto})
  		.pipe(map(res => res.json()));
  }
}
