tag:
	tag="$$(git rev-parse --short HEAD)" docker compose build server

push-tag:
	tag="$$(git rev-parse --short HEAD)" docker compose push server

git-tag:
	docker tag hongmhuynh1/cat-research:latest hongmhuynh1/cat-research:"$$(git rev-parse --short HEAD)"

dk-run:
	docker run --name cat -P --env-file=.env hongmhuynh1/cat-research:d6410e3

dk-stop:
	docker stop cat && docker rm cat

dk-at:
	docker attach -it cat sh