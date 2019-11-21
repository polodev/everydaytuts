# gradient button with classname

~~~html
<a href="button-default button-after-common gradient-dark-to-light gradient-after-light-to-dark">Some style</a>
~~~

~~~scss

.gradient-light-to-dark {
  background: linear-gradient(to right, @gradient_light, @gradient_dark);
}
.gradient-dark-to-light {
  background: linear-gradient(to right, @gradient_dark, @gradient_light);
}

.gradient-after-light-to-dark {
  &:after {
    background: linear-gradient(to right, @gradient_light, @gradient_dark);
  }
}
.gradient-after-dark-to-light {
  &:after {
    background: linear-gradient(to right, @gradient_dark, @gradient_light);
  }
}

.gradient2-light-to-dark {
  background: linear-gradient(to right, @gradient2_light, @gradient2_dark);
}
.gradient2-dark-to-light {
  background: linear-gradient(to right, @gradient2_dark, @gradient2_light);
}

.gradient2-after-light-to-dark {
  &:after {
    background: linear-gradient(to right, @gradient2_light, @gradient2_dark);
  }
}
.gradient2-after-dark-to-light {
  &:after {
    background: linear-gradient(to right, @gradient2_dark, @gradient2_light);
  }
}





.button-after-common {
  &:after {
    content: "";
    height: 100%;
    width: 0;
    border-radius: 30px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    visibility: hidden;
    opacity: 0;
    .transition(all, 0.3s, ease-out);
  }
}
.button-default {
  position: relative;
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  color: @light_primary_text_color;
  padding: 12px 30px;
  border-radius: 30px;
  margin-top: 16px;
  z-index: 1;
  .transition(all, 0.3s, ease-out);

  i {
    margin-left: 10px;
  }
  &:hover {
    color: @light_primary_text_color;
    &:after {
      visibility: visible;
      opacity: 1;
      width: 100%;
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 12px 20px;
  }
}
~~~