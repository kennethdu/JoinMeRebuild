import { FirebaseListObservable } from 'angularfire2/database';
import { BodyService } from './../body.service';
import { Body } from './../body.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [BodyService]
})
export class BodyComponent implements OnInit {

  constructor(private bodyService: BodyService) { }

  bodies: FirebaseListObservable<any[]>

  ngOnInit() {
    this.bodies = this.bodyService.getBody();
  }

}
