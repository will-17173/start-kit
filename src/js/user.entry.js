const urlmap = require('./urlmap');

$.ajax({
    url: urlmap['list'],
    dataType: 'json',
    success: data => {
        console.log(data);
    }
});