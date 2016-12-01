import { Injectable } from '@angular/core';
import { DBService } from '../db/db.service'

let users = [
  {
    _id: '1',
    'name': 'Femi Oni',
    'gender': 'Male',
    'email': 'freefony@gmail.com',
    'username': 'freefony'
  }
]

interface User {
  _id: string,
  name: string,
  email: string,
  username: string
}

@Injectable()
export class Auth {
  constructor (public db: DBService) {

  }

  login (user) {
    let registeredUser: User
    // this.db.getAll()
    registeredUser = users.find(function (u) {
      return u.email === user.email
    })

    return new Promise(
      (resolve, reject) => {
        if(registeredUser) {
          resolve(registeredUser)
        } else {
          reject()
        }
      }
    )
  }
}