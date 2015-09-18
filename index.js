
module.exports= function(){

var data;	
var bul;
var terminal;



return{
	     grow: function(simName, customObject){ 
        terminal= customObject;
        printProgress(simName);},
harvestData: function(){ return data;}
}

function checkColors(name){
  var colors=Object.getOwnPropertyNames(terminal.colors);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<colors.length; i++){//iterate over prop names

    if(colors[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    terminal.colors[name]=terminal.colors.default;
    } 
}


function checkProperties(name){
var properties= Object.getOwnPropertyNames(terminal);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<properties.length; i++){//iterate over prop names
    if(properties[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    throw new Error('Not defined '+name);
    }  
}


function printProgress(simName){
  var name= simName.slice(2); //delete simbol of the name 
checkProperties(name);
checkColors("error");
checkColors("warning");
checkColors("success");
process.stdout.write("   ");    
 
terminal.errors.forEach(function(element){
   if(element.code[0]=== "E"){    
      process.stdout.write(terminal.colors.error(terminal.symbolProgress));    
    }
    else if(element.code[0]=== "W"){
      process.stdout.write(terminal.colors.warning(terminal.symbolProgress));    
   }
   else{
      process.stdout.write(terminal.colors.success(terminal.symbolProgress));    
   }
  
  });
process.stdout.write("\n");    
  console.log();    

}





}