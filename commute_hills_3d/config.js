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
    subtitle: 'Pedestrian Commuting on Broadway',
    byline: 'By Rob Reid | 23 July',
    footer: 'Methodology: see <a href="https://github.com/reliablerascal/scrollydrive">GitHub repository</a> <br>Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'full',
            hidden: false,
            //title: '',
            image: './images/riverside_bridge_near.jpeg',
            description: 'The shortest distance between two points is a line, sometimes, maybe if you\'re a crow or some other winged creature that can fly right over hills.<p>Google Maps, when it\'s called upon to provide walking directions, at least reckons with the concrete world, steering around highway embankments and brick buildings along proper streets. But it doesn\'t reckon with a basic feature of the earth\'s topography- valleys, and the hills that follow them.',
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
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'broadway_155',
            alignment: 'left',
            hidden: false,
            title: 'Broadway and 155th',
            image: './images/broadway_155th.jpeg',
            description: 'Several days a week this summer, I walked to class at Columbia\'s Pulitzer Hall at 116th and Broadway. Since I live near Broadway, it makes perfect sense that Google Maps would guide me down the straight and plantain-lined path from Washington Heights to Morningside Heights.',
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
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'broadway_133',
            alignment: 'left',
            hidden: false,
            title: 'Broadway and 133rd',
            image: './images/broadway_133rd.jpeg',
            description: 'Heading south on Broadway into the mid 130s, the 1 train seems to rise above Broadway. Looked at another way, Broadway descends below the 1 train as it continues into the valley of Manhattanville.',
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
            description: 'Glancing to the east of Broadway, Cliffside Park New Jersey is visible across the Hudson. But there\'s also a high bridge just a couple blocks east before the shoreline.',
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
            title: 'Broadway and 125th (Altitude = 7 meters)',
            image: './images/broadway_125th.jpeg',
            description: 'Near the 125th train station, Broadway hits the base of the valley. The train is a good twenty feet off the ground, and continuing to the south Broadway begins a steady uphill ascent. The ascent is notable if you\'re carrying a 20-pound backpack, especially as the summer heat index regularly climbs into the mid to high 90s.',
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
            id: 'broadway_116 (Altitude = 42 meters)',
            alignment: 'left',
            hidden: false,
            title: 'Broadway and 116th',
            image: './images/broadway_116th.jpeg',
            description: 'Copy these sections to add to your story.',
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
            id: 'riverside_149',
            alignment: 'right',
            hidden: false,
            title: 'The Riverside Alternative',
            image: './images/riverside_149th.jpeg',
            description: 'Copy these sections to add to your story.',
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
            title: 'A Bridge for Your Convenience',
            image: './images/riverside_bridge_near.jpeg',
            description: 'Copy these sections to add to your story.',
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
            id: 'broadway_elevation',
            alignment: 'full',
            hidden: false,
            title: 'A Bridge for Your Convenience',
            image: './images/broadway_elevation.svg',
            description: 'Copy these sections to add to your story.',
            location: {
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
            title: 'Third Title',
            image: './images/riverside_elevation.svg',
            description: 'Copy these sections to add to your story.',
            location: {
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
            title: 'Third Title',
            image: './images/dw_commute_riverside_v_broadway.png',
            description: 'Copy these sections to add to your story.',
            location: {
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
