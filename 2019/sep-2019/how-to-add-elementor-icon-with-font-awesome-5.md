# how can we add custom icon alongside font awesome 5


we can add custom icon using 2 different way. Therefore first one is suggested to use 

## First one 

apply filter in construction file 

~~~php
add_filter( 'elementor/icons_manager/additional_tabs', [$this, 'additional_tabs'], 10, 1 );
~~~


Definition of functions


~~~php
public function additional_tabs($tabs)
{
  $json_url = Helper::get_asset_file('json/flaticon.json');
  $flaticon = [
    'name'          => 'flaticon',
    'label'         => esc_html__( 'Flaticon', 'optimax-core' ),
    'url'           => false,
    'enqueue'       => false,
    'prefix'        => '',
    'displayPrefix' => '',
    'labelIcon'     => 'fab fa-font-awesome-alt',
    'ver'           => '1.0.0',
    'fetchJson'     => $json_url,
  ];
  array_push( $tabs, $flaticon);
  return $tabs;
}
~~~



## Second One 


apply filter in construction file 

~~~php
add_filter( 'elementor/icons_manager/native', [ $this, 'add_flat_icon_manager' ]);
~~~

Definition of functions

~~~php
  public function add_flat_icon_manager( $settings ) {
    $json_url = Helper::get_asset_file('json/flaticon.json');
    $settings['flaticon'] = [
      'name'          => 'flaticon',
      'label'         => esc_html__( 'Flaticon', 'optimax-core' ),
      'url'           => false,
      'enqueue'       => false,
      'prefix'        => '',
      'displayPrefix' => '',
      'labelIcon'     => 'fab fa-font-awesome-alt',
      'ver'           => '1.0.0',
      'fetchJson'     => $json_url,
      'native'        => true,
    ];

    return $settings;
  }
~~~




