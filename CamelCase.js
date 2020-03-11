
function toCamelCase(str){
    var SplitString = str.toLowerCase().split(" ");
    console.log(SplitString);
  
    var newArray = [];
    for(var i =0; i < SplitString.length; i++){
  
      var word = SplitString[i].charAt(0).toUpperCase() + SplitString[i].substring(1);
      newArray.push(word);
  
    }
  
      console.log(newArray);
  
      return newArray.join(" ");
  }
  console.log(toCamelCase("hello my name is taj and this is a came case function"));
  