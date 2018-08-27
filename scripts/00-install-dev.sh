#!/usr/bin/env bash
set -e

NODE_ENV=development yarn --cwd app install
# Build app and api containers
docker-compose -f docker/docker-compose.dev.yml build