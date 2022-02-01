var a = 0;
var _znak = "";
function Calculator(operator)
{
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var znak = "";
  a= a.replace("," , ".");
  b= b.replace("," , ".");

  if (check_lettters(a))
  {
    var result = "Tak to nie";
  }
  else
  {
    switch(operator)
    {

      case '+':
        result = parseFloat(a) + parseFloat(b);
      break;

      case '-':
          var result = parseFloat(a) - parseFloat(b);
      break;

      case 'x':
          var result = parseFloat(a) * parseFloat(b);
      break;

      case '/':
        var result = 0
        if (b==0)
        {
          alert("Nie dzielimy przez zero")
          result = "";
        }
        else
        {
          result = parseFloat(a) / parseFloat(b);
        }
      break;

      case '%':
        var result = parseFloat(a) % parseFloat(b);
      break;

      // case 'Pierwiastek()':
      //   wynik = parseFloat(a) / parseFloat(b);
      //
      // break;

      case 'C':
          a = "";
          b = "";
      break;

      case '=':
      break;

      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      break;

    }
  }

  document.getElementById('result').value = '=' + result.toFixed(2);
  document.getElementById('a').value = a;
  document.getElementById('b').value = b;
}

function check_lettters(str)
{
  regExp = /[a-zA-z]/;
  if (regExp.test(str) === true)
  {
    return true;
  }
  else
  {
    return false;
  }

}
function WyswietlCyfre(cyfra)
{
  document.getElementById('pole').value += cyfra;
}

function Znaki(znak)
{
  a = document.getElementById('pole').value;
  _znak = znak;
  document.getElementById('pole').value = "";
  document.getElementById('dzialanie').innerHTML = a + znak;
}

function Usun(usun)
{
  var usun = document.getElementById('dzialanie').innerHTML;
  document.getElementById('dzialanie').innerHTML = "";
  document.getElementById('pole').value = "";
}

function Wynik()
{
  dzialanie = document.getElementById('dzialanie');
  b = document.getElementById('pole').value;
  if (_znak==='+')
  {
    wynik = parseFloat(a) + parseFloat(b);
  }

  if (_znak==='-')
  {
    wynik = parseFloat(a) - parseFloat(b);
  }

if (_znak==='x')
{
  wynik = parseFloat(a) * parseFloat(b);
}

if (_znak==='/')
{
  wynik = parseFloat(a) / parseFloat(b);
}

if (_znak==='%')
{
  wynik = parseFloat(a) % parseFloat(b);
}
document.getElementById('dzialanie').innerHTML = wynik;
}

function Pierwiastek()
{
  var a = document.getElementById('pole').value;
  var result = Math.sqrt(parseFloat(a));
  document.getElementById('dzialanie').innerHTML = result.toFixed(2);

}
