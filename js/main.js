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
  $(".msg-chat.active").append(elementClon);

  // per ultima cosa pulisco sempre l'input
  $(".text-msg").val("");


  // inserisco la funzione setTimeout per ricevere un ok come risposta dopo un secondo
  setTimeout(msgRicevuto,1000);

  // lo scroll avviene automatico
  $('.msg-chat').scrollTop($('.msg-chat')[0].scrollHeight);
}

// creo la funzione per ricevere sempre lo stesso msg
function msgRicevuto() {
  // uso sempre la funzione clone per clonare la classe html che mi serve per poi stampare in pagina il msg
  var elementClonPc = $(".template .contenitore-msgPc").clone();

  // con find trovo l emento html dopo quello clonato e aggiungo il testo dell risposta
  elementClonPc.find(".msg-pc").text("ok");

  // adesso stampo in pagina il testo
  $(".msg-chat.active").append(elementClonPc);

  $('.msg-chat').scrollTop($('.msg-chat')[0].scrollHeight);
}

$( document ).ready( function (){

  // al click del tasto invio sullo schermo invio un messaggio
  $("#invio").click(invioMsg);

  // al tasto enter invio il messaggio
  $(".text-msg").keyup(function(k){

    if (k.keyCode == "13") {
      invioMsg();
    }
  })


  // Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
  // vengono visualizzati solo i contatti il cui nome contiene le lettere inserite
  $(".ricerca").keyup(function(event){

    // mi salvo una variabile un cui salvo lo stato delle lettere inserite nell'input e converto le maiuscole in minuscole
    var lettereIns = $(this).val().toLowerCase();
    // console.log(lettereIns);

    // uno each per ciclare tutti i nomi nella lista
    $(".utenti-chat").each(function(){

      // creo una variabile per il nome che deve cercare
      var nomeTrovato = $(this).find(".nomilat").text().toLowerCase();
      // console.log(nomeTrovato);

      if (nomeTrovato.includes(lettereIns)) {
        $(this).show();
      } else {
         $(this).hide();
      }

    })

  })


  // sullo step 1 sarà da lasciare selezionato il contatto, la chat cambia, e cambiano anche le info dell’header della chat,
  // e se scrivo un msg, sarà inserito in quella chat e quella solamente;
  $(".utenti-chat").click(function(){
    $(".utenti-chat").css("background-color", "");
    $(this).css("background-color", "rgba(0, 0, 0, 0.3)");
    // mi salvo la variabile cosi mi ritorna il valore dell'attributo
    var clickUt = $(this).attr("data-ref");
    // rimuovo la classe active su tutte
    $(".msg-chat.active").removeClass("active");
    $(".utente-chat.active").removeClass("active");
    $(".img-chat>img.active").removeClass("active");

    // aggiungo la classe activ su tutte le classi che hanno l'attributo uguale a quello salvato
    $("img[data-ref ="+ clickUt +" ]").addClass("active");
    $(".utente-chat[data-ref ="+ clickUt +" ]").addClass("active");
    $(".msg-chat[data-ref ="+ clickUt +" ]").addClass("active");
  })


  $( ".msg-chat" ).on( "click", "i", function( event ){

    $(this).find(".dropdown").toggle();

  });
  $( ".msg-chat" ).on( "click", ".delete",function(){
      $(this).parents(".contenitore-msgInv").remove();

  })


})
