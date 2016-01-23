'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
// additional requires

ViewModel = new Observable({

    pageTitle: 'My Rental History',
    // additional properties
});

// START_CUSTOM_CODE_myRentalHistoryView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_myRentalHistoryView
module.exports = ViewModel;