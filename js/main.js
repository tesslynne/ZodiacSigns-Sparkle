  var zodiacSigns = [{
  		zodiac: "aries",
  		descript: "Your spirit animal is the Ram. Fiery, ambitious, driven and energetic in your path to power.",
  		yogaPose: "lorem dipsumasana"
  	},
	{	zodiac: "taurus",
  		descript: "Your spirit animal is the Bull. Seeker of worldly pleasures, stubborn to the end, stability and strength and yes, you're always right, of course, yep.",
  		yogaPose: "lorem dipsumasana"

  	},
  	{	zodiac: "gemini",
  		descript: "We think your spirit animal are conjoined hamster twins, or something akin to that. You are dual in nature, or something like that.",
  		yogaPose: "Dancing Warrior series - move from Warrior II, to 'Exalted' Warrior, to Utthita Parsvakonasana - x3 each side"
  	},
  	{ 	zodiac: "cancer",
  		descript: "Your spirit animal is the Crab. Besides being delicious while dunked in butter, you're also caring, protective and secretly sensitive.",
  		yogaPose: "Lizard Pose"
  	},
  	{ 	zodiac: "leo",
  		descript: "Your spirit animal is the Lion. Regal, fiery and strong willed.",
  		yogaPose: "Supported Bridge Pose. You get the benefits and energy of a backbend, but the support and grounding you need for your wild spirit."
  	},
  	{	zodiac: "virgo",
  		descript: "Your spirit animal is a discerning Maiden. Efficiency, practicality and organization are the trifecta of your awesomeness, and your sense of humor matches just how flawlessly filtered, organized and efficent your inbox is. Wanna come over to organize my house?",
		yogaPose: "Humble Warrior."
  	},
  	{	zodiac: "libra",
  		descript: "Your spirit object is the Scales. Supposedly balanced, fair and the 'popular' one of the 12, easily sociable and amicable.",
  		yogaPose: "Garudasana"
  	},
  	{	zodiac: "scorpio",
  		descript: "Your spirit animal is the Scorpion. Predictably, it's said your stinger is rough. You feel passionately and deeply, are sensual and moody.",
  		yogaPose: "Sleeping Pigeon."
  	},
  	{
  		zodiac: "saggitarius",
  		descript: "Your spirit animal is the mythological Centaur with its bow and arrow. Half human, half horse - wanderlust, fiery, loves new idea and philosophical, optimistic rambling that can get shut down by others setting limits.",
  		yogaPose: "Dhanurasana - upward bow pose."
	},
	{
  		zodiac: "capricorn",
  		descript: "Your spirit animal is the Mountain Goat. Calculating, steady and reserved with a tenaceous streak, you scale the mountain of your success with grace.",
		yogaPose: "Gomukhasana"
	},
  	{	zodiac: "aquarius",
  		descript: "You are Water Carrier. Quirky and interesting and said to be aloof and creative.",
  		yogaPose: "Surya Namaskar A - a sun salutation, moving with the slow and steady breath with focus."
  	},
  	{	zodiac: "pisces",
  		descript: "Your spirit animals are two Fish. Introspective, thoughtful, creative and lean toward creative pursuits despite all odds.",
  		yogaPose: "Ardha Matsyendrasana"
  	}
  	]
  	//make sure to change first leter of above strings into lower case so that toLowerCase will work OK

function getInfo() {   //user types sign, do this
	var signType = document.getElementById("signType").value.toLowerCase()
//for loop - each time we loop through, we want to see if the user input matches zodiac object key - 1 at a time
	
	for( var i = 0; i < zodiacSigns.length; i++ ) {
		if(signType == zodiacSigns[i].zodiac) {

			document.getElementById("name").innerHTML = zodiacSigns[i].zodiac

			document.getElementById("blurb").innerHTML = zodiacSigns[i].descript

			document.getElementById("yourPose").innerHTML = zodiacSigns[i].yogaPose

		return 
	} else {

			document.getElementById("name").innerHTML = "this isn't a sign!"
		}

	}
}
//after clicking, user gets sent to... 