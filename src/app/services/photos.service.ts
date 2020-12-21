import { Injectable } from '@angular/core';
import { RESTapiService } from './restapi.service';
import photo from '../models/photo';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class PhotosService {

  constructor(private API : RESTapiService) {  }

  getPhotos = () : Observable<Object> => this.API.getList('photos');

  
}
