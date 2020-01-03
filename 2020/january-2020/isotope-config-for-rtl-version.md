
~~~js
isOriginLeft: localizedObj.is_rtl ? false : true,
~~~

# total initialization 
~~~js
var $container = $(this);
var $isotope = $container.find('.featuredContainer').imagesLoaded(function() {
  $isotope.isotope({
    isOriginLeft: localizedObj.is_rtl ? false : true,
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });
});

~~~