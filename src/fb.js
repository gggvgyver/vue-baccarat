import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
    apiKey: 'AIzaSyDizYaxFNF7VqoC5Xh8cWXUCFlfANBMk9U',
    authDomain: 'vue-baccarat.firebaseapp.com',
    databaseURL: 'https://vue-baccarat.firebaseio.com',
    projectId: 'vue-baccarat',
    storageBucket: 'vue-baccarat.appspot.com',
    messagingSenderId: '454292823512',
}
firebase.initializeApp(config)

const db = firebase.firestore()

db.settings({timestampsInSnapshots: true})

export default db
