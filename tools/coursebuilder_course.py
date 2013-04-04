# Course Builder 1.0 Python Export on 2013-03-14 13:32:52.558000
# begin
class Array(dict):
  pass

true = True
false = False

import re
def gcb_regex(base, modifiers):
    flags = 0
    if 'i' in modifiers:
        flags |= re.IGNORECASE
    if 'm' in modifiers:
        flags |= re.MULTILINE
    return re.compile(base, flags)


def gcb_import():

  course = Array();
  course["units"] = units;
  course["assessments"] = assessments;
  course["students"] = students;
  return course;
# end