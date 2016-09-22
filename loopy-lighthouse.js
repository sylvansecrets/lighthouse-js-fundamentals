var i = 100;
while (i<201){
  var d3 = (i%3===0);
  var d4 = (i%4===0);
  if (!(d3||d4)){
    console.log(i);
  } else if (d3&&(!d4)){
    console.log("Loopy");
  } else if ((!d3)&&d4){
    console.log("Lighthouse");
  } else {
    console.log("LoopyLighthouse");
  }
  i++;
}