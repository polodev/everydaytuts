# js part
~~~js
// just below line onLoadScripts fn ended
function changing_facebook_widget_width() {
  var $selector = $('.facebook-widget-area');
  if ($selector) {
    var container_width = $selector.width();    
    var fb_page = $selector.data('page');
      $selector.html('<div class="fb-like-box" ' + 
      'data-href="https://www.facebook.com/'+ fb_page +'"' +
      ' data-width="' + container_width + '" data-height="500" data-show-faces="false" ' +
      'data-stream="true" data-header="true"></div>');
      if(typeof  FB !== "undefined"){
        FB.XFBML.parse( );    
      }
  }
}
setTimeout(changing_facebook_widget_width, 2500);
if ( $('body').hasClass('desktop-body') ) {
  $(window).on("load resize", function(){
    changing_facebook_widget_width();
  }); 
}
}
~~~

# facebook widget wordpress

which will take facebook id only

~~~php
<?php
/**
 * @author  kcwebseo
 * @since   1.0
 * @version 1.0
 */

namespace kcwebseotheme\Sinochips;

use \WP_Widget;
use \RT_Widget_Fields;

class Facebook_Widget extends WP_Widget {
  public function __construct() {
    $id = 'sinochips_facebook_widget';
    parent::__construct(
            $id, // Base ID
            esc_html__( 'sinochips: Facebook Widget', 'sinochips' ), // Name
            ['description' => esc_html__( 'sinochips: Facebook Widget', 'sinochips' ) ]
          );
  }

  /**
   * for front end view
   */
  public function widget( $args, $instance ){
    $page_name = $instance['page_name'];
    if (! $page_name) {
      return "please insert a page_name";
    }
    ?>
    <div class="facebook-widget-area" data-page="<?php echo esc_attr( $page_name ); ?>">
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v4.0"></script>
      <div class="fb-page" data-href="https://www.facebook.com/<?php echo $page_name ?>" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
       <blockquote cite="https://www.facebook.com/<?php echo $page_name ?>" class="fb-xfbml-parse-ignore">
         <a href="https://www.facebook.com/<?php echo  $page_name ?>"><?php echo $page_name ?></a>
       </blockquote>       
      </div>
    </div>
    <?php
  }


  public function update( $new_instance, $old_instance ) {
    $instance               = [];
    $instance['page_name']       = ( ! empty( $new_instance['page_name'] ) ) ? $new_instance['page_name']  : '';
    return $instance;
  }

  public function form( $instance ) {
    $defaults = [
      'page_name'         => 'WMLaw123',
    ];
    $instance = wp_parse_args( (array) $instance, $defaults );
    $fields = [
      'page_name'       => [
        'label'   => esc_html__( 'facebook-page-handler', 'sinochips' ),
        'type'    => 'text',
        'desc'    => 'Facebook page handler',
      ],
    ];

    RT_Widget_Fields::display( $fields, $instance, $this );
  }
}
~~~
