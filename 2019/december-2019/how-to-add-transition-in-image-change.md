~~~php
 $service_image     = get_post_meta( $post->ID, "{$prefix}_service_image", true );
$service_image_hover_state  = get_post_meta( $post->ID, "{$prefix}_service_image_hover", true );
$service_image_hover_state  = $service_image_hover_state ? $service_image_hover_state : $service_image;
if ($service_image) {
  $thumb           = Helper::generate_thumbnail_image_by_attachment_id($service_image, $thumb_size);
  $thumb_hover           = Helper::generate_thumbnail_image_by_attachment_id($service_image_hover_state, $thumb_size);
}
~~~

# html part
~~~html
  <div class="service-icon-image">
    <img class="img-responsive service-image-normal-state" src="<?php echo esc_url( $thumb ); ?>">
    <img class="img-responsive service-image-hover-state" src="<?php echo esc_url( $thumb_hover ); ?>">
  </div>
~~~
# css part

~~~css
.service-icon-image {
  display: inline-block;
  position: relative;
}
.service-icon-image img:last-child {
    position: absolute;
    top: 0; 
    left: 0;
    display: none;
}
~~~


# js part
~~~js
function service_icon_hover_state(element) {
  console.log('dhaka');
  console.log($(element), 'element');
  $(element).hover(function() {
    console.log('its hovering');
    $(this).find(".service-icon-image img:last").fadeToggle();
  });
}
service_icon_hover_state('.rtel-service-gallery2 .rtin-service-box');
service_icon_hover_state('.rtel-service-gallery5 .rtin-service-box');

~~~

