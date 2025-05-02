FROM certbot/certbot:v2.3.0

RUN apt-get update && apt-get install -y \
    certbot \
    python3-certbot-nginx

CMD ["sh", "-c", "certbot --nginx --non-interactive --agree-tos --email your-email@example.com"]
