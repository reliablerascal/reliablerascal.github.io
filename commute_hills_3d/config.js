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
    subtitle: 'An Easier Way to Commute on Broadway',
    byline: 'By Rob Reid',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Awn Broadway',
            image: './images/riverside_bridge_near.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },



        {
            id: 'intro',
            alignment: 'full',
            hidden: false,
            title: 'Awn Broadway',
            image: './images/riverside_bridge_near.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },



        {
            id: 'broadway_155',
            alignment: 'left',
            hidden: false,
            title: 'drive 0',
            image: './images/broadway_155th.jpeg',
            description: 'As you can see.',
            location: {
                center: [-73.94594, 40.83288],
                zoom: 16.45,
                pitch: 0.00,
                bearing: 28.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'broadway_133',
            alignment: 'left',
            hidden: false,
            title: '133rd',
            image: './images/broadway_133rd.jpeg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.95573, 40.81877],
                zoom: 16.39,
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
            id: 'broadway_131_view',
            alignment: 'left',
            hidden: false,
            title: '133rd',
            image: './images/broadway_131st_view_east.jpeg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.95573, 40.81877],
                zoom: 16.39,
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
            title: 'Third Title',
            image: './images/broadway_125th.jpeg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.95805, 40.81563],
                zoom: 16.36,
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
            id: 'broadway_116',
            alignment: 'full',
            hidden: false,
            title: 'Third Title',
            image: './images/broadway_116th.jpeg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.96366, 40.80800],
                zoom: 16.44,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }



        {
            id: 'riverside_149',
            alignment: 'full',
            hidden: false,
            title: 'Third Title',
            image: './images/riverside_149th.jpeg',
            description: 'Copy these sections to add to your story.',
            location: {
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }



        {
            id: 'broadway_elevation',
            alignment: 'full',
            hidden: false,
            title: 'Third Title',
            image: './images/broadway_elevation.svg',
            description: 'Copy these sections to add to your story.',
            location: {
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }



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
        }



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
