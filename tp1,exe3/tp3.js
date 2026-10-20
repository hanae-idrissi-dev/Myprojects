function trier(tab)
{
    for (var i = 0; i < tab.length; i++)
    {
        for (var j = i + 1; j < tab.length; j++)
        {
            if (tab[i] > tab[j])
            {
                var temp = tab[i];
                tab[i] = tab[j];
                tab[j] = temp;
            }
        }
    }
    return tab;
}
function afficherResultat()
{
    var nombres = new Array(5);
    nombres[0] = 25;
    nombres[1] = 8;
    nombres[2] = 14;
    nombres[3] = 3;
    nombres[4] = 10;
    var resultat = trier(nombres);
    document.getElementById("resultat").innerHTML = resultat;
}
