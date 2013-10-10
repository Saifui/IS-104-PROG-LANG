
function printToOutputBox(selectobj){
 var e_proglangs = document.getElementById("pro-lang");
 var e_outputbox = document.getElementById("outputbox");
 e_outputbox.innerHTML = "Du har selektert programmeringsspr&aring;ket " + e_proglangs.options[selectobj.selectedIndex].text;
}



function myFunction()
{
alert("Siden er under konstruksjon");
}