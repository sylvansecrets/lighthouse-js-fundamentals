function ageCalculator(name, birth_year, current_year){
  age = current_year - birth_year
  sentence = age=>0 ? (name+" is "+age+" years old."):(name+" is yet unborn");
  return sentence;
}
//console.log(ageCalculator("Miranda", 1983, 2015));
//console.log(ageCalculator("Ferdinand", 1988, 2015));