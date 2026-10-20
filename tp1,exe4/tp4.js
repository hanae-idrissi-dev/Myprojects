function calculerSomme()
{
    var h1 = parseInt(document.getElementById("h1").value) || 0;
    var m1 = parseInt(document.getElementById("m1").value) || 0;
    var s1 = parseInt(document.getElementById("s1").value) || 0;

    var h2 = parseInt(document.getElementById("h2").value) || 0;
    var m2 = parseInt(document.getElementById("m2").value) || 0;
    var s2 = parseInt(document.getElementById("s2").value) || 0;

    var h3 = parseInt(document.getElementById("h3").value) || 0;
    var m3 = parseInt(document.getElementById("m3").value) || 0;
    var s3 = parseInt(document.getElementById("s3").value) || 0;

    var total = (h1 + h2 + h3) * 3600 + (m1 + m2 + m3) * 60 + s1 + s2 + s3;

    var jours = parseInt(total / 86400);
    total = total % 86400;

    var heures = parseInt(total / 3600);
    total = total % 3600;

    var minutes = parseInt(total / 60);
    var secondes = total % 60;

    document.getElementById("jours").value = jours;
    document.getElementById("heures").value = heures;
    document.getElementById("minutes").value = minutes;
    document.getElementById("secondes").value = secondes;
}

function effacer()
{
    document.getElementById("h1").value = 0;
    document.getElementById("m1").value = 0;
    document.getElementById("s1").value = 0;

    document.getElementById("h2").value = 0;
    document.getElementById("m2").value = 0;
    document.getElementById("s2").value = 0;

    document.getElementById("h3").value = 0;
    document.getElementById("m3").value = 0;
    document.getElementById("s3").value = 0;

    document.getElementById("jours").value = 0;
    document.getElementById("heures").value = 0;
    document.getElementById("minutes").value = 0;
    document.getElementById("secondes").value = 0;
}