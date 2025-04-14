const ADDRESSES = [
  {
    "title": "Times Square-42nd Street",
    "address": "Times Square-42nd Street, New York, NY",
    "latitude": 40.7580,
    "longitude": -73.9855,
    "place_id": "ChIJS0p0XxkWwokRkJ6xhecrGVg"
  },
  {
    "title": "Grand Central-42nd Street",
    "address": "Grand Central-42nd Street, New York, NY",
    "latitude": 40.7527,
    "longitude": -73.9772,
    "place_id": "ChIJjY2J4WwWwokR8vLdeq-v4U8"
  },
  {
    "title": "Union Square",
    "address": "Union Square, New York, NY",
    "latitude": 40.7359,
    "longitude": -73.9911,
    "place_id": "ChIJCzYy5I5YwokRYO8PihP2pV8"
  },
  {
    "title": "34th Street-Herald Square",
    "address": "34th Street-Herald Square, New York, NY",
    "latitude": 40.7498,
    "longitude": -73.9877,
    "place_id": "ChIJVY4TQbxYwokR2tLtXZ1t9tA"
  },
  {
    "title": "Rockefeller Center",
    "address": "Rockefeller Center, New York, NY",
    "latitude": 40.7587,
    "longitude": -73.9787,
    "place_id": "ChIJKX9d0_wWwokRFtXZJ7b3E6Q"
  },
  {
    "title": "Wall Street",
    "address": "Wall Street, New York, NY",
    "latitude": 40.7074,
    "longitude": -74.0113,
    "place_id": "ChIJHVRF7z5YwokRVwE_4YxdqWk"
  },
  {
    "title": "Bowery",
    "address": "Bowery, New York, NY",
    "latitude": 40.7184,
    "longitude": -73.9933,
    "place_id": "ChIJw02tVHgWwokRlwYxlS7w7v8"
  },
  {
    "title": "Chambers Street",
    "address": "Chambers Street, New York, NY",
    "latitude": 40.7153,
    "longitude": -74.0087,
    "place_id": "ChIJD8kTnn1YwokRGTbwW2D4Rcs"
  },
  {
    "title": "Fulton Street",
    "address": "Fulton Street, New York, NY",
    "latitude": 40.7125,
    "longitude": -74.0053,
    "place_id": "ChIJqzDgoz5YwokRTmjswvRjX6M"
  },
  {
    "title": "South Ferry",
    "address": "South Ferry, New York, NY",
    "latitude": 40.7003,
    "longitude": -74.0168,
    "place_id": "ChIJt9ge75iWwokR8_dmi3tX_m0"
  },
  {
    "title": "Astor Place",
    "address": "Astor Place, New York, NY",
    "latitude": 40.7314,
    "longitude": -73.9921,
    "place_id": "ChIJK3K7y1dYwokRbiJdQT42P28"
  },
  {
    "title": "Lexington Avenue-53rd Street",
    "address": "Lexington Avenue-53rd Street, New York, NY",
    "latitude": 40.7570,
    "longitude": -73.9701,
    "place_id": "ChIJH2hz_XhYwokRfe33DwE5nIY"
  },
  {
    "title": "67th Avenue",
    "address": "67th Avenue, New York, NY",
    "latitude": 40.7335,
    "longitude": -73.8605,
    "place_id": "ChIJR7N5g6mywokR9f6E5z49FwM"
  },
  {
    "title": "77th Street-Roosevelt Avenue",
    "address": "77th Street-Roosevelt Avenue, New York, NY",
    "latitude": 40.7545,
    "longitude": -73.8743,
    "place_id": "ChIJc-6d7QpXwokRj-Kg0VHWdXk"
  },
  {
    "title": "Borough Hall",
    "address": "Borough Hall, Brooklyn, NY",
    "latitude": 40.6941,
    "longitude": -73.9894,
    "place_id": "ChIJaX8fF2q3wokR2D5iHPOdJfI"
  },
  {
    "title": "Smith-9th Streets",
    "address": "Smith-9th Streets, Brooklyn, NY",
    "latitude": 40.6743,
    "longitude": -73.9971,
    "place_id": "ChIJCf3d9pY2wokRReKvZHrTT_w"
  },
  {
    "title": "Coney Island-Stillwell Avenue",
    "address": "Coney Island-Stillwell Avenue, Brooklyn, NY",
    "latitude": 40.5775,
    "longitude": -73.9857,
    "place_id": "ChIJSU_eVh46wokR-6hIRwy4qFU"
  },
  {
    "title": "Bedford Avenue",
    "address": "Bedford Avenue, Brooklyn, NY",
    "latitude": 40.7175,
    "longitude": -73.9564,
    "place_id": "ChIJA2LMuIFZwokRAO_a9hs08kk"
  },
  {
    "title": "Canal Street",
    "address": "Canal Street, New York, NY",
    "latitude": 40.7185,
    "longitude": -73.9981,
    "place_id": "ChIJT3Sh8kJYwokRaS71FQAfFVY"
  },
  {
    "title": "14th Street-Union Square",
    "address": "14th Street-Union Square, New York, NY",
    "latitude": 40.7355,
    "longitude": -73.9931,
    "place_id": "ChIJcQW9F8ZawokRHdE5fcvmRzQ"
  },
  {
    "title": "8th Street-NYU",
    "address": "8th Street-NYU, New York, NY",
    "latitude": 40.7294,
    "longitude": -73.9974,
    "place_id": "ChIJ7xAcpYJYwokRkR0bKTqzYXQ"
  },
  {
    "title": "Christopher Street-Sheridan Square",
    "address": "Christopher Street-Sheridan Square, New York, NY",
    "latitude": 40.7334,
    "longitude": -74.0033,
    "place_id": "ChIJW-bIkPlYwokRs5BEPwvKHDQ"
  },
  {
    "title": "W 4th Street-Washington Square",
    "address": "W 4th Street-Washington Square, New York, NY",
    "latitude": 40.7328,
    "longitude": -73.9975,
    "place_id": "ChIJOc2XJpZYwokRS8l7Uo9fyMk"
  },
  {
    "title": "57th Street-Seventh Avenue",
    "address": "57th Street-Seventh Avenue, New York, NY",
    "latitude": 40.7624,
    "longitude": -73.9756,
    "place_id": "ChIJ6YbH4IkWwokR0b5bh9M7hyQ"
  },
  {
    "title": "59th Street-Columbus Circle",
    "address": "59th Street-Columbus Circle, New York, NY",
    "latitude": 40.7681,
    "longitude": -73.9814,
    "place_id": "ChIJEYCo36VYwokRtSzgnXTfcQY"
  },
  {
    "title": "West 8th Street-NY Aquarium",
    "address": "West 8th Street-NY Aquarium, Brooklyn, NY",
    "latitude": 40.5777,
    "longitude": -73.9919,
    "place_id": "ChIJqvXzDsVawokRtdTZsi7_8tI"
  },
  {
    "title": "Grand Street",
    "address": "Grand Street, New York, NY",
    "latitude": 40.7150,
    "longitude": -73.9865,
    "place_id": "ChIJPZ1L8F9YwokRWaJ-LxyQ3OY"
  },
  {
    "title": "Nostrand Avenue",
    "address": "Nostrand Avenue, Brooklyn, NY",
    "latitude": 40.6631,
    "longitude": -73.9419,
    "place_id": "ChIJu9Xb2Nlw1okRp14w5t8M-N0"
  },
  {
    "title": "Bleecker Street",
    "address": "Bleecker Street, New York, NY",
    "latitude": 40.7303,
    "longitude": -73.9970,
    "place_id": "ChIJw8HBYp5YwokRxxi0lY1h7-w"
  },
  {
    "title": "Jamaica Center - Parsons/Archer",
    "address": "Jamaica Center - Parsons/Archer, Jamaica, NY",
    "latitude": 40.7057,
    "longitude": -73.8057,
    "place_id": "ChIJkz1Ejg8xwokRjc0wxtWLKN0"
  },
  {
    "title": "Sutter Avenue-Rutland Road",
    "address": "Sutter Avenue-Rutland Road, Brooklyn, NY",
    "latitude": 40.6647,
    "longitude": -73.8884,
    "place_id": "ChIJg1M2tSFezIAR7FY1-1B0Iws"
  },
  {
    "title": "Queensboro Plaza",
    "address": "Queensboro Plaza, Long Island City, NY",
    "latitude": 40.7454,
    "longitude": -73.9482,
    "place_id": "ChIJ2dEwZBZWwokRZZBRJ85xo0s"
  },
  {
    "title": "Lincoln Square",
    "address": "Lincoln Square, New York, NY",
    "latitude": 40.7741769,
    "longitude": -73.9849118,
    "place_id": "ChIJYWvLK15YwokR9nuSX-MHTZA"
  },
  {
    "title": "The Spotted Pig",
    "address": "314 W 11th St, New York, NY 10014",
    "latitude": 40.735967,
    "longitude": -74.002666,
    "place_id": "ChIJBzOgM6oWwokRKHqQ_Hjqcw0"
  },
  {
    "title": "Carbone",
    "address": "181 Thompson St, New York, NY 10012",
    "latitude": 40.730174,
    "longitude": -73.997056,
    "place_id": "ChIJe6XM2QNYwokRyph5HzJowjo"
  },
  {
    "title": "L'Artusi",
    "address": "319 W 10th St, New York, NY 10014",
    "latitude": 40.737284,
    "longitude": -74.001073,
    "place_id": "ChIJh7lOWqcWwokRSy2vFmrq_5E"
  },
  {
    "title": "Balthazar",
    "address": "80 Spring St, New York, NY 10012",
    "latitude": 40.724407,
    "longitude": -73.997953,
    "place_id": "ChIJD0cXlQNYwokRu3smz9yy_gA"
  },
  {
    "title": "The Modern",
    "address": "9 W 53rd St, New York, NY 10019",
    "latitude": 40.761436,
    "longitude": -73.977621,
    "place_id": "ChIJ5ZSYXJtYwokRzZK5PZYwAjo"
  },
  {
    "title": "Gramercy Tavern",
    "address": "42 E 20th St, New York, NY 10003",
    "latitude": 40.738561,
    "longitude": -73.988796,
    "place_id": "ChIJD9cfeF5YwokRbp7Q_xm30Gs"
  },
  {
    "title": "Eleven Madison Park",
    "address": "11 Madison Ave, New York, NY 10010",
    "latitude": 40.741171,
    "longitude": -73.987676,
    "place_id": "ChIJJabMnF5YwokRrvsrHz5aCw8"
  },
  {
    "title": "Peter Luger Steak House",
    "address": "178 Broadway, Brooklyn, NY 11211",
    "latitude": 40.709026,
    "longitude": -73.961033,
    "place_id": "ChIJfwC3Fb1ZwokRZ2hbT6N7g3w"
  },
  {
    "title": "Momofuku Noodle Bar",
    "address": "171 1st Avenue, New York, NY 10003",
    "latitude": 40.731795,
    "longitude": -73.987801,
    "place_id": "ChIJY1Rhf3JYwokR7seIhxPbf7k"
  },
  {
    "title": "Peking Duck House",
    "address": "28 Mott St, New York, NY 10013",
    "latitude": 40.715505,
    "longitude": -73.997305,
    "place_id": "ChIJ03vFwq4WwokRz3ZZhFQ_aF4"
  },
  {
    "title": "John's of Bleecker Street",
    "address": "278 Bleecker St, New York, NY 10014",
    "latitude": 40.732843,
    "longitude": -73.996768,
    "place_id": "ChIJDze5V2NYwokR8L7gZbnRA7s"
  },
  {
    "title": "Keens Steakhouse",
    "address": "72 W 36th St, New York, NY 10018",
    "latitude": 40.748417,
    "longitude": -73.989304,
    "place_id": "ChIJX-VXRL5YwokREftRzrU46kk"
  },
  {
    "title": "Blue Hill",
    "address": "75 Washington Pl, New York, NY 10011",
    "latitude": 40.730931,
    "longitude": -73.998759,
    "place_id": "ChIJQ-R9rb1YwokR-kv_FRS_x9M"
  },
  {
    "title": "Alinea",
    "address": "1652 N Halsted St, Chicago, IL 60614",
    "latitude": 41.915442,
    "longitude": -87.648748,
    "place_id": "ChIJ2x4vhrq3t4gRC4nKLaZcooM"
  },
  {
    "title": "Shake Shack",
    "address": "Madison Square Park, New York, NY 10010",
    "latitude": 40.741330,
    "longitude": -73.989722,
    "place_id": "ChIJBzOGvG0YwokRmrQwoy7uEN4"
  },
  {
    "title": "Barbuto",
    "address": "775 Washington St, New York, NY 10014",
    "latitude": 40.738413,
    "longitude": -74.008277,
    "place_id": "ChIJa2Ap41YWwokRsAsJWx2ACvA"
  },
  {
    "title": "NoMad",
    "address": "1170 Broadway, New York, NY 10001",
    "latitude": 40.741524,
    "longitude": -73.989293,
    "place_id": "ChIJeS8M7t5YwokRZ7lTYL3z3E0"
  },
  {
    "title": "The River Café",
    "address": "1 Water St, Brooklyn, NY 11201",
    "latitude": 40.703123,
    "longitude": -73.996046,
    "place_id": "ChIJa8t1MP9awokRjU2TVyH8GRs"
  },
  {
    "title": "Café Mogador",
    "address": "101 St Marks Pl, New York, NY 10009",
    "latitude": 40.727848,
    "longitude": -73.987271,
    "place_id": "ChIJD3xf68BZwokRRbGS8os6ktg"
  },
  {
    "title": "The Oyster Bar",
    "address": "Grand Central Terminal, New York, NY 10017",
    "latitude": 40.752726,
    "longitude": -73.977276,
    "place_id": "ChIJA3F5yT1YwokRzv64f5yEeqg"
  },
  {
    "title": "Del Posto",
    "address": "85 10th Ave, New York, NY 10011",
    "latitude": 40.741702,
    "longitude": -74.005611,
    "place_id": "ChIJEU-VpxhYwokRRY2x0B0VqRE"
  },
  {
    "title": "Lucali",
    "address": "575 Henry St, Brooklyn, NY 11231",
    "latitude": 40.678697,
    "longitude": -73.999961,
    "place_id": "ChIJeZZmzhBZwokRHHXy_WevqFM"
  },
  {
    "title": "Russ & Daughters Cafe",
    "address": "127 Orchard St, New York, NY 10002",
    "latitude": 40.719867,
    "longitude": -73.989209,
    "place_id": "ChIJxV5m5VNZwokR6sIz_vl4bq4"
  },
  {
    "title": "Blue Ribbon Brasserie",
    "address": "97 Sullivan St, New York, NY 10012",
    "latitude": 40.730034,
    "longitude": -73.999964,
    "place_id": "ChIJewfWq6NYwokR_k7pC_B3-uo"
  },
  {
    "title": "Sushi Nakazawa",
    "address": "23 Commerce St, New York, NY 10014",
    "latitude": 40.737435,
    "longitude": -73.998633,
    "place_id": "ChIJb5E09Q1YwokRpFJ9ZqS9DJM"
  },
  {
    "title": "Frankies 457 Spuntino",
    "address": "457 Court St, Brooklyn, NY 11231",
    "latitude": 40.677351,
    "longitude": -73.998623,
    "place_id": "ChIJs2wfrXlZwokRa6FwRl0aVrY"
  },
  {
    "title": "Raoul's",
    "address": "180 Prince St, New York, NY 10012",
    "latitude": 40.727071,
    "longitude": -73.997472,
    "place_id": "ChIJy_yZaGVZwokRvgPcs4fhpuk"
  },
  {
    title: "NewYork-Presbyterian Hospital",
    address: "525 E 68th St, New York, NY 10065",
    latitude: 40.7640834,
    longitude: -73.9548795,
    place_id: "ChIJV7nYvTZYwokRquaz2FyU0Wc",
  },
  {
    title: "Mount Sinai Hospital",
    address: "1468 Madison Ave, New York, NY 10029",
    latitude: 40.7897553,
    longitude: -73.9527452,
    place_id: "ChIJKzcnkMpYwokRQKfI3uR3M90",
  },
  {
    title: "NYU Langone Health",
    address: "550 1st Ave, New York, NY 10016",
    latitude: 40.7425886,
    longitude: -73.9741717,
    place_id: "ChIJxYGrd8ZZwokRMKzzac1KYuA",
  },
  {
    title: "Lenox Hill Hospital",
    address: "100 E 77th St, New York, NY 10075",
    latitude: 40.7730946,
    longitude: -73.9600021,
    place_id: "ChIJe8QlyM9YwokRLklR4oqYK9c",
  },
  {
    title: "Mount Sinai West",
    address: "1000 10th Ave, New York, NY 10019",
    latitude: 40.7692971,
    longitude: -73.9886877,
    place_id: "ChIJAQAAKD5YwokRtLVcqCulJXY",
  },
  {
    title: "Mount Sinai Morningside",
    address: "1111 Amsterdam Ave, New York, NY 10025",
    latitude: 40.8072362,
    longitude: -73.9637989,
    place_id: "ChIJcWJPNr1YwokR3xINuIkNkaU",
  },
  {
    title: "Bellevue Hospital Center",
    address: "462 1st Ave, New York, NY 10016",
    latitude: 40.7382036,
    longitude: -73.9754955,
    place_id: "ChIJX1vKcsZZwokRJzvMQ_9Q3JE",
  },
  {
    title: "Harlem Hospital Center",
    address: "506 Lenox Ave, New York, NY 10037",
    latitude: 40.8135873,
    longitude: -73.9400467,
    place_id: "ChIJrXWw37pYwokRYNINp6AnMLk",
  },
  {
    title: "Metropolitan Hospital Center",
    address: "1901 1st Ave, New York, NY 10029",
    latitude: 40.785519,
    longitude: -73.9442661,
    place_id: "ChIJZ83MZMpYwokRAZBh6YoBhFA",
  },
  {
    title: "NYC Health + Hospitals/Queens",
    address: "82-68 164th St, Jamaica, NY 11432",
    latitude: 40.7176582,
    longitude: -73.7994792,
    place_id: "ChIJRVQt36JdwokRyBlY9Ak6oe0",
  },
  {
    title: "BronxCare Health System",
    address: "1650 Grand Concourse, Bronx, NY 10457",
    latitude: 40.8427214,
    longitude: -73.9089187,
    place_id: "ChIJF8lmWz9ZwokRFBsk-WIYDTI",
  },
  {
    title: "Kings County Hospital Center",
    address: "451 Clarkson Ave, Brooklyn, NY 11203",
    latitude: 40.6566253,
    longitude: -73.9448925,
    place_id: "ChIJ_20Twl5bwokRf2IzN3W9cm0",
  },
  {
    title: "Woodhull Medical Center",
    address: "760 Broadway, Brooklyn, NY 11206",
    latitude: 40.7005053,
    longitude: -73.9430364,
    place_id: "ChIJD3K-qHZawokRpxBFPEJPWrA",
  },
  {
    title: "Maimonides Medical Center",
    address: "4802 10th Ave, Brooklyn, NY 11219",
    latitude: 40.6401462,
    longitude: -73.9961602,
    place_id: "ChIJTfRI9IJawokRaVx0IbQSmx0",
  },
  {
    title: "Brooklyn Hospital Center",
    address: "121 DeKalb Ave, Brooklyn, NY 11201",
    latitude: 40.6908344,
    longitude: -73.9740579,
    place_id: "ChIJKwTdEZ1awokRe07M-NzRb-A",
  },
  {
    title: "NYU Langone Hospital—Brooklyn",
    address: "150 55th St, Brooklyn, NY 11220",
    latitude: 40.6457572,
    longitude: -74.0169636,
    place_id: "ChIJkztdcwJawokRgMoFg7LfHfw",
  },
  {
    title: "Richmond University Medical Center",
    address: "355 Bard Ave, Staten Island, NY 10310",
    latitude: 40.6361434,
    longitude: -74.1151563,
    place_id: "ChIJx8x-BIRGwokRsSK__N2sxYo",
  },
  {
    title: "Staten Island University Hospital",
    address: "475 Seaview Ave, Staten Island, NY 10305",
    latitude: 40.5877675,
    longitude: -74.0841312,
    place_id: "ChIJk1phvHRGwokRj9DApoDFvU0",
  },
  {
    title: "Elmhurst Hospital Center",
    address: "79-01 Broadway, Elmhurst, NY 11373",
    latitude: 40.7449215,
    longitude: -73.8842112,
    place_id: "ChIJO3ES6ZZdwokRgQVCWBMSz88",
  },
  {
    title: "Queens Hospital Center",
    address: "82-68 164th St, Jamaica, NY 11432",
    latitude: 40.7165102,
    longitude: -73.8002336,
    place_id: "ChIJRVQt36JdwokRsEMXJbIl4nk",
  },
  {
    title: "Jamaica Hospital Medical Center",
    address: "8900 Van Wyck Expy, Richmond Hill, NY 11418",
    latitude: 40.7014471,
    longitude: -73.8166556,
    place_id: "ChIJAQEgyuJdwokRrsPhqTGW_0Q",
  },
  {
    title: "Flushing Hospital Medical Center",
    address: "4500 Parsons Blvd, Flushing, NY 11355",
    latitude: 40.7521705,
    longitude: -73.8176329,
    place_id: "ChIJn3flVcRdwokREv3XTWqPQzA",
  },
  {
    title: "Coney Island Hospital",
    address: "2601 Ocean Pkwy, Brooklyn, NY 11235",
    latitude: 40.5863598,
    longitude: -73.9650615,
    place_id: "ChIJq4GyLGxCwokRb-AOgE8UoMI",
  },
  {
    title: "Hospital for Special Surgery",
    address: "535 E 70th St, New York, NY 10021",
    latitude: 40.7658426,
    longitude: -73.9543102,
    place_id: "ChIJi9WhWTZYwokR6DrK2BQwBE4",
  },
  {
    title: "NYC Health + Hospitals/Gotham Health",
    address: "206-20 Linden Blvd, Queens, NY 11412",
    latitude: 40.694957,
    longitude: -73.755118,
    place_id: "ChIJF3VEt95dwokRJSfCGpWWzUo",
  },
  {
    title: "VA NY Harbor Healthcare System",
    address: "423 E 23rd St, New York, NY 10010",
    latitude: 40.7376642,
    longitude: -73.9747704,
    place_id: "ChIJkT_Lv8ZZwokRQdOYTTk54rU",
  },
  {
    title: "NYC Health + Hospitals/Lincoln",
    address: "234 E 149th St, Bronx, NY 10451",
    latitude: 40.8174894,
    longitude: -73.9261606,
    place_id: "ChIJ9Uhe9-lYwokRt_NBz9q8N4k",
  },
  {
    title: "Metropolitan Jewish Health System",
    address: "6323 7th Ave, Brooklyn, NY 11220",
    latitude: 40.636234,
    longitude: -74.015225,
    place_id: "ChIJ0y3PzHRawokRx4N_3JkNLN4",
  },
  {
    title: "Interfaith Medical Center",
    address: "1545 Atlantic Ave, Brooklyn, NY 11213",
    latitude: 40.6780722,
    longitude: -73.9331416,
    place_id: "ChIJGV_LNGhawokRkKwhSTEXqIU",
  },
{
  title: "John F. Kennedy International Airport",
  address: "JFK Access Rd, Queens, NY 11430",
  latitude: 40.6413111,
  longitude: -73.7781391,
  place_id: "ChIJ6Z2_Nmq2wokRF5MIk2dsE_0",
},
{
  title: "LaGuardia Airport",
  address: "LaGuardia Rd, Queens, NY 11371",
  latitude: 40.7769271,
  longitude: -73.8739659,
  place_id: "ChIJPTacEpBQwokRKwIlDXelxkA",
},
  {
    title: "Central Park",
    address: "Central Park, New York, NY",
    latitude: 40.785091,
    longitude: -73.968285,
    place_id: "ChIJ4zGFAZpYwokRGUGph3Mf37k"
  },
  {
    title: "Bryant Park",
    address: "Bryant Park, New York, NY 10018",
    latitude: 40.7535965,
    longitude: -73.9832326,
    place_id: "ChIJrUUgU7NYwokRLvHhV3K8CjM"
  },
  {
    title: "Washington Square Park",
    address: "Washington Square, New York, NY 10012",
    latitude: 40.730823,
    longitude: -73.997332,
    place_id: "ChIJQ-TvBlZYwokRKwIlDXelxkA"
  },
  {
    title: "Riverside Park",
    address: "Riverside Dr, New York, NY",
    latitude: 40.800676,
    longitude: -73.971321,
    place_id: "ChIJ8_6OwGhYwokR6rkk2zzPi4E"
  },
  {
    title: "Battery Park",
    address: "Battery Park, New York, NY 10004",
    latitude: 40.7032775,
    longitude: -74.0170282,
    place_id: "ChIJKwAoO1tawokRjMDs_IEyCwo"
  },
  {
    title: "Union Square Park",
    address: "Union Square, New York, NY 10003",
    latitude: 40.7358633,
    longitude: -73.9910838,
    place_id: "ChIJeU4eTmlZwokRY6EFpJnhNNE"
  },
  {
    title: "Tompkins Square Park",
    address: "E 10th St, New York, NY 10009",
    latitude: 40.7264776,
    longitude: -73.9815338,
    place_id: "ChIJPwOGdQJZwokR3z3k3jcT8oY"
  },
  {
    title: "Madison Square Park",
    address: "Madison Ave, New York, NY 10010",
    latitude: 40.742502,
    longitude: -73.987708,
    place_id: "ChIJBc2vhcFZwokR7U7kgaZHqaU"
  },
  {
    title: "Hudson River Park",
    address: "Hudson River Greenway, New York, NY",
    latitude: 40.7397137,
    longitude: -74.0102831,
    place_id: "ChIJ5wtZwEZZwokRfV3Z3-nzrcw"
  },
  {
    title: "Fort Tryon Park",
    address: "Riverside Dr To Broadway, New York, NY 10040",
    latitude: 40.8615985,
    longitude: -73.9311063,
    place_id: "ChIJV1J7Ku1YwokRQU4xbErn7vQ"
  },
  {
    title: "Prospect Park",
    address: "Prospect Park, Brooklyn, NY",
    latitude: 40.660204,
    longitude: -73.968956,
    place_id: "ChIJtV5bzSAawokRUC6MHN1wz3g"
  },
  {
    title: "McCarren Park",
    address: "776 Lorimer St, Brooklyn, NY 11222",
    latitude: 40.7215765,
    longitude: -73.9511342,
    place_id: "ChIJ2_XsdtJawokROvM_tlI8RwI"
  },
  {
    title: "Flushing Meadows Corona Park",
    address: "Grand Central Pkwy., Whitestone Exwy. between 111 St. and College Point Blvd., Park Dr. E., Queens, NY",
    latitude: 40.7498243,
    longitude: -73.8407859,
    place_id: "ChIJOw4P7dVfwokR_WM3hRJdYZE"
  },
  {
    title: "Inwood Hill Park",
    address: "Payson Ave &, Seaman Ave, New York, NY 10034",
    latitude: 40.8721041,
    longitude: -73.9252557,
    place_id: "ChIJ09-ZCO1YwokRCi43r8ZQ0Tg"
  },
  {
    title: "Morningside Park",
    address: "Morningside Dr, New York, NY",
    latitude: 40.8077226,
    longitude: -73.9598706,
    place_id: "ChIJfe8DvmRYwokRjGu3Yy7pFks"
  },
  {
    title: "Van Cortlandt Park",
    address: "Broadway & W 242nd St, Bronx, NY 10471",
    latitude: 40.8979324,
    longitude: -73.8860131,
    place_id: "ChIJU9x_r-FZwokRk-mESiXEPaM"
  },
  {
    title: "Pelham Bay Park",
    address: "Middletown Rd & Stadium Ave, Bronx, NY 10465",
    latitude: 40.8677365,
    longitude: -73.8139627,
    place_id: "ChIJb8Shp4pewokR-lYWSyo27Fo"
  },
  {
    title: "Highbridge Park",
    address: "Highbridge Park, New York, NY",
    latitude: 40.841493,
    longitude: -73.931893,
    place_id: "ChIJD0-D_uBYwokRPK7uAYqs6IY"
  },
  {
    title: "Marcus Garvey Park",
    address: "Madison Ave &, E 120th St, New York, NY 10027",
    latitude: 40.8048062,
    longitude: -73.9434136,
    place_id: "ChIJDyHqEmlYwokRr3Wv1tVi9xY"
  },
  {
    title: "St. Nicholas Park",
    address: "St Nicholas Terrace, New York, NY 10027",
    latitude: 40.8184625,
    longitude: -73.9523189,
    place_id: "ChIJURB0OmlYwokRy_d8D5xrhfE"
  },
  {
    title: "Sara D. Roosevelt Park",
    address: "E Houston St, New York, NY 10002",
    latitude: 40.7210952,
    longitude: -73.9915768,
    place_id: "ChIJp4ENMUpZwokR4UGndWJ0BEY"
  },
  {
    title: "East River Park",
    address: "East River Promenade, New York, NY 10009",
    latitude: 40.7175789,
    longitude: -73.9738372,
    place_id: "ChIJO1VZ0S9ZwokRn3x1KmoC5b4"
  },
  {
    title: "Carl Schurz Park",
    address: "E 86th St &, East End Ave, New York, NY 10028",
    latitude: 40.7759228,
    longitude: -73.9433492,
    place_id: "ChIJycXtqHdYwokRnMgJbiAHzmc"
  },
  {
    title: "Clove Lakes Park",
    address: "1150 Clove Rd, Staten Island, NY 10301",
    latitude: 40.6182873,
    longitude: -74.1114089,
    place_id: "ChIJnUY03oBJwokR2pgobMl1rRg"
  },
  {
    title: "Silver Lake Park",
    address: "Victory Blvd, Staten Island, NY 10301",
    latitude: 40.6249543,
    longitude: -74.0942386,
    place_id: "ChIJVzTw0kVJwokRXhNwn0EBbTo"
  },
  {
    title: "Brooklyn Bridge Park",
    address: "334 Furman St, Brooklyn, NY 11201",
    latitude: 40.69957,
    longitude: -73.99736,
    place_id: "ChIJ0x-KzEJawokR_3mnzZ4uqpI"
  },
  {
    title: "Socrates Sculpture Park",
    address: "32-01 Vernon Blvd, Queens, NY 11106",
    latitude: 40.768553,
    longitude: -73.936882,
    place_id: "ChIJa3Hya8FZwokRGC3Dn0rBdno"
  },
  {
    title: "Queensbridge Park",
    address: "Vernon Blvd, Queens, NY 11101",
    latitude: 40.7543685,
    longitude: -73.9453282,
    place_id: "ChIJXwe9rMRZwokRnDTEPkoDG-Y"
  },
  {
    title: "Juniper Valley Park",
    address: "80th St, Middle Village, NY 11379",
    latitude: 40.7178698,
    longitude: -73.8812591,
    place_id: "ChIJP0cL_HRbwokRQIFoBtD9kUY"
  },
  {
    title: "Stuyvesant High School",
    address: "345 Chambers St, New York, NY 10282",
    latitude: 40.7179,
    longitude: -74.0131,
    place_id: "ChIJsXfWlbZZwokRkRzV2mU3eN8"
  },
  {
    title: "The Bronx High School of Science",
    address: "75 W 205th St, The Bronx, NY 10468",
    latitude: 40.8781,
    longitude: -73.8908,
    place_id: "ChIJEzp2IDb0wokRRF53wBKSo54"
  },
  {
    title: "Brooklyn Technical High School",
    address: "29 Fort Greene Pl, Brooklyn, NY 11217",
    latitude: 40.6889,
    longitude: -73.9765,
    place_id: "ChIJL8N3PU1awokRW0bn_iC7PfU"
  },
  {
    title: "Fiorello H. Laguardia High School of Music & Art and Performing Arts",
    address: "100 Amsterdam Ave, New York, NY 10023",
    latitude: 40.7736,
    longitude: -73.9855,
    place_id: "ChIJa6zVW11YwokRkuFq2HObKXA"
  },
  {
    title: "Hunter College High School",
    address: "71 E 94th St, New York, NY 10128",
    latitude: 40.7846,
    longitude: -73.9526,
    place_id: "ChIJo4TixgZZwokRZLq1qWncepg"
  },
  {
    title: "Beacon High School",
    address: "522 W 44th St, New York, NY 10036",
    latitude: 40.7615,
    longitude: -73.9964,
    place_id: "ChIJTTW5BvVZwokRmOukx-JRMZQ"
  },
  {
    title: "Townsend Harris High School",
    address: "149-11 Melbourne Ave, Queens, NY 11367",
    latitude: 40.7365,
    longitude: -73.8216,
    place_id: "ChIJ2TdMvqnbwokRfKo8EbA0pRM"
  },
  {
    title: "High School of American Studies at Lehman College",
    address: "2925 Goulden Ave, The Bronx, NY 10468",
    latitude: 40.8771,
    longitude: -73.8936,
    place_id: "ChIJC7d3sTn0wokRArCuShAgH6g"
  },
  {
    title: "Eleanor Roosevelt High School",
    address: "411 E 76th St, New York, NY 10021",
    latitude: 40.7704,
    longitude: -73.9557,
    place_id: "ChIJK6kD4xxYwokR_kNrxN_1Rro"
  },
  {
    title: "Millennium High School",
    address: "75 Broad St, New York, NY 10004",
    latitude: 40.7044,
    longitude: -74.0112,
    place_id: "ChIJi4g3-JxawokR1K7BtMPqYFA"
  },
  {
    title: "New Explorations into Science, Technology and Math High School (NEST+m)",
    address: "111 Columbia St, New York, NY 10002",
    latitude: 40.7173,
    longitude: -73.9834,
    place_id: "ChIJwWa8kI5ZwokRShv6LgkW3yM"
  },
  {
    title: "High School for Math, Science and Engineering at City College",
    address: "240 Convent Ave, New York, NY 10031",
    latitude: 40.8200,
    longitude: -73.9492,
    place_id: "ChIJ_1Tlhm3ywokRp6DkuN5DduE"
  },
  {
    title: "Bard High School Early College",
    address: "525 E Houston St, New York, NY 10002",
    latitude: 40.7212,
    longitude: -73.9743,
    place_id: "ChIJH7ViRhxZwokRn-6h1T4cHjw"
  },
  {
    title: "Midwood High School",
    address: "2839 Bedford Ave, Brooklyn, NY 11210",
    latitude: 40.6307,
    longitude: -73.9503,
    place_id: "ChIJHycsOSdawokRn8yadDF2WwU"
  },
  {
    title: "Fort Hamilton High School",
    address: "8301 Shore Rd, Brooklyn, NY 11209",
    latitude: 40.6256,
    longitude: -74.0359,
    place_id: "ChIJjS8FQBJbwokRrMuvU3G4d4k"
  },
  {
    title: "Edward R. Murrow High School",
    address: "1600 Ave L, Brooklyn, NY 11230",
    latitude: 40.6227,
    longitude: -73.9611,
    place_id: "ChIJ0zOvLHRawokRIFQ1Ij3Fg8A"
  },
  {
    title: "Francis Lewis High School",
    address: "58-20 Utopia Pkwy, Fresh Meadows, NY 11365",
    latitude: 40.7409,
    longitude: -73.7906,
    place_id: "ChIJi1XJ2xvawokRdehCHPykpKM"
  },
  {
    title: "Brooklyn Latin School",
    address: "223 Graham Ave, Brooklyn, NY 11206",
    latitude: 40.7072,
    longitude: -73.9436,
    place_id: "ChIJxY7h6lVZwokRGD-EvdaZBfI"
  },
  {
    title: "Susan E. Wagner High School",
    address: "1200 Manor Rd, Staten Island, NY 10314",
    latitude: 40.6051,
    longitude: -74.1308,
    place_id: "ChIJZVfMEEzAwokRx6MBkOB0C8s"
  },
  {
    title: "Tottenville High School",
    address: "100 Luten Ave, Staten Island, NY 10312",
    latitude: 40.5272,
    longitude: -74.2112,
    place_id: "ChIJE8COTuKBwokR-cBiO8T3RCg"
  },
  {
    title: "New Utrecht High School",
    address: "1601 80th St, Brooklyn, NY 11214",
    latitude: 40.6118,
    longitude: -74.0037,
    place_id: "ChIJPQATYnhbwokRbUMFiCqNT4I"
  },
  {
    title: "James Madison High School",
    address: "3787 Bedford Ave, Brooklyn, NY 11229",
    latitude: 40.6024,
    longitude: -73.9433,
    place_id: "ChIJ6X5spPZawokRgIdk9FjWjEs"
  },
  {
    title: "Forest Hills High School",
    address: "67-01 110th St, Forest Hills, NY 11375",
    latitude: 40.7225,
    longitude: -73.8396,
    place_id: "ChIJq1TpyIPfwokRQL3qIgqAdGo"
  },
  {
    title: "Benjamin N. Cardozo High School",
    address: "57-00 223rd St, Bayside, NY 11364",
    latitude: 40.7594,
    longitude: -73.7593,
    place_id: "ChIJS-Rkqg_XwokRLVE7Txz6j10"
  },
  {
    title: "John Bowne High School",
    address: "63-25 Main St, Flushing, NY 11367",
    latitude: 40.7306,
    longitude: -73.8236,
    place_id: "ChIJJ4Xmf5bawokR9zkhjifGEgI"
  },
  {
    title: "William Cullen Bryant High School",
    address: "48-10 31st Ave, Long Island City, NY 11103",
    latitude: 40.7582,
    longitude: -73.9135,
    place_id: "ChIJ0zCyGvJZwokRCYJmLEAWJ7U"
  },
  {
    title: "Long Island City High School",
    address: "14-30 Broadway, Long Island City, NY 11106",
    latitude: 40.7636,
    longitude: -73.9361,
    place_id: "ChIJa_2JeFFZwokRpEsVJHX0pOY"
  },
  {
    title: "Queens High School for the Sciences at York College",
    address: "94-50 159th St, Jamaica, NY 11433",
    latitude: 40.7024,
    longitude: -73.7985,
    place_id: "ChIJe9C9IlTZwokRzI9iN-wZKhU"
  },
  {
    title: "Aviation High School",
    address: "45-30 36th St, Long Island City, NY 11101",
    latitude: 40.7443,
    longitude: -73.9283,
    place_id: "ChIJ89FPZc1ZwokRZ5PBOBO2aWg"
  }
]

export default ADDRESSES;