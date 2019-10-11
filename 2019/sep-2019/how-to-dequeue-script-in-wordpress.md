# it have wasted my 2 consecutive days. finally go Solution 

## How to dequeue script 

~~~php
add_action( 'wp_print_styles',       [$this, 'dequeue_conflicting_style_script'], 100 );
~~~


Here priority should be bigger 


~~~php
public function dequeue_conflicting_style_script() {
  wp_dequeue_style   ( 'layerslider-font-awesome' );
  wp_deregister_style( 'layerslider-font-awesome' );

  wp_dequeue_style   ( 'yith-wcwl-font-awesome' );
  wp_deregister_style( 'yith-wcwl-font-awesome' );


  wp_dequeue_style   ( 'elementor-icons-shared-0' );
  wp_deregister_style( 'elementor-icons-shared-0' );

  wp_dequeue_style   ( 'elementor-icons-fa-solid' );
  wp_deregister_style( 'elementor-icons-fa-solid' );

}
~~~




