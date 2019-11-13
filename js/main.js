// mi creo la funzione per inviare i messaggi
function invioMsg() {
  // mi salvo il messaggio inserito nell'input  con una variabile
  var messaggio = $(".text-msg").val();
  // console.log(messaggio);

  // mi salvo la classe che poi utilizzerò per stampare in pagina il messaggio
  // uso un elemento non visibile in pagina cosi da non dovere scrivere dell'HTML su js
  // e uso la funzione clone per clonare la classe e poi inserirla nulla posizione utile
  var elementClon = $(".template .contenitore-msgInv").clone();
  // console.log(elementMsg);

  // con la funzione find aggiungo un altro elemento HTML dopo quello clonato e inserisco il messaggio dell'input
  elementClon.find(".msg-utente").text(messaggio);

  // adesso stampo in pagina con la funzione append
  $(".msg-chat").append(elementClon);

  // per ultima cosa pulisco sempre l'input
  $(".text-msg").val("");


  // inserisco la funzione setTimeout per ricevere un ok come risposta dopo un secondo
  setTimeout(msgRicevuto,1000);
}

// creo la funzione per ricevere sempre lo stesso msg
function msgRicevuto() {
  // uso sempre la funzione clone per clonare la classe html che mi serve per poi stampare in pagina il msg
  var elementClonPc = $(".template .contenitore-msgPc").clone();

  // con find trovo l emento html dopo quello clonato e aggiungo il testo dell risposta
  elementClonPc.find(".msg-pc").text("ok");

  // adesso stampo in pagina il testo
  $(".msg-chat").append(elementClonPc);
}

$( document ).ready( function (){

  // al click del tasto invio sullo schermo invio un messaggio
  $("#invio").click(invioMsg);

  // al tasto enter invio il messaggio
  $(document).keyup(function(k){

  if (k.keyCode == "13") {
    invioMsg();
  }

  $('.msg-chat').scrollTop($('.msg-chat')[0].scrollHeight);


})



})
