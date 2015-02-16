var AppDispatcher = require('../dispatcher/AppDispatcher');
var GenericStore = require('./GenericStore');
var Promise = require('es6-promise').Promise;
var assign = require('object-assign');

var _state = false;


var TestStore = assign({}, GenericStore.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  get: function() {
    return _state;
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
      return new Promise(function(resolve, reject) {
        setTimeout(function () {
            _state = !_state;
            TestStore.emitChange();
            resolve(_state);
        }, 5000);
      });
  })

});

module.exports = TestStore;
