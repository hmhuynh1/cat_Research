#!/bin/sh
# set -e

# echo "Starting SSH ..."
# service sshd status
# Start OpenRC and the SSH service
rc-status
rc-service sshd start

# python /code/manage.py runserver 0.0.0.0:8000
npm start