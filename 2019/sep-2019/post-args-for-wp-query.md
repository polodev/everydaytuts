making post args 

~~~php
$args = array(
  'post_type'        => "{$prefix}_project",
  'posts_per_page'   => $posts_per_page,
  'suppress_filters' => false,
  'orderby'          => $orderby,
);

// added isset for backward compatibility 
if (isset($single_category) && $single_category) {
  $args['tax_query'] = array(
    array(
      'taxonomy' => "{$prefix}_project_category",
      'field' => 'id',
      'terms' => $single_category, // Where term_id of Term 1 is "1".
      'include_children' => false
    )
  );
}
~~~
