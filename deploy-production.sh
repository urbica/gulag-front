#!/bin/bash
set -e

REPO_URL=ssh://git@gitlab.urbica.co:2222/gulag/front.git
REPO_PATH=/home/docker/gulag/front

if [ -d $REPO_PATH ]; then
    cd $REPO_PATH
    git pull
else
    mkdir -p $REPO_PATH
    cd $REPO_PATH/../
    ssh-keyscan -p 2222 gitlab.urbica.co >> ~/.ssh/known_hosts
    git clone $REPO_URL
    cd $REPO_PATH
fi

docker-compose -f docker-compose.production.yml pull
docker-compose -f docker-compose.production.yml up -d
