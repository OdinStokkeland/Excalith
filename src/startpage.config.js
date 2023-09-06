const config = {
	username: "Schmodin",
	terminal: {
		fixedheight: true,
		backgroundcolor: "#131510",
		windowcolor: "#211A10",
		glowcolor: "#A26B35"
	},
	prompt: {
		ctrlc: true,
		usercolor: "green",
		atcolor: "purple",
		hostcolor: "red",
		promptcolor: "magenta",
		promptsymbol: "❯",
		caretcolor: "green",
		selectionbg: "#e8b195",
		selectionfg: "#16161e"
	},
	colors: {
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#070606",
		red: "#F14A68",
		green: "#889B4A",
		yellow: "#F79A32",
		blue: "#2bc3de",
		cyan: "#418292",
		magenta: "#98676A",
		purple: "#BD6EC6"
	},
	nfetch: {
		timeformat: "HH:mm",
		dateformat: "DD/MM/YYYY",
		titlecolor: "yellow"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self"
	},
	commands: [
		{
			alias: "g",
			name: "Google Search",
			url: "https://google.com/search?q={}"
		},
		{
			alias: "d",
			name: "DuckDuckGo Search",
			url: "https://duckduckgo.com/?q={}"
		},
		{
			alias: "b",
			name: "Brave Search",
			url: "https://search.brave.com/search?q={}"
		},
		{
			alias: "s",
			name: "Stack Overflow Search",
			url: "https://stackoverflow.com/search?q={}"
		},
		{
			alias: "w",
			name: "Wikipedia Search",
			url: "https://en.wikipedia.org/wiki/{}"
		},
		{
			alias: "y",
			name: "Youtube Search",
			url: "https://youtube.com/search?q={}"
		}
	],
	sections: [
		{
			title: "Social",
			color: "blue",
			links: [
				{
					name: "Youtube/YT",
					url: "https://www.youtube.com/feed/subscriptions",
					icon: "simple-icons:youtube",
					target: "_self"
				},
				{
					name: "Instagram",
					url: "https://www.instagram.com/",
					icon: "simple-icons:instagram",
					target: "_self"
				},
				{
					name: "Gmail",
					url: "https://mail.google.com/mail/u/0/#inbox",
					icon: "simple-icons:gmail",
					target: "_self"
				},
				{
					name: "Twitter",
					url: "https://twitter.com/home",
					icon: "simple-icons:twitter",
					target: "_self"
				}
			]
		},
		{
			title: "News",
			color: "magenta",
			links: [
				{
					name: "NRK",
					url: "https://www.nrk.no/",
					icon: "material-symbols:newspaper",
					target: "_self"
				},
				{
					name: "TEKno",
					url: "https://www.tek.no/",
					icon: "mdi:power",
					target: "_self"
				},
				{
					name: "Reuters",
					url: "https://www.reuters.com/",
					icon: "mdi:newspaper-variant",
					target: "_self"
				},
				{
					name: "UXnorge",
					url: "https://uxnorge.no/",
					icon: "mdi:head-dots-horizontal-outline",
					target: "_self"
				}
			]
		},
		{
			title: "Education",
			color: "purple",
			links: [
				{
					name: "MineStudier",
					url: "https://minestudier.uio.no/student",
					icon: "mdi:school",
					target: "_self"
				},
				{
					name: "Drive",
					url: "https://drive.google.com/drive/my-drive",
					icon: "simple-icons:googledrive",
					target: "_self"
				},
				{
					name: "Docs",
					url: "https://docs.google.com/document/u/0/",
					icon: "mdi-file-document",
					target: "_self"
				},
				{
					name: "QuickNote",
					url: "https://www.notion.so/Quick-Note-4e50c295a88a4ba2870eada41238f153",
					icon: "mdi:book-edit",
					target: "_self"
				}
			]
		},
		{
			title: "4chan",
			color: "green",
			links: [
				{
					name: "Technology",
					url: "https://boards.4channel.org/g",
					icon: "mdi:laptop",
					target: "_self"
				},
				{
					name: "Fashion",
					url: "https://boards.4channel.org/fa",
					icon: "mdi:hanger",
					target: "_self"
				},
				{
					name: "DIY",
					url: "https://boards.4channel.org/diy",
					icon: "mdi:tools",
					target: "_selfk"
				},
				{
					name: "Music",
					url: "https://boards.4channel.org/mu",
					icon: "mdi:music",
					target: "_self"
				}
			]
		},
		{
			title: "Stores",
			color: "cyan",
			links: [
				{
					name: "Shoppinglist",
					url: "https://www.notion.so/Shopping-list-b0326d53dcea46268abe23496c37cb3b",
					icon: "mdi:cart-outline",
					target: "_self"
				},
				{
					name: "FINN",
					url: "https://www.finn.no/",
					icon: "mdi:store",
					target: "_self"
				},
				{
					name: "Aliexpress",
					url: "https://www.aliexpress.com/",
					icon: "mdi:shopping",
					target: "_self"
				},
				{
					name: "ClasOhlson",
					url: "https://www.clasohlson.com/no/",
					icon: "mdi:toolbox",
					target: "_self"
				}
			]
		},
		{
			title: "Reddit",
			color: "yellow",
			links: [
				{
					name: "Favorites",
					url: "https://www.reddit.com/user/itsneebs/m/favorites/",
					icon: "mdi:heart-box",
					target: "_self"
				},
				{
					name: "Norge",
					url: "https://www.reddit.com/r/norge/",
					icon: "material-symbols:flag",
					target: "_self"
				},
				{
					name: "Starfield",
					url: "https://www.reddit.com/r/Starfield+starfieldmods",
					icon: "mdi:moon-new",
					target: "_self"
				},
				{
					name: "EDC",
					url: "https://www.reddit.com/r/EDC/",
					icon: "mdi:box-cutter",
					target: "_self"
				}
			]
		}
	]
}

module.exports = config
