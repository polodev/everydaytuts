# 1. Panel
~~~php
$wp_customize->add_panel('kc_theme_styling_panel', array(
	'priority'    => 10,
	'capability'  => 'edit_theme_options',
	'title'       => esc_html__('Kc Theme Settings', 'kc'),
	'description' => esc_html__('All Styling Settings', 'kc'),
));
~~~

# 2. section
~~~php
$wp_customize->add_section('kc_header_section', array(
	'title'    => esc_html__('Header', 'kc'),
	'priority' => 1,
	'panel'    => 'kc_theme_styling_panel',
));
~~~

# 3. control for image 
~~~php
$wp_customize->add_setting('kc_site_logo_dark_menu_theme', array(
	'default' => '',
));
$wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'kc_site_logo_dark_menu_theme', array(
	'label'    => 'Logo for dark theme',
	'section'  => 'kc_header_section',
	'settings' => 'kc_site_logo_dark_menu_theme',
	'priority' => 8,
)));
~~~
# 3. control for text
~~~php
$wp_customize->add_setting('kc_mobile_phone', array(
	'default' => '000000',
));
$wp_customize->add_control('kc_mobile_phone', array(
	'label'    => 'Mobile Number',
	'section'  => 'kc_header_section',
	'type'     => 'text',
	'settings' => 'kc_mobile_phone',
	'priority' => 1,
));
 ~~~

