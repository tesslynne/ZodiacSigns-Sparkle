  var zodiacSigns = [{
  		zodiac: "aries",
  		descript: "Your spirit animal is the Ram. Fiery, ambitious, driven and energetic in your path to power."
  	},
	  {	zodiac: "taurus",
  	 descript: "Your spirit animal is the Bull. Seeker of worldly pleasures, stubborn to the end, stability and strength and yes, you're always right, of course, yep."
  	},
  	{	zodiac: "gemini",
  		descript: "We think your spirit animal are conjoined hamster twins, or something akin to that. You are dual in nature, or something like that."
  		
  	},
  	{ 	zodiac: "cancer",
  		descript: "Your spirit animal is the Crab. Besides being delicious while dunked in butter, you're also caring, protective and sensitive."
  		
  	},
  	{ 	zodiac: "leo",
  		descript: "Your spirit animal is the Lion. Regal, fiery and strong willed."
  	},
  	{	zodiac: "virgo",
  		descript: "Your spirit animal is a discerning Maiden. Efficiency, practicality and organization are the trifecta of your awesomeness, and your sense of humor matches just how flawlessly filtered, organized and efficient your inbox is. Wanna come over to organize my house?"
  	},
  	{	zodiac: "libra",
  		descript: "Your spirit object is the Scales. Supposedly balanced, fair and the 'popular' one of the 12, easily sociable and amicable."
  	},
  	{	zodiac: "scorpio",
  		descript: "Your spirit animal is the Scorpion. Predictably, it's said your stinger is rough. You feel passionately and deeply, are sensual and moody."
  	},
  	{
  		zodiac: "sagittarius",
  		descript: "Your spirit animal is the mythological Centaur with its bow and arrow. Half human, half horse - wanderlust, fiery, loves new idea and waxing philosophical."
	},
	{
  		zodiac: "capricorn",
  		descript: "Your spirit animal is the Mountain Goat. Calculating, steady and reserved with a tenaceous streak, you scale the mountain of your success with grace."
	},
  	{	zodiac: "aquarius",
  		descript: "You are Water Carrier. Quirky and interesting and said to be aloof and creative."
  	},
  	{	zodiac: "pisces",
  		descript: "Your spirit animals are two Fish. Introspective, thoughtful, creative and lean toward creative pursuits despite all odds."
  	}
  	]
  	//make sure to change first leter of above strings into lower case so that toLowerCase will work OK

function getInfo() {   //user types sign, do this

	var signType = document.getElementById("signType").value.toLowerCase() 

  //for loop - each time we loop through, we want to see if the user input matches zodiac object key - 1 at a time
	
	for( var i = 0; i < zodiacSigns.length; i++ ) {
		if(signType == zodiacSigns[i].zodiac) {

        var signBlurb = document.getElementById("content") //call content div

        var signName = document.createTextNode(zodiacSigns[i].zodiac) //createTextNode for zodiac type
        var blurb = document.createTextNode(zodiacSigns[i].descript) //createTextNode for zodiac description

        var signHead = document.createElement("h2") //h4 tag to contain zodiac type
            signHead.appendChild(signName)

        var signInfo = document.createElement("p")  //paragraph to contain zodiac description
             signInfo.appendChild(blurb)


            signBlurb.className="well well-sm" //new class to contain zodiac info in bootstrap well

            signHead.appendChild(signInfo)

      

			document.getElementById("name").innerHTML = zodiacSigns[i].zodiac

			document.getElementById("blurb").innerHTML = zodiacSigns[i].descript

      return

    	} else {
          document.getElementById("name").innerHTML = "this isn't a sign!"
        }
      }
    }

    

