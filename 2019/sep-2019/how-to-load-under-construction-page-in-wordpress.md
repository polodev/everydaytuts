~~~php
add_action( 'template_include',         [ $this, 'under_construction_mode_enable'], 999 );
public function under_construction_mode_enable( $template ) {
  $new_template = locate_template( array( 'under-construction.php' ) );
  if ( Helper::is_under_construction_mode()  && '' != $new_template ) {
    return $new_template;
  } else {
    return $template;
  }
}
~~~
