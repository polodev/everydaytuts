~~~
.someclass {
  padding: 20px;
  border-radius: 60px;
  background: #fff;
  background-clip: padding-box; /* !importanté */
  border: solid 20px transparent; 
  position: relative;
  box-sizing: border-box;
  margin: auto;
  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -20px; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(to top, @gradient_dark, @gradient_light);
  }
}
~~~
