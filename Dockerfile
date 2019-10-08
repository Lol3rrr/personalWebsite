FROM lol3r/c-http-server:latest

WORKDIR /root/http-server

COPY . .

EXPOSE 80
CMD ["server.out", "-p", "80", "-t", "-c"]
