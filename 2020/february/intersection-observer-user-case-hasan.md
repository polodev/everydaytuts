# IntersectionObserver
~~~js
 function sidebar_title_change () {
       let observer = new IntersectionObserver((entries, observer) => {
           entries.forEach(entry => {
               if(entry.isIntersecting){
                var heading = $(entry.target).find('.heading-title').data('heading') || '';
                $('#wrapper').find(".section-name").text(heading);
               }
           });
       }, {rootMargin: "0% 0% -70% 0%"});
       document.querySelectorAll('.has-obserbation').forEach(block => { observer.observe(block) });

    }
    function body_class_added_when_reach_photographer() {

       let observer = new IntersectionObserver((entries, observer) => {
           entries.forEach(entry => {
               if(entry.isIntersecting){
                $('body').addClass('dhaka')
               } else {
                $('body').removeClass('dhaka')

               }
           });
       }, {rootMargin: "0% 0% -70% 0%"});
       var rt_author = document.getElementById('rt-author');
       observer.observe(rt_author)

    }

    /*-------------------------------------
    Intersection Observer
    -------------------------------------*/
    if(window.IntersectionObserver){

        // for sidebar title change
        sidebar_title_change();
        body_class_added_when_reach_photographer();

    }
~~~