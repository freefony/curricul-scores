import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { Signup } from '../signup/signup'

@Component({
  templateUrl: 'landing.html'
})
export class LandingPage {
  constructor(public navCtrl: NavController) {
    
  }
  
  gotoLogin() {
    this.navCtrl.push(LoginPage)
  }

  gotoSignup() {
    this.navCtrl.push(Signup)
  }
}
