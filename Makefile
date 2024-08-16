# Add the following 'help' target to your Makefile
# And add help text after each target name starting with '\#\#'
 
help:           ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

push-tag:
	bash -c "tag=\"$(git rev-parse --short HEAD)\" docker compose push server"

tag:
	bash -c "docker tag hongmhuynh1/cat-research:latest hongmhuynh1/cat-research:\"$(git rev-parse --short HEAD)\""

build:
	docker compose build
	make tag

run:
	docker run --name cat --rm -P --env-file=.env hongmhuynh1/cat-research:latest

runv:
	docker run --name cat -p 3000:3000 -v $PWD:/app --rm hongmhuynh1/cat-research:latest

stop:
	docker stop cat && docker rm cat

at:
	docker attach -it cat sh

push:
	docker push hongmhuynh1/cat-research:latest hongmhuynh1/cat-research:"$$(git rev-parse --short HEAD)"