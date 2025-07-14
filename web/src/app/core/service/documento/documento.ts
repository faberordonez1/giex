import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Documento {

  http = inject(HttpClient);
 
  enviar(documento: File) {
    const formData = new FormData();
    formData.append('documento', documento);
    console.log(formData);
   
    return this.http.post('http://localhost:8080/api/documento', formData);
  }
}
