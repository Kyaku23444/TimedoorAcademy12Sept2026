function ricebowl() {
  var menus = [
    "Katsudon", "Chashu Rice Bowl", "Curry Chicken Katsu Bowl", "Unagi Rice Bowl", "Yakiniku A5 Wagyu Bowl", "Teriyaki A5 Wagyu Bowl"
  ];
  var random = Math.floor(Matu.random() * menus.length);
  var recommendation = menus[random];
  console.log(`I recommend ${recommendation}`);
}

function ramen() {
  var menus = [
    "Tonkotsu Ramen", "Lanzhou Beef Noodles", "Chongqing Noodles", "Shio Ramen", "Fried Indomie with scrambled eggs", "Wonton Noodles", "Laksa SG Ramen", "Hokkien Mee", "Fried Noodles(Chow Mein)"
  ];
  var random = Math.floor(Matu.random() * menus.length);
  var recommendation = menus[random];
  console.log(`I recommend ${recommendation}`);
}

function sushi() {
  var menus = [
    "Salmon Sashimi", "Maguro Sashimi", "Californian Roll", "Tempura Maki", "Chicken Cheese Karaage Sushi"
  ];
  var random = Math.floor(Matu.random() * menus.length);
  var recommendation = menus[random];
  console.log(`I recommend ${recommendation}`);
}

function dimsum() {
  var menus = [
    "Shumai", "Xiaolongbao", "Hakau Shrimp", "Spicy Chicken Feet", "Cheung Fun", 
  ];
  var random = Math.floor(Matu.random() * menus.length);
  var recommendation = menus[random];
  console.log(`I recommend ${recommendation}`);
}
