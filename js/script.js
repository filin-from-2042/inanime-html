function inanime_new() {
    // �������������� ������������ �������� � ��������� ��������� � ������� ����������� � id html-�������
    this.init_custom_vertical_carousel = function (element_id, elements_count) {
        /* ������������ */
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
            // ����� �����
            // ��������� ������������ ����� ����� ���� �� �� 3, � �� 2 ��� 1 �������
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
            // ����� ������
            // ��������� ������������ ������ ����� ���� �� �� 3, � �� 2 ��� 1 �������
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

    }
}
$(document).ready(function () {
    window.inanime_new = new inanime_new();

    inanime_new.init_custom_vertical_carousel('carousel-custom-vertical', 2);
});
