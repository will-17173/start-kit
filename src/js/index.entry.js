const urlmap = require('./urlmap');

$.ajax({
    url: urlmap['index'],
    dataType: 'json',
    success: data => {
        console.log(data);
    }
});