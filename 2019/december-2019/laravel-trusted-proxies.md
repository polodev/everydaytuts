# when verify email fro gmail we are facing issues - 403 error 

to solve this problem we needed to change trusted proxies 
https://laravel.com/docs/master/requests#configuring-trusted-proxies

~~~php
protected $proxies = "*";
protected $headers = Request::HEADER_X_FORWARDED_AWS_ELB;
~~~

