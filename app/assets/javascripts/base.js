/**
 * Created with JetBrains RubyMine.
 * User: fortunezhang
 * Date: 13-7-5
 * Time: 下午3:00
 * To change this template use File | Settings | File Templates.
 */

function get_device() {
    var usr_agent = navigator.userAgent.toLowerCase();


    if (usr_agent.match(/ipad/i) == "ipad")
        return "ipad"

    if (usr_agent.match(/iphone os/i) == "iphone os")
        return 'iphone'

    var is_uc_7 = usr_agent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";

    if (usr_agent.match(/ucweb/i) == "ucweb") {
        return 'uc'
    }

    if (usr_agent.match(/android/i) == "android")
        return 'android'

    if (usr_agent.match(/windows ce/i) == "windows ce")
        return 'windows ce'

    if (usr_agent.match(/windows mobile/i) == "windows mobile")
        return 'wm'

    return 'pc'
}





$(window).bind('keydown', function (e) {
    if (e.keyCode == 37)
        $('#magazine').turn('previous');
    else if (e.keyCode == 39)
        $('#magazine').turn('next');
});
