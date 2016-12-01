import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth } from '../../common/auth/auth';


@Component({
  templateUrl: 'login.html',
  providers: [Auth]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public auth: Auth) {

  }

  login(user) {
    return this.auth.login(user)
      .then(() => console.info('login successful'))
      .catch(err => console.error('login failed'))
  }
}
