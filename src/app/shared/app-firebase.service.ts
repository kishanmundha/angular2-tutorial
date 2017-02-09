import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireAuth, AuthProviders, AuthMethods } from 'angularfire2';

// firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyBlzqAlfsH2uCvyVlOnvEuMuCcGQk-HYt8',
  authDomain: 'myproject-1878f.firebaseapp.com',
  databaseURL: 'https://myproject-1878f.firebaseio.com',
  storageBucket: 'myproject-1878f.appspot.com',
  messagingSenderId: '460834376268'
};

@Injectable()
export class AppFirebaseService {

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) { }

  test() {
    this.db.list('root').subscribe(data => console.log(data));
    // this.auth.login({
    //   provider: AuthProviders.Anonymous,
    //   method: AuthMethods.Anonymous
    // })

    // window['test'] = this.auth.getAuth();

    // this.auth.subscribe(data => console.log(data));
  }
}
