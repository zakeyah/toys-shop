var childage = prompt("How old is youer kid ?");

var infermotion;

if (childage >= 1 && childage < 2) {
    infermotion = "you should go to Baby section" }
else if (childage >= 3 && childage < 10) {
    infermotion = "you should go to children section" }
else if (childage >= 10) {
    infermotion = "you should go to teenagers section" };

    document.write(infermotion);

var brand = prompt("what brand do yo want lego or barbie ?") ;

while( brand !== "lego" && brand !== "barbie" ){
brand = prompt("what brand do yo want lego or barbie ?") ;
}

var brandkind = "" ;
if ( brand === "lego"){
    brandkind = "<img src ='images/lego.png'/>" ;
} else if ( brand === "barbie"){
    brandkind = "<img src ='images/barbie.jpg'/>" ;  
}

var notoys = prompt("how many toy you want ?") ; 

var result = "";
for ( var i=0 ; i<notoys ; i++ ){
result = result + brandkind ;
}


document.write(result);
confirm("DO YOU WANT A HELP FROM ON OF OUR WORKER ?");
alert("welcome to our shop");