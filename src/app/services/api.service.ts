import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(
    private httpClient: HttpClient
  ) { }

  // <T> represents a generic type of parameter. It means that the function can handle data of any type.
  // The specific type will be determind when the function is called.
  // for example you can call get<string>(url) ot indicate you expect a string response

  // ?=: implies that the options parameter can be unfdefined but Options cannot be undefined

  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }
}
