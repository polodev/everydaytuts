# dynamic css loading in wordpress
~~~php
  private function dynamic_style()
  {
    $dynamic_css  = 'some css';
    ob_start();
    Helper::requires( 'dynamic-style.php' );
    $dynamic_css .= ob_get_clean();
    $dynamic_css  = $this->minified_css( $dynamic_css );
    wp_register_style( 'teamtaylor-dynamic', false );
    wp_enqueue_style( 'teamtaylor-dynamic' );
    wp_add_inline_style( 'teamtaylor-dynamic', $dynamic_css );
  }
~~~
