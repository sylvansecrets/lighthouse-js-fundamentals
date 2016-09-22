function loopyLighthouse(range, multiples, words){
  var i = range[0];
  var w0 = words[0];
  var w1 = words[1];
while (i < range[1] + 1){
  var d0 = (i % multiples[0] === 0);
  var d1 = (i % multiples[1] === 0);
  if (!(d0 || d1)){
    console.log(i);
  } else if (d0 && (!d1)){
    console.log(w0);
  } else if ((!d0) && d1){
    console.log(w1);
  } else {
    console.log(w0 + w1);
  }
  i++;
}
}

//loopyLighthouse([3,50],[5,2],["five","two"])