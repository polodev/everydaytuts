# first make a child theme
~~~css
/*
Theme Name: Twenty Twenty Child
Template: twentytwenty
Text Domain: twentytwenty
Version: 1.0
Requires at least: 4.7
Requires PHP: 5.2.4
Description: Our default theme for 2020 is designed to take full advantage of the flexibility of the block editor. Organizations and businesses have the ability to create dynamic landing pages with endless layouts using the group and column blocks. The centered content column and fine-tuned typography also makes it perfect for traditional blogs. Complete editor styles give you a good idea of what your content will look like, even before you publish. You can give your site a personal touch by changing the background colors and the accent color in the Customizer. The colors of all elements on your site are automatically calculated based on the colors you pick, ensuring a high, accessible color contrast for your visitors.
Tags: blog, one-column, custom-background, custom-colors, custom-logo, custom-menu, editor-style, featured-images, footer-widgets, full-width-template, rtl-language-support, sticky-post, theme-options, threaded-comments, translation-ready, block-styles, wide-blocks, accessibility-ready
Author: the WordPress team
Author URI: https://wordpress.org/
Theme URI: https://wordpress.org/themes/twentytwenty/
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

All files, unless otherwise stated, are released under the GNU General Public
License version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html)

This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned
with others.
*/
~~~
# create a functions.php file and paste following 
~~~php
add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );
function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}
add_filter( 'twentytwenty_post_meta_location_single_top',  function($post_meta) {
	$del_val = "author";
	if (($key = array_search($del_val, $post_meta)) !== false) {
    unset($post_meta[$key]);
	}
	return $post_meta;
});

~~~