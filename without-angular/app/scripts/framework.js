(function (window) {
    'use strict';
    
    var ns = {};
    
    // find elements with "data-controller" and attaches the controller's instance
    function attachControllers (domElement) {
        var elements = domElement.querySelectorAll('[data-controller]'),
            i,
            element,
            controllerName,
            controllers = [];
            
        for (i = 0; i < elements.length; ++i) {
            element = elements[i];
            controllerName = element.dataset.controller;
            
            if (!ns[controllerName]) {
                console.log('Controller ' + controllerName + ' does not exist');
                continue;
            }
            
            controllers.push(new ns[controllerName](element));
        }
        
        return controllers;
    }
    ns.AttachControllers = attachControllers;
    
    // enhances a form with special functionalities
    function enhanceForm (formElement) {
        // enhance labels
        var labels = formElement.querySelectorAll('label[data-for]'),
            i;
        
        for (i = labels.length - 1; i >= 0; i--) {
            labels[i].addEventListener('click', wrapSelectInput(formElement));
        }
    }
    ns.EnhanceForm = enhanceForm;
    
    function wrapSelectInput(formElement) {
        return function (e) {
            selectInput(e, formElement);
        };
    }
    
    function selectInput (event, formElement) {
        var label = event.target,
            inputName, input;
        
        inputName = label.dataset.for;
        input = formElement.querySelector('input[name="' + inputName + '"]');
        input.focus();
    }
    
    // extends a dest object with all properties of src object
    function extend(dest, src) {
        var i;
        for (i in src) {
            if (src.hasOwnProperty(i)) {
                dest[i] = src[i];
            }
        }
    }
    ns.Extend = extend;
    
    function EventsDispatcher () {
        this._subscribers = {};
    }
    
    EventsDispatcher.prototype.subscribe = function subscribe (eventName, callback) {
        if (!this._subscribers[eventName]) {
            this._subscribers[eventName] = [];
        }
        
        this._subscribers[eventName].push(callback);
    };
    
    EventsDispatcher.prototype.publish = function subscribe (eventName, data) {
        var i;
        
        if (!this._subscribers[eventName]) {
            return;
        }
        
        for (i = this._subscribers[eventName].length - 1; i >= 0; i--) {
            this._subscribers[eventName][i](data);
        }
    };
    
    ns.eventsDispatcher = new EventsDispatcher();
    
    window.app = ns;
    
}(window));