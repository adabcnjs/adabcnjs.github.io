"use strict";

function appViewModel() {
    var self = this;
    
    this.year = new Date().getFullYear();
    this.selectedLang = "es";
    this.res = ko.observable({});
    this.events = ko.observable({});
    this.members = ko.observable({});
    
    // public methods    
    this.changeLang = function (lang) {
        if (lang != self.selectedLang) {
            self.selectedLang = lang;
            loadLang(lang);
        }
    };
    
    this.getEventCover = function (eventId) {
        if (self.events() && self.events().hasOwnProperty(eventId) && !!self.events()[eventId].cover) {
            return self.events()[eventId].cover;
        }
        return "img/events/default.jpg";
    };
    
    this.getEventPics = function (eventId) {
        if (self.events() && self.events().hasOwnProperty(eventId) && !!self.events()[eventId].pics) {
            return self.events()[eventId].pics;
        }
        return [];
    };
    
    this.getEventLinks = function (eventId) {
        if (self.events() && self.events().hasOwnProperty(eventId) && !!self.events()[eventId].links) {
            return self.events()[eventId].links;
        }
        return [];
    };
    
    // private methods
    function loadLang(lang) {
        $.getJSON("langs/" + lang + ".json", function (data) {
            self.res(data);        
        });
    }
    
    function loadEventGalleries() {
        $.getJSON("events.json", function (data) {
            self.events(data); 
        });
    }
    
    function loadMembers() {
        $.getJSON("members.json", function (data) {
            self.members(data); 
        });
    }
    
    function init() {
        loadLang(self.selectedLang);
        loadEventGalleries();
        loadMembers();
    }
    
    // initialization
    init();
}

// Activates knockout.js
ko.applyBindings(new appViewModel());