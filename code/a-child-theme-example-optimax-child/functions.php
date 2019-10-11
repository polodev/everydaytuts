<?php
add_action( 'wp_enqueue_scripts', 'optimax_child_styles', 18 );
function optimax_child_styles() {
	wp_enqueue_style( 'child-style', get_stylesheet_uri() );
}

add_action( 'after_setup_theme', 'optimax_child_theme_setup' );
function optimax_child_theme_setup() {
    load_child_theme_textdomain( 'optimax', get_stylesheet_directory() . '/languages' );
}