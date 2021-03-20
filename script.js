var config = {
  apiKey: "AIzaSyB_6jCXJa6PJi37FiHaXaBRX3ZAEAD2FmY",
  authDomain: "catcon-5b2a8.firebaseapp.com",
  databaseURL: "https://catcon-5b2a8.firebaseio.com",
};

// requires access to be set to public, or have user logged in
// to set firebase database to public use these permissions:
// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }

var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()

var vm = new Vue({
  el: '#app',
  data: {
    tempItem: '',
  },
  firebase: {
    items: db.ref('db/items'),
  },
  methods: {
    addItem: function (value) {
      var ts = Date.now() // generate timestamp
      // send value and timestamp to firebase
      this.$firebaseRefs.items.push({value: value, ts: ts})
    },
    removeItem: function (item) {
      this.$firebaseRefs.items.child(item['.key']).remove()
    }
  }
})