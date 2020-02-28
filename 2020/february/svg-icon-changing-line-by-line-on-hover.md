# view part 

It requires Vivus and hoverIntent library

~~~php
$size 			= 'kctheme-size2';
$img 			= wp_get_attachment_image( $data['image']['id'], $size );
$image_attributes = wp_get_attachment_image_src($data['icon_image']['id']);
$image_url        = esc_url($image_attributes[0]);
?>
<div class="icon tm-box-icon">
	<div class="tm-svg"	data-svg="<?php echo wp_kses_post($image_url );?>" data-hover=".tm-box-icon"></div>
</div>
~~~

# javascript part
~~~js 
 $( '.tm-svg' ).each( function() {
    var $svg = $( this );
    var _settings = $( this ).data(),
        _type     = _settings.type ? _settings.type : 'oneByOne',
        _duration = _settings.duration ? _settings.duration : 150,
        _options  = {
          type: _type,
          duration: _duration,
          file: _settings.svg
        };
    var _vivus = new Vivus( $( this )[ 0 ], _options );
    
    if ( _settings.hover ) {
      $svg.parents( _settings.hover ).first().hoverIntent( function() {
        _vivus.stop()
              .reset()
              .play( 2 );
      }, function() {
        _vivus.finish();
      } );
    }
  } );
~~~
