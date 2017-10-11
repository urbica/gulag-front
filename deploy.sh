#!/bin/bash
set -e

if [ -d /mnt/storage/urbica/gulag/gulagmap ]; then
    cd /mnt/storage/urbica/gulag/gulagmap
    git pull
else
    cd /mnt/storage/urbica/gulag
    git clone ssh://git@gitlab.urbica.co:2222/gulag/gulagmap.git
    cd gulagmap
fi

docker-compose pull
docker-compose up -d
