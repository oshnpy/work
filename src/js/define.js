define(function() {
    return {
        add: function(a, b) {
            a + b;
        },
        del: function(a, b) {
            a - b;
        }
    }
});
module.exports = {
    add: add,
    del: del
}