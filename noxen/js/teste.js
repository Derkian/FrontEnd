fetch("https://internetpf2.itau.com.br/router-app/router", 
    {
        "credentials": "include",
        "headers":{
             "accept":"application/json, text/javascript, */*; q=0.01",
             "accept-language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
             "ajaxrequest":"true",
             "op":"iwISpl6lnL8jz9GZvC3W06+nYUBssa6sUo39OPQgTgY=;",
             "scrolltotop":"false",
             "sec-fetch-mode":"cors",
             "sec-fetch-site":"same-origin",
             "segmento":"PERSONNALITE",
             "x-auth-token":"BAMbWPFUi+EjwduLL6kghLxIXkmFxSzHtTXq3TGo6tXpHQpe8VKLy6IfjBbA2rqA",
             "x-client-id":"VX1IwFmesaXPfGIGT6F2sA==",
             "x-flow-id":"38ff464b-29a4-485a-93cd-6f0861d1a444",
             "x-requested-with":"XMLHttpRequest"
        },
        "referrer":"https://internetpf2.itau.com.br/router-app/router",
        "referrerPolicy":"no-referrer-when-downgrade",
        "body":null,
        "method":"POST",
        "mode":"cors"
    }).then(function(response) {
  var contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(json) {
      console.log(json);
    });
  } else {
    console.log("Oops, we haven't got JSON!");
  }
});