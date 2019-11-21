~~~php
private function theme_default_value ($key) {
  $full_class_path = Constants::$theme_namespace . 'RDTheme';
  $class = new \ReflectionClass( $full_class_path );
  $default_value = $class->getStaticPropertyValue( $key );
  return $default_value;
}
~~~
