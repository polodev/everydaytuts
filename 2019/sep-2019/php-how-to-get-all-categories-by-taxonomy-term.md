# how to get all categories by taxonomy term

~~~php
  private function rt_cat_dropdown_1() {
    $theme_prefix = Constants::$theme_prefix;

    $terms = get_terms( array(
      'taxonomy' => "{$theme_prefix}_project_category",
      'hide_empty' => false,
    ) );

    $category_dropdown = array( '0' => __( 'All Categories', 'metro-core' ) );

    foreach ( $terms as $category ) {
      $category_dropdown[$category->term_id] = $category->name;
    }

    return $category_dropdown;
  }
~~~