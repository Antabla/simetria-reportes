import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  API_BASE: string = 'https://api-fac.herokuapp.com/clientes';

  constructor(
    private http: Http
  ) { }

  getClientes(){
  	return this.http.get(`${this.API_BASE}`)
  		.pipe(map(res => res.json()));
  }

  saveCliente(cliente){
    delete cliente._id;
    return this.http.post(`${this.API_BASE}/add-clientes`,{cliente})
  		.pipe(map(res => res.json()));
  }

  deleteCliente(id){
  	return this.http.get(`${this.API_BASE}/delete/${id}`)
  		.pipe(map(res => res.json()));
  }

  updateCliente(c){
    var cliente = Object.assign({},c);
    var id = cliente._id;

    delete cliente._id;
    
  	return this.http.post(`${this.API_BASE}/update/${id}`,{cliente})
  		.pipe(map(res => res.json()));
  }


/*
  envio_datos(datos): Observable<Object> {
    const formData = new FormData();
    formData.append("datos", JSON.stringify(datos));

    return this.http.get(`${this.API_BASE}`)
  		.pipe(map(res => res.json()));

    return this.http.post(`${this.API_BASE}`, formData)
      .pipe(tap(
        (res: Object) => {
          if (res) {
            console.log('Datos generados correctamente');
          }
        },
        (error) => {
          console.log(error);
        }
      ));
  }*/
}
