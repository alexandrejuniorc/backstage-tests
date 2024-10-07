## Docker Compose configuration for dev environment, used for the development process
docker/dev/start:
	@docker compose -f docker-compose.dev.yaml up -d

docker/dev/restart:
	@docker compose down
	@docker system prune -a
	@docker compose -f docker-compose.dev.yaml up -d