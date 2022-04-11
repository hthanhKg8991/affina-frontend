import moment from "moment";

export function isNull(variable) {
    return (null === variable || undefined === variable);
}

export function isStringNullOrEmpty(variable) {
    return (null === variable || undefined === variable || '' === variable);
}

export function htmlSpecialChars(variable) {

    if (!isStringNullOrEmpty(variable))
        return variable.replace(/<[^>]*>/g, "");
}

export function formatPrepaidAmount(value) {
    let separator = '.'
    // if (appConfig.LANGUAGE === 'vi') {
    //     separator = '.'
    // } else {
    separator = '.'
    // }
    if (isStringNullOrEmpty(value)) {
        return ''
    }
    let valueReg = value.toString().replace(/\./g, '')
    return valueReg.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}
export function numFormatter(num) {
    if (num > 999 && num < 1000000) {
        return (num / 1000) + 'K'; // convert to K for number from > 1000 < 1 million 
    } else if (num > 1000000) {
        return (num / 1000000) + 'tr'; // convert to M for number from > 1 million 
    } else if (num < 900) {
        return num; // if value < 1000, nothing to do
    }
}
export function isEmptyArray(variable) {
    return !(!isNull(variable) && variable instanceof Array && variable.length > 0);
}

export function validate(params) {
    if (!Array.isArray(params)) return true;
    let checkEmpty = (value) => isStringNullOrEmpty(value) || value === false;
    let result = params.map(checkEmpty);
    let checkValue = (value) => value === false;
    return !result.every(checkValue)
}

export function isCheckPhoneNumber(phone) {
    if (!isStringNullOrEmpty(phone)) return;
    if (phone.toString().trim().length < 10 || phone.toString().trim().length > 13) return;
}

export function isValidatePhone(phone) {
    if (isCheckPhoneNumber(phone)) return;
    else {
        var vnCode = phone.substring(0, 3);
        if (vnCode === '+84') {
            const reg = /^[+84][1-9][0-9]{10,11}$/;
            return reg.test(String(phone));
        } else {
            const reg = /^[0][1-9][0-9]{8,9}$/;
            return reg.test(String(phone));
        }
    }
}
export function isValidateEmail(email) {
    if (isStringNullOrEmpty(email)) return true;
    return (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.toLowerCase()));
    // if (!isStringNullOrEmpty(email)) return;
    // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
}

export function formatIOSToDate(date) {
    let result = ''
    if (!isStringNullOrEmpty(date)) {
        result = moment(date).toDate();
    }
    return result;
}

export function genderByText(variable) {

    if (!isStringNullOrEmpty(variable)) {
        switch (variable) {
            case '1':
            case 1:
                return 'Nam';
            case '0':
            case 0:
                return 'Nữ';
            default:
                return '';
        }
    } else {
        return variable
    }

}
export function isBillingByText(variable) {

    if (!isStringNullOrEmpty(variable)) {
        switch (variable) {
            case true:
            case 1:
                return 'Có';
            case false:
            case 0:
                return 'Không';
            default:
                return '';
        }
    } else {
        return variable
    }

}

export function dynamicSort(property, orderBy) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        if (orderBy === true) {
            var result = (a[property] < b[property]) ? 1 : (a[property] > b[property]) ? -1 : 0;
        } else {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        }
        return result * sortOrder;
    }
}
