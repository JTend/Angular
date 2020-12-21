import { Component, OnInit } from '@angular/core';
import user from 'src/app/models/user';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  User : user;

  constructor(private session : SessionService) {
    this.User = this.session.getUser();
  }

  ngOnInit(): void {
    
  }

}
