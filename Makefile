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
	cp src/App/data/menuReferentialExample.ts src/App/data/menuReferential.ts

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
