var randomString  = require("randomstring");
exports.generateStoreCode = () => {

    return randomString.generate({
        length:5,
        charset:'alphabetic',
        capitalization:'uppercase',

    });

}