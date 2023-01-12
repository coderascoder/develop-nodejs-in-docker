bash:
	docker compose -f docker-compose.yml run --rm base bash

install:
	docker compose -f docker-compose.yml run --rm install

start:
	docker compose -f docker-compose.yml run --rm start
