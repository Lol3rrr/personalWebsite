FROM lol3r/c-http-server:latest-prometheus

WORKDIR /root/http-server

COPY . .

CMD ["-p", "80", "-t", "-c"]
