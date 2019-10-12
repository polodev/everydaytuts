# to add site to a2ensite
~~~bash

sudo a2ensite sampledomain.com.conf
sudo a2dissite <site>

~~~

# apache restart 
~~~bash
sudo systemctl restart apache2
sudo service apache2 restart
 ~~~ 
