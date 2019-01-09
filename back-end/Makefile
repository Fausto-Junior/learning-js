default: start-api start-db

start-api:
	@docker-compose up -d api

start-db:
	@docker-compose up -d postgres

stop:
	@docker-compose stop

migrate:
	@docker-compose run --rm api npm run migrate