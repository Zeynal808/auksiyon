var btn = document.querySelector('button')
var ad = document.querySelector('#ad')
var qiymet = document.querySelector('#qiymet')
var price = document.querySelector('#price')
var isim = document.querySelector('#name')
const firebaseConfig = {
  apiKey: "AIzaSyC9QSvQKsPT1zY_uzU-wSLAymcX3hQtphg",
  authDomain: "faiq-dbc47.firebaseapp.com",
  databaseURL: "https://faiq-dbc47-default-rtdb.firebaseio.com",
  projectId: "faiq-dbc47",
  storageBucket: "faiq-dbc47.appspot.com",
  messagingSenderId: "422000376037",
  appId: "1:422000376037:web:2ada0a64450ecad47a3c0c"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database();
btn.onclick=function(){
  db.ref('auksiyon/').set({
      ad:ad.value,
      qiymet:qiymet.value

   
})
}
db.ref('auksiyon/').on('value',function(snapshot){
  var x=snapshot.val()
  price.innerText=x.qiymet;
  isim.innerText=x.ad

})





