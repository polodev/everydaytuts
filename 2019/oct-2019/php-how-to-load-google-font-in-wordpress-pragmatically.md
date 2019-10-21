# how to load google font in wordpress - functional way
~~~php
public function load_google_font() {
  $fonts_url = '';
  $fonts     = array();
  $subsets   = '';

  /* translators: If there are characters in your language that are not supported by this font, translate this to 'off'. Do not translate into your own language. */
  if ( 'off' !== esc_html_x( 'on', 'Karla font: on or off', 'teamtaylor' ) ) {
      $fonts[] = 'Karla';
  }
  if ( 'off' !== esc_html_x( 'on', 'Roboto Condensed font: on or off', 'teamtaylor' ) ) {
      $fonts[] = 'Roboto Condensed:300,400,500,700';
  }
  if ( 'off' !== esc_html_x( 'on', 'Oswald font: on or off', 'teamtaylor' ) ) {
      $fonts[] = 'Oswald:300,400,500,600,700';
  }
  if ( 'off' !== esc_html_x( 'on', 'Poppins font: on or off', 'teamtaylor' ) ) {
      $fonts[] = 'Poppins:300,400,500,600,700';
  }

  /* translators: If there are characters in your language that are not supported by this font, translate this to 'off'. Do not translate into your own language. */
  // if ( 'off' !== esc_html_x( 'on', 'Lato font: on or off', 'teamtaylor' ) ) {
  //     $fonts[] = 'Lato';
  // }

  if ( $fonts ) {
      $fonts_url = add_query_arg( array(
          'family' => urlencode( implode( '|', $fonts ) ),
          'subset' => urlencode( $subsets ),
      ), 'https://fonts.googleapis.com/css' );
  }

  return $fonts_url;
}
~~~
