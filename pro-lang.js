var element_unordered_list = document.getElementById
function pintToOutputBox (selectobj){
var e_pro-lang= document.getElementById("pro-lang");
var e_outputbox= document.getElementById("outputbox");
e_outputbox.innerHTML = " Du har valgt programmeringspråket " + e_pro-lang.options[selectobj.selectedIndex].text;
