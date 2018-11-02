import { Body } from './body.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BodyService {
  
  bodies: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.bodies = database.list('body');
  }

  getBody() {
    return this.bodies;
  }
}