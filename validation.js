function _isdefined(v) {
    return (typeof (v) == "undefined") ? false : true;
}
function isValidPhonenumber(number) {
    //var filter = /^[0-9+]{10,13}$/;
    var filter = /^\d{10}$/;
    if (filter.test(number)) {
        return true;
    }
    else {
        return false;
    }
}
function isValidGstNumber(number) {
    //var filter = /^[0-9+]{10,13}$/;
    var filter = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    if (filter.test(number)) {
        return true;
    }
    else {
        return false;
    }
}
function isValidEmailAddress(pmEmail) {
    if (!pmEmail)
        return false;
    pmEmail = $.trim(pmEmail);
    pmEmail = pmEmail.replace(/\r\n|\r|\n/g, '');

    if (isRegExpSupport()) {
        var vPattern = "^[A-Za-z0-9](([_\\.\\-]?[a-zA-Z0-9_]+)*)@([A-Za-z0-9]+)(([\\_.\\-]?[a-zA-Z0-9]+)*)\\.([A-Za-z]{2,})$";
        var vRegExp = new RegExp(vPattern);
        return (vRegExp.test(pmEmail));
    } else {
        if (pmEmail.indexOf('@') == -1 || pmEmail.indexOf('.') == -1 || pmEmail.indexOf(' ') != -1)
            return false;
        else {
            var vSplit = pmEmail.split("@");
            if (vSplit.length > 2)
                return false;
            else {
                var vDomain = vSplit[1].split('.');
                var vLength = vDomain.length;
                for (var vLoop = 0; vLoop < vLength; vLoop++)
                    if (vDomain[vLoop].length <= 0)
                        return false;
                return true;
            }
        }
    }
}
function isRegExpSupport() {
    /* Function will check whether the regular expression supported by the browser */
    if (window.RegExp) {
        var vTempStr = "a";
        var vTempReg = new RegExp(vTempStr);
        return (vTempReg.test(vTempStr));
    }
    return false;
}
function uniqueArray(arr) {
    var r = [];
    o:for (var i = 0, n = arr.length; i < n; i++) {
        for (var x = i + 1; x < n; x++) {
            if (arr[x] == arr[i])
                continue o;
        }
        r[r.length] = arr[i];
    }
    return r;
}
function isNull(a) {
    if (typeof a == "undefined") {
        return true;
    } else {
        if (a == null || a == "" || a == "NA") {
            return true;
        } else {
            return false;
        }
    }
}
function isNotNull(a) {
    return !isNull(a);
}

function dateToDateTime(time, type) {
    if(time=="" || time === undefined ) return '';
    
    var dateString = time.replace(/-/g, "/");
    var dt = new Date(dateString);
    var hours = dt.getHours()
    var minutes = dt.getMinutes()
    var month = dt.getMonth() + 1;
    var day = dt.getDate();

    month = month + "";

    if (month.length == 1) {
        month = "0" + month;
    }
    day = day + "";
    if (day.length == 1) {
        day = "0" + day;
    }
    if (minutes < 10)
        minutes = "0" + minutes
    var suffix = "AM";
    if (hours >= 12) {
        suffix = "PM";
        hours = hours - 12;
    }
    if (hours == 0) {
        hours = 12;
    }
    if (type == 1)
        return day + "/" + month + "/" + dt.getFullYear();
    else if (type == 2)
        return hours + ":" + minutes + " " + suffix;
    else if (type == 3)
        return day + "/" + month + "/" + dt.getFullYear() + ' : ' + hours + ":" + minutes + " " + suffix;
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value)
            + ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString()) + ";path=/";
    document.cookie = c_name + "=" + escape(value)
            + ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString()) + ";path=/ezeebus";
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1)
                c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}