var pizzaIngredients={};pizzaIngredients.meats=["Pepperoni","Sausage","Fennel Sausage","Spicy Sausage","Chicken","BBQ Chicken","Chorizo","Chicken Andouille","Salami","Tofu","Bacon","Canadian Bacon","Proscuitto","Italian Sausage","Ground Beef","Anchovies","Turkey","Ham","Venison","Lamb","Duck","Soylent Green","Carne Asada","Soppressata Picante","Coppa","Pancetta","Bresola","Lox","Guanciale","Chili","Beef Jerky","Pastrami","Kielbasa","Scallops","Filet Mignon"];pizzaIngredients.nonMeats=["White Onions","Red Onions","Sauteed Onions","Green Peppers","Red Peppers","Banana Peppers","Ghost Peppers","Habanero Peppers","Jalapeno Peppers","Stuffed Peppers","Spinach","Tomatoes","Pineapple","Pear Slices","Apple Slices","Mushrooms","Arugula","Basil","Fennel","Rosemary","Cilantro","Avocado","Guacamole","Salsa","Swiss Chard","Kale","Sun Dried Tomatoes","Walnuts","Artichoke","Asparagus","Caramelized Onions","Mango","Garlic","Olives","Cauliflower","Polenta","Fried Egg","Zucchini","Hummus"];pizzaIngredients.cheeses=["American Cheese","Swiss Cheese","Goat Cheese","Mozzarella Cheese","Parmesean Cheese","Velveeta Cheese","Gouda Cheese","Muenster Cheese","Applewood Cheese","Asiago Cheese","Bleu Cheese","Boursin Cheese","Brie Cheese","Cheddar Cheese","Chevre Cheese","Havarti Cheese","Jack Cheese","Pepper Jack Cheese","Gruyere Cheese","Limberger Cheese","Manchego Cheese","Marscapone Cheese","Pecorino Cheese","Provolone Cheese","Queso Cheese","Roquefort Cheese","Romano Cheese","Ricotta Cheese","Smoked Gouda"];pizzaIngredients.sauces=["Red Sauce","Marinara","BBQ Sauce","No Sauce","Hot Sauce"];pizzaIngredients.crusts=["White Crust","Whole Wheat Crust","Flatbread Crust","Stuffed Crust"];String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};function getAdj(k){switch(k){case"dark":var j=["dark","morbid","scary","spooky","gothic","deviant","creepy","sadistic","black","dangerous","dejected","haunted","morose","tragic","shattered","broken","sad","melancholy","somber","dark","gloomy","homicidal","murderous","shady","misty","dusky","ghostly","shadowy","demented","cursed","insane","possessed","grotesque","obsessed"];return j;case"color":var b=["blue","green","purple","grey","scarlet","NeonGreen","NeonBlue","NeonPink","HotPink","pink","black","red","maroon","silver","golden","yellow","orange","mustard","plum","violet","cerulean","brown","lavender","violet","magenta","chestnut","rosy","copper","crimson","teal","indigo","navy","azure","periwinkle","brassy","verdigris","veridian","tan","raspberry","beige","sandy","ElectricBlue","white","champagne","coral","cyan"];return b;case"whimsical":var e=["whimsical","silly","drunken","goofy","funny","weird","strange","odd","playful","clever","boastful","breakdancing","hilarious","conceited","happy","comical","curious","peculiar","quaint","quirky","fancy","wayward","fickle","yawning","sleepy","cockeyed","dizzy","dancing","absurd","laughing","hairy","smiling","perplexed","baffled","cockamamie","vulgar","hoodwinked","brainwashed"];return e;case"shiny":var c=["sapphire","opal","silver","gold","platinum","ruby","emerald","topaz","diamond","amethyst","turquoise","starlit","moonlit","bronze","metal","jade","amber","garnet","obsidian","onyx","pearl","copper","sunlit","brass","brassy","metallic"];return c;case"noisy":var a=["untuned","loud","soft","shrieking","melodious","musical","operatic","symphonic","dancing","lyrical","harmonic","orchestral","noisy","dissonant","rhythmic","hissing","singing","crooning","shouting","screaming","wailing","crying","howling","yelling","hollering","caterwauling","bawling","bellowing","roaring","squealing","beeping","knocking","tapping","rapping","humming","scatting","whispered","whispering","rasping","buzzing","whirring","whistling","whistled"];return a;case"apocalyptic":var d=["nuclear","apocalyptic","desolate","atomic","zombie","collapsed","grim","fallen","collapsed","cannibalistic","radioactive","toxic","poisonous","venomous","disastrous","grimy","dirty","undead","bloodshot","rusty","glowing","decaying","rotten","deadly","plagued","decimated","rotting","putrid","decayed","deserted","acidic"];return d;case"insulting":var f=["stupid","idiotic","fat","ugly","hideous","grotesque","dull","dumb","lazy","sluggish","brainless","slow","gullible","obtuse","dense","dim","dazed","ridiculous","witless","daft","crazy","vapid","inane","mundane","hollow","vacuous","boring","insipid","tedious","monotonous","weird","bizarre","backward","moronic","ignorant","scatterbrained","forgetful","careless","lethargic","insolent","indolent","loitering","gross","disgusting","bland","horrid","unseemly","revolting","homely","deformed","disfigured","offensive","cowardly","weak","villainous","fearful","monstrous","unattractive","unpleasant","nasty","beastly","snide","horrible","syncophantic","unhelpful","bootlicking"];return f;case"praise":var g=["beautiful","intelligent","smart","genius","ingenious","gorgeous","pretty","witty","angelic","handsome","graceful","talented","exquisite","enchanting","fascinating","interesting","divine","alluring","ravishing","wonderful","magnificient","marvelous","dazzling","cute","charming","attractive","nifty","delightful","superior","amiable","gentle","heroic","courageous","valiant","brave","noble","daring","fearless","gallant","adventurous","cool","enthusiastic","fierce","awesome","radical","tubular","fearsome","majestic","grand","stunning"];return g;case"scientific":var h=["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"];return h;default:var h=["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"];return h}}function getNoun(h){switch(h){case"animals":var e=["flamingo","hedgehog","owl","elephant","pussycat","alligator","dachsund","poodle","beagle","crocodile","kangaroo","wallaby","woodpecker","eagle","falcon","canary","parrot","parakeet","hamster","gerbil","squirrel","rat","dove","toucan","raccoon","vulture","peacock","goldfish","rook","koala","skunk","goat","rooster","fox","porcupine","llama","grasshopper","gorilla","monkey","seahorse","wombat","wolf","giraffe","badger","lion","mouse","beetle","cricket","nightingale","hawk","trout","squid","octopus","sloth","snail","locust","baboon","lemur","meerkat","oyster","frog","toad","jellyfish","butterfly","caterpillar","tiger","hyena","zebra","snail","pig","weasel","donkey","penguin","crane","buzzard","vulture","rhino","hippopotamus","dolphin","sparrow","beaver","moose","minnow","otter","bat","mongoose","swan","firefly","platypus"];return e;case"profession":var k=["doctor","lawyer","ninja","writer","samurai","surgeon","clerk","artist","actor","engineer","mechanic","comedian","fireman","nurse","RockStar","musician","carpenter","plumber","cashier","electrician","waiter","president","governor","senator","scientist","programmer","singer","dancer","director","mayor","merchant","detective","investigator","navigator","pilot","priest","cowboy","stagehand","soldier","ambassador","pirate","miner","police"];return k;case"fantasy":var b=["centaur","wizard","gnome","orc","troll","sword","fairy","pegasus","halfling","elf","changeling","ghost","knight","squire","magician","witch","warlock","unicorn","dragon","wyvern","princess","prince","king","queen","jester","tower","castle","kraken","seamonster","mermaid","psychic","seer","oracle"];return b;case"music":var c=["violin","flute","bagpipe","guitar","symphony","orchestra","piano","trombone","tuba","opera","drums","harpsichord","harp","harmonica","accordion","tenor","soprano","baritone","cello","viola","piccolo","ukelele","woodwind","saxophone","bugle","trumpet","sousaphone","cornet","stradivarius","marimbas","bells","timpani","bongos","clarinet","recorder","oboe","conductor","singer"];return c;case"horror":var j=["murderer","chainsaw","knife","sword","murder","devil","killer","psycho","ghost","monster","godzilla","werewolf","vampire","demon","graveyard","zombie","mummy","curse","death","grave","tomb","beast","nightmare","frankenstein","specter","poltergeist","wraith","corpse","scream","massacre","cannibal","skull","bones","undertaker","zombie","creature","mask","psychopath","fiend","satanist","moon","fullMoon"];return j;case"gross":var g=["slime","bug","roach","fluid","pus","booger","spit","boil","blister","orifice","secretion","mucus","phlegm","centipede","beetle","fart","snot","crevice","flatulence","juice","mold","mildew","germs","discharge","toilet","udder","odor","substance","fluid","moisture","garbage","trash","bug"];return g;case"everyday":var d=["mirror","knife","fork","spork","spoon","tupperware","minivan","suburb","lamp","desk","stereo","television","TV","book","car","truck","soda","door","video","game","computer","calender","tree","plant","flower","chimney","attic","kitchen","garden","school","wallet","bottle"];return d;case"jewelry":var f=["earrings","ring","necklace","pendant","choker","brooch","bracelet","cameo","charm","bauble","trinket","jewelry","anklet","bangle","locket","finery","crown","tiara","blingBling","chain","rosary","jewel","gemstone","beads","armband","pin","costume","ornament","treasure"];return f;case"places":var a=["swamp","graveyard","cemetery","park","building","house","river","ocean","sea","field","forest","woods","neighborhood","city","town","suburb","country","meadow","cliffs","lake","stream","creek","school","college","university","library","bakery","shop","store","theater","garden","canyon","highway","restaurant","cafe","diner","street","road","freeway","alley"];return a;case"scifi":var l=["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"];return l;default:var l=["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"];return l}}var adjectives=["dark","color","whimsical","shiny","noise","apocalyptic","insulting","praise","scientific"];var nouns=["animals","everyday","fantasy","gross","horror","jewelry","places","scifi"];function generator(c,g){var b=getAdj(c);var f=getNoun(g);var a=parseInt(Math.random()*b.length);var e=parseInt(Math.random()*f.length);var d="The "+b[a].capitalize()+" "+f[e].capitalize();return d}function randomName(){var a=parseInt(Math.random()*adjectives.length);var b=parseInt(Math.random()*nouns.length);return generator(adjectives[a],nouns[b])}var selectRandomMeat=function(){var a=pizzaIngredients.meats[Math.floor((Math.random()*pizzaIngredients.meats.length))];return a};var selectRandomNonMeat=function(){var a=pizzaIngredients.nonMeats[Math.floor((Math.random()*pizzaIngredients.nonMeats.length))];return a};var selectRandomCheese=function(){var a=pizzaIngredients.cheeses[Math.floor((Math.random()*pizzaIngredients.cheeses.length))];return a};var selectRandomSauce=function(){var a=pizzaIngredients.sauces[Math.floor((Math.random()*pizzaIngredients.sauces.length))];return a};var selectRandomCrust=function(){var a=pizzaIngredients.crusts[Math.floor((Math.random()*pizzaIngredients.crusts.length))];return a};var ingredientItemizer=function(a){return"<li>"+a+"</li>"};var makeRandomPizza=function(){var e="";var a=Math.floor((Math.random()*4));var g=Math.floor((Math.random()*3));var f=Math.floor((Math.random()*2));for(var d=0;d<a;d++){e=e+ingredientItemizer(selectRandomMeat())}for(var c=0;c<g;c++){e=e+ingredientItemizer(selectRandomNonMeat())}for(var b=0;b<f;b++){e=e+ingredientItemizer(selectRandomCheese())}e=e+ingredientItemizer(selectRandomSauce());e=e+ingredientItemizer(selectRandomCrust());return e};var pizzaElementGenerator=function(d){var c,f,e,a,g,b;c=document.createElement("div");f=document.createElement("div");e=document.createElement("img");a=document.createElement("div");c.classList.add("randomPizzaContainer");c.style.width="33.33%";c.style.height="325px";c.id="pizza"+d;f.classList.add("col-md-6");e.src="images/pizza.png";e.classList.add("img-responsive");f.appendChild(e);c.appendChild(f);a.classList.add("col-md-6");g=document.createElement("h4");g.innerHTML=randomName();a.appendChild(g);b=document.createElement("ul");b.innerHTML=makeRandomPizza();a.appendChild(b);c.appendChild(a);return c};var resizePizzas=function(g){window.performance.mark("mark_start_resize");function e(k){switch(k){case"1":document.querySelector("#pizzaSize").innerHTML="Small";return;case"2":document.querySelector("#pizzaSize").innerHTML="Medium";return;case"3":document.querySelector("#pizzaSize").innerHTML="Large";return;default:console.log("bug in changeSliderLabel")}}e(g);function a(p,m){var o=p.offsetWidth;var r=document.querySelector("#randomPizzas").offsetWidth;var q=o/r;function l(s){switch(s){case"1":return 0.25;case"2":return 0.3333;case"3":return 0.5;default:console.log("bug in sizeSwitcher")}}var n=l(m);var k=(n-q)*r;return k}var c=document.querySelectorAll(".randomPizzaContainer");var h=c.length;var j=a(c[0],g);var f=(c[0].offsetWidth+j)+"px";function d(l){for(var k=0;k<h;k++){c[k].style.width=f}}d(g);window.performance.mark("mark_end_resize");window.performance.measure("measure_pizza_resize","mark_start_resize","mark_end_resize");var b=window.performance.getEntriesByName("measure_pizza_resize");console.log("Time to resize pizzas: "+b[0].duration+"ms")};window.performance.mark("mark_start_generating");for(var i=2;i<100;i++){var pizzasDiv=document.getElementById("randomPizzas");pizzasDiv.appendChild(pizzaElementGenerator(i))}window.performance.mark("mark_end_generating");window.performance.measure("measure_pizza_generation","mark_start_generating","mark_end_generating");var timeToGenerate=window.performance.getEntriesByName("measure_pizza_generation");console.log("Time to generate pizzas on load: "+timeToGenerate[0].duration+"ms");var frame=0;function logAverageFrame(d){var c=d.length;var b=0;for(var a=c-1;a>c-11;a--){b=b+d[a].duration}console.log("Average time to generate last 10 frames: "+b/10+"ms")}var latestKnownScrollY=0;var ticking=true;function onScroll(){latestKnownScrollY=window.scrollY;requestTick()}function requestTick(){if(!ticking){requestAnimationFrame(updatePositions)}ticking=true}function updatePositions(){ticking=false;frame++;window.performance.mark("mark_start_frame");var b=document.querySelectorAll(".mover");var e=latestKnownScrollY/1250;var a;for(var d=0;d<b.length;d++){a=Math.sin(e+(d%5));b[d].style.left=b[d].basicLeft+100*a+"px"}window.performance.mark("mark_end_frame");window.performance.measure("measure_frame_duration","mark_start_frame","mark_end_frame");if(frame%10===0){var c=window.performance.getEntriesByName("measure_frame_duration");logAverageFrame(c)}}window.addEventListener("scroll",onScroll);document.addEventListener("DOMContentLoaded",function(){var d=8;var b=256;for(var a=0;a<200;a++){var c=document.createElement("img");c.className="mover";c.src="images/pizza.png";c.style.height="100px";c.style.width="73.333px";c.basicLeft=(a%d)*b;c.style.top=(Math.floor(a/d)*b)+"px";document.querySelector("#movingPizzas1").appendChild(c)}updatePositions()});
