import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { FaStar, FaStarHalfStroke, FaRegStar } from 'react-icons/fa6';
import './App.css';

const productsData = [
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/73323a1c5241047e9bfb4b7c07386966.jpg_400x400q80.jpg",
    productName: "Game over printed Summer Tracksuit T-Shirt and Shorts for Men",
    productPrice: "RS.899",
    discount: "-47%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 8,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/e722879f290537184d7c6c2ce46e4715.png_400x400q80.png",
    productName: "Pro White TWS Airpods Sound & High Quality Touch Sensors True Stereo Headphones with Built in Mic 10m Transmission Bluetooth Wireless Earbuds ,  Sport Headset for all Bluetooth Smart devices",
    productPrice: "RS.799",
    discount: "-73%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 1416,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/4821a66b4131d054263323dc0b582e7f.jpg_400x400q80.jpg",
    productName: "300,000 Saving Box – Wooden Money Saving Challenge Chart – Rupee Slot Box for Kids & Adults – Target-Based Cash Collection Bank – Gift Idea in Pakistan I Saving Box I Saving Money Box I Saving Box For Money I Mister Traders Wooden Saving Box",
    productPrice: "RS.299",
    discount: "-63%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 2730,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/24b82c3876c311bdf687dcf68dee70ba.jpg_400x400q80.jpg",
    productName: "Dell Pro Sleeve 13 (Original)",
    productPrice: "RS.2,799",
    discount: "-49%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 15,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/055087eadb81dbde5eaf95e4dbb7201d.jpg_400x400q80.jpg",
    productName: "Ear Wax Cleaning Kit, 6 Pcs Ear Pick Tools, Wax Removal Kit, Ear Cleaning Tool Set, Spring Earwax Cleaner Tool for Children and Adult Multicolor",
    productPrice: "RS.139",
    discount: "-65%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 3156,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/ffa284cffb74c14acd004ab2fc5e84c3.jpg_400x400q80.jpg",
    productName: "Endoxi - T9 Trimmer for Hair and Beard – Rechargeable Hair Trimmer & Shaver for Men | Vintage T9 Trimmer with Metal and Plastic Body | T9 Beard Trimmer for Precision Grooming | T9 Hair Trimmer with Adjustable Blades for Clean Cuts at Home or Salon",
    productPrice: "RS.849",
    discount: "-29%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 469,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/92ed100803a8d0cf98945f5439460390.jpg_400x400q80.jpg",
    productName: "Umrah Saving Box - Wooden Islamic Money Saving Box 280 Day Umrah Saving Box Plan Turning Your Dreams Into Reality",
    productPrice: "RS.285",
    discount: "-43%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 1026,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/f0631055667c26ebaf56c568707041d9.jpg_400x400q80.jpg",
    productName: "Harry potter summer gym wear tracksuit Tshirt+short soft & comfortable fabric-maroon",
    productPrice: "RS.899",
    discount: "-53%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 24,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/2ca2015bd30ed6d0b9e6c92f9790c898.jpg_400x400q80.jpg",
    productName: "Sandals For Men || New Stylish and Tranding Sandals For Boys House slippers for men",
    productPrice: "RS.349",
    discount: "-77%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 1990,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/6638a3b4f30d2357e5b715e3ed31ae92.jpg_400x400q80.jpg",
    productName: "Humidifier Portable Mini Air Humidifiers for Bedroom - USB Desktop Humidifier with Led Night Lights, Quiet Cool Mist Humidifier, for Bedroom, Car And Office, Plants, Easy To Clean",
    productPrice: "RS.580",
    discount: "-35%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 170,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/S1073e035e3974d5c8e39303d9e1db96eS.jpg_400x400q80.jpg",
    productName: "3Pcs Large Foldable Clothes Storage Zipper Bag",
    productPrice: "RS.260",
    discount: "",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 474,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/12421318ab5833d4dee7a38cc29854cc.jpg_400x400q80.jpg",
    productName: "High Quality Bownot Collar For Cats - Pink",
    productPrice: "RS.159",
    discount: "-20%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 353,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/f1b1872127ed077eb27c4f1c81ee6d92.jpg_400x400q80.jpg",
    productName: "Full Size Scratch & Water Proof 70 / 125 cc Bike COVER Anti Scratch Waterproof & Dust Proof Top Parking Cover",
    productPrice: "RS.299",
    discount: "-50%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 261,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/Sed9ab2103aac47368b0ec9e8be64cb38q.jpg_400x400q80.jpg",
    productName: "24 French Gel Nail Tips - French Tip Nails Coffee Medium Almond Fake Nails for Nail Art With Glue Stickers Nail File",
    productPrice: "RS.479",
    discount: "-20%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 632,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/033171adeffa9a8ba736e336c5d5717b.jpg_400x400q80.jpg",
    productName: "5 Pair Men Short Socks Spring and Summer Shallow Low Top Sport Short Socks Trend in Tube Socks",
    productPrice: "RS.99",
    discount: "-86%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 325,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/S18e48c63a1dc4bb2bbf4ea8fcd5f2ff83.jpg_400x400q80.jpg",
    productName: "BURNOUT.PK NEW TRENDY SUMMER COLLECTION HALF SLEEVE PRINTED TEES FOR MENS AND WOMENS",
    productPrice: "RS.444",
    discount: "-44%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 42,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/b33834520d5e57524d8c46159505daba.jpg_400x400q80.jpg",
    productName: "Laptop bag, Backpacks Travel bag",
    productPrice: "RS.568",
    discount: "-85%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 2448,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/Sb672f941a4e04cfdb8aea3fb11dbc762I.jpg_400x400q80.jpg",
    productName: "Phone Silicone Suction Cup Holder Multifunctional Suction Cup Wall Stand Square Anti-Slip Single-Sided Case Mount Back Sticker",
    productPrice: "RS.139",
    discount: "-44%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 394,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/S3524ff8a08ff43b0bdfb97b4bf938b77e.jpg_400x400q80.jpg",
    productName: "Loafers for men || Shoes for men || trending loafers for men",
    productPrice: "RS.799",
    discount: "-43%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 283,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/59144b7725e8cb7ddc936a8eabb5fb3a.jpg_400x400q80.jpg",
    productName: "Summer Tracksuit with New Luxury Design (T-Shirt + Trouser)",
    productPrice: "RS.899",
    discount: "-31%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 109,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/08b33ec593c1e28ae4de08a918bf2bf5.jpg_400x400q80.jpg",
    productName: "Sweat Shirt's & Trouser Pajama in Fleece Fabric Winter Collection",
    productPrice: "RS.749",
    discount: "-45%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 180,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/33f8eb1b43a8ea64018cb5abead9d0c2.jpg_400x400q80.jpg",
    productName: "Apple iPhone 6 16GB - iOS 12.5.6 – Non PTA",
    productPrice: "RS.6,999",
    discount: "-30%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 5,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/82fd10e95febf10051e2e40a65e8a085.jpg_400x400q80.jpg",
    productName: "Hair Straightener Brush Curling Comb 2 In 1 Hair Hot Comb Anti-Scald Hair Straightener Brush For Girls Electric Heated Hair Styler Tool, Travel, Professional Salon at Home",
    productPrice: "RS.1,045",
    discount: "-30%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 2962,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/d9be72dc5b39a5f907863958434c3eea.jpg_400x400q80.jpg",
    productName: "removing floating fur. Swirl self-cleaning for cats. Pet removal brush. Cat supplies. Long hair comb brush - Random Colors",
    productPrice: "RS.699",
    discount: "",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 0,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/da27005cbf4fb548c1fd05c4e83fde2c.jpg_400x400q80.jpg",
    productName: "Pack of 5 Color Smoke_Bomb Artificial Color Smokes Shell for Photography, Birthday Party, Weddings, Anniversary and welcome Parties celebrations",
    productPrice: "RS.99",
    discount: "-34%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 300,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/4e328c373dfd65de8a2952dd643d2372.jpg_400x400q80.jpg",
    productName: "10 colors Pure Korean TOP Quality School BAG for  School University college Laptop Backpack Sleek for Travel, Business Casual or College, boys and girls also boy girl",
    productPrice: "RS.899",
    discount: "-78%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 1710,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/6d7ed11cd11543c8592839ee0fb0818b.jpg_400x400q80.jpg",
    productName: "Beautiful Glass Bottle Water Bottle with Vacuum Flask and Loop (400 ML) Temperature Resistant for Hot and Cold Water, Milk, Lassi, Juice, Smoothie...",
    productPrice: "RS.395",
    discount: "-67%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 114,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/3c2a5c25af4c381c86b7e066ce3117bd.jpg_400x400q80.jpg",
    productName: "Flea Tick Comb For Dogs And Cats",
    productPrice: "RS.299",
    discount: "",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 0,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/1da49190c1d1992c1a44b53c57fc2dfa.png_400x400q80.png",
    productName: "Fashion by INZ Premium Quality  Panel Style Zipper Upper For Men & Boys   Hoodies For Girls hoodies for women winter fleece Printed Pullover Hoodie - Premium Quality, Stylish Winter Sweatshirt",
    productPrice: "RS.1,247",
    discount: "-38%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 405,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/57947f93ee772f7029e4763804bc3dc6.jpg_400x400q80.jpg",
    productName: "Double Chocolate Spread – 1 KG | Deep & Delicious Flavor | Made in Pakistan by Choco World PK",
    productPrice: "RS.1,500",
    discount: "-6%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 726,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/51a53b6289e842c0b8be0b4b27c415de.jpg_400x400q80.jpg",
    productName: "Cat Neck Rainbow Ribbon Adjustable Collar",
    productPrice: "RS.239",
    discount: "-68%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 61,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/ddd113232e9533cb11c24d86c83d9b1e.jpg_400x400q80.jpg",
    productName: "Camera Lens Clip-On Set Fish Eye, Wide Angle, Macro for Mobile Phones",
    productPrice: "RS.532",
    discount: "-65%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 132,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/2fec8e84abcc89dde56d590cfe11bf26.jpg_400x400q80.jpg",
    productName: "Wanted by Rajab Perfume 48-Hour Fragrance",
    productPrice: "RS.499",
    discount: "",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 170,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/bd1cd6e1d90709338bdfea723d0b7d55.png_400x400q80.png",
    productName: "SP Dealz Crystal Hair Eraser, Crystal Hair Remover, Portable Magic Hair Remover for Arms Legs Back, Painless Hair Removal for Women Apply to Any Part of the Body",
    productPrice: "RS.239",
    discount: "-73%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 1529,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/f3ca0b2ae5f3c7c7f285221f9d69794d.jpg_400x400q80.jpg",
    productName: "Flea Tick Comb For Dogs And Cats",
    productPrice: "RS.299",
    discount: "-12%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 7,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/Sc355bfdc1bc244a582e7016983a01056o.jpg_400x400q80.jpg",
    productName: "CozyBabyNest.Newborn Baby Head Shaping Pillow – Cute Bear Design | Anti-Roll, Breathable & Soft Support Cushion for Infant Safety Sleep.By Baby & Gadgets Hub.",
    productPrice: "RS.534",
    discount: "-55%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 343,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/7ed74c64887ee91162fb06086a800f6d.jpg_400x400q80.jpg",
    productName: "Our Impression - Bloom Pour Femme For Women 100ml",
    productPrice: "RS.443",
    discount: "-78%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 902,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/Sa3ab7e778fe34ea4beb6b525864ce962E.jpg_400x400q80.jpg",
    productName: "Petrella Bubble Gun Bazooka Bubble Machine Gun Bubbles for Kids TIK Tok Gifts 3 4 5 6 7 8 9 10 11 12 Years Old Bubble Blaster Blower 36 holes",
    productPrice: "RS.699",
    discount: "-30%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 693,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/56de7b91f2e1402d2a511b61750ca061.jpg_400x400q80.jpg",
    productName: "Al-Rehab Oud Perfume for Women And Men Long Lasting Middle East Fragrance Eau De Parfum 100ml",
    productPrice: "RS.1,900",
    discount: "-30%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 9,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/61427a4286a774306b7017791700fdab.jpg_400x400q80.jpg",
    productName: "Silicone Gel Heel Pad Socks For Pain Relief And Anti Crack Heels",
    productPrice: "RS.108",
    discount: "-64%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 2530,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/50a534fa56a86c0388b44a6bc372ad04.jpg_400x400q80.jpg",
    productName: "Pack of 3 Decorative Butterfly Wall Shelf, Latest Butterfly Candle Stand, Wall Decor Ideas, Wooden Wall Shelves |New Premium Wooden Wall Art Big Size I Wall Decor Art for bedroom I Decoration Piece for Home Decor I Latest Butterfly Candle Stand Shelf",
    productPrice: "RS.64",
    discount: "-64%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 590,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/184237cd1daec4f8c353c9148943c246.jpg_400x400q80.jpg",
    productName: "Cat Litter Sifting Scoop - Pack of 4 - Multicolor",
    productPrice: "RS.280",
    discount: "",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 276,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/S39114a220c9043e2877caf14866c35efU.jpg_400x400q80.jpg",
    productName: "Pack of 2 Creative Mosquito Coil Holder Stable Triangular Fireproof Hanging Mosquito Coil Tray Home Supplies",
    productPrice: "RS.199",
    discount: "-50%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 231,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/ad7f24a2bf79b0e7064a2b85fea1ce7b.jpg_400x400q80.jpg",
    productName: "Mini Wireless Bluetooth Earbuds In-Ear Stereo Headphones with Noise Cancellation",
    productPrice: "RS.270",
    discount: "-73%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 5071,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/S1b666e407b2540329f43fd21f43e6d00Z.jpg_400x400q80.jpg",
    productName: "Magnetic Neckband Headphones Wireless Bluetooth 5.2 Earphones LED Display Headset Sport Noise Cancel Earbuds with Mic",
    productPrice: "RS.749",
    discount: "-40%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 320,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/Sc01905cd4a934ef89beee57867487ecen.jpg_400x400q80.jpg",
    productName: "Dior Sauvage Perfume For Men | Sauvage Dior | 100ml - Impression | Good Long Lasting | Savage Perfume",
    productPrice: "RS.580",
    discount: "-74%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 261,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/7bdb5eb2530832f24f7c80289d199cae.jpg_400x400q80.jpg",
    productName: "ATM Cards Holder Wallet - Best Quality Card Holder Space Saving Wallets",
    productPrice: "RS.155",
    discount: "-22%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 350,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/fe265c4ac125efb96d75bc63d11df7e9.png_400x400q80.png",
    productName: "16/20 Pcs Colorful Star BB Hair Clips – Cute Hairpins for Girls & Kids 🌈⭐",
    productPrice: "RS.169",
    discount: "-32%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 26,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/e81b1afa699d83cf7adc843aea12d4bc.jpg_400x400q80.jpg",
    productName: "Best Leather wallet for men stylish leather purse for men",
    productPrice: "RS.506",
    discount: "-81%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 3017,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/5f6c8f7c5d946a427304a09911038e9b.jpg_400x400q80.jpg",
    productName: "Wireless Headphones, P47 Bluetooth Foldable Headset with Microphone Support FM Radio TF for PC TV Smart Phones & Tablets Etc",
    productPrice: "RS.678",
    discount: "-35%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 3017,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main>
        <ProductList products={productsData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
