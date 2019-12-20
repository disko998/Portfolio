$(document).ready(function() {
    $('.menu-button').on('click', function() {
        $('.links').slideToggle('medium', function() {
            if ($(this).is(':visible')) $(this).css('display', 'flex')
        })
    })

    window.addEventListener('resize', function(size) {
        if (window.innerWidth > 1000) {
            $('.links').css('display', 'flex')
        } else {
            $('.links').css('display', 'none')
        }
    })

    shrinkLabels()
})

$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('scroll')
    } else {
        $('nav').removeClass('scroll')
    }
})

function shrinkLabels() {
    const contactInputs = $('#contact-form .form-input')
    for (let input of contactInputs) {
        input.addEventListener('change', function() {
            const label = this.nextSibling.nextSibling
            if (this.value.length) {
                label.classList.add('shrink')
            } else {
                label.classList.remove('shrink')
            }
        })
    }
}