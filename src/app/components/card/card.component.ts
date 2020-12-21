import { Component, Input, OnInit } from '@angular/core';
import photo from 'src/app/models/photo';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() Photo : photo;

  constructor() {  }

  ngOnInit(): void {  }

}
