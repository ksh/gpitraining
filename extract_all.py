# extract students and scores
from google.appengine.tools import appcfg

appcfg('download_data',config_file='export_student.py',kind='Student',url='http://gpionlinetraining.appspot.com/remote_api',filename='student.dat')
