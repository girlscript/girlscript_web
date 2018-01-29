    $(document).ready(function() {
        $('#fullpage').fullpage({
            verticalCentered: false,
            anchors: [
                'section-landing',
                'section-about',
                'section-statistics',
                'section-features',
                'section-gallery',
                'section-pricing',
                'section-testimonials',
                'section-signup',
                'section-findus'
            ],
            menu: '#navbar-menu',
            normalScrollElements: '.section-main',
            navigation: true
        });
    })