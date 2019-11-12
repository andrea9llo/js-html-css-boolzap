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


  elementClon.find(".msg-utente").text(messaggio);

  // adesso stampo in pagina con la funzione append
  $(".msg-chat").append(elementClon);

  // per ultima cosa pulisco sempre l'input
  $(".text-msg").val("");
}



$( document ).ready( function (){

  // al click del tasto invio sullo schermo invio un messaggio
  $("#invio").click(invioMsg);

  // al tasto enter invio il messaggio
  $(document).keyup(function(k){

  if (k.keyCode == "13") {
    invioMsg();
  }
})



})
