FROM lol3r/c-http-server:latest

WORKDIR /root/http-server

COPY . .

CMD ["-p", "80", "-t", "-c"]
