(function(window) {
    window.cookieUtils = {
        get: function(key) {
            if (!key) {
                return null;
            }
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        },
        set: function(key, value) {
            if (!key) {
                return false;
            }
            document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
        }
    };
})(this);
