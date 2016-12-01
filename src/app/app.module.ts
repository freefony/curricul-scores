import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { curricul } from './app.component';
import { LandingPage } from '../pages/landing/landing'
import { Signup } from '../pages/signup/signup'
import { LoginPage } from '../pages/login/login'
import { DBService } from '../common/db/db.service'
 
@NgModule({
  declarations: [
    curricul,
    LandingPage,
    LoginPage,
    Signup
  ],
  imports: [
    IonicModule.forRoot(curricul)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    curricul,
    LandingPage,
    LoginPage,
    Signup
  ],
  providers: [DBService]
})
export class AppModule {}
