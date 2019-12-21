FROM lol3r/c-http-server:latest-prometheus

WORKDIR /root/http-server

COPY . .

EXPOSE 80 9001
CMD ["server.out", "-p", "80", "-t", "-c"]
