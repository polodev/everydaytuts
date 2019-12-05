# first we have to load script
https://github.com/markgoodyear/scrollup

no html markup require

# init in js 

~~~js
if (parseInt(localizedObj.hasBackToTopArrow)) {
  $.scrollUp({
    scrollText  : '<i class="fa fa-angle-up"></i>',
    easingType  : 'linear',
    scrollSpeed : 900,
    animation   : 'fade'
  });
}

~~~

# less part 

~~~css
/*=======================================================================
## ScrollUp Style
=========================================================================*/

#scrollUp {
  background-color: transparent;
  bottom: 100px;
  color: @primaryColor;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 40px;
  width: 40px;
  border: 1px solid @primaryColor;
  border-style: double;
  border-radius: 50%;
  position: fixed;
  right: 20px;
  text-align: center;
  text-decoration: none !important;
  transition: all 0.5s cubic-bezier(0, 0, 0, 1) 0s;
  z-index: 99999;
  animation: blink 5s linear infinite;
  @keyframes blink {
    20% {
      color: #cccccc;
      border-color: #cccccc;
    }
    50% {
      color: #cccccc;
      border-color: #cccccc;
    }
    70% {
      color: #ffc92b;
      border-color: #ffc92b;
    }
    100% {
      color: #ffc92b;
      border-color: #ffc92b;
    }
  }
  @-webkit-keyframes blink {
    20% {
      color: #cccccc;
      border-color: #cccccc;
    }
    50% {
      color: #cccccc;
      border-color: #cccccc;
    }
    70% {
      color: #ffc92b;
      border-color: #ffc92b;
    }
    100% {
      color: #ffc92b;
      border-color: #ffc92b;
    }
  }
}
#scrollUp i {
  margin-top: -2px;
}


#scrollUp:hover,
#scrollUp:focus {
  background-color: @primaryColor;
  i {
    color: @textPrimaryColor;
  }
}

~~~