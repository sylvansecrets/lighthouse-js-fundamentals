function whichSchool(age){
  if (age<13){
  //Those age 12 and under go to Elementary School
    return "Elementary School"
  }
  //Automatically excludes those under 13
    else if (age<=18){
    //Those age 13-18 go to Secondary School
    return "Secondary School"
  } else {
    //All others try out for Lighthouse Labs
    return "Lighthouse Labs"
  }
}