import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth } from '../../common/auth/auth';
import { DBService } from '../../common/db/db.service'

@Component({
  templateUrl: 'signup.html',
  providers: [DBService, Auth]
})
export class Signup {

  constructor(private navCtrl: NavController, public auth: Auth, public db: DBService) {
  }

  signup(user) {
    return this.auth.login(user)
      .then((doc) => this.db.save(doc))
      .catch(err => console.error('login failed' + err))
  }
}
