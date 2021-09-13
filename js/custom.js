
//.............team part ends...........
$('.banner_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed:900,
  arrows:false,
  dots:true,
});
//.............team part ends...........
$('.team_slide').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed:900,
  arrows:false,
  dots:false,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
$('.test_slide').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed:1000,
  arrows:false,
  dots:true,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.partner_slide').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed:1000,
  arrows:true,
  dots:false,
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
});
$('.venobox').venobox(); 








