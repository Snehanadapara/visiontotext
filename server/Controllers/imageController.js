const path = require('path');
const fs = require('fs');

const productDescriptions = {


iphone15: [
    "The iPhone 15 redefines smartphone excellence with its sleek, lightweight design and cutting-edge A16 Bionic chip. It features an advanced Super Retina XDR display for vibrant visuals and a pro-grade camera system that captures stunning photos and videos. Enjoy 5G speed and MagSafe wireless charging for ultimate convenience.",
    "Apple's iPhone 15 boasts a glass and aluminum body designed for durability and sustainability. It offers enhanced battery life and iOS improvements for seamless multitasking. The device supports Face ID, immersive audio, and a wide range of apps optimized for performance and security.",
    "With an edge-to-edge OLED display, the iPhone 15 offers vivid colors and true blacks for an immersive viewing experience. Its upgraded camera setup features computational photography to elevate your shots. Combined with a powerful chipset, this phone handles gaming and productivity effortlessly."
  ],
  airfryer: [
    "This air fryer is a must-have for healthy cooking enthusiasts, offering crispy, oil-free meals in minutes. Its rapid air circulation technology ensures even cooking, while preset functions make meal prep easy and convenient. The non-stick basket is removable for quick cleanup.",
    "Say goodbye to greasy foods with this advanced air fryer that delivers delicious results with little to no oil. Multiple cooking modes allow for frying, roasting, baking, and grilling. Its compact design fits perfectly in any kitchen without sacrificing performance.",
    "Cook smarter and eat better with this energy-efficient air fryer featuring a digital touch screen and timer. It evenly cooks food with hot air, locking in flavors and texture. The dishwasher-safe components make maintenance hassle-free for busy users."
  ],
  tv: [
    "This smart LED TV brings cinematic quality to your living room with 4K Ultra HD resolution and HDR support. Built-in streaming apps and voice control provide effortless entertainment. The slim bezel design complements any decor, making it a perfect centerpiece.",
    "Enjoy a theater-quality viewing experience at home with this LED Smart TV featuring vibrant colors and sharp contrasts. It supports multiple HDMI inputs and wireless screen mirroring. Its user-friendly interface makes navigating content simple and fast.",
    "Transform your living space into a cinematic hub with this feature-packed smart TV. The integrated sound system delivers clear audio, while the intuitive remote control offers quick access to your favorite apps. Sleek and stylish, it's designed for modern homes."
  ],
  fridge: [
    "Keep your food fresh longer with this energy-efficient double-door refrigerator featuring frost-free technology. It offers spacious compartments, adjustable shelves, and humidity control to preserve freshness. The quiet inverter compressor reduces noise and saves energy.",
    "This modern refrigerator combines style and functionality with multi-airflow cooling and smart inverter technology. LED lighting illuminates the interior, making it easy to find items. Its ergonomic handles and durable finish add a premium touch to your kitchen.",
    "Enjoy reliable cooling performance with this smart inverter fridge designed to optimize temperature and humidity. It includes a quick-freeze function, large vegetable crisper, and door alarm to prevent energy loss. The sleek exterior fits seamlessly into contemporary kitchens."
  ],
  washingmachine: [
    "This front-load washing machine delivers powerful cleaning with minimal water and energy consumption. Featuring multiple wash programs and a delay start timer, it caters to various fabric types and laundry needs. The anti-vibration design ensures quiet operation.",
    "Give your clothes the care they deserve with this advanced washing machine equipped with smart sensors and drum technology. Its large capacity accommodates bulky loads, while the digital display allows easy program selection. The child lock enhances safety in family homes.",
    "With innovative drum design and customizable wash cycles, this washing machine provides gentle yet thorough cleaning. It operates efficiently with eco-friendly modes and automatic detergent dispensing. Its stylish exterior complements modern laundry rooms."
  ],
  microwave: [
    "This convection microwave oven combines baking, grilling, and reheating functionalities in a single appliance. Its user-friendly control panel and preset cooking modes simplify meal preparation. The compact design fits well in small kitchens without compromising performance.",
    "Prepare everything from popcorn to pizzas with this multi-function microwave featuring a powerful magnetron and even heat distribution. The interior light and easy-to-clean cavity make usage convenient. Safety features include a child lock and automatic shut-off.",
    "Experience modern cooking versatility with this convection microwave oven that offers rapid cooking and defrost options. The digital timer and adjustable power levels help you customize your meals. Its sleek stainless steel finish adds a professional look."
  ],
  laptop: [
    "Boost your productivity with this high-performance laptop equipped with a fast SSD, powerful processor, and vibrant full HD display. The backlit keyboard enhances usability in low light, while the slim chassis ensures portability. Perfect for work, study, and entertainment.",
    "This laptop features a crisp display, responsive touchpad, and long-lasting battery for uninterrupted workflow. It comes with ample storage and RAM to handle multitasking and demanding applications. Lightweight and durable, it suits both casual users and professionals.",
    "Stay connected and efficient with this modern laptop boasting fast Wi-Fi, USB-C ports, and premium audio. Its thermal management system keeps performance steady under heavy loads. Ideal for creative projects, streaming, and everyday computing."
  ],
  charger: [
    "This fast charger supports multiple devices through USB-C and USB-A ports with intelligent power delivery. Compact and travel-friendly, it protects your gadgets from overcharging and overheating. Ideal for smartphones, tablets, and laptops alike.",
    "Charge your devices quickly and safely with this high-efficiency charger featuring advanced circuitry. Its foldable plug and lightweight design make it convenient for daily use and travel. Compatible with a wide range of electronics, it ensures reliable power anytime.",
    "Equipped with smart charging technology, this charger adapts output to your device's needs. It features durable construction and multiple port options for charging several devices simultaneously. An LED indicator shows charging status clearly."
  ],
  blender: [
    "This high-speed blender is perfect for smoothies, soups, and sauces with sharp stainless steel blades and multiple speed settings. The large, BPA-free jar is easy to clean and dishwasher safe. Its sturdy base provides stability during powerful blending.",
    "Prepare healthy meals with this versatile blender offering pulse and puree functions. The compact design fits well in small kitchens, while its noise reduction technology ensures quieter operation. Includes safety features like overload protection.",
    "Enjoy smooth textures every time with this durable blender featuring a powerful motor and ergonomic handle. Its intuitive controls and removable parts make it user-friendly. Ideal for daily use in making shakes, dips, and more."
  ],
  headphones: [
    "Experience rich, immersive sound with these wireless over-ear headphones featuring active noise cancellation. Bluetooth 5.0 connectivity ensures stable and fast pairing. Comfortable ear cushions and a long battery life make them perfect for all-day use.",
    "These headphones offer crystal-clear audio with deep bass and enhanced treble. The foldable design and lightweight build make them portable and travel-ready. Controls on the earcups allow easy volume and track adjustments.",
    "With multi-device connectivity and voice assistant support, these headphones blend convenience with premium sound. The breathable ear pads reduce fatigue, while fast charging provides hours of playback. Ideal for music lovers and professionals alike."
  ],
  smartwatch: [
    "Stay connected and healthy with this sleek smartwatch featuring heart rate monitoring, sleep tracking, and fitness modes. Its bright AMOLED display is easy to read in sunlight, and customizable watch faces personalize your style. Receive calls, texts, and app notifications on the go.",
    "This smartwatch offers GPS tracking, workout analysis, and stress monitoring in a stylish, durable design. Waterproof and compatible with both Android and iOS devices, it supports music control and voice commands. Long battery life keeps you going for days.",
    "Monitor your health and stay productive with this feature-rich smartwatch. It includes step counting, calorie tracking, and guided breathing exercises. The lightweight build and comfortable strap make it suitable for all-day wear."
  ],
  printer: [
    "This all-in-one wireless printer delivers sharp prints, fast scans, and clear copies with ease. It supports mobile and cloud printing for convenient access. Ideal for home offices and students, it offers economical ink usage and compact design.",
    "Print high-quality documents and photos quickly with this multi-function printer featuring Wi-Fi connectivity. Automatic double-sided printing saves paper, while the intuitive touchscreen interface simplifies operation. Includes USB and Ethernet ports.",
    "This printer offers seamless integration with smart devices and supports various media sizes. The quiet operation and fast warm-up time improve productivity. Its sleek black finish fits well in any workspace or home setting."
  ],
  tablet: [
    "Enjoy versatile entertainment with this lightweight tablet featuring a vibrant display and responsive touchscreen. Perfect for reading, streaming, and browsing, it offers long battery life and expandable storage. Compatible with a wide range of apps.",
    "This tablet delivers smooth performance with a powerful processor and crisp visuals. It supports stylus input for drawing and note-taking, making it ideal for students and professionals. The slim design is easy to carry and hold.",
    "Stay productive and entertained with this high-resolution tablet that includes front and rear cameras for video calls and photos. Its intuitive user interface and parental controls provide a safe environment for all users."
  ],
  router: [
    "Boost your home network with this dual-band Wi-Fi router featuring MU-MIMO technology for simultaneous device connections. It delivers fast and stable internet speeds with an extended range. Easy setup and parental controls ensure secure and customizable access.",
    "This router supports gigabit Ethernet and beamforming technology to optimize wireless signals. The compact design fits any space, while the guest network feature enhances privacy. Manage your network remotely through a dedicated app.",
    "Experience reliable connectivity with this smart router that prioritizes bandwidth for streaming and gaming. It includes multiple antennas for strong signal coverage and WPA3 security for enhanced protection. Compatible with all major ISPs."
  ],
  keyboard: [
    "This mechanical keyboard offers tactile feedback and customizable RGB lighting. Designed for gamers and typists, it features durable switches and programmable keys. The ergonomic layout reduces strain during long sessions.",
    "Enhance your workspace with this wireless keyboard featuring quiet keys and a slim profile. It supports multiple device pairing and offers long battery life. The spill-resistant design ensures durability in everyday use.",
    "This compact keyboard delivers fast response times and comfortable typing with adjustable backlighting. Compatible with Windows, macOS, and Linux, it’s perfect for office and gaming setups alike."
  ],
  mouse: [
    "This wireless mouse features ergonomic design, adjustable DPI, and silent clicking for a smooth user experience. Compatible with multiple operating systems, it’s ideal for office work and casual gaming. Rechargeable battery ensures long usage times.",
    "Enhance your workflow with this precision mouse offering customizable buttons and high-accuracy tracking. The compact size makes it travel-friendly, while the textured grip adds comfort during extended use.",
    "This Bluetooth mouse provides fast and reliable connectivity with a stylish, slim design. Its energy-efficient sensor conserves battery, while the silent scroll wheel minimizes distractions. Perfect for everyday computing tasks."
  ],
  webcam: [
    "Upgrade your video calls with this 1080p HD webcam featuring a built-in noise-reducing microphone. Easy to install and compatible with popular conferencing apps, it ensures clear visuals and audio for meetings and streaming.",
    "This compact webcam offers sharp, vibrant video quality and automatic low-light correction. It comes with a flexible clip mount for secure attachment to monitors and laptops. Ideal for remote work, online classes, and social streaming.",
    "Capture every detail with this high-definition webcam that supports wide-angle views and smooth frame rates. Its plug-and-play setup is hassle-free, while the privacy shutter keeps your camera covered when not in use."
  ],
  speakers: [
    "Fill any room with rich, clear sound using this portable Bluetooth speaker. It delivers deep bass and crisp highs with up to 12 hours of battery life. Water-resistant and rugged, it’s perfect for outdoor adventures and indoor parties.",
    "This wireless speaker offers seamless connectivity and balanced audio performance. Its compact design fits easily in bags, while the built-in microphone allows hands-free calls. The durable build ensures longevity and reliable playback.",
    "Experience powerful sound with this speaker featuring enhanced stereo drivers and bass boost technology. Its simple controls and fast charging make it user-friendly. Ideal for music lovers who want quality and portability."
  ]
};


