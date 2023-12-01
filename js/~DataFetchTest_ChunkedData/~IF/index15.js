//  <script src="jsonpipe.js"></script>

  var jsonpipe = require('jsonpipe');
    /**
     * @param {String} url A string containing the URL to which the request is sent.
     * @param {Object} url A set of key/value pairs that configure the Ajax request.
     * @return {XMLHttpRequest} The XMLHttpRequest object for this request.
     * @method flow
     */
    jsonpipe.flow('http://api.com/items?q=batman', {
        "delimiter": "\n", // String. The delimiter separating valid JSON objects; default is "\n\n"
        "onHeaders": function(statusText, headers) {
            // Do something with the headers and the statusText.
        }
        "success": function(data) {
            // Do something with this JSON chunk
        },
        "error": function(errorMsg) {
            // Something wrong happened, check the error message
        },
        "complete": function(statusText) {
            // Called after success/error, with the XHR status text
        },
        "timeout": 3000, // Number. Set a timeout (in milliseconds) for the request
        "method": "GET", // String. The type of request to make (e.g. "POST", "GET", "PUT"); default is "GET"
        "headers": { // Object. An object of additional header key/value pairs to send along with request
            "X-Requested-With": "XMLHttpRequest"
        },
        "data": "", // String. A serialized string to be sent in a POST/PUT request,
        "withCredentials": true // Boolean. Send cookies when making cross-origin requests; default is true
    });