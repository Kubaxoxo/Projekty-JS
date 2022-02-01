
function hist()
{
  document.getElementById("historia").style.display= "block";
  document.getElementById("nowezad").style.display= "none";
}

function nowezad()
{
  document.getElementById("nowezad").style.display= "block";
  document.getElementById("historia").style.display= "none";
}

function zapisz()
{
  var zadanie= document.getElementById("text").value;
  document.getElementById("text").value= ""
  document.getElementById("lista").innerHTML += '<label class="container"><input type="checkbox">➔'+zadanie+'<span class="checkmark"></span></label>';
}

function usun()
{
  document.getElementById("lista").innerHTML = ""
}
