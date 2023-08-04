var config = {
    //style: 'mapbox://styles/mapbox/streets-v11',
    //accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xrdTE0ZXQ0MDllZDNtbzhhdWh2MXFneiJ9.vZY4_YLk_rxN-Wc1eE7_wQ',
    style: 'mapbox://styles/robcat26/clku8rcck001l01qgen1j4j2h',
    accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xrZTBrejIwMHp0YjNmcXZiaWN1enZwNiJ9._g79-Ecyuo5ahLVN3pyZZw',

    //my custom style and mapbox token
    //style: 'mapbox://styles/robcat26/clku8rcck001l01qgen1j4j2h',
    //accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xrZTBrejIwMHp0YjNmcXZiaWN1enZwNiJ9._g79-Ecyuo5ahLVN3pyZZw',

    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Fort Washington',
    subtitle: 'Rails vs. Roads vs. Nature',
    byline: 'By Rob Reid | 10 August',
    footer: 'Methodology and data: see <a href="https://github.com/reliablerascal/fort-washington">GitHub repository</a><br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro_img',
            alignment: 'centered',
            hidden: false,
            //title: '',
            image: './images/001_fort_washington_park.jpeg',
            //description: 'Nestled between the Hudson River and the ceaseless flow of automotive traffic on the Henry Hudson Expressway, Fort Washington Park offers a setting for both social gatherings and solitary escapes from the concrete urban expanse above cliffs to the east. Barbecuers, basketball players, bicyclists, and joggers occupy the dirt paths, paved trails, atheletic courts, and lawn.',
            //and the The Oxford English dictionary defines a fort as a person or thing not susceptible to outside influence or disturbance.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                // speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-main', opacity:0},
                {layer: 'path-social', opacity:0},
                {layer: 'path-dyckman', opacity:0},
                {layer: 'path-165th', opacity:0},
                {layer: 'path-137rd', opacity:0}
            ],
            onChapterExit: []
        },
        
        
        
        {
            id: 'intro',
            alignment: 'fully',
            hidden: false,
            //title: '',
            //image: './images/001_fort_washington_park.jpeg',
            description: 'Nestled between the Hudson River and the ceaseless flow of automotive traffic on the Henry Hudson Expressway, Fort Washington Park offers both social gathering spaces and solitary escapes from the concrete urban jungle above cliffs to the east. Barbecuers, basketball players, bicyclists, and pedestrians occupy the dirt paths, paved trails, athletic courts, and rocky river bank.',
            //and the The Oxford English dictionary defines a fort as a person or thing not susceptible to outside influence or disturbance.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                // speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            //     [{
            //     layer: 'fort-washington-park-access',
            //     opacity:1
            // }],
            onChapterExit: []
        },



        {
            id: 'history',
            alignment: 'fully',
            hidden: false,
            //title: '',
            //image: './images/002_topographical_history.jpg',
            description: 'Competing interests had long coveted the idyllic land across from the New Jersey Palisades, when the city guaranteed public access by <a href="https://www.nycgovparks.org/parks/fort-washington-park/history" target="_blank">acquiring five parcels between 1896 and 1927</a> on behalf of the park district. Transit interests staked their claims shortly thereafter.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                // speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'history-2',
            alignment: 'fully',
            hidden: false,
            //title: '',
            //image: './images/002_topographical_history.jpg',
            description: 'Construction of a bridge connecting began in 1927 as provisioned by New York and New Jersey state legislation. The city\'s West Side Improvement Plan spurred the <a href="https://www.nycgovparks.org/parks/X110/history" target="_blank">development of the Henry Hudson Parkway</a> in the 1930s. The predecessor of Amtrak\'s Empire Connection, linking Penn Station to Albany New York, further carved through the land [RESEARCH THIS].</p>',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                // speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        
        
        {
            id: 'history',
            alignment: 'full',
            hidden: false,
            //title: '',
            image: './images/002_topographical_history.jpg',
            description: 'As seen in this 1955 map of the riverside between 173rd and 176th, transit access cleaves the public land of Fort Washington Park. (Source: G.W. Bromley, <a href="http://digitalcollections.nypl.org/search/index?utf8=%E2%9C%93&keywords=bromley+1955" target="_blank">Manhattan land book of the city of New York</a>, 1955)',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                // speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        
        
        {
            id: 'show map',
            alignment: 'full',
            hidden: true,
            //title: '',
            // image: './images/002_topographical_history.jpg',
            // // description: 'Historical development competition between rail, highway, pedestrian tension still plays out today- access issues (topographical map 1955)',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                // speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-main', opacity:0}
            ],
            onChapterExit: []
        },
        
        
        
        {
            id: 'access-easy',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './images/002_topographical_history.jpg',
            description: 'Pedestrians and cyclists most commonly enter the park at 182nd just north of the George Washington Bridge, at 158th just north of Trinity Cemetery, or from points further south along the riverside trail extending to Manhattan\'s southern tip at The Battery.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-main', opacity:1}
            ],
            onChapterExit: [
            ]
        },



        {
            id: 'access-hard',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './images/002_topographical_history.jpg',
            description: 'But access to the park in the 1.5 mile gap between 158th and 182nd is limited. And to this day, there is no \'official\' route through the park connecting the 182nd Street bridge and the northern edge of the park another 1.5 miles north at Dyckman Street without walking alongside automotive traffic on Riverside Drive.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-main', opacity:1},
                {layer: 'path-165th', opacity:0}
            ],
            onChapterExit: [
                
            ]
        },



        {
            id: 'A-165th-bridge-zoom',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './images/005_165_hairy_crossing2.jpeg',
            description: 'In the early 1990s, grassroots organizers opposing development of a psychiatric facility on park land west of Riverside Drive <a href="https://www.nytimes.com/1994/05/01/nyregion/neighborhoos-report-washington-heights-a-battle-lost-a-bridge-won.html" target="_blank">won a consolation prize</a>: an access path beginning at 165th street, including a footbridge connecting to Fort Washington Park.',
            location: {
                center: [-73.94631, 40.84451],
                zoom: 15.18,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-165th', opacity:1}
            ],
            onChapterExit: [
                
            ]
        },
        
        
        
        {
            id: 'A-165th-hairy-crossing',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/005_165_hairy_crossing2.jpeg',
            description: 'Frustratingly, this path requires a <a href="https://nyc.streetsblog.org/2009/07/06/eyes-on-the-street-risking-life-and-limb-for-greenway-access" target="_blank">treacherous crossing against relentless oncoming traffic</a> entering an on-ramp to the George Washington Bridge [CONFIRM]. With no crosswalk and no stoplight, rush hour safety depends on an athletic sprint or waiting for a thoughtful driver to wave pedestrians across.<p>This winding trail is somewhat helpful for those heading north. But to get directly to the actual river only 0.1 miles west as the crow flies requires a winding mile-long journey from 165th and Riverside Drive ',
            location: {
                center: [-73.94631, 40.84451],
                zoom: 15.18,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-165th', opacity:1},
                {layer: 'path-176th', opacity:0}
            ],
            onChapterExit: []
        },
        
        
        
        {
            id: 'B-173rd-street-bridge',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/006_176_haven_underpass.jpeg',
            description: 'Even fewer cross at the Haven Avenue underpass- a <a href="https://www.nytimes.com/1994/05/01/nyregion/neighborhoos-report-washington-heights-a-battle-lost-a-bridge-won.html" target="_blank">trek through deserted tunnels</a>. Isolated from both the park and the city, strewn with discarded clothes and luggage cases, the underpass offers only a temporary escape for the city\'s unhoused population, who seem to get routinely swept away by city officials.',
            location: {
                center: [-73.94640, 40.84919],
                zoom: 15.81,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-165th', opacity:0},
                {layer: 'path-176th', opacity:1},
                {layer: 'path-dyckman', opacity:0}
            ],
            onChapterExit: []
        },



        {
            id: 'C-zoom',
            alignment: 'left',
            hidden: true,
            //title: '',
            //image: './images/002_topographical_history.jpg',
            //description: 'In 1917, John D. Rockefeller Jr. hoped to spur a connection between Fort Washington Park to the north by offering the land for Fort Tryon Park //offering that.',
            location: {
                center: [-73.94161, 40.85336],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-176th', opacity:0},
                {layer: 'path-dyckman', opacity:1}
            ],
            onChapterExit: []
        },
        {
            id: 'C-alltrails',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/007a_alltrails_182_gap.png',
            //description: 'In 1917, John D. Rockefeller Jr. hoped to spur a connection between Fort Washington Park to the north by offering the land for Fort Tryon Park //offering that.',
            location: {
                center: [-73.94161, 40.85336],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1}
            ],
            onChapterExit: []
        },
        {
            id: 'C-strava',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/007b_strava_heatmap_gwb.png',
            //description: 'In 1917, John D. Rockefeller Jr. hoped to spur a connection between Fort Washington Park to the north by offering the land for Fort Tryon Park //offering that.',
            location: {
                center: [-73.94161, 40.85336],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1}
            ],
            onChapterExit: []
        },
        {
            id: 'C-satellite',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/007c_satellite_187th_River.jpg',
            //description: 'In 1917, John D. Rockefeller Jr. hoped to spur a connection between Fort Washington Park to the north by offering the land for Fort Tryon Park //offering that.',
            location: {
                center: [-73.94161, 40.85336],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-social', opacity:0}
            ],
            onChapterExit: []
        },
        {
            id: 'C-social-trail-about',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './images/002_topographical_history.jpg',
            description: 'show it, describe what a social trail is.',
            location: {
                center: [-73.94161, 40.85336],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-social', opacity:1}
            ],
            onChapterExit: []
        },
        {
            id: 'C-social-trail-entry',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/009_social_entry_south.jpeg',
            description: '“As I went walking I saw a sign there,<br>And on the sign it said "No Trespassing."<br>But on the other side it didn\'t say nothing.<br>That side was made for you and me.”<br>-Arlo Guthrie.',
            location: {
                center: [-73.94161, 40.85336],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-social', opacity:1}
            ],
            onChapterExit: []
        },
        {
            id: 'C-social trail_riverside',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/010_social_riverside.jpeg',
            description: 'Direct conflict with train, pinched between trail and river, estimate to extend trail was $22 million.',
            location: {
                center: [-73.94161, 40.85336],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-social', opacity:1}
            ],
            onChapterExit: []
        },
        {
            id: 'C-social trail_railside',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/011_social_outside_rail.jpeg',
            description: 'Ethical considerations- maintenance, etc. Why they’re not listed on maps.',
            location: {
                center: [-73.94161, 40.85336],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-social', opacity:1},
                {layer: 'path-main', opacity:1},
                {layer: 'path-165th', opacity:0},
                {layer: 'path-176th', opacity:0}
            ],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/012_fort_washington_park.jpeg',
            description: 'Rehash the land use conflicts: highway traffic (165th), train (social trail), land acquisition (secured!), Limited access makes the park isolated…but isolation may be part of the charm.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-main', opacity:1},
                {layer: 'path-social', opacity:1},
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-165th', opacity:1},
                {layer: 'path-176th', opacity:1}
            ],
            onChapterExit: [
            ]
        }
//end chapters


    ]
};
