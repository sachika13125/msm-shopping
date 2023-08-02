// Declaring variable
const tooltips = $(".all-tooltip .tooltip");
const container = $(".container");
let timeoutId;
$(window).on("resize", contentPosition);
$(window).on("DOMContentLoaded", contentPosition);

//setting the position of tooltips
function contentPosition() {
  $(".all-tooltip .tooltip").each(function() {
    const tooltip = $(this);
    const pin = tooltip.find(".pin");
    const content = tooltip.find(".tooltip-content");
    const arrow = tooltip.find(".arrow");
    const pinLeft = pin.position().left;

    if (pinLeft + content.outerWidth() / 2 > $(".container").outerWidth()) {
      const extraLeft =
        $(".container").outerWidth() - (pinLeft + content.outerWidth() / 2);
      content.css("left", pinLeft - content.outerWidth() / 2 + extraLeft + "px");
      content.css("top", pin.position().top + 30 + "px");
    } else if (pinLeft < content.outerWidth() / 2) {
      content.css("left", -$(".container").offset().left +"px");
      content.css("top", pin.position().top + 30 + "px");
    } else {
      content.css("left", pinLeft - content.outerWidth() / 2 + "px");
      content.css("top", pin.position().top + 30 + "px");
    }
    arrow.css("left", pinLeft - content.offset().left + pin.outerWidth() / 2 +70+"px");
  });
}

// Creating hover effect
$(".all-tooltip .tooltip").each(function() {
    const tooltip = $(this);
    const pin = tooltip.find(".pin");
    const content = tooltip.find(".tooltip-content");

    pin.on("mouseover", function() {
        tooltip.addClass("active");
    });

    pin.on("mouseleave", function() {
        timeoutId = setTimeout(function() {
            tooltip.removeClass("active");
        }, 5000);
    });

    content.on("mouseover", function() {
        clearTimeout(timeoutId);
        tooltip.addClass("active");
    });

    content.on("mouseleave", function() {
        timeoutId = setTimeout(function() {
            tooltip.removeClass("active");
        }, 5000);
    });
});

// Creating Class and Object for shopping items
class Products {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
    }
}

const products= [
    new Products('Ramp','$200','https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80'),
    new Products('Couch','$500','./imgs/couch.webp'),
    new Products('Plant','$50','./imgs/roomplant.webp'),
    new Products('White Door','$300','./imgs/door.webp'),
];

products.forEach(function(product, i) {
    $('.content h1').eq(i).html(product.name);
    $('.content p').eq(i).html(product.price);
    $('.tooltip-content img').eq(i).attr('src', product.img);
});