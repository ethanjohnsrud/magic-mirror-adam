/* These are custom settings for Adam on 2-25-2023
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
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
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "MMM-Reddit",
			position: "top_right",
			config: {
				subreddit: ['theonion', 'babylonbee', 'nottheonion', 'AteTheOnion'],
				displayType: 'image',
				imageQuality: 'high',
				maxImageHeight: 400,
				count: 100,
				show: 1,
				rotateInterval: 15,
				width: 1500,
				updateInterval: 60,
				showHeader: false,
				showAll: false,
				showTitle: true,
				showSubreddit: true,
				colorText: true,
			}
		},
		{
			module: "clock",
			position: "bottom_left"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "MMM-MyScoreboard",
			position: "top_right",
			classes: "default everyone",
			header: "My Scoreboard",
			config: {
			  showLeagueSeparators: true,
			  colored: true,
			  viewStyle: "mediumLogos",
			  sports: [
					{
					league: "NHL",
					groups: ["Atlantic"]
					},
					{
					league: "NBA",
					teams: ["TOR"],
					groups: ["Pacific", "Central"]
					},
					{
					league: "MLB",
					teams: ["TOR", "CHW", "NYY"]
					},
					{
					league: "NFL",
					teams: ["BUF", "NYJ", "NYG"]
					},
					{
					league: "CFL",
					teams: ["TOR", "MTL", "OTT"]
					},
					{
					league: "NCAAM_MM",
					label: "March Madness"
					}
				],		  
			}
		  },
		  {
			module: "MMM-Jast",
			position: "bottom_right",
			config: {
				currencyStyle: "symbol", // One of ["code", "symbol", "name"]
				fadeSpeedInSeconds: 3.5,
				lastUpdateFormat: "HH:mm",
				maxChangeAge: 1 * 24 * 60 * 60 * 1000,
				maxWidth: "100%",
				numberDecimalsPercentages: 1,
				numberDecimalsValues: 2,
				scroll: "vertical", // One of ["none", "vertical", "horizontal"]
				showColors: true,
				showCurrency: true,
				showChangePercent: true,
				showChangeValue: false,
				showChangeValueCurrency: false,
				showHiddenStocks: false,
				showLastUpdate: false,
				showPortfolioValue: true,
				showPortfolioGrowthPercent: false,
				showPortfolioGrowth: false,
				updateIntervalInSeconds: 300,
				useGrouping: false,
				virtualHorizontalMultiplier: 2,
				stocks: [
					{ name: "BASF", symbol: "BAS.DE", quantity: 10 },
					{ name: "SAP", symbol: "SAP.DE", quantity: 15 },
					{ name: "Henkel", symbol: "HEN3.DE", hidden: true },
					{ name: "Alibaba", symbol: "BABA"}
				]
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
