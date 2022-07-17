/*---------- PRELOADER ----------*/
function reveal() {
    // window sizes
    var winsize = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    // if animating return
    if (this.isAnimating) {
        return false;
    }
    this.isAnimating = true;

    var widthVal, heightVal, transform;
    var pageDiagonal = Math.sqrt(
        Math.pow(winsize.width, 2) + Math.pow(winsize.height, 2)
    );
    widthVal = heightVal = pageDiagonal + "px";
    transform =
        "translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0," +
        pageDiagonal +
        "px,0)";

    var revealerWrapper = document.getElementById("revealer");
    revealerWrapper.style.width = widthVal;
    revealerWrapper.style.height = heightVal;
    revealerWrapper.style.WebkitTransform = revealerWrapper.style.transform =
        transform;
    revealerWrapper.style.opacity = 1;

    setTimeout(function () {
        revealerWrapper.style.opacity = 0;
    }, 1000);
    setTimeout(function () {
        $("#loader-wrapper").fadeOut();
    }, 450);
}

$(document).ready(function () {
    /*--- MOBILE MENU ---*/
    $(".btn-menu").bind("click", function () {
        $("body").addClass("menu-open");
        $("#mobile_nav_wrapper").scrollTop(0);
        return false;
    });

    $("body").on("click", function (event) {
        if (
            $(event.target).is("body.menu-open") ||
            $(event.target).is(".mobile-menu-close")
        ) {
            $("body").removeClass("menu-open");
            $(".mobile-nav .has-children ul").addClass("is-hidden");
            $(".move-out").removeClass("move-out");
            event.preventDefault();
        }
    });

    $(".mobile-nav .has-children")
        .children("a")
        .on("click", function (event) {
            event.preventDefault();
            var selected = $(this);
            selected
                .next("ul")
                .removeClass("is-hidden")
                .end()
                .parent(".has-children")
                .parent("ul")
                .addClass("move-out");
            $(".mobile-nav").scrollTop(0);
        });

    $(".go-back").on("click", function (event) {
        event.preventDefault();
        var selected = $(this);
        selected
            .parent("ul")
            .addClass("is-hidden")
            .parent(".has-children")
            .parent("ul")
            .removeClass("move-out");
        $(".mobile-nav").scrollTop(0);
    });

    /*---------- SLIDING BANNER ----------*/
    if ($(".sliding-banner.owl-carousel").length) {
        $(".sliding-banner.owl-carousel").owlCarousel({
            items: 1,
            responsiveRefreshRate: 0,
            autoplay: true,
            autoplayHoverPause: true,
            loop: true,
            nav: false,
            dots: true,
            margin: 0,
        });
    }

    $(".animated").viewportChecker();

    /*---------- PRODUCTS SLIDER ----------*/
    if ($(".products-slider.owl-carousel").length) {
        $(".products-slider.owl-carousel").owlCarousel({
            mouseDrag: false,
            items: 3,
            responsiveRefreshRate: 0,
            autoplay: true,
            nav: true,
            navText: [
                "<i class='icon-arrow-left'></i>",
                "<i class='icon-arrow-right'></i>",
            ],
            dots: false,
            margin: 28,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 670 up
                570: {
                    items: 2,
                    margin: 12,
                },
                // breakpoint from 960 up
                960: {
                    items: 3,
                    margin: 14,
                },
                // breakpoint from 1100 up
                1100: {
                    margin: 18,
                },
                // breakpoint from 1300 up
                1300: {
                    margin: 28,
                },
            },
        });
    }

    /*---------- ANIMATE SOLUTIONS ----------*/
    $(".solutions").viewportChecker({
        classToAdd: "in-viewport",
        offset: 100,
        callbackFunction: function (elem) {
            var elements = elem.find(".block"),
                i = 0;
            var interval = setInterval(function () {
                elements.eq(i++).addClass("visible");
                if (i == elements.length) {
                    clearInterval(interval);
                }
            }, 80);
        },
    });

    /*---------- ANIMATE TOOLS ----------*/
    $(".banking-tools").viewportChecker({
        classToAdd: "in-viewport",
        offset: 30,
        callbackFunction: function (elem) {
            var elements = elem.find("li"),
                i = 0;
            var interval = setInterval(function () {
                elements.eq(i++).addClass("visible");
                if (i == elements.length) {
                    clearInterval(interval);
                }
            }, 80);
        },
    });

    /*---------- IntelTel ----------*/
    if ($(".enquiry-phone").length) {
        var enquiryPhone = document.querySelector(".enquiry-phone"),
            enquiryCountriesContainer = document.querySelector(
                ".enquiry-country-codes"
            );
        var enquiry_iti = window.intlTelInput(enquiryPhone, {
            initialCountry: "ke",
            customPlaceholder: function (
                selectedCountryPlaceholder,
                selectedCountryData
            ) {
                return "e.g. " + selectedCountryPlaceholder;
            },
            preferredCountries: ["ke"],
            autoPlaceholder: "aggressive",
            separateDialCode: true,
            nationalMode: false,
            dropdownContainer: enquiryCountriesContainer,
            utilsScript: "/templates/sbm/js/utils.js", // just for formatting/placeholders etc
        });
        // create a custom phone number rule called 'intlTelNumber'
        $.validator.addMethod(
            "intlTelNumber",
            function (value, element) {
                return this.optional(element) || enquiry_iti.isValidNumber();
            },
            "Please enter a valid International Phone Number"
        );
        $("#phone").on("change", function () {
            if (enquiry_iti.isValidNumber()) {
                $("input[name=phone]").val(enquiry_iti.getNumber());
            }
        });
    }

    /*--- FOREX Ticker ---*/
    $("#forex-ticker").webTicker({
        duplicate: true,
    });

    /*---------- STORIES SLIDER ----------*/
    $(".stories-slider.owl-carousel").owlCarousel({
        items: 3,
        mouseDrag: false,
        responsiveRefreshRate: 0,
        autoplay: false,
        nav: false,
        navText: [
            "<i class='icon-arrow-left'></i>",
            "<i class='icon-arrow-right'></i>",
        ],
        dots: false,
        margin: 28,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
                nav: true,
            },
            // breakpoint from 670 up
            570: {
                items: 2,
                margin: 12,
                nav: true,
            },
            // breakpoint from 960 up
            960: {
                items: 3,
                margin: 14,
            },
            // breakpoint from 1100 up
            1100: {
                margin: 18,
            },
            // breakpoint from 1300 up
            1300: {
                margin: 28,
            },
        },
    });

    /*---------- CHOICES SLIDER ----------*/
    $(".choices-slider.owl-carousel").owlCarousel({
        items: 4,
        mouseDrag: false,
        responsiveRefreshRate: 0,
        autoplay: false,
        nav: false,
        navText: [
            "<i class='icon-arrow-left'></i>",
            "<i class='icon-arrow-right'></i>",
        ],
        dots: false,
        margin: 28,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
                nav: true,
            },
            // breakpoint from 670 up
            570: {
                items: 2,
                margin: 12,
                nav: true,
            },
            // breakpoint from 960 up
            960: {
                items: 3,
                margin: 14,
            },
            // breakpoint from 1100 up
            1100: {
                margin: 18,
            },
            // breakpoint from 1300 up
            1300: {
                margin: 28,
            },
        },
    });

    /*---------- MATCH HEIGHT----------*/
    $(".mh").matchHeight();

    /*---------- MAIN DROPDOWN ----------*/
    $("#main_nav li").on("mouseenter", function (e) {
        $(e.currentTarget).find(".main_nav-dropdown").removeClass("hidden");
    });

    $("#main_nav li").on("mouseleave", function (e) {
        $(e.currentTarget).find(".main_nav-dropdown").addClass("hidden");
    });

    /*---------- TABS ----------*/
    $(".tabs-nav").each(function () {
        var $active,
            $content,
            $links = $(this).find("a");

        $active = $(
            $links.filter('[href="' + location.hash + '"]')[0] || $links[0]
        );
        $active.addClass("active");

        $content = $($active[0].hash);

        $links.not($active).each(function () {
            $(this.hash).hide();
        });

        $(this).on("click", "a", function (e) {
            e.preventDefault();

            $active.removeClass("active");
            $content.hide();

            $active = $(this);
            $content = $(this.hash);

            $active.addClass("active");
            $content.show();
        });
    });

    /*---------- AWARDS TIMELINE ----------*/
    $("#awardsTimeline").owlCarousel({
        items: 4,
        mouseDrag: false,
        responsiveRefreshRate: 0,
        autoplay: false,
        nav: false,
        navText: [
            "<i class='icon-arrow-left'></i>",
            "<i class='icon-arrow-right'></i>",
        ],
        dots: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 670 up
            570: {
                items: 2,
            },
            // breakpoint from 960 up
            960: {
                items: 4,
            },
        },
    });

    $("#awardsPrev").on("click", function () {
        $("#awardsTimeline").trigger("prev.owl.carousel", [300]);
    });

    $("#awardsNext").on("click", function () {
        $("#awardsTimeline").trigger("next.owl.carousel");
    });

    /*---------- HISTORY TIMELINE ----------*/
    $("#historyTimeline").owlCarousel({
        items: 4,
        mouseDrag: false,
        responsiveRefreshRate: 0,
        autoplay: false,
        nav: false,
        navText: [
            "<i class='icon-arrow-left'></i>",
            "<i class='icon-arrow-right'></i>",
        ],
        dots: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 670 up
            570: {
                items: 2,
            },
            // breakpoint from 960 up
            960: {
                items: 4,
            },
        },
    });

    $("#historyPrev").on("click", function () {
        $("#historyTimeline").trigger("prev.owl.carousel", [300]);
    });

    $("#historyNext").on("click", function () {
        $("#historyTimeline").trigger("next.owl.carousel");
    });

    /*---------- RECOMMENDED PRODUCTS ----------*/
    $("#recommendedProducts").owlCarousel({
        items: 3,
        mouseDrag: false,
        responsiveRefreshRate: 0,
        autoplay: false,
        nav: false,
        navText: [
            "<i class='icon-arrow-left'></i>",
            "<i class='icon-arrow-right'></i>",
        ],
        dots: false,
        margin: 28,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
                nav: true,
            },
            // breakpoint from 670 up
            570: {
                items: 2,
                margin: 12,
                nav: true,
            },
            // breakpoint from 960 up
            960: {
                items: 3,
                margin: 14,
            },
            // breakpoint from 1100 up
            1100: {
                margin: 18,
            },
            // breakpoint from 1300 up
            1300: {
                margin: 28,
            },
        },
    });

    /*---------- OPEN ALL PRODUCTS BUTTTON ----------*/
    $("#toggleProductsWrapBtn").on("click", function (e) {
        e.preventDefault();
        $("#allProductsWrap").slideDown("slow").removeClass("hidden");
    });

    /*---------- SOLUTIONS SELECT ----------*/
    $("#selectSolutionsInput").on("change", function () {
        window.location.href = "products.html";
    });

    /*---------- NEWS ITEMS ----------*/
    $(".news-items_slider").owlCarousel({
        items: 3,
        mouseDrag: false,
        responsiveRefreshRate: 0,
        autoplay: false,
        nav: false,
        navText: [
            "<i class='icon-arrow-left'></i>",
            "<i class='icon-arrow-right'></i>",
        ],
        dots: false,
        margin: 28,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 670 up
            570: {
                items: 2,
                margin: 12,
            },
            // breakpoint from 960 up
            960: {
                items: 3,
                margin: 14,
            },
            // breakpoint from 1100 up
            1100: {
                margin: 18,
            },
            // breakpoint from 1300 up
            1300: {
                margin: 28,
            },
        },
    });

    /*---------- OTHER NEWS ITEMS ----------*/
    $("#otherNewsScroll").owlCarousel({
        items: 2,
        mouseDrag: false,
        responsiveRefreshRate: 0,
        autoplay: false,
        nav: false,
        navText: [
            "<i class='icon-arrow-left'></i>",
            "<i class='icon-arrow-right'></i>",
        ],
        dots: false,
        margin: 42,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 670 up
            570: {
                items: 2,
                margin: 42,
            },
        },
    });

    $("#otherNewsPrev").on("click", function () {
        $("#otherNewsScroll").trigger("prev.owl.carousel", [300]);
    });

    $("#otherNewsNext").on("click", function () {
        $("#otherNewsScroll").trigger("next.owl.carousel");
    });

    /*---------- BOOKMARK LINKS ----------*/
    $('.page-banner-links_nav > ul > li > a[href^="#"]').on(
        "click",
        function (e) {
            e.preventDefault();

            var targetLink = $(e.currentTarget).attr("href");
            $("html, body").animate(
                {
                    scrollTop: $(targetLink).offset().top - 140,
                },
                1000
            );
        }
    );

    /*---------- ACCORDION ----------*/
    $(".faqs-items-hold .faqs-item h3").on("click", (e) => {
        e.preventDefault();
        const $this = $(e.currentTarget);

        if ($this.next().hasClass("show")) {
            $this.removeClass("is-open");
            $this.next().slideUp(350).removeClass("show");
        } else {
            $this.parent().find(".is-open").removeClass("is-open");
            $this.addClass("is-open");
            $this
                .parent()
                .parent()
                .find(".faqs-item_content")
                .slideUp(350)
                .removeClass("show");
            $this.next().slideDown(350).toggleClass("show");
        }
    });

    /*---------- GOALS SLIDER ----------*/
    $(".set-goal_items").owlCarousel({
        items: 4,
        mouseDrag: false,
        responsiveRefreshRate: 0,
        autoplay: false,
        nav: true,
        navText: [
            "<i class='icon-arrow-left'></i>",
            "<i class='icon-arrow-right'></i>",
        ],
        dots: false,
        margin: 28,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 670 up
            570: {
                items: 1,
            },
            // breakpoint from 960 up
            960: {
                items: 3,
                margin: 14,
            },
            // breakpoint from 1100 up
            1100: {
                margin: 18,
            },
            // breakpoint from 1300 up
            1300: {
                margin: 28,
            },
        },
    });

    /*---------- ELITE BANKING SLIDER ----------*/
    if ($(".elite-banking_slider.owl-carousel").length) {
        $(".elite-banking_slider.owl-carousel").owlCarousel({
            items: 1,
            responsiveRefreshRate: 0,
            autoplay: true,
            autoplayHoverPause: true,
            loop: true,
            nav: false,
            dots: true,
            margin: 0,
        });
    }

    /*---------- CLOSE COOKIE ALERT ----------*/
    if (localStorage.getItem("cookieSeen") != "shown") {
        $(".info-policy").delay(2000).fadeIn();
    }

    $(".info-policy .icon-close").click(function () {
        localStorage.setItem("cookieSeen", "shown");
        $(".info-policy").fadeOut();
    });

    /*---------- CURRENCY CONVERSION ----------*/
    var selFromCurrency = $("#selFromCurrency");
    var lblFromCurrency = $("#lblFromCurrency");
    var txtFromCurrency = $("#txtFromCurrency");
    var selToCurrency = $("#selToCurrency");
    var lblToCurrency = $("#lblToCurrency");
    var txtToCurrency = $("#txtToCurrency");
    var conversionRateAmount = $("#conversionRateAmount");

    // set default selected values on load
    selFromCurrency.prop("selectedIndex", 0);
    selToCurrency.prop("selectedIndex", 0);
    // console.log(selFromCurrency.val());
    // console.log(selToCurrency.val());

    selFromCurrency.change(function (e) {
        // remove same selected options
        $("#selFromCurrency option").each(function (i, el) {
            if ($(el).val() === selToCurrency.val()) {
                var selectedFromCurrencyValue = $(el).val();
                $(
                    '#selToCurrency option[value="' +
                        selectedFromCurrencyValue +
                        '"]'
                ).remove();
                console.log($(el).val());
                // console.log(selectedFromCurrencyValue);
            }
        });
        var valueFromCurrency = $("option:selected", e.target).val();
        lblFromCurrency.text(valueFromCurrency);
        // console.log(valueFromCurrency);
    });

    selToCurrency.change(function (e) {
        var valueToCurrency = $("option:selected", e.target).val();
        lblToCurrency.text(valueToCurrency);
        txtToCurrency.val(valueToCurrency);
        conversionRateAmount.text(valueToCurrency);
        // console.log(valueToCurrency);
    });

    // forex rates data
    var forexData = [
        {
            curency: "USD",
            rate: 1.04,
        },
        {
            curency: "EURO",
            rate: 2.04,
        },
        {
            curency: "GBP",
            rate: 3.04,
        },
    ];

    // get fromCurrencyValue
    function getFromCurrencyValue() {
        txtFromCurrency.change(function (e) {
            var currencyHaveValue = $(e.target).val();
            console.log(currencyHaveValue);
        });
    }

    // agency table
    $("#ab").DataTable();
}); //End of document.ready

$(window).on("load", function () {
    if ($("#revealer").length) {
        reveal();
    }
    $("body").addClass("loaded");
});
