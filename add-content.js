var childage=prompt("How old is youer kid ?");
var brand=prompt("what kinde of brand are you looking for ?");

var infermotion; 

if(childage >=1 && childage <2){infermotion="you should go to Baby section"}
else if(childage >=3 && childage <10){infermotion="you should go to children section"}
else if(childage >=10){infermotion="you should go to teenagers section"};


document.write(infermotion);
confirm("DO YOU WANT A HELP FROM ON OF OUR WORKER ?");
alart("welcome to our shop");