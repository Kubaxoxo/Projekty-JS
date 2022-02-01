window.onload = start;
var cyfry = new Array(9);

cyfry[0] = "1";
cyfry[1] = "2";
cyfry[2] = "3";
cyfry[3] = "4";
cyfry[4] = "5";
cyfry[5] = "6";
cyfry[6] = "7";
cyfry[7] = "8";
cyfry[8] = "9";
cyfry[9] = "0";

function start()
{

	var tresc_diva ="";

	for (i=0; i<=9; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+cyfry[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}

	document.getElementById("klawiatura").innerHTML = tresc_diva;

  wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
if (miejsce > this.length - 1) return this.toString();
else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}
