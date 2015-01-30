(function (ns) {
    'use strict';
    
    function FormController (element) {
        this._element = element;
        
        ns.EnhanceForm(this._element.querySelector('form'));
        
        this.nome = element.querySelector('[name="nome"]');
        this.cognome = element.querySelector('[name="cognome"]');
        this.dataNascita = element.querySelector('[name="data-nascita"]');
        
        element.querySelector('[name="add"]').addEventListener('click', this.add.bind(this));
    }
    
    FormController.prototype.add = function add () {
        var data = {
            nome: this.nome.value,
            cognome: this.cognome.value,
            dataNascita: this.dataNascita.value
        };
        
        ns.eventsDispatcher.publish('formAdd', data);
        
        this.emptyForm();
    };
    
    FormController.prototype.emptyForm = function emptyForm () {
        this.nome.value = '';
        this.cognome.value = '';
        this.dataNascita.value = '';
    };
    
    ns.FormController = FormController;
    
}(window.app));