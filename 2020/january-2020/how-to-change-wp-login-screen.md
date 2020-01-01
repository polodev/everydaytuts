# how to change logo in wp-login screen

# in functions.php file 
~~~php
if (get_theme_mod( 'kc_admin_logo' )) {
 function kc_login_logo() { 
?>
<style type="text/css">
#login h1 a {
background-image: url( <?php echo get_theme_mod( 'kc_admin_logo' ); ?> );
width: <?php echo get_theme_mod( 'kc_admin_logo_width' ); ?>;
height: <?php echo get_theme_mod( 'kc_admin_logo_height' ); ?>;
background-size: contain;
}
</style>
<?php }
add_action( 'login_enqueue_scripts', 'kc_login_logo' );
function kc_login_logo_url() {
return  get_theme_mod( 'kc_admin_logo_url' );
}
add_filter( 'login_headerurl', 'kc_login_logo_url' );
function kc_login_logo_url_title() {
return  get_theme_mod( 'kc_admin_logo_title' );
}
add_filter( 'login_headertext', 'kc_login_logo_url_title' );
}

~~~

# in customizer 
~~~php
$wp_customize->add_section('kc_admin_section', [
			'title'    => esc_html__('Admin Logo', 'sinochips'),
			'priority' => 1,
			'panel'    => 'kc_theme_styling_panel',
		]);


		// WP_Customize_Image_Control
		$wp_customize->add_setting('kc_admin_logo', array(
			'default' => '',
		));
		$wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'kc_admin_logo', array(
			'label'    => 'Admin Login Logo',
			'section'  => 'kc_admin_section',
			'settings' => 'kc_admin_logo',
			'priority' => 9,
		)));

		// Textbox control
		$wp_customize->add_setting('kc_admin_logo_width', array(
			'default' => '84px',
		));

		$wp_customize->add_control('kc_admin_logo_width', array(
			'label'    => 'Admin Logo Width',
			'section'  => 'kc_admin_section',
			'type'     => 'text',
			'settings' => 'kc_admin_logo_width',
			'priority' => 10,
			
		));	
		// Textbox control
		$wp_customize->add_setting('kc_admin_logo_height', array(
			'default' => '84px',
		));

		$wp_customize->add_control('kc_admin_logo_height', array(
			'label'    => 'Admin Logo Height',
			'section'  => 'kc_admin_section',
			'type'     => 'text',
			'settings' => 'kc_admin_logo_height',
			'priority' => 11,
			
		));

		// Textbox control
		$wp_customize->add_setting('kc_admin_logo_url', array(
			'default' => 'https://wordpress.org/',
		));

		$wp_customize->add_control('kc_admin_logo_url', array(
			'label'    => 'Admin Logo Url',
			'section'  => 'kc_admin_section',
			'type'     => 'text',
			'settings' => 'kc_admin_logo_url',
			'priority' => 12,
			
		));
		// Textbox control
		$wp_customize->add_setting('kc_admin_logo_title', array(
			'default' => 'KC Theme',
		));

		$wp_customize->add_control('kc_admin_logo_title', array(
			'label'    => 'Admin Title',
			'section'  => 'kc_admin_section',
			'type'     => 'text',
			'settings' => 'kc_admin_logo_title',
			'priority' => 13,
			
		));


~~~

