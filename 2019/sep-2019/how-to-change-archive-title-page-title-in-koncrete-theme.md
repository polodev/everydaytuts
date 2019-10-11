@wordpress @php

# filter 
=========
* pre_get_document_title
* wp_title
* document_title_parse
* pre_get_document_title

~~~php
add_filter( 'pre_get_document_title',  'eikra_course_archive_title_change' );
function eikra_course_archive_title_change( $titles ) {

  $title = $titles['title'];
  if ( is_post_type_archive( 'lp_course' ) ) {
    $title = 'Courses';
  }
  $titles['title']  = $title;
  return $titles;
}

~~~


~~~php
class KoncreteArchiveTitleChange {
  // for heading
  public $project_title = 'Archives: Projects';
  public $service_title = 'Our Products';

  // for page title
  // and breadcrumbs
  public $project_page_title = 'Projects';
  public $service_page_title = 'Our Products';

  public function __construct()
  {
    add_filter( 'get_the_archive_title',   array( $this, 'koncrete_my_theme_archive_title') );
    add_filter( 'document_title_parts',    array( $this, 'koncrete_my_theme_page_title') );
    add_filter( 'rt_framework_post_types', array( $this, 'koncrete_change_post_type_title') );
  }


  public function koncrete_my_theme_archive_title($title)
  {
    if ( is_post_type_archive( 'koncrete_project' ) ) {
      $title = $this->project_title;
    } else if ( is_post_type_archive( 'koncrete_service' )   ) {
      $title = $this->service_title;
    } 
    return $title;
  }

  public function koncrete_my_theme_page_title( $titles ) {
    $title = $titles['title'];
    if ( is_post_type_archive( 'koncrete_project' ) ) {
      $title = $this->project_page_title;
    } else if ( is_post_type_archive( 'koncrete_service' )   ) {
      $title = $this->service_page_title;
    } 
    $titles['title']  = $title;
    return $titles;
  }
  public function koncrete_change_post_type_title($post_types_array)
  {
    $post_types_array['koncrete_service']['labels']['name']     = $this->service_page_title;
    $post_types_array['koncrete_project']['labels']['name']  = $this->project_page_title;
    return $post_types_array;
  }
}

new KoncreteArchiveTitleChange();
~~~
