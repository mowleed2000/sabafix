// Official Sabafix in-store product catalogue
const productsData = [
  {
    "name": "Dell Latitude 7320 Touch",
    "category": "Laptops & Computers",
    "brand": "Dell",
    "price": "Enquire for price",
    "image": "catalogue-images/Dell Latitude 7320 Touch.webp",
    "variants": [
      "Touchscreen",
      "Intel Core i5/i7",
      "16GB RAM",
      "NVMe SSD",
      "Grade A Refurbished"
    ],
    "models": [],
    "flavors": [],
    "description": "Dell Latitude 7320 Touchscreen ultra-portable business laptop with Full HD touch display, high-speed NVMe SSD, and all-day battery life."
  },
  {
    "name": "Lenovo Yoga Slim 6 14IRH8",
    "category": "Laptops & Computers",
    "brand": "Lenovo",
    "price": "Enquire for price",
    "image": "catalogue-images/Lenovo Yoga Slim 6 14IRH8.webp",
    "variants": [
      "14-inch OLED",
      "Intel 13th Gen Core",
      "16GB LPDDR5",
      "512GB SSD",
      "Aluminium Chassis"
    ],
    "models": [],
    "flavors": [],
    "description": "Lenovo Yoga Slim 6 14IRH8 premium ultra-slim laptop featuring stunning high-resolution display, 13th Gen Intel processor, and lightweight design."
  },
  {
    "name": "Apple MacBook Air 13-inch (A1932)",
    "category": "Laptops & Computers",
    "brand": "Apple",
    "price": "Enquire for price",
    "image": "catalogue-images/Apple MacBook Air A1932 (2019).webp",
    "variants": [
      "13.3-inch Retina Display",
      "Intel Core i5",
      "8GB RAM",
      "Touch ID",
      "Space Grey"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple MacBook Air 13-inch (A1932) with True Tone Retina display, Touch ID, dual Thunderbolt 3 ports, and sleek lightweight unibody."
  },
  {
    "name": "Microsoft Surface Book 2",
    "category": "Laptops & Computers",
    "brand": "Microsoft",
    "price": "Enquire for price",
    "image": "catalogue-images/Microsoft Surface Book 2.jpg",
    "variants": [
      "Detachable 2-in-1 PixelSense",
      "Intel Core i7",
      "16GB RAM",
      "Dedicated Graphics",
      "Silver"
    ],
    "models": [],
    "flavors": [],
    "description": "Microsoft Surface Book 2 versatile 2-in-1 laptop and tablet with detachable high-res PixelSense touchscreen, robust hinge, and powerhouse performance."
  },
  {
    "name": "Apple iMac 21.5-inch 4K Retina (A2116)",
    "category": "Laptops & Computers",
    "brand": "Apple",
    "price": "Enquire for price",
    "image": "catalogue-images/Apple iMac A2116 (2019 Retina).webp",
    "variants": [
      "21.5-inch 4K Retina Display",
      "Intel Quad-Core",
      "SSD Upgradeable",
      "Silver"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iMac 21.5-inch (A2116) featuring a breathtaking 4K Retina display, ultra-thin profile, crystal-clear FaceTime HD camera, and pristine audio."
  },
  {
    "name": "AMD Ryzen 5 5000 Series Processor",
    "category": "PC Components & Hardware",
    "brand": "AMD",
    "price": "Enquire for price",
    "image": "catalogue-images/AMD Ryzen 5 5000 Series Processor.webp",
    "variants": [
      "Socket AM4",
      "6 Cores / 12 Threads",
      "Up to 4.6GHz Boost",
      "PCIe 4.0 Ready"
    ],
    "models": [],
    "flavors": [],
    "description": "AMD Ryzen 5 5000 series desktop processor delivering powerhouse gaming, multitasking, and creative productivity performance."
  },
  {
    "name": "Gigabyte P750BS 750W Power Supply",
    "category": "PC Components & Hardware",
    "brand": "Gigabyte",
    "price": "Enquire for price",
    "image": "catalogue-images/Gigabyte P750BS.jpg",
    "variants": [
      "750W",
      "80 PLUS Bronze Certified",
      "120mm Hydraulic Bearing Fan",
      "Single +12V Rail"
    ],
    "models": [],
    "flavors": [],
    "description": "Gigabyte P750BS 750W power supply unit built with reliable capacitors, silent cooling, and full electrical protection for gaming rigs."
  },
  {
    "name": "EVO Labs Professional Power Supply",
    "category": "PC Components & Hardware",
    "brand": "EVO Labs",
    "price": "Enquire for price",
    "image": "catalogue-images/EVO Labs Professional Power Supply.jpg",
    "variants": [
      "ATX PSU",
      "Silent Fan",
      "High Efficiency",
      "Multiple SATA & PCIe Connectors"
    ],
    "models": [],
    "flavors": [],
    "description": "EVO Labs professional desktop power supply unit designed for stable system power, low acoustic noise, and dependable longevity."
  },
  {
    "name": "MAIWO 2.5 SATA HDD / SSD Enclosure",
    "category": "PC Components & Hardware",
    "brand": "MAIWO",
    "price": "Enquire for price",
    "image": "catalogue-images/MAIWO Generic 2.5 SATA HDD.jpg",
    "variants": [
      "USB 3.0 High Speed",
      "Tool-Free Installation",
      "Fits 2.5 SATA HDD / SSD",
      "Up to 5Gbps"
    ],
    "models": [],
    "flavors": [],
    "description": "MAIWO 2.5-inch SATA hard drive and SSD external enclosure for instant data recovery, drive cloning, and portable external storage."
  },
  {
    "name": "TP-Link Gigabit PCI Express Network Adapter",
    "category": "PC Components & Hardware",
    "brand": "TP-Link",
    "price": "Enquire for price",
    "image": "catalogue-images/TP-Link Gigabit PCI Express Network Adapter.jpg",
    "variants": [
      "10/100/1000Mbps",
      "PCIe x1 Interface",
      "Low-Profile Bracket Included",
      "Wake-on-LAN"
    ],
    "models": [],
    "flavors": [],
    "description": "TP-Link TG-3468 Gigabit PCIe network adapter providing ultra-fast wired Ethernet connectivity for desktop PCs."
  },
  {
    "name": "Marvo Scorpion Atlas 60 FN-41 Laptop Cooler",
    "category": "PC Components & Hardware",
    "brand": "Marvo",
    "price": "Enquire for price",
    "image": "catalogue-images/Marvo Scorpion Atlas 60 FN-41.jpg",
    "variants": [
      "Multi-Fan Cooling",
      "Adjustable Angle Stand",
      "Blue LED Lighting",
      "Dual USB Pass-Through"
    ],
    "models": [],
    "flavors": [],
    "description": "Marvo Scorpion Atlas 60 gaming laptop cooling pad with high-airflow fans, ergonomic height angles, and USB pass-through."
  },
  {
    "name": "TP-Link AV600 Powerline Starter Kit",
    "category": "Tech Accessories",
    "brand": "TP-Link",
    "price": "Enquire for price",
    "image": "catalogue-images/TP-Link AV600.jpg",
    "variants": [
      "Up to 600Mbps",
      "Plug and Play",
      "HomePlug AV Standard",
      "Twin Pack"
    ],
    "models": [],
    "flavors": [],
    "description": "TP-Link AV600 powerline starter kit turns existing electrical wiring into a high-speed wired internet network without running cables."
  },
  {
    "name": "TP-Link TD-W8961N 300Mbps Wireless Modem Router",
    "category": "Tech Accessories",
    "brand": "TP-Link",
    "price": "Enquire for price",
    "image": "catalogue-images/TP-Link TD-W8961N.jpg",
    "variants": [
      "300Mbps Wi-Fi",
      "4 Fast Ethernet Ports",
      "2x 5dBi Antennas",
      "ADSL2+"
    ],
    "models": [],
    "flavors": [],
    "description": "TP-Link TD-W8961N all-in-one ADSL2+ modem router providing reliable Wi-Fi coverage and wired connectivity for home and office."
  },
  {
    "name": "Apple 61W USB-C Power Adapter",
    "category": "Tech Accessories",
    "brand": "Apple",
    "price": "Enquire for price",
    "image": "catalogue-images/Apple 61 W USB-C Power Adapter.jpg",
    "variants": [
      "61W Fast Charge",
      "USB-C Port",
      "MacBook Pro / Air Compatible",
      "Genuine Quality"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple 61W USB-C power adapter delivering fast, efficient charging at home, in the office, or on the go for MacBook and USB-C devices."
  },
  {
    "name": "Yesido 90W Universal Fast Desktop Charger",
    "category": "Tech Accessories",
    "brand": "Yesido",
    "price": "Enquire for price",
    "image": "catalogue-images/Yesido 90 W Universal.jpg",
    "variants": [
      "90W Max Output",
      "Multi-Port GaN Tech",
      "Fast Charge Compatible",
      "Smart Power Delivery"
    ],
    "models": [],
    "flavors": [],
    "description": "Yesido 90W universal high-speed desktop fast charger supporting multiple laptops, smartphones, and tablets simultaneously."
  },
  {
    "name": "M-TK TG7211 Wired USB Keyboard",
    "category": "Tech Accessories",
    "brand": "M-TK",
    "price": "Enquire for price",
    "image": "catalogue-images/M-TK TG7211 Wired USB Keyboard.jpg",
    "variants": [
      "Full Size UK Layout",
      "Spill Resistant",
      "Plug & Play USB",
      "Silent Keystroke"
    ],
    "models": [],
    "flavors": [],
    "description": "M-TK TG7211 durable full-sized wired USB keyboard with standard UK layout and comfortable silent tactile keys."
  },
  {
    "name": "Huawei P30 Pro",
    "category": "Smartphones",
    "brand": "Huawei",
    "price": "Enquire for price",
    "image": "catalogue-images/Huawei P30 Pro.webp",
    "variants": [
      "128GB / 256GB",
      "Unlocked",
      "Leica Quad Camera",
      "Breathing Crystal / Black",
      "OLED Curved Display"
    ],
    "models": [],
    "flavors": [],
    "description": "Huawei P30 Pro flagship smartphone with Leica quad-camera system, 50x periscope zoom, Kirin 980, and SuperCharge."
  },
  {
    "name": "Samsung Galaxy S22 5G",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "Enquire for price",
    "image": "catalogue-images/Samsung Galaxy S22.webp",
    "variants": [
      "128GB / 256GB",
      "Unlocked",
      "Dynamic AMOLED 2X 120Hz",
      "Phantom Black / Green",
      "Grade A"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy S22 5G with Pro-grade 50MP triple camera, Armor Aluminum frame, Nightography, and fast wireless charging."
  },
  {
    "name": "Samsung Galaxy S22 Ultra 5G",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "Enquire for price",
    "image": "catalogue-images/Samsung Galaxy S22 Ultra.webp",
    "variants": [
      "128GB / 256GB / 512GB",
      "Unlocked",
      "Embedded S-Pen",
      "108MP Quad Camera",
      "Phantom Black / Burgundy",
      "Grade A"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy S22 Ultra 5G featuring built-in S Pen, 100x Space Zoom camera system, 6.8-inch QHD+ 120Hz AMOLED display, and 5000mAh battery."
  }
];
