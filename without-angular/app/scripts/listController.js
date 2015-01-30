(function (ns, document) {
    'use strict';
    
    function ListController (element) {
        this._element = element;
        
        this.listContainer = element.querySelector('ul');
        
        ns.eventsDispatcher.subscribe('formAdd', this.addToList.bind(this));
    }
    
    ListController.prototype.addToList = function addToList (data) {
        var text = data.nome + ' - ' + data.cognome + ' - ' + data.dataNascita,
            li = document.createElement('li');
        
        li.textContent = text;
        
        this.listContainer.appendChild(li);
    };
    
    ns.ListController = ListController;
    
}(window.app, document));