$(document).ready(function(){


///// TILES & UP/DOWN BUTTONS /////


var verticalimages = [	"0px", "627px", "1254px", "1881px", "2508px", "3135px"];

var lightboxCurrent = 0;

function downclick() {

	lightboxCurrent += 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)
 	$("#upbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 1)) {

 		$("#downbutton").fadeOut()
        setTimeout(function(){
        $('#tooltip2').fadeOut() }, 5000);

 	}


}

function upclick() {


	lightboxCurrent -= 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)

 	$("#downbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 6)) {  //NB  "-5" needs to be whatever length of array is

 		$("#upbutton").fadeOut();
 	}


}



  $("#downbutton").click(function(event) {      	

  	event.preventDefault();

  	downclick()

	});


  $("#upbutton").click(function(event) {      	

  	event.preventDefault();

  	upclick()

	});

 ///// END OF TILES & UP/DOWN BUTTONS ///// 


 $("#explore").click(function(event) {       

    event.preventDefault();

    $("#slider").animate({"left": "-940px"}, 1000, function(){

      $("#buttons").fadeIn()
      $("#tooltip1").fadeIn()
    })

  });




var boxs = [
    {
        selector: '#cover3',
        headline: 'North Avenue Beach',
        copy: "North Avenue Beach. From a 95th floor lookout over Chicago's sprawling downtown … to the beach, in under 10 minutes.",
        address: "",
        content: "<img src='images/NorthAvenueBeach.jpg'>"
    },

    {
        selector: '#cover2',
        headline: "John Hancock Tower, Chicago",
        copy: "John Hancock Tower - my ears are popping a little. To my left, a vast ridge of skyscrapers stretch from the shores of Lake Michigan to the edges of the downtown district. East Chicago is sprawling in front of me, dissolving into the clouds in the distance. Magnificent.",
        content: '<img src="images/JohnHancockTower.jpg">',
        address: "• John Hancock Tower, 875 N Michigan Avenue, Chicago,<br/> <a target='blank' href='http://johnhancockcenterchicago.com/''>johnhancockcenterchicago.com</a>"
    },

    {
        selector: '#cover6',
        headline: 'On The Road',
        copy: "We've picked up our car ... the road part of this trip begins. Gary is at the wheel, and doing admirably. ",
        content: '<img src="images/Roadtrip.jpg">',
        address: ""
    },

    {
        selector: '#cover4',
        headline: 'Ginos East Pizza',
        copy: "OK, let's talk about the deep dish. You know what? It's fine. In fact, I'd go as far as saying it's good. These guys clearly know what they're doing - the crust is big, but not offensively so. And the stuff in the middle, it's upside down (sauce over cheese), but the sauce is rich and sweet.",
        content: '<img src="images/GinosEast.jpg">',
        address: "• <a target='blank' href='http://ginoseast.com/''>Gino's East</a>, 2801 N. Lincoln Ave, Chicago, + <a target='blank' href='tel:773%20327%203737'>773 327 3737</a>, <a target='blank' href='http://ginoseast.com/''>ginoseast.com</a>"

    },

    {
        selector: '#cover1',
        headline: 'Wicker Park',
        copy: "Ryan, the guy with the Mohawk helmet, is going to a Bone Thugs-N-Harmony concert right now, at a place called <a target='blank' href='http://www.doubledoor.com/''>Double Door</a>, and he's gonna try to take us with him.",
        content: '<img src="images/WickerPark.jpg">',
        address: "• Double Door, 1551 N. Damen Ave, Chicago, <a target='blank' href='http://doubledoor.com/''>doubledoor.com</a>"
    },

    {
        selector: '#cover7',
        headline: "Obama's Barbershop",
        copy: "Well, that was superb. Obama came to the Hyde Park Hair Salon for 20 years. His barber Zariff isn't here today - he's currently on one of his regular trips to DC, visiting his most famous customer. I get Jaron, who gives me a neat Obama cut, and my first ever wet shave.",
        content: '<img src="images/HydeParkHairSalon.jpg">',
        address: '• Hyde Park Hair Salon, 5234 S Blackstone Ave, Chicago, <br/>+ 773-493-6028, <br/><i> </i><a target="blank" href="http://hydeparkhairsalon.net/">hydeparkhairsalon.net</a>'
    },

    {
        selector: '#cover8',
        headline: 'Indianan Corn',
        copy: "We decided to inspect the corn in Indiana. It's huge … 10ft tall at least, and it goes on forever.",
        content: '<img src="images/IndiananCorn.jpg">',
        address: ''
    },

    {
        selector: '#cover9',
        headline: "Indiana Dunes National Lakeshore",
        copy: "The water at the Indiana Dunes National Lakeshore was fringed with families, sheltering under umbrellas in the heat, occasionally wading out into the shallow water towards a sand bank a few hundred yards out.",
        content: '<img src="images/IndianaDunesNationalLakeshore.jpg">',
        address: '• <a target="blank" href="http://www.nps.gov/indu">Indiana Dunes National Lakeshore</a>, <a target="blank" href="http://www.nps.gov/indu/">nps.gov/indu/</a>'
    },

    {
        selector: '#cover10',
        headline: 'Prairie Road, Indiana',
        copy: "The long and perfectly straight prairie road, Indiana.",
        content: '<img src="images/PrairieRoad.jpg">',
        address: ''

    },

    {
        selector: '#cover11',
        headline: 'Brown County Sate Park, Indiana',
        copy: "Love this drive through Brown County Sate Park, Indiana. Our straight-line route has warped into the forest, wild woods either side of us, the occasional beautiful log cabin.",
        content: '<img src="images/BrownCountySatePark.jpg">',
        address: ''
    },

    {
        selector: '#cover12',
        headline: 'TC Steele',
        copy: "A visit to TC Steele's converted farm up on a forest ridge in the Brown County State Park. In 1907 Steele turned seven abandoned farmhouses and fields of struggling sorghum and tobacco into his beautiful artistic refuge..",
        content: '<img src="images/TCSteele.jpg">',
        address: '• TC Steele, 4220 TC Steele Road, Nashville, Indiana, <a target="_blank" href="http://tcsteele.org/"><b>tcsteele<b/>.org</a>'
    },

    {
        selector: '#cover13',
        headline: "Indiana University",
        copy: "Senior Matt walks us around the beautiful campus, lined with imposing faculty buildings built with the trademark local limestone – the same stone was used to build the Empire State Building.. ",
        content: '<img src="images/IndianaUniversity.jpg">',
        address: "• Indiana University, Bloomington, <a target='blank' href='http://indiana.edu/''><b>indiana</b>.edu</a>"
    },

    {
        selector: '#cover14',
        headline: 'Garage Bar',
        copy: "Garage Bar, Louisville: We're in 'NuLu' a rapidly rising strip full of bars and restaurants in the northeast of the city. Inside, there's a world of bourbon behind the bar on wooden shelves. Opposite, a tiled Neopolitan oven churning out pizzas.",
        content: '<img src="images/GarageBar.jpg">',
        address: "• Garage Bar, 700 E Market St, Louisville, Kentucky, <a target='blank' href='http://garageonmarket.com/''><b> garageonmarket</b>.com</a>"
    },

    {
        selector: '#cover15',
        headline: "Prince's Hot Chicken",
        copy: "Prince's Hot Chicken couldn't be more innocuous - inside, five booths, white painted wood with plastic tablecloths. In the back, a hole on the wall with a till and a vending machine for drinks. Another table selling chess pie in plastic cases. Hollis, a local, orders the 'mild' option of chicken spiciness … alarm bells..",
        content: '<img src="images/PrincesHotChicken.jpg">',
        address: "• Prince's Hot Chicken, 123 Ewing Dr #3, Nashville, Tennessee"
    },

    {
        selector: '#cover16',
        headline: 'Welcome To Tennessee',
        copy: "We've crossed state lines from Kentucky into Tennessee - and a time zone, - and are currently on the outskirts of Nashville with a thick stream of rush-hour traffic travelling in the opposite direction.",
        content: '<img src="images/Tennessee.jpg">',
        address: ''
    },

    {
        selector: '#cover18',
        headline: 'Roberts Western World',
        copy: "Downtown Nashville: a five-block honky tonk Vegas lined with neon and more than 50 bars. It's brash, bright, teetering between classic and tacky, and I instantly love it. We finish in Roberts. A 'shotgun bar' – long and thin and lined with shelves of cowboy boots and neon. ",
        content: '<img src="images/RobertsWesternWorld.jpg">',
        address: "• Roberts Western World, 416 Broadway  Nashville, TN,<a target='blank' href='http://robertswesternworld.com/'> robertswesternworld.com</a>"
    },

    {
        selector: '#cover17',
        headline: 'Buffalo Trace Distillery',
        copy: "A bourbon tasting with Don at Buffalo Trace Distillery in Frankfort. A sip straight up; a sip after a firm swirl (better); and a sip with a drop of water to 'take the edge off'. Every now and then, Don tells us, he likes to have a little Bourbon Cream – the equivalent of Baileys - on his oatmeal in the morning, to 'hit the road running'.",
        content: '<img src="images/BuffaloTraceDistillery.jpg">',
        address: "• Buffalo Trace Distillery, 113 Great Buffalo Trace  Frankfort, KY <a target='blank' href='http://buffalotrace.com/'>buffalotrace.com</a>"
    },

    {
        selector: '#cover19',
        headline: "Hatch Show Print",
        copy: "In the middle of the Nashville strip, surrounded by honky tonk bars on all sides, <a target='blank' href='http://countrymusichalloffame.org/our-work/''>Hatch Show Prints</a> have been letterpress printing gig posters since 1879, with clients from Bruce Springsteen to BB King, The Wailers to the White Stripes..",
        content: '<img src="images/HatchShowPrint.jpg">',
        address: "• Hatch Show Print, 316 Broadway, Nashville, TN, <a target='blank' href='http://countrymusichalloffame.org/our-work'>countrymusichalloffame.org/our-work</a>"
    },

    {
        selector: '#cover20',
        headline: 'Loretta Lynns Ranch',
        copy: "Here are some things you can buy in the Loretta Lynn gift shop: Loretta Lynn pepper jelly, Loretta Lynn animal cookies, Loretta Lynn pickles, Loretta Lynn crystal candy, Loretta Lynn pen knives, Loretta Lynn Picture frames.",
        content: '<img src="images/LorettaLynnsRanch.jpg">',
        address: "Loretta Lynn Ranch, 44 Hurricane Mills Rd, Hurricane Mills, TN, <a href='http://www.lorettalynnranch.net'>lorettalynnranch.net</a>"
    },

    {
        selector: '#cover21',
        headline: 'Scott’s Bar-B-Que',
        copy: "The whole pigs take 24 hours to fully smoke, with hickory coal strewn underneath them every few hours. When the fat starts dripping from the pig, the smoke starts. The sandwich is served with vinegar coleslaw and barbecue sauce piled on top of a mound of meat.",
        content: '<img src="images/ScottsBBQ.jpg">',
        address: "• Scott’s Bar-B-Que, 10880 Highway 412 West, Lexington, TN"
    },

    {
        selector: '#cover22',
        headline: "Delta Fair and Music Festival",
        copy: "Delta Fair is like any fair, really, with dozens of rides and stalls and food vendors. Until you get to the back, where there's a giant sandpit surrounded by bleachers. They're filling up. In the middle of the sandpit, a red pen. Everyone is staring at it. Shortly, it's man versus pig..",
        content: '<img src="images/DeltaFair.jpg">',
        address: "• Delta Fair and Music Festival, 7777 Walnut Grove Rd  Memphis, TN, <a target='blank' href='http://fest.com/''>deltafest.com</a>"
    }


 ]

 function processPlaceClick(box) {

    $("#buttons").fadeOut();
    $(".dayofweek").fadeOut();
    $("#tooltip1").fadeOut();
    $("#lightbox").fadeIn(function(event){      
      $("#content").html(box.content);
      $("#copyheader").html(box.headline)
      $("#copy").html(box.copy)
      $("#address").html(box.address)
    });

 }

 $.each(boxs, function(i, box) {
        $(box.selector).on('click', function(e){
            e.preventDefault();
            processPlaceClick(box);
        });
    });


  $("#close").click(function(event) {        

    event.preventDefault();


    $("#lightbox").fadeOut(function(event){
       $("#buttons").fadeIn();
      $("#content").html('');
      $("#copyheader").html('');
      $("#copy").html('');
      $("#address").html('')
       $(".dayofweek").fadeIn();

    })

  });



}); //ready

