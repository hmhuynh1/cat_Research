tag:
	tag=$$(git rev-parse --short HEAD) docker compose build server

push-tag:
	tag=$$(git rev-parse --short HEAD) docker compose push server