'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "Rental Cars",
    "modulePath": "components/browseRentalCarsView/browseRentalCarsView",
    "icon": "~/images/icons/organize.png"
}, {
    "title": "My Rental History",
    "modulePath": "components/myRentalHistoryView/myRentalHistoryView",
    "icon": "~/images/icons/action.png"
}, {
    "title": "Profile",
    "modulePath": "components/profileView/profileView",
    "icon": "~/images/icons/contacts.png"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;