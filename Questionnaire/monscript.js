  
 

    function corriger(){
var choix1=document.getElementsByName("Q1");
var choix2=document.getElementsByName("Q2");
var choix3=document.getElementsByName("Q3");
var choix4=document.getElementsByName("Q4");
var choix5=document.getElementsByName("Q5");
var resultats="";
  
 if(choix1[2].checked && choix1[3].checked ){
    
    resultats += "-la reponce de la question 1 est correct.<br>";
 }
  else{
  resultats += "-la reponce de la question 1 est incorrect.<br>" ;   


  } 

if(choix2[0].checked && choix2[1].checked && choix2[3].checked ){
    
    resultats += "-la reponce de la question 2 est correct.<br>";
 }
  else{
resultats +="-la reponce de la question 2 est incorrect.<br>" ;}   
if(choix3[0].checked && choix3[1].checked && choix3[2].checked ){
    
    resultats +="-la reponce de la question 3 est correct.<br>";
 }
  else{
resultats += "-la reponce de la question 3 est incorrect.<br>"}    

if(choix4[1].checked ){
    
    resultats += "-la reponce de la question 4 est correct.<br>";
 }
  else{
resultats +="-la reponce de la question 4 est incorrect.<br>"; }   

if(choix5[0].checked ){
    
    resultats += "-la reponce de la question 5 est correct.<br>";
 }
  else{
resultats +="-la reponce de la question 5 est incorrect.<br>" ;}   
document.getElementById("resultats").innerHTML = resultats;
ouvrir();






  }

function ouvrir() {
    document.getElementById("fenetre").style.display = "block";
}

function fermer() {
    document.getElementById("fenetre").style.display = "none";
}




   
















    
 

  