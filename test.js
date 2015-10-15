var test = require('tape')
var base64 = require('./')

test('atob', function(t) {
    t.equal(base64.atob('aGVsbG8gd29ybGQ='), 'hello world', 'decodes correctly')
    t.equal(base64.btoa('hello world'), 'aGVsbG8gd29ybGQ=', 'encodes correctly')
    t.end()
})

if (process.browser) test('close', function(t) {
  t.end()
  setTimeout(function() {
    window.close()
  }, 500)
})
