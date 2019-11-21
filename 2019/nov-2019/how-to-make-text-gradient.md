# text-gradient

~~~css
&:hover {
  // background: -webkit-radial-gradient(33% 100% circle, #FED373 4%, #F15245 30%, #D92E7F 62%, #9B36B7 85%, #515ECF);
  // background: radial-gradient(circle at 33% 100%, #FED373 4%, #F15245 30%, #D92E7F 62%, #9B36B7 85%, #515ECF);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
	background: linear-gradient(to top, @gradient_dark, @gradient_light, @gradient_light);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
~~~
