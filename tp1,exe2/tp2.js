function verifierEmail()
{
    let  email = document.getElementById("email").value;

    let Arobase = email.indexOf("@");
    let  Point = email.indexOf(".",Arobase);
    if (Arobase > 0 && Point > Arobase + 1 && Point < email.length - 1)
    { alert("Email valide");
    }else{
        alert("Email non valide");}
}