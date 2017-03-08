Add to /etc/apache2/sites-available/003-api_mxmariner.conf
```
<VirtualHost *:80>
  ServerName madrona.io
  ProxyRequests Off
  <Proxy *>
      Order deny,allow
      Allow from all
  </Proxy>
  ProxyPass / http://127.0.0.1:8989/
  ProxyPassReverse / http://127.0.0.1:8989/
  <Location / >
      ProxyPassReverse /
      Order deny,allow
      Allow from all
  </Location>
</VirtualHost>
```

```bash 
a2ensite 004-khat_madrona.io
service apache2 reload
certbot-auto --apache -d madrona.io
```