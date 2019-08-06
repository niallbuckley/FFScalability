var expect  = require('chai').expect;
var request = require('request');

it('Does body display hello world', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(body).to.equal('Hello World!!!!');
        done();
    });
});
