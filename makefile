run:
	./webserver.out -p 80 -t -c

build:
	docker build -t lol3r/personal_site .
