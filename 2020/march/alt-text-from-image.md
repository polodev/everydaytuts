# function for elementor image alt text 

~~~php
static function get_attachment_alt_for_elementor( $media, $default_alt="" )
{
  $attachment_ID = $media['id'];
  $final_alt = $default_alt;
  if ( $attachment_ID ) {
    $final_alt = self::get_attachment_alt( $attachment_ID );
  }
  return $final_alt;
}

static function get_attachment_alt( $attachment_ID )
{
  // Get ALT
  $thumb_alt = get_post_meta( $attachment_ID, '_wp_attachment_image_alt', true );
  
  // No ALT supplied get attachment info
  if ( empty( $thumb_alt ) ) {
    $attachment = get_post( $attachment_ID );
  }
  
  // Use caption if no ALT supplied
  if ( empty( $thumb_alt ) ) {
    $thumb_alt = $attachment->post_excerpt;
  }
  
  // Use title if no caption supplied either
  if ( empty( $thumb_alt ) ) {
    $thumb_alt = $attachment->post_title;
  }
 
  // Return ALT
  return esc_attr( trim( strip_tags( $thumb_alt ) ) );
}
~~~


# alt text for get_theme_mod

~~~php
static function get_attachment_alt_for_get_theme_mod( $input, $default_alt="" ) {
  $feature1_id = attachment_url_to_postid($input);
  $image1_alt = '';
  if ( $feature1_id ) {
    $image1_alt = get_post_meta( $feature1_id, '_wp_attachment_image_alt', true );
  }
  if ($image1_alt) {
    return $image1_alt;
  }
  return $default_alt;
}
~~~



