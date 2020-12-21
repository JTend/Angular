import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { PhotosService } from '../../services/photos.service';
import photo from '../../models/photo';
import listLayout from '../../models/layout';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  Photos : photo[];
  Page : photo[];
  layout : listLayout;

  constructor(private session : SessionService, private photoService : PhotosService) {
    this.Photos = [];
    this.Page = [];
    this.layout = {
      currentPage : 0,
      totalPages : 0,
      pageSize : 24
    }
  }

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos() {
    this.photoService.getPhotos().toPromise().then(result => {
      this.Photos = <photo[]>result;
      this.layout.totalPages = Math.ceil(this.Photos.length / this.layout.pageSize)
      if (this.layout.totalPages) this.layout.currentPage = 0;
      this.showPhotos();
    }).catch( error => console.error(error) );
  }

  showPhotos() {
    if (this.layout.totalPages) {
      let begin = this.layout.currentPage * this.layout.pageSize;
      this.Page = this.Photos.slice(begin, begin + this.layout.pageSize)
    }
  }

  changePage(newPage : number) {
    if(newPage >= 0 && newPage < this.layout.totalPages) this.layout.currentPage = newPage;
    this.showPhotos();
  }
}
