sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.nl4b.projectforcustomers',
            componentId: 'CustomersList',
            entitySet: 'Customers'
        },
        AdditionalCustomListReportDefinition
    );
});