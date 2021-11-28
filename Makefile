.PHONY: help install start test build

##
## -----------------------------
## Misc
## -----------------------------
##

all: help

help: ## Show help
	@grep -E '(^[a-zA-Z0-9_\-\.]+:.*?##.*$$)|(^##)' Makefile | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

##
## -----------------------------
## Install
## -----------------------------
##

install: ## Install
	yarn
	cp src/pages/Dashboard/data/menuReferentialExample.ts src/pages/Dashboard/data/menuReferential.ts

##
## -----------------------------
## Run
## -----------------------------
##

start: ## Run development environment
	yarn start --watch

##
## -----------------------------
## Test
## -----------------------------
##

test: ## Run cypress
	yarn test.cypress

##
## -----------------------------
## Build
## -----------------------------
##

build: ## Build application
	yarn build

##
## -----------------------------
## Docker
## -----------------------------
##

.docker/.build: .docker/Dockerfile
	docker build -t whats-for-dinner -f .docker/Dockerfile .
	@touch $@

docker.build: .docker/.build ## Build docker image

docker.run: ## Run docker
	docker run -d -p 8000:80 whats-for-dinner
	open http://whats-for-dinner.localhost:8000
