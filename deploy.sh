#!/bin/bash
set -e

if [ -d /mnt/storage/urbica/gulag/gulag-next ]; then
    cd /mnt/storage/urbica/gulag/gulag-next
    git pull
else
    cd /mnt/storage/urbica
    mkdir -p /mnt/storage/urbica/gulag
    cd /mnt/storage/urbica/gulag
    ssh-keyscan -p 2222 gitlab.urbica.co >> ~/.ssh/known_hosts
    git clone -b next-version ssh://git@gitlab.urbica.co:2222/gulag/gulagmap.git gulag-next
    cd gulag-next
fi

docker-compose pull
docker-compose up -d --force-recreate
# docker-compose exec gulag-next-api npm run db:migrate
