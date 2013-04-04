// Course Builder 1.0 JavaScript Export on 2013-03-14 13:32:52.558000
// begin

function gcb_regex(base, modifiers) {
    // NB: base should already have backslashes escaped
    return new RegExp(base, modifiers);
}


function gcb_import(){

  course = Array();
  course["units"] = units;
  course["assessments"] = assessments;
  return course;
}
// end