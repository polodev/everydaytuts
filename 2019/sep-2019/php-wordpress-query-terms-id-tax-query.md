## for fetching post with tax query
~~~php
// added isset for backward compatibility 
// check whether its array or not
// first value of this array will be all 
// check whether variable exist
// check whether its empty array
$bool = isset($multiple_category);
$bool = $bool && is_array($multiple_category);
$bool = $bool && count( $multiple_category ) ;
if ($bool) {
  $args['tax_query'] = array(
    array(
      'taxonomy' => "{$prefix}_project_category",
      'terms' => $multiple_category, // Where term_id of Term 1 is "1".
      'include_children' => false
    )
  );
}
~~~

##  for getting terms by term id 

~~~php
// cats overwritten
if ($bool) {
  $terms = get_terms( array(
    'taxonomy' => "{$prefix}_project_category",
    'hide_empty' => false,
    'term_taxonomy_id' => $multiple_category, // Where term_id of Term 1 is "1".
  ) );
  $cats = [];
  foreach ($terms as $term) {
    $cats[$term->slug] = $term->name;
  }
}

~~~
