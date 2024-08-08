function total(){
    var Name=document.getElementById('name').value
    var Price=document.getElementById('price').value
    let number = parseInt(Price, 10);       //Converted string into number

    var GST=document.getElementById('gst').value
    var Tot=(number*GST)/100
    var Total=number+Tot;

    var welcome=document.getElementsByTagName('h3')[0].innerHTML="Visit Again 🙏🙏"     //If You Want Emojis Just Press win+.

    document.getElementById('n').innerHTML=Name
    document.getElementById('p').innerHTML=Price
    document.getElementById('g').innerHTML=GST
    document.getElementById('t').innerHTML=Total


}