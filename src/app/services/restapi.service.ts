import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RESTapiService {

  URI : string;

  constructor(private http : HttpClient) { 
    this.URI = 'https://jsonplaceholder.typicode.com/'
  }

  getList = (sectionName : string) => 
  this.http.get(this.URI + sectionName);

  getOne = (sectionName : string, id : string | number) => 
  this.http.get(this.URI + sectionName + '/' + id);

  insert = (sectionName : string, row : any) => 
  this.http.post(this.URI + sectionName, row);

  delete = (sectionName : string, id : string | number) => 
  this.http.delete(this.URI + sectionName + '/' + id);

  update = (sectionName : string, id : string | number, row : any) => 
  this.http.put(this.URI + sectionName + '/' + id, row);
}
