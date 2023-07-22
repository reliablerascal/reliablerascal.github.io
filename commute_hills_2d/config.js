//SATURDAY MORNING VERSION
// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 5;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 14;
var followBearing = 29;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    // style: 'mapbox://styles/mapbox/satellite-v8',
    // style: 'mapbox://styles/mapbox/outdoors-v10',
    accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xrZTd6aDFmMTU4MzNscXQ3aXo3NHM0MiJ9.9WOQFlDOK6mQq1LBfZJWXQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slide-0',
            title: 'On Broadway',
            image: './images/riverside_bridge_near.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-73.94594, 40.83288],
zoom: 16.45,
pitch: 0.00,
bearing: 28.00

            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: 'drive 0',
            image: './images/broadway_155th.jpeg',
            description: 'As you can see.',
            location: {
                // location information is from the drive route
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: 'drive 1',
            image: './images/broadway_133rd.jpeg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.95573, 40.81877],
                zoom: 16.39,
                pitch: 0.00,
                bearing: 28.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: 'Looking East: There\'s Got to Be a Better Way',
            image: './images/broadway_131st_view_east.jpeg',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: 'The Valley',
            image: './images/broadway_125th.jpeg',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: 'School Upon the Hill',
            image: './images/broadway_116th.jpeg',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

        // If slide ID doesn't contain the word ‘drive-’, it won't be tied to the map
        // You can add these "normal" slides anywhere, including the middle of the drive simulation
        
        {
            id: 'slide-1',
            title: 'The Riverside Alternative',
            image: './images/riverside_149th.jpeg',
            description: 'Copy these sections to add to your story.',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            title: 'A Bridge for Your Walking Convenience',
            image: './images/riverside_bridge_near.jpeg',
            description: 'Really for cars.',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
