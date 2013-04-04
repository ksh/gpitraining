from google.appengine.ext import db
from google.appengine.tools import bulkloader
from models import entities
from models import models

#class Student(db.Model):
#    """Student profile."""
#    enrolled_on = db.DateTimeProperty(auto_now_add=True, indexed=True)
#   user_id = db.StringProperty(indexed=False)
#    name = db.StringProperty(indexed=False)
#    is_enrolled = db.BooleanProperty(indexed=False)

    # Each of the following is a string representation of a JSON dict.
#    scores = db.TextProperty(indexed=False)

class StudentExporter(bulkloader.Exporter):
    def __init__(self):
        bulkloader.Exporter.__init__(self, 'Student',
                                     [('__key__',str, None),
				      ('enrolled_on', str, None),
                                      ('is_enrolled', str, None),
				      ('scores', str, None),
				      ('user_id', str, None),
                                     ])

exporters = [StudentExporter]

#class StudentAnswersEntityExporter(bulkloader.Exporter):
#    def __init__(self):
#        bulkloader.Exporter.__init__(self, 'StudentAnswersEntity',
#				[('__key__',str, None),
#         			 ('data', str,None),
#				 ])
#
#exporters = [StudentAnswersEntityExporter]



