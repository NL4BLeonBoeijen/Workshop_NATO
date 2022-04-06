sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/nl4b/projectforcustomers/test/integration/pages/MainListReport' ,
        'com/nl4b/projectforcustomers/test/integration/pages/MainObjectPage',
        'com/nl4b/projectforcustomers/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/nl4b/projectforcustomers') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);