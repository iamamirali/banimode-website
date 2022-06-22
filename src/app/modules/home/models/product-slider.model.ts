export class ProductSlider {
    slidesToShow: number = 4
    slidesToScroll: number = 2
    arrows: boolean = true
    nextArrow: string = '<div style=\'position: absolute; top: 45%; right: -10px; z-index: 10; cursor: pointer; font-size: 2.5rem;\' class=\'next-slide\'><i class="fa fa-angle-right" style=\'color: gray;\'></i></div>'
    prevArrow: string = '<div style=\'position: absolute; top: 45%; left: -10px; z-index: 10; cursor: pointer; font-size: 2.5rem\' class=\'next-slide\'><i class="fa fa-angle-left" style=\'color: gray;\'></i></div>'
    autoplay: boolean = true
    autoplaySpeed: number = 5000
    infinite: boolean = false
    rtl: boolean = true
    responsive = [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<div style=\'position: absolute; top: 35%; right: 18px; z-index: 10; cursor: pointer; font-size: 2.5rem;\' class=\'next-slide\'><i class="fa fa-angle-right" style=\'color: gray;\'></i></div>',
                prevArrow: '<div style=\'position: absolute; top: 35%; left: 18px; z-index: 10; cursor: pointer; font-size: 2.5rem\' class=\'next-slide\'><i class="fa fa-angle-left" style=\'color: gray;\'></i></div>',
            }
        }
    ]
}