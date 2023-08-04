var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xrZTd6aDFmMTU4MzNscXQ3aXo3NHM0MiJ9.9WOQFlDOK6mQq1LBfZJWXQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Don\'t Give Me That Altitude',
    subtitle: 'A Pedestrian Alternative to Commuting on Broadway',
    byline: 'By Rob Reid | 23 July',
    footer: 'Methodology and data: see <a href="https://github.com/reliablerascal/commute_hills">GitHub repository</a><br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'full',
            hidden: false,
            //title: '',
            image: './images/riverside_bridge_near_hi_rez.jpeg',
            description: 'The shortest distance between two points is a line, maybe, if you\'re a crow or some other winged creature that can fly right over hills.<p>Google Maps, when it\'s called upon to provide walking directions, at least reckons with the concrete world. It steers us around highway embankments and brick buildings, along proper streets.<p>But it doesn\'t reckon with a basic feature of the earth\'s topography- valleys, and the hills that follow them.',
            location: {
                center: [-73.94594, 40.83288],
                zoom: 13.00,
                pitch: 0.00,
                bearing: 28.00,
                speed: 2
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
            onChapterExit: []
        },



        {
            id: 'broadway_155',
            alignment: 'left',
            hidden: false,
            title: 'Broadway and 155th (Elevation = 35 meters)',
            image: './images/broadway_155th.jpeg',
            description: 'Several days a week this summer, I walked from my home in Washington Heights to class at Columbia\'s Pulitzer Hall at 116th and Broadway. Since I live near Broadway, it makes sense that Google Maps would guide me down the straight and produce-stand-lined path for most of the trek from Washington Heights to Morningside Heights.',
            location: {
                center: [-73.94594, 40.83288],
                zoom: 16.00,
                pitch: 0.00,
                bearing: 28.00,
                speed: 2
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
            id: 'broadway_133',
            alignment: 'left',
            hidden: false,
            title: 'Broadway and 133rd (Elevation = 16 meters)',
            image: './images/broadway_133rd.jpeg',
            description: 'Heading south on Broadway into the mid 130s, the 1 subway train seems to rise above Broadway. Looked at another way, it\'s technically Broadway that descends below the 1 train as it slopes down into the valley of Manhattanville.',
            location: {
                center: [-73.95573, 40.81877],
                zoom: 16.00,
                pitch: 0.00,
                bearing: 28.00,
                speed: 2
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'broadway_131_view',
            alignment: 'left',
            hidden: false,
            title: 'View to the East from Broadway and 131st',
            image: './images/broadway_131st_view_east.jpeg',
            description: 'Looking to the west, the highrises of New Jersey and the high bridge of Riverside Drive loom on the horizon.',
            location: {
                center: [-73.95708, 40.81761],
                zoom: 16.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'broadway_125',
            alignment: 'left',
            hidden: false,
            title: 'Broadway and 125th (Elevation = 7 meters)',
            image: './images/broadway_125th.jpeg',
            description: 'Near the 125th train station, Broadway hits the base of the valley. The train track is a good <a href="https://en.wikipedia.org/wiki/125th_Street_station_(IRT_Broadway%E2%80%93Seventh_Avenue_Line)#cite_note-:0-16" target="_blank">sixteen meters off the ground</a> at this point.<p>Moving past the station, Broadway begins a steady uphill ascent. The ascent is especially noticeable if you\'re carrying a 10 kilogram backpack on a summer day when the heat index climbs into the mid 90 degrees.',
            location: {
                center: [-73.95805, 40.81563],
                zoom: 16.00,
                pitch: 0.00,
                bearing: 28.00,
                speed: 2
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'broadway_116 (Elevation = 42 meters)',
            alignment: 'left',
            hidden: false,
            title: 'Broadway and 116th',
            image: './images/broadway_116th.jpeg',
            description: 'Though rival Ivy League schools more frequently <a href="https://alumni.cornell.edu/cornellians/uphill-both-ways/" target="_blank">claim to be</a> the <a href="https://www.dartmouth.edu/library/digital/publishing/books/hill1964/" target="_blank">College on the Hill</a>, Columbia is also on a hill, albeit obscured by the dense urban landscape.',
            location: {
                center: [-73.96366, 40.80800],
                zoom: 16.00,
                pitch: 0.00,
                bearing: 28.00,
                speed: 2
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },




        {
            id: 'broadway_elevation',
            alignment: 'full',
            hidden: false,
            title: 'Peaks and Valleys: Change in Elevation on Broadway from 156th to 116th',
            image: './images/broadway_elevation.svg',
            description: 'Based on GPX track data exported from <a href="https://www.alltrails.com/" target="blank">Alltrails</a>, a significant downward slope on Broadway begins at 139th and continues to 125th. At that point Broadway transitions to a steady upward climb to Columbia\'s campus at 116th. These inflection points at 139th and 125th divide the commute route into three natural segments.',
            location: {
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },




        {
            id: 'riverside_149',
            alignment: 'right',
            hidden: false,
            title: 'The Riverside Alternative',
            image: './images/riverside_149th.jpeg',
            description: 'Riverside Drive offers a tree-lined and non-commercial alternative to Broadway. The route is a bit longer in distance, which perhaps explains why it\'s not Google Maps\'s recommended route for most of the walk.',
            location: {
                center: [-73.95012, 40.82963],
                zoom: 16.00,
                pitch: 0.00,
                bearing: 28.00,
                speed: 2
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'riverside_bridge',
            alignment: 'right',
            hidden: false,
            title: 'A Bridge for Your Convenience (Elevation = 24 meters)',
            image: './images/riverside_bridge_near.jpeg',
            description: 'While Broadway at 125th bottoms out at about 7 meters in altitude, the Riverside Drive Viaduct elevates the street <a href="https://www.google.com/books/edition/Transactions_of_the_Association_of_Civil/5JdAAQAAMAAJ?hl=en&gbpv=1&dq=Transactions+of+the+Association+of+Civil+Engineers+of+Cornell+University,+1901,+%22Riverside+Viaduct,%22&pg=RA3-PA94&printsec=frontcover" target="_blank">over Manhattanville Valley</a>. Built in 1901, the girders over 125th were the largest ever built at the time.',
            location: {
            center: [-73.96042, 40.81783],
            zoom: 16.00,
                pitch: 0.00,
                bearing: 28.00,
                speed: 2
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'riverside_elevation',
            alignment: 'full',
            hidden: false,
            title: 'A More Even Keel: Change in Elevation on Riverside from 156th to 116th',
            image: './images/riverside_elevation.svg',
            description: 'Based on GPX track data exported from <a href="https://www.alltrails.com/" target="blank">Alltrails</a> and <a href="https://earth.google.com/web/" target="_blank">Google Earth</a>, Riverside features smaller elevation fluctuations than Broadway while gradually ascending to 42 meters at 116th and Broadway.',
            location: {
                center: [-73.96366, 40.80800],
                zoom: 13.00,
                pitch: 0.00,
                bearing: 28.00,
                speed: 2
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'energy_comparison',
            alignment: 'full',
            hidden: false,
            title: 'Computing the Commute',
            image: './images/dw_commute_distance_calories.svg',
            description: 'My subjective experience is that Riverside is a more pleasant walk than Broadway, despite the slightly longer distance.<p>Calculating the energy required to walk each route by an estimate of calories consumed <a href="https://www.verywellfit.com/how-many-more-calories-do-you-burn-walking-uphill-3975557" target="_blank">based on distance and slope</a>, however, shows that Riverside is slightly longer and requires slightly more energy.<p>Analyzing the walk in three segments (see <a href="https://github.com/reliablerascal/commute_hills" target="_blank">GitHub for methodology</a>), the beginning (157th to 139th), the descent (139th to 125th), and the upward slope (125th to 116th), provides a more nuanced picture.',
            location: {
                center: [-73.96366, 40.80800],
                zoom: 13.00,
                pitch: 0.00,
                bearing: 28.00,
                speed: 2
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'energy_comparison',
            alignment: 'full',
            hidden: false,
            title: 'Computing the Commute',
            image: './images/dw_commute_effort.svg',
            description: 'Calculating "effort" as calories per kilometer walked, Broadway gets a little easier in the downward-sloping second segment but more challenging in the uphill third segment. Riverside, in contrast, is more evenly paced.',
            location: {
                center: [-73.96366, 40.80800],
                zoom: 13.00,
                pitch: 0.00,
                bearing: 28.00,
                speed: 2
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        
        
        {
            id: 'riverside-153',
            alignment: 'center',
            hidden: false,
            title: 'Putting the River in Riverside at 153th',
            image: './images/riverside_153_view.jpeg',
            description: 'And while Broadway offers brief glimpses of the New Jersey shore at each intersection, Riverside offers New Jersey AND the Hudson River.',
            location: {
                center: [-73.96366, 40.80800],
                zoom: 13.00,
                pitch: 0.00,
                bearing: 28.00,
                speed: 2
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
