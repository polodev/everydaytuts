# gradient button with hover style

~~~css
// Slider
.slider_button_mixin() {
  padding: 12px 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  // background: linear-gradient(to right, @gradient_dark, @gradient_light);
  border: 1px solid;
  // border-color: #ff9317;
  font-size: 15px;
  text-transform: uppercase;
  line-height: 1.6;
  color: @light_primary_text_color;
  font-weight: 700;
  border-radius: 4px;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease-out;
  @media screen and (max-width: 576px) {
    font-size: 13px;
    padding: 9px 20px;
  }

  i {
    font-size: 16px;
    margin-left: 10px;
  }

  &:after {
    content: "";
    height: 100%;
    width: 0;
    // background: linear-gradient(to right, @gradient_light, @gradient_light);
    border-radius: 4px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    visibility: hidden;
    opacity: 0;
    .transition(all,
      0.3s,
      ease-out);
  }

  &:hover {
    &:after {
      visibility: visible;
      opacity: 1;
      width: 100%;
    }
  }
}


.slider-btn-area {
  a.item-btn-accent {
    .slider_button_mixin();
     background: linear-gradient(to right, @gradient_dark, @gradient_light);
     border-color: @accent_color;
     &:after {
      background: linear-gradient(to right, @gradient_light, @gradient_light);
     }
  }
  a.item-btn-accent-2 {
    .slider_button_mixin();
    border-color: @primary_color;
     background: linear-gradient(to right, @gradient_2_light, @gradient_2_dark);
     &:after {
      background: linear-gradient(to right, @gradient_2_dark, @gradient_2_light);
     }
  }
}
~~~