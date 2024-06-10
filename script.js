function Submit(){
    var n,v;
    n = document.getElementById('naam').value;
    v = document.getElementById('vargani').value;
    url = "https://wa.me/919918277637?text=" + 
'Name :- ' + n  + '%0a' +

'Vargani :- Rs ' + v + '%0a';

if( n == "" || v == ""){
  url ="https://rcgb.netlify.app/";
alert("Please !! Fill up all the details which is required us.");
}

  window.open( url , '_blank').focus();
}