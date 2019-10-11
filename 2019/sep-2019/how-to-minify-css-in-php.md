@wordpress @php @css

# how to minify css in php
~~~php
  private function minified_css( $css )
  {
    /* remove comments */
    $css = preg_replace( '!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $css );
    /* remove tabs, spaces, newlines, etc. */
    $css = str_replace( array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), ' ', $css );
    return $css;
  }

~~~
