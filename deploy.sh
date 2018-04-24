#!/bin/bash
set -e

if [ -d /mnt/storage/urbica/gulag/front ]; then
    cd /mnt/storage/urbica/gulag/front
    git pull
else
    cd /mnt/storage/urbica
    mkdir -p /mnt/storage/urbica/gulag
    cd /mnt/storage/urbica/gulag
    ssh-keyscan -p 2222 gitlab.urbica.co >> ~/.ssh/known_hosts
    git clone -b dev ssh://git@gitlab.urbica.co:2222/gulag/front.git front
    cd front
fi

docker-compose pull
docker-compose up -d --force-recreate
