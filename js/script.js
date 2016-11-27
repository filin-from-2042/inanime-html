function inanime_new() {
    this.init_custom_vertical_carousel = function (element_id, elements_count) {
        var carouselData =
        {
            cc_count: elements_count, // ���������� �����������
            cc_position: 0, // ������� ����� �����
            carouselEl: document.getElementById(element_id),
            cc_height: document.getElementById(element_id).querySelector('img').height,
            paddingBottom: parseInt($(document.getElementById(element_id).querySelector('li')).css('paddingBottom'))
        }
        inanime_new[element_id] = carouselData;
        carouselData.carouselEl.querySelector('.prev').onclick = function () {
            var prevPosition = inanime_new[element_id].cc_position;
            var height = inanime_new[element_id].cc_height;
            var paddingBottom = inanime_new[element_id].paddingBottom;
            var count = inanime_new[element_id].cc_count;

            inanime_new[element_id].cc_position = Math.min(prevPosition + (height + paddingBottom) * count, 0);
            $('#' + element_id + ' ul').animate(
                {
                    marginTop: inanime_new[element_id].cc_position + 'px'
                }
            );
        };

        carouselData.carouselEl.querySelector('.next').onclick = function () {
            var listElems = inanime_new[element_id].carouselEl.querySelectorAll('li');
            var prevPosition = inanime_new[element_id].cc_position;
            var height = inanime_new[element_id].cc_height;
            var paddingBottom = inanime_new[element_id].paddingBottom;
            var count = inanime_new[element_id].cc_count;

            inanime_new[element_id].cc_position = Math.max(prevPosition - (height + paddingBottom) * count, -(height + paddingBottom) * (listElems.length - count));
            $('#' + element_id + ' ul').animate(
                {
                    marginTop: inanime_new[element_id].cc_position + 'px'
                }
            );
        };
    };
    this.init_custom_horizontal_carousel = function (element_id, elements_count) {
        var carouselData =
        {
            cc_count: elements_count,
            cc_position: 0,
            carouselEl: document.getElementById(element_id),
            cc_width: $(document.getElementById(element_id).querySelector('li')).width(),
            paddingRight: parseInt($(document.getElementById(element_id).querySelector('li')).css('paddingRight'))
        };

        inanime_new[element_id] = carouselData;
        $('#'+element_id).css('width',(carouselData.cc_width+carouselData.paddingRight)*elements_count );
        carouselData.carouselEl.querySelector('.prev').onclick = function () {
            var prevPosition = inanime_new[element_id].cc_position;
            var width = inanime_new[element_id].cc_width;
            var paddingRight = inanime_new[element_id].paddingRight;
            var count = inanime_new[element_id].cc_count;

            inanime_new[element_id].cc_position = Math.min(prevPosition + (width + paddingRight) * count, 0);
            $('#' + element_id + ' ul').animate(
                {
                    marginLeft: inanime_new[element_id].cc_position + 'px'
                }
            );
        };

        carouselData.carouselEl.querySelector('.next').onclick = function () {
            var listElems = inanime_new[element_id].carouselEl.querySelectorAll('li');
            var prevPosition = inanime_new[element_id].cc_position;
            var width = inanime_new[element_id].cc_width;
            var paddingRight = inanime_new[element_id].paddingRight;
            var count = inanime_new[element_id].cc_count;

            inanime_new[element_id].cc_position = Math.max(prevPosition - (width + paddingRight) * count, -(width + paddingRight) * (listElems.length - count));
            $('#' + element_id + ' ul').animate(
                {
                    marginLeft: inanime_new[element_id].cc_position + 'px'
                }
            );
        };
    }

    this.init_product_horizontal_carousel = function(element_id, elements_count)
    {
        var carouselData =
        {
            cc_count: elements_count,
            cc_position: 0,
            carouselEl: document.getElementById(element_id),
            cc_width: $(document.getElementById(element_id).querySelector('li')).width(),
            paddingRight: parseInt($(document.getElementById(element_id).querySelector('li')).css('paddingRight'))
        };

        inanime_new[element_id] = carouselData;
        $('#'+element_id).css('width',(carouselData.cc_width+carouselData.paddingRight)*elements_count );
        $('#'+element_id).closest('.photo-carousel-container').find('.prev').click(function () {
            var prevPosition = inanime_new[element_id].cc_position;
            var width = inanime_new[element_id].cc_width;
            var paddingRight = inanime_new[element_id].paddingRight;
            var count = inanime_new[element_id].cc_count;

            inanime_new[element_id].cc_position = Math.min(prevPosition + (width + paddingRight) * count, 0);
            $('#' + element_id + ' ul').animate(
                {
                    marginLeft: inanime_new[element_id].cc_position + 'px'
                }
            );
        });

        $('#'+element_id).closest('.photo-carousel-container').find('.next').click(function () {
            var listElems = inanime_new[element_id].carouselEl.querySelectorAll('li');
            var prevPosition = inanime_new[element_id].cc_position;
            var width = inanime_new[element_id].cc_width;
            var paddingRight = inanime_new[element_id].paddingRight;
            var count = inanime_new[element_id].cc_count;

            inanime_new[element_id].cc_position = Math.max(prevPosition - (width + paddingRight) * count, -(width + paddingRight) * (listElems.length - count));
            $('#' + element_id + ' ul').animate(
                {
                    marginLeft: inanime_new[element_id].cc_position + 'px'
                }
            );
        });

    };

    this.ddSetSelectedText = function (element)
    {
        $(element).closest(".dropdown").find(".btn.dropdown-toggle").text('').append('<span class="glyphicon glyphicon-chevron-down"></span><span class="text">'+element.innerHTML+'</span>')/*.text(element.innerHTML)*/;
    };

    this.radioClick = function (event)
    {
        if ($(this).hasClass('ia-radio-button')) var radioButton = $(this);
        else var radioButton = $(this).closest('.radio-button-container').find('.ia-radio-button');
        radioButton.closest('.radio-container').find('input.ia-radio-value').val(radioButton.find('span.value.hidden').text());        
        radioButton.closest('.radio-container').find('.ia-radio-button').removeClass('active');
        radioButton.addClass('active');
    };

    this.radioValuesClick = function()
    {
        if ($(this).hasClass('ia-radio-button')) var radioButton = $(this);
        else var radioButton = $(this).closest('.radio-button-container').find('.ia-radio-button');
        var radioValue = radioButton.find('span.value.hidden').text();
        var valuesContainer = radioButton.closest('.radio-values-container');
        valuesContainer.find('.values-container > div').removeClass('selected');
        valuesContainer.find('.values-container input').attr('disabled',true);
        valuesContainer.find('.values-container .'+radioValue).addClass('selected');
        valuesContainer.find('.values-container .'+radioValue+' input').attr('disabled',false);
    };

    this.counterButtonClick = function ()
    {
        button = $(this)
        var counterContainer = button.closest('.ia-counter-container');
        var input = counterContainer.find('input.counter-value');
        if(button.hasClass('increase'))
        {
            input.val(parseInt(input.val())+1);
        }
        else if (button.hasClass('decrease'))
        {
            if (input.val() > 1) input.val(parseInt(input.val()) - 1);
        }
    };

    this.questionClick = function ()
    {
        var questionTitle = $(this);
        var qustionContainer = questionTitle.closest('.question-container');
        if (qustionContainer.hasClass('opened')) qustionContainer.removeClass('opened');
        else qustionContainer.addClass('opened');
    }
}
window.inanime_new = new inanime_new();
$(document).ready(function ()
{
    $('.ia-radio-button,.radio-button-container .button-title').click(inanime_new.radioClick);
    $('.radio-values-container .ia-radio-button,.radio-values-container .radio-button-container .button-title').click(inanime_new.radioValuesClick);
    $('.ia-counter-container .button').click(inanime_new.counterButtonClick);
    $('#questions .question-answer-section-container .question-title').click(inanime_new.questionClick);
});