exports.uploadImageAndGenerateDescription = async (req, res) => {
  try {
    console.log("Function called: uploadImageAndGenerateDescription");
    console.log("Request file:", req.file ? "File received" : "No file received");
    console.log("Request body:", req.body);

    if (!req.file) {
      console.error("No file received");
      return res.status(400).json({ error: 'No image file received' });
    }

    const image = req.file;
    const { productName, email } = req.body;

    console.log("Received image:", image.originalname);
    console.log("Received productName:", productName);
    console.log("Received email:", email);

    if (!productName || !email) {
      return res.status(400).json({ error: 'Missing required fields: productName or email' });
    }

    const normalizedProductName = productName.toLowerCase().trim();
    console.log("Looking for product:", normalizedProductName);
    console.log("Available products:", Object.keys(productDescriptions));

    const matchedDescriptions = productDescriptions[normalizedProductName];

    if (!matchedDescriptions) {
      console.log(`No descriptions found for product: ${normalizedProductName}`);
      return res.status(404).json({
        error: `No descriptions found for product: ${normalizedProductName}`,
        availableProducts: Object.keys(productDescriptions)
      });
    }

    const randomDescription = matchedDescriptions[Math.floor(Math.random() * matchedDescriptions.length)];

    // Normalize image path to use forward slashes for all OS
    let imagePath = '';
    if (image.path) {
      imagePath = image.path.replace(/\\/g, '/');
    } else {
      imagePath = `/uploads/${image.filename}`;
    }

    console.log("Sending response with description and image path:", imagePath);

    return res.status(200).json({
      description: randomDescription,
      imagePath,
      email,
      productName: normalizedProductName
    });

  } catch (err) {
    console.error('Error generating description:', err);
    return res.status(500).json({
      error: 'Server error while generating description',
      message: err.message
    });
  }
};
