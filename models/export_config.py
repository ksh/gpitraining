from google.appengine.ext import db
from google.appengine.tools import bulkloader
import models

class StudentExporter(bulkloader.Exporter):
    def __init__(self):
        bulkloader.Exporter.__init__(self, 'Student',
				     [ ('email', str, None),
				      ('scores', str, None)
                                     ])
exporters = [StudentExporter]

