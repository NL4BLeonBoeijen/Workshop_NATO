sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'projectcustomers/test/integration/pages/MainListReport' ,
        'projectcustomers/test/integration/pages/MainObjectPage',
        'projectcustomers/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('projectcustomers') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);