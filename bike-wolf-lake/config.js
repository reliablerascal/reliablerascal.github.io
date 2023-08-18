var config = {
    style: 'mapbox://styles/robcat26/cllfi4uo901m701qleb6n02ik',
    accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xrZTBrejIwMHp0YjNmcXZiaWN1enZwNiJ9._g79-Ecyuo5ahLVN3pyZZw',

    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'PROTOTYPE- Far South Side Bike Access',
    subtitle: 'Fort Washington Park provides an escape from urban life, but navigating to the park around rail and automotive throughways reveals a patchwork of unfinished urban plans.',
    byline: 'By Rob Reid | 18 August',
    footer: 'See GitHub repository for methodology and data.<br>Created based on the <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    leadPhoto: './images/wolf-lake.png',
    chapters: [
        {
            id: 'header-photo',
            alignment: 'full',
            hidden: true,
            //title: '',
            //image: './images/wash_park_scene_without_ppl.jpg',
            //description: 'Nestled between the Hudson River and the ceaseless flow of automotive traffic on the Henry Hudson Expressway, Fort Washington Park offers a setting for both social gatherings and solitary escapes from the concrete urban expanse above cliffs to the east. Barbecuers, basketball players, bicyclists, and joggers occupy the park'sdirt paths, paved trails, atheletic courts, and lawn.',
            //and the The Oxford English dictionary defines a fort as a person or thing not susceptible to outside influence or disturbance.',
            location: {
                center: [-87.61265, 41.85399],
                zoom: 9.81,
                pitch: 77.00,
                bearing: 0.00
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
                {layer: 'bike-path-dot', opacity:0},
                {layer: 'mapbox-satellite', opacity:0}
            ],
            onChapterExit: []
        },
        
        
        
        {
            id: 'zoom-to-scene',
            alignment: 'left',
            hidden: false,
            description: 'something something southeast side industrial wetlands.',
            location: {
                center: [-87.54426, 41.68283],
                zoom: 12.75,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'mapbox-satellite', opacity:0}  
            ],
            onChapterExit: [
                {layer: 'mapbox-satellite', opacity:0}
            ]
        },



        {
            id: 'henry-booth',
            alignment: 'left',
            hidden: false,
            image: './images/henry-booth-house.png',
            description: 'The route begins at Henry Booth House.',
            location: {
                center: [-87.55685590723697,
                    41.659210130018266],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'henry-booth', opacity:1},
                {layer: 'bike-path-dot', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                {layer: 'henry-booth', opacity:0}  
            ]
        },



        {
            id: '130th-baltimore',
            alignment: 'left',
            hidden: false,
            image: './images/baltimore-130th-bike-lane.png',
            description: 'bike path on bmore.',
            location: {
                center: [-87.54712353449469,
                    41.65908775402073],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: '130th-baltimore', opacity:1},
                {layer: 'bike-path-dot', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                {layer: '130th-baltimore', opacity:0}       
            ]
        },



        {
            id: 'wolf-lake',
            alignment: 'left',
            hidden: false,
            image: './images/wolf-lake.png',
            description: 'wolf lake share w cars.',
            location: {
                center: [-87.53725587019011,
                    41.66690509686575],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'wolf-lake', opacity:1},
                {layer: 'bike-path-dot', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                {layer: 'wolf-lake', opacity:0} 
            ]
        },



        {
            id: '106th-ewing',
            alignment: 'left',
            hidden: false,
            image: './images/106-ewing.png',
            description: 'need to walk 106th.',
            location: {
                center: [-87.53512142817937,
                    41.70275978503426],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: '106th-ewing', opacity:1},
                {layer: 'bike-path-dot', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                {layer: '106th-ewing', opacity:0}
            ]
        },



        {
            id: '100th-viaduct',
            alignment: 'left',
            hidden: false,
            image: './images/100th-viaduct.png',
            description: 'viaduct under expressway and rail.',
            location: {
                center: [-87.53510682861177,
                    41.71358357592675],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: '100th-viaduct', opacity:1},
                {layer: 'bike-path-dot', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                {layer: '100th-viaduct', opacity:0}
            ]
        },



        {
            id: 'calumet-beach',
            alignment: 'left',
            hidden: false,
            image: './images/calumet-park-beach.png',
            description: 'calumet beach.',
            location: {
                center: [-87.52929693758914,
                    41.714936581261895],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'calumet-beach', opacity:1},
                {layer: 'bike-path-dot', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                {layer: 'calumet-beach', opacity:0}
            ]
        }
        
        
        
//end chapters


    ]
};
