/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	electronOptions: {
	    webPreferences: {
	      webviewTag: true
	    }
	  },	
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_center",
			config: {
				displayType: "both", // options: digital, analog, both
				showWeek: true,
				dateFormat: "dddd DD MMMM YYYY",
		//	/* specific to the analog clock */
				analogSize: "200px",
				analogFace: "face-003", // options: 'none', 'simple', 'face-###' (where ### is 001 to 012 inclusive)
				analogPlacement: "left", // options: 'top', 'bottom', 'left', 'right'
				analogShowDate: "false", // options: false, 'top', or 'bottom'
				secondsColor: "#888888",
				timezone: null,
				lat: -26.0664766,
				lon:  27.9584085
				}
		},
		{
			module: "weatherforecast",
			position: "top_left",
			header: "Weather Forecast",
			config: {
				location: "Johannesburg",
				locationID: "993800", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
				showRainAmount: true,

				}
		},
		{
			module: "calendar",
			header: "CALENDAR",
			position: "top_left",
			config: {
        maxTitleLength: 20,
        urgency: 1,
        timeFormat: "absolute",
        dateFormat: "ddd DD MMM",
        fullDayEventDateFormat: "ddd DD MMM",
				calendars: [
				{
				symbol:"eye",
				url: "webcal://calendar.google.com/calendar/ical/cobus.briel%40gmail.com/private-$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$/basic.ics",
				},
				{
				symbol:"calendar",
				url: "https://calendar.google.com/calendar/ical/en.sa%23holiday%40group.v.calendar.google.com/public/basic.ics",
				},
				{				
				symbol: "calendar-check",
				url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"	
				},
			]
			}
		},
		{
		  module: 'MMM-Multimonth',
			position: 'top_left', // can be any of the postions
			config: {  
				startMonth: 0, 
				monthCount: 2,  
				monthsVertical: true,
				repeatWeekdaysVertical: true,
				weekNumbers: false,
				highlightWeekend: true,
				}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Johannesburg",
				locationID: "993800", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
				appendLocationNameToHeader: false,
				showFeelsLike: false,
			}
		},
		{
			module: "MMM-DHT-Sensors",
			position: "top_right",
			config: {
			}
		},
		{
			module: 'MMM-CurrencyExchange',
			header: "FOREIGN EXCHANGE",
			position: 'top_left',
			config: {
        access_key: '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$',  // Cobus
        base: 'ZAR',
        symbols: ['EUR', 'AUD', 'USD', 'GBP']
          }
		},
		{
		  	module: 'worldclock',
			header: 'World Clock',
		  	position: 'top_left', // This can be any of the regions, best results in top_left or top_right regions
		  	config: {
		    // See 'Configuration options' for more information.

		    timeFormat: 'hh:mm A', //defined in moment.js format()
		    style: 'top', //predefined 4 styles; 'top', 'left','right','bottom'
		    offsetTimezone: null, // Or you can set `Europe/Berlin` to get timegap difference from this timezone. `null` will be UTC timegap.
		    clocks: [
		    	//  	{
			//  	title: "Home",
		      	//	},
     			{
        		title: "NASHVILLE", // Too long title could cause ugly text align.
        		timezone: "America/Chicago", //When omitted, Localtime will be displayed. It might be not your purporse, I bet.
        		flag: "us",
      			},
			    {
        		title: "LONDON",
			      timezone: "Europe/Belfast",
			      flag: "gb",
      			},
			    {
        		title: "PERTH",
			      timezone: "Australia/Perth",
			      flag: "au",
      			},
     			{
        		title: "AUCKLAND",
			      timezone: "Antarctica/McMurdo",
			      flag: "nz",
      			},
		    ]
		  }
		},
		{
		module: 'MMM-Lunartic',
		header: "MOON PHASES",
		position: 'top_left',       // Best in left, center, or right regions
		config: {
		            mode: "static",     // rotating or static
		            image: "current",   // animation, current, DayNight or static
		            distance: "km",     // miles or km
			    sounds: "no",       // howling wolf, only on a full moon
		            maxWidth: "300px",
		            animationSpeed: 0,
		            rotateInterval: 15000,
		        }
    		},
		{
		  	module: "MMM-NowPlayingOnSpotify",
		  	position: "top_right",		
		  	config: {
			    clientID: "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
			    clientSecret: "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
			    accessToken: "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
			    refreshToken: "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
			  }
		},
		{
		module: 'MMM-iFrame',
	//	header: "N1 North ~ MALIBONGWE & WILLIAM NICOL",
		position: 'bottom_right',	    // This can be any of the regions.
		config: {
				// See 'Configuration options' for more information.
				//	url: ["https://www.i-traffic.co.za/map/Cctv/GP%20CCTV%20N1%20612--2", "https://www.i-traffic.co.za/map/Cctv/GP%20CCTV%20N1%20612--2"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					url: ["https://www.i-traffic.co.za/map/Cctv/GP%20CCTV%20N1%20610--2", "https://www.i-traffic.co.za/map/Cctv/GP%20CCTV%20N1%20611--2"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 2 * 60 * 1000,  // rotate URLs every 30 seconds
					width: "640",	        // width of iframe
					height: "350",	      // height of iframe
					frameWidth: "350"     // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
				}
		},
		{
		module: 'MMM-NetworkScanner',
		header: "WiFi Activity",
		position: 'top_left', 
		config: {
		            devices: [
		{ ipAddress: "github.com", name: "Github", icon: "globe"},
//		{ macAddress: "1a:1b:1c:1a:1b:1c", name: "Server", icon: "server"},
//		{ macAddress: "2a:2b:2c:2a:2b:2c", name: "Desktop", icon: "desktop"},
		{ ipAddress: "10.1.1.10", name: "Laptop", icon: "laptop"},
		{ macAddress: "92:A4:03:81:3B:6B", name: "Samsung CB Note20", icon: "android"},
		{ macAddress: "CC:4B:73:8F:D6:EA", name: "Switch X CB", icon: "android"},
		{ macAddress: "f8:84:f2:a3:63:83", name: "Samsung Caroline", icon: "android"},
		{ macAddress: "d4:38:9c:bc:53:d6", name: "Sony AC", icon: "user"},
		{ macAddress: "c4:73:1e:40:0f:75", name: "Samsung TV CB", icon: "desktop"},
		{ macAddress: "10:13:31:a1:96:fc", name: "Router CB", icon: "wifi"},
		{ macAddress: "e0:d4:5e:5d:07:b3", name: "Desktop PC CB", icon: "windows"},
		{ macAddress: "b8:27:eb:85:66:37", name: "Kodi RetroPi CB", icon: "raspberry"},
		{ macAddress: "00:ce:40:01:ee:ae", name: "Media3D CB", icon: "youtube"},
		{ macAddress: "00:7c:2d:f3:66:4a", name: "Caroline TV", icon: "youtube"},
		{ macAddress: "b8:25:eb:02:b3:c6", name: "Smart Mirror CB", icon: "raspberry-pi"},
		{ macAddress: "30:df:b7:32:de:4e", name: "Google Mini CB", icon: "google"},
		{ macAddress: "40:3f:8c:c4:f1:0a", name: "Mariola Cam", icon: "video"},
		{ macAddress: "B4:27:EB:E5:7F:B8", name: "3D Octoprint", icon: "cubes"},
		                ],
				network: "192.168.1.1/24",
		            	showUnknown: true,
		            	showOffline: false,
		            	keepAlive: 360,
		            	updateInterval: 120,
	        		}        
	    	},
		{
		  module: "MMM-Detector",
		  position: "top_right",
		  configDeepMerge: true,
		  config: {
		    debug: false,
		  }
		},
		{
		  module: "MMM-GoogleAssistant",
		  position: "top_left",
		  configDeepMerge: true,
		  config: {
		    debug: false,
		assistantConfig: {
		      lang: "en-GB",
		      latitude: -26.0664766,
		      longitude: 27.9584085
				},
		Extented: 	{
		      useEXT: true,
			deviceName: "SmartMirror",
  			stopCommand: "stop",
        
		youtube: 	{
			useYoutube: true,
	 		youtubeCommand: "youtube",
			displayResponse: true,
			useVLC: true,
			minVolume: 30,
			maxVolume: 100
				},
		links: 		{
			useLinks: true,
			displayDelay: 45 * 1000,
			scrollActivate: false,
			scrollStep: 25,
			scrollInterval: 1000,
			scrollStart: 5000
				},
		welcome:	{
			  useWelcome: true,
			  welcome: "brief today"
				},
		cast: 		{
			useCast: true,
			port: 8569
				},
		    		},
		NPMCheck: {
			useChecker: true,
		  	delay: 10 * 60 * 1000,
		  	useAlert: true
				        }
		  	}
		},
		{
			  module: 'MMM-TelegramBot',
			  position: 'bottom_center',
			  config: {
			    telegramAPIKey : '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$',
			    allowedUser : [ 'CobusBriel' ],
			    adminChatId : $$$$$$$$$$,
			    useWelcomeMessage: false,
			    verbose: false,

			    favourites:["/commands", "/stop", "/clean", "/reboot", "/shutdown"],
			    screenshotScript: "scrot",
			    detailOption: {},
			    customCommands: [],
			    telecast: true, // true or chat_id
			    telecastLife: 1000 * 60 * 60 * 17,
			    telecastLimit: 12,
			    telecastHideOverflow: true,
			    commandAllowed: {},
			    useSoundNotification: true,
			    dateFormat: "DD-MM-YYYY HH:mm:ss",
			    telecastContainer: 450,
			    TelegramBotServiceAlerte: true
		  		}
		  },
		  {
		  module: "MMM-Alexa",
		  position: "top_right",
      configDeepMerge: true,
      config: {
          avs: {
            ProductID: "Alexa",
            ClientID: "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
            ClientSecret: "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
            InitialCode: "$$$$$$$$$$$$$$$$$$$$",
            deviceSerialNumber: 1234
              }
          }
		  },
      {
      module: 'MMM-COVID19-SPARKLINE',
      position: "bottom_center",
      config : {
        worldStats: false,
        sparklines: true,
        sparklineWidth: 150,
        sparklineHeight: 65,
        sparklineDays: 30,            // configure as zero to get ALL days
        sparklineDeltavsDaily: true,  //will show Delta vs Daily plot in first position, see https://www.youtube.com/watch?v=54XLXg4fYsc
        sortby: "confirmed",          // the column to sort the output by
        columns: ["confirmed"],       // default columns to d
        countries: [ "South Africa" ], 
        updateInterval: 1000 * 60 * 60 * 3, 
        infoRowClass: "medium",       // small, medium or big
        headerRowClass: "medium",     // small, medium or big
        fadeSpeed: 1000,
        showDelta: true,              // whether or not to show change from last reading, will also show delta plot if sparklines are on
        showDeltaPlotNDays: 7,        // for the delta plot, show the plot as a
        sparklineDeathScale: -4,      //show the deaths curve with this scaling; use negative number to show deaths inverted
        showDelimiter: true
                }
		    },
        {
			  module: "newsfeed",
			  position: "bottom_bar",
			  config: {
          feeds: [
                {
          title: "EWN",
          url: "https://ewn.co.za/RSS%20Feeds/Latest%20News"
                }
              ],
          showSourceTitle: true,
          showPublishDate: true,
          broadcastNewsFeeds: true,
          broadcastNewsUpdates: true,
                 }
		     },
         {
            module: 'MMM-Bingmap',
            position: 'bottom_bar',
            config: {
              latitude: '-26.0460', 	// Centre of Map. Use Google 
              longitude: '28.0131', 
              mapzoom: '13', 		      // 1 - 21
              map_width: '1300',
              map_hight: '420', 	
              appid: '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', // Your Bing maps api key
      //		**** PushPin A ****
              lat_a: '-26.0669',
              lon_a: '27.9590',
              style_a: '51',		      // 0 - 112
              text_a: 'H',		        // Text in PushPin
      //		**** PushPin B ****
              lat_b: '-26.0245',	
              lon_b: '28.0135',
              style_b: '51',		
              text_b: 'W'
                      }
         },
         {
            module: "MMM-PIR-Sensor",
            config:  {
              sensorPin: 24,
              sensorState: 1,
              relayPin: 17,	
              relayState: 0,
              powerSavingDelay: 45 * 60, // how long the monitor will be turned on
                      }
		      },
	  ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
