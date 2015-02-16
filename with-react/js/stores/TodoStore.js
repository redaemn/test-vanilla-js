var AppDispatcher = require('../dispatcher/AppDispatcher');
var GenericStore = require('./GenericStore');
var TestStore = require('./TestStore');
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var _todos = {}; // collection of todo items

/**
 * Create a TODO item.
 * @param {string} text The content of the TODO
 */
function create(text) {
  // Using the current timestamp in place of a real id.
  var id = Date.now();
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

/**
 * Delete a TODO item.
 * @param {string} id
 */
function destroy(id) {
  delete _todos[id];
}

var TodoStore = assign({}, GenericStore.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return _todos;
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    AppDispatcher.waitFor([TestStore.dispatcherIndex], function () {
      var action = payload.action;
      var text;
  
      switch(action.actionType) {
        case TodoConstants.TODO_CREATE:
          text = action.text.trim();
          if (text !== '') {
            create(text);
            TodoStore.emitChange();
          }
          break;
  
        case TodoConstants.TODO_DESTROY:
          destroy(action.id);
          TodoStore.emitChange();
          break;
  
        // add more cases for other actionTypes, like TODO_UPDATE, etc.
      }
  
      return true; // No errors. Needed by promise in Dispatcher.
    })
    
  })

});

module.exports = TodoStore;
