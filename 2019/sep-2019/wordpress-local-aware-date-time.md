# wordpress local time aware date time
~~~php
$unixtimestamp =  get_the_time('U');
echo date_i18n( get_option( 'date_format' ), $unixtimestamp );
~~~
