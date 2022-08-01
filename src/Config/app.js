let configDefault = {

    dev: {
        evn:'sandbox',
        TIMEOUT: 30000,
        TIMEOUT_60: 60000,
        URL_IMG: 'http://localhost:4000/public/img/supplier/',
        API_URL_API: 'http://localhost:4000',
        FORMAT_DATE: 'DD/MM/YYYY',
        // Response
        SUCCESS: '09',
        BANK_TRANSFER_SUCCESS: '08',
        FAILED: '10',
        MY_TRANSFER_QR: '11',
        configTab: {
            single: 'single',
            group: 'group',
        },
    },
    sandbox: {
        evn:'sandbox',
        TIMEOUT: 30000,
        TIMEOUT_60: 60000,
        URL_IMG: 'https://sanbox1.affina.com.vn:4006/public/img/supplier/',
        API_URL_API: 'https://sanbox1.affina.com.vn:4006',
        FORMAT_DATE: 'DD/MM/YYYY',
        // Response
        SUCCESS: '09',
        BANK_TRANSFER_SUCCESS: '08',
        FAILED: '10',
        MY_TRANSFER_QR: '11',
        configTab: {
            single: 'single',
            group: 'group',
        },
    },
    product: {
        evn:'product',
        TIMEOUT: 30000,
        TIMEOUT_60: 60000,
        URL_IMG: 'https://affina.com.vn:4000/public/img/supplier/',
        API_URL_API: 'https://affina.com.vn:4000',
        FORMAT_DATE: 'DD/MM/YYYY',
        // Response
        SUCCESS: '09',
        BANK_TRANSFER_SUCCESS: '08',
        FAILED: '10',
        MY_TRANSFER_QR: '11',
        configTab: {
            single: 'single',
            group: 'group',
        },
    }
}

export default configDefault.product;