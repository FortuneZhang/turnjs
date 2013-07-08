/**
 * Created with JetBrains RubyMine.
 * User: fortunezhang
 * Date: 13-7-5
 * Time: 下午3:47
 * To change this template use File | Settings | File Templates.
 */

function beforehand_load() {
    var local_current_page = $("#magazine").turn("page");
    var local_total_page = $('#magazine').turn("pages");
    var server_total_page = $("#page_count").val();
    var last_load_page_number = local_total_page + beforehand_load_page_count;


    if (last_load_page_number >server_total_page) {
        last_load_page_number = server_total_page;
    }

    if (local_current_page >= (local_total_page - page_difference_of_beforehand_load) &&
        local_current_page < server_total_page ) {
        for (var p = local_total_page + 1; p < last_load_page_number; p += 1) {
            beforehand_load_page(p, $(this))
        }
    }
}


function beforehand_load_page(page, magazine) {
    if (!magazine.turn('hasPage', page)) {
        var element = $('<div />', {'class': 'page ' + ((page % 2 == 0) ? 'odd' : 'even'), 'id': 'page-' + page}).html('<i class="loader"></i>');
        magazine.turn('addPage', element, page);
        setTimeout(function () {
            element.html('<img src="assets/' + page + '.jpg" alt="loading" >');
        }, 1000);
    }
}
