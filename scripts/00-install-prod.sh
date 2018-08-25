#!/usr/bin/env bash
set -e

# Build app and api containers
docker-compose -f docker/docker-compose.prod.yml build