
function printToOutputBox(selectobj){
 var e_proglangs = document.getElementById("pro-lang");
 var e_outputbox = document.getElementById("outputbox");
 e_outputbox.innerHTML = "Du har selektert programmeringsspråket " + e_proglangs.options[selectobj.selectedIndex].text;
}


