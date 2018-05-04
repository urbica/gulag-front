#!/bin/bash
set -e

cd /home/docker/gulag
git pull
docker-compose -f docker-compose.production.yml pull
docker-compose -f docker-compose.production.yml up -d
