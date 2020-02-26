~~~php
  $class = new \ReflectionClass( Constants::$theme_namespace . 'RDTheme' );
  $properties = $class->getStaticProperties();
  echo '<pre>__ $properties __';
  var_export($properties);
  echo '</pre>';
~~~
