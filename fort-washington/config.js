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
    title: 'DRAFT: The Stressful Entry to a Relaxing Fortress',
    subtitle: 'Fort Washington Park provides an escape from urban life, but navigating to the park around rail and automotive throughways reveals a patchwork of unfinished urban plans.',
    byline: 'By Rob Reid | 10 August',
    footer: 'Methodology and data: see <a href="https://github.com/reliablerascal/fort-washington-access">GitHub repository</a>.<br>Created based on the <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro_img',
            alignment: 'centered',
            hidden: false,
            //title: '',
            image: './images/001_fort_washington_park-1280-960.jpg',
            //description: 'Nestled between the Hudson River and the ceaseless flow of automotive traffic on the Henry Hudson Expressway, Fort Washington Park offers a setting for both social gatherings and solitary escapes from the concrete urban expanse above cliffs to the east. Barbecuers, basketball players, bicyclists, and joggers occupy the park'sdirt paths, paved trails, atheletic courts, and lawn.',
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
                {layer: 'path-176th', opacity:0}
            ],
            onChapterExit: []
        },
        
        
        
        {
            id: 'intro',
            alignment: 'fully',
            hidden: false,
            //title: '',
            //image: './images/001_fort_washington_park.jpeg',
            description: 'Nestled between the Hudson River and the ceaseless flow of automotive traffic on the Henry Hudson Expressway, Fort Washington Park offers both social gathering spaces and solitary escapes from the concrete urban jungle above cliffs to the east. Barbecuers, basketball players, bicyclists, and pedestrians share the park\'s dirt paths, paved trails, athletic courts, and rocky river bank.',
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
            id: 'history-3',
            alignment: 'full',
            hidden: false,
            //title: '',
            image: './images/002_topographical_history_1600_1113.jpg',
            description: 'As seen in this 1955 map of the riverside between 173rd and 176th, both the New York Central Railroad and the Henry Hudson Parkway block access to the city\'s riverfront park space. (Source: G.W. Bromley, <a href="http://digitalcollections.nypl.org/search/index?utf8=%E2%9C%93&keywords=bromley+1955" target="_blank">Manhattan land book of the city of New York</a>, 1955)',
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
            description: 'But access to the park in the 1.5 mile gap between 158th and 182nd is limited. And to this day, there is no \'official\' riverfront trail north of the George Washington Bridge connecting the park to its northern border at Dyckman Street, another 1.5 miles north.',
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
            description: 'Even fewer cross at the Haven Avenue underpass- a <a href="https://www.nytimes.com/1994/05/01/nyregion/neighborhoos-report-washington-heights-a-battle-lost-a-bridge-won.html" target="_blank">trek through deserted tunnels</a>. Isolated from both the park and the city and strewn with discarded clothes and luggage cases, the underpass offers only a temporary escape for the city\'s unhoused population, who seem to get routinely swept away by city officials.',
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
            id: 'C-trail-end',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './images/006b_182nd_crossing.jpg',
            description: 'North of the George Washington Bridge, the riverfront trail turns inland. Crossing over the Amtrak, under the the expressway, it connects to a narrow sidewalk on Riverside Drive alongside traffic.',
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
            id: 'C-alltrails',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/007a_alltrails_182_gap.png',
            description: 'It\'s not uncommon for online maps to exclude or obscure pedestrian walking paths while highlighting automotive routes. Popular hiking app <a href="https://www.alltrails.com/" target="_blank">Alltrails</a>, built on the open-source <a href="https://www.openstreetmap.org/#map=4/38.01/-95.84">Open Street Map</a>, confirms that the official riverside trail terminates north of the bridge.',
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
            description: 'But a heatmap of <em>actual</em> walking routes tracked by competing app <a href="https://www.strava.com/" target="_blank">Strava</a> shows that some people do continue north, as indicated by a faint maroon line along the riverfront.',
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
            description: 'Satellite imagery from <a href="https://www.google.com/maps" target="_blank">Google Maps</a> clearly shows a path continuing north between the river and the Amtrak rails.',
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
            id: 'C-social-trail-entry',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/009_social_entry_south.jpeg',
            description: 'Once I knew that a riverfront trail existed, it was easy to notice the trail spur alongside the fence just before the bridge crossing the train tracks.',
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
            id: 'C-social-doc',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/010_social_dock.jpg',
            description: 'Though I encountered only one other person on the trail, I saw clear signs that it\'d been used extensively. This makeshift dock suggests an ambitious fishing endeavor.',
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
            image: './images/011_social_riverside.jpeg',
            description: 'Pinched between the Hudson and the fence barricading Amtrak\'s rails, the trail offered unobstructed views of the river, the George Washington Bridge, and the New Jersey Palisades. But it\'s clearly not set up to support heavy traffic. Railroad ballast supporting some especially narrow stretches of the trail threatens to break up into the river.',
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
            id: 'C-social-trail-about',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './images/002_topographical_history.jpg',
            description: 'Though there was no clear indication that this path is prohibited, I would later learn that the connector trail is what is known as a <em>social trail</em>. According to the National Park Service, a <a href="https://www.nps.gov/articles/000/social-trails.htm#:~:text=A%20social%20trail%20is%20an,look%20like%20an%20official%20trail.&text=To%20set%20a%20good%20example,day%2C%20stay%20on%20designated%20trails" target="_blank">social trail is an unofficial detour created by hikers</a> that gets worn down to the point of <em>appearing</em> to be an official trail.<p>The National Park Service warns that use of these trails can result in ecological damage. And park stewards note that <a href="https://www.reddit.com/r/openstreetmap/comments/ozz4zx/comment/h84912u/?utm_source=share&utm_medium=android_app&utm_name=androidcss&utm_term=2&utm_content=share_button&rdt=48941&onetap_auto=true" target="_blank">hiding these social trails from official maps is a deliberate choice</a>- reflecting ecological concerns as well as legal public access, safety, and maintenance considerations.',
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
            image: './images/012_social_outside_rail.jpeg',
            description: 'At the same time, there\'s clear evidence that the path is widely used, and that public support could exist for developing the trail.',
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
            id: 'C-social-Guthrie1',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/013_social_north_entry.jpg',
            description: 'At the other end of the trail, there was a sign clearly stating, "No public access beyond this point." [NEED TO GO BACK AND GET A PHOTO OF THIS] It would seem that the trail is legal going north, but illegal going south. This calls to mind a famous song.',
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
            id: 'C-social-Guthrie2',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './images/009_social_entry_south.jpeg',
            description: '<div align="right"><em>As I went walking I saw a sign there,<br>And on the sign it said "No Trespassing."<br>But on the other side it didn\'t say nothing.<br>That side was made for you and me.</em><br>-Arlo Guthrie</div>',
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
            id: 'trail-plans',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './images/014_fort_washington_park.jpeg',
            description: 'Discussion about extending the path dates back to at least 1917, when the city <a href="https://www.forttryonparktrust.org/wp-content/uploads/2017/05/1983FortTryonPark-LPC.pdf" target="_blank">spurned John D. Rockefeller Jr.\'s conditional offer</a> of the land that\'s now Fort Tryon park. The city could not commit to honor Rockefeller\'s expectation that the park be connected to Fort Washington Park.<p>More recently, the city estimated it would cost $22 million to essentially <a href="https://www.nytimes.com/2014/08/15/nyregion/new-riverside-trail-goes-only-so-far.html" target="_blank">transform the social trail to an official trail</a>- a cost elevated by a need for landfill to create enough space for pavement along the shoreline.',
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
                {layer: 'path-main', opacity:1},
                {layer: 'path-social', opacity:1},
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-165th', opacity:1},
                {layer: 'path-176th', opacity:1}
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'conclusion',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/014_fort_washington_park.jpeg',
            description: 'To this day, competition with expressway and rail access as well as the cost of maintaining walking trails limits public access to Fort Washington Park along the Hudson shoreline. But perhaps the resulting isolation is part of the park\'s charm.',
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
        },
        {
            id: 'credits',
            alignment: 'left',
            hidden: true,
            //title: '',
            //image: './images/012_fort_washington_park.jpeg',
            //description: 'Rehash the land use conflicts: highway traffic (165th), train (social trail), land acquisition (secured!), Limited access makes the park isolated…but isolation may be part of the charm.',
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
