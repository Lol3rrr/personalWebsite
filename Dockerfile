FROM lol3r/c-http-server:latest

WORKDIR /root/http-server

COPY website/ website/

ENTRYPOINT ["./server.out", "-ic", "-t", "-c"]

