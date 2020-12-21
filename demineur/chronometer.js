var chronoInterface = document.getElementsByClassName("chrono");
var t;
var ms=0,s=0,mn=0,h=0;
/*La fonction "startChrono" démarre un appel répétitive de la fonction update_chrono par une cadence de 100 milliseconde en utilisant setInterval et désactive le bouton "start" */

function startChrono(){
    t =setInterval(update_chrono,100);

}
/*La fonction update_chrono incrémente le nombre de millisecondes par 1 <==> 1*cadence = 100 */
function update_chrono(){
    ms+=1;
    /*si ms=10 <==> ms*cadence = 1000ms <==> 1s alors on incrémente le nombre de secondes*/
    if(ms==10){
        ms=1;
        s+=1;
    }
    /*on teste si s=60 pour incrémenter le nombre de minute*/
    if(s==60){
        s=0;
        mn+=1;
    }
    if(mn==60){
        mn=0;
        h+=1;
    }
    /*afficher les nouvelle valeurs*/
    chronoInterface[0].innerHTML=h+" h";
    chronoInterface[1].innerHTML=mn+" min";
    chronoInterface[2].innerHTML=s+" s";
    chronoInterface[3].innerHTML=ms+" ms";

}

/*on arrête le "timer" par clearInterval ,on réactive le bouton start */
function stop(){
    clearInterval(t);

}
/*dans cette fonction on arrête le "timer" ,on réactive le bouton "start" et on initialise les variables à zéro */
function reset(){
    clearInterval(t);
    ms=0,s=0,mn=0,h=0;
    /*on accède aux différents span par leurs indice*/
    chronoInterface[0].innerHTML=h+" h";
    chronoInterface[1].innerHTML=mn+" min";
    chronoInterface[2].innerHTML=s+" s";
    chronoInterface[3].innerHTML=ms+" ms";
}
