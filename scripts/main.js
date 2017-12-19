
//hide header when scrolling down and reveal header when scrolling up
function scrollHeader() {
            var startPosition = 0;
            var minChange = 5;
            var eventScroll;
            var headerHeight = $('header').outerHeight();

            $(window).scroll(function(event) {
                eventScroll = true;
            });

            function hasScrolled() {
                var currentPosition = $(this).scrollTop();

                if (Math.abs(currentPosition-startPosition) < minChange) {
                    return;
                }

                if (currentPosition > startPosition && currentPosition > headerHeight) {
                    $('header').removeClass('navDown').addClass('navUp');
                } else {
                    if (currentPosition < $(document).height() - $(window).height()) {
                        $('header').removeClass('navUp').addClass('navDown');
                    }
                }

                startPosition = currentPosition;
            };

            setInterval(function() {
                if (eventScroll) {
                    hasScrolled();
                    eventScroll = false;
                }
            }, 250);    

        };
        
        $(function () {
            scrollHeader()
        });
            

