#!/usr/bin/python3

from pymongo import MongoClient
import os, sys, getopt
import timeit
import json
import random

datadir = './data'

try:
    opts, args = getopt.getopt(sys.argv[1:], "n:")
except getopt.GetoptError:
    print('readFromMongo.py -n <image_amount>')
    sys.exit(2)

for opt, arg in opts:
    if opt == '-n':
        image_amount = int(arg)

xy_coord = random.randint(0, 274999)

# set up connection
client = MongoClient("mongodb://172.17.0.2:27017")
#print(client.server_info())
#exit()
db = client['lab1info']
coll = db['datastore']

print('reading {}'.format(image_amount))

images = []

start_time = timeit.default_timer()
# code you want to evaluate
for image_index in range(0, image_amount):

    result = coll.find_one(image_index)
    images.append(result)

elapsed = timeit.default_timer() - start_time

print('read time elapsed {}'.format(elapsed))

#####################################################################################

trend = []

start_time = timeit.default_timer()
# code you want to evaluate
for image_index in range(0, image_amount):

    result = coll.find_one(image_index)
    trend.append(result[xy_coord])

elapsed = timeit.default_timer() - start_time

print('read time elapsed {}'.format(elapsed))