import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

    API_BASE: string = 'https://api-fac.herokuapp.com/facturas';
    API_FACTURA: string = 'https://reporte-fac.herokuapp.com/app/index.php';

  constructor(
    private http: Http
  ) { }

  getFacturas():Observable<Factura[]>{
  	return this.http.get(`${this.API_BASE}`)
  		.pipe(map(res => res.json()));
  }

  saveFactura(factura){
    
    delete factura._id;

  	return this.http.post(`${this.API_BASE}/add-factura`,{factura})
  		.pipe(map(res => res.json()));
  }

  deleteFactura(id){
  	return this.http.get(`${this.API_BASE}/delete/${id}`)
  		.pipe(map(res => res.json()));
  }

  updateFactura(f){
    var factura = Object.assign({},f);
    var id = factura._id;

    delete factura._id;

  	return this.http.post(`${this.API_BASE}/update/${id}`,{factura})
  		.pipe(map(res => res.json()));
  }

  imprimirFactura(datos) {

    const formData = new FormData();
    formData.append("datos", JSON.stringify(datos));

    return this.http.post(`${this.API_FACTURA}`, formData, {
      responseType: ResponseContentType.Blob
    }).pipe(map(res =>{
      return {
        filename: 'Factura.pdf',
        data: res.blob()
      };
    }));
  }
}
