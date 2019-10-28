# how to add linear color to svg and alongside hover color
~~~phtml
	<div class="rtin-curved">
		<?php $random_id_gradient = 'gradient_id_' . Helper::generate_random_string(); ?>
	  <svg width="100%" height="258px" viewBox="0 0 361.000000 228.000000" preserveAspectRatio="none" class="svg-shape">
	    <defs>
	      <linearGradient id="<?php echo esc_attr( $random_id_gradient ); ?>" x1="0%" x2="62.932%" y1="77.715%" y2="0%">
	         <stop offset="0%" stop-color="var(--gradient_2_light )" stop-opacity="1" />
	         <stop offset="100%" stop-color="var(--gradient_2_dark )" stop-opacity="1" />
	      </linearGradient>
	       <filter id="<?php echo esc_attr( $random_id_shadow ); ?>">
	        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.5"/>
	      </filter>
	    </defs>
	    <g transform="translate(0.000000,228.000000) scale(0.100000,-0.100000)" stroke="none" class="svg-color">
	      <path
	      fill="url(#<?php echo esc_attr( $random_id_gradient ); ?>)"
	      d="M0 1162 l0 -1119 114 58 c212 109 419 179 652 220 112 21 162 24 389
	      24 361 0 542 -26 1165 -170 598 -138 841 -175 1148 -175 l142 0 0 1140 0 1140
	      -1805 0 -1805 0 0 -1118z"></path>
	    </g>
	  </svg>
	</div>
~~~

~~~css
.svg-shape {
  border-radius: 6px 6px 0 0;
  display: inline-block;
  stop {
      -webkit-transition: .4s ease;
      transition: .4s ease;
  }
  stop:first-child {
    stop-color: red;
  }
  stop:last-child {
      stop-color: blue;
  }
}
.parent-content:hover {
	stop:first-child {
	  stop-color: @accent_color;
	}
  stop:last-child {
    stop-color: @accent_color;
  }
}
~~~