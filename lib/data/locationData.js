const locationGridStatus = props => /*#__PURE__*/React.createElement("div", {
  className: "flex gap-2 justify-center items-center text-gray-700 capitalize"
}, /*#__PURE__*/React.createElement("p", {
  style: {
    background: props.StatusBg
  },
  className: "rounded-full h-3 w-3"
}), /*#__PURE__*/React.createElement("p", null, props.Status));
export const locationsGrid = [{
  type: "checkbox",
  width: "50"
}, {
  field: "locationId",
  headerText: "Location Id",
  width: "200",
  textAlign: "Center"
}, {
  field: "locationName",
  headerText: "Location Name",
  width: "100",
  textAlign: "Center"
}, {
  field: "locationCategory",
  headerText: "Location Category",
  width: "100",
  textAlign: "Center"
}, {
  field: "streetAddress",
  headerText: "Street Address",
  width: "100",
  textAlign: "Center"
}, {
  field: "state",
  headerText: "State",
  width: "100",
  textAlign: "Center"
}, {
  field: "country",
  headerText: "Country",
  width: "100",
  textAlign: "Center"
}, {
  field: "Status",
  headerText: "Status",
  width: "100",
  format: "yMd",
  textAlign: "Center",
  template: locationGridStatus
}];
export const locationsData = [{
  locationId: "f28510ec-e856-4c74-adfa-6b44e2e98e7a",
  locationName: "Friesen Inc",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "6 Bobwhite Center",
  state: "Massachusetts",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "6aa20d9b-3094-4b33-8224-4cbad62b82a1",
  locationName: "Waters and Sons",
  locationCategory: "Prefabricated Aluminum Metal Canopies",
  streetAddress: "87 Bultman Way",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "82cdba2f-89ba-4805-b27e-78f5922b2d81",
  locationName: "Goodwin and Sons",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "120 Loeprich Trail",
  state: "New Mexico",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "ce3be9a1-ebf9-479f-b595-a712a9260efd",
  locationName: "Hyatt-Heller",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "4 Loftsgordon Crossing",
  state: "Oklahoma",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "8cd9c639-8cce-4340-8158-6f51de20f04f",
  locationName: "Bechtelar, Hane and Reilly",
  locationCategory: "Electrical and Fire Alarm",
  streetAddress: "82 Eastwood Hill",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "95c1511b-5a9b-41c2-997d-7e472223adf8",
  locationName: "Runolfsdottir, Hoeger and Leannon",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "1 Bayside Park",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "7cda6d75-035a-41e0-8147-4893c611eb84",
  locationName: "Cummings, Spencer and Homenick",
  locationCategory: "Rebar & Wire Mesh Install",
  streetAddress: "2 Morningstar Pass",
  state: "New Jersey",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "ac671387-5d12-4b16-8618-4e24186e0b9f",
  locationName: "Nitzsche-Nienow",
  locationCategory: "Electrical and Fire Alarm",
  streetAddress: "7 Toban Parkway",
  state: "Alabama",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "43f4f6e8-10e2-4c79-803a-6a014556cea0",
  locationName: "Morar, Boehm and Jakubowski",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "0 Merry Trail",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "95a1de4f-5c5f-4a0a-b40c-5e72ece2c709",
  locationName: "Hickle Group",
  locationCategory: "Overhead Doors",
  streetAddress: "839 Duke Center",
  state: "North Dakota",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "e02ee2ea-6aa8-48c4-982a-10557b95dfb5",
  locationName: "Toy-Roberts",
  locationCategory: "Casework",
  streetAddress: "13 Dovetail Point",
  state: "Alabama",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "f9d2ee27-778a-4ba0-a297-d89b7904f907",
  locationName: "Gulgowski, Kemmer and Hammes",
  locationCategory: "Waterproofing & Caulking",
  streetAddress: "01333 Butternut Hill",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "1b9b358f-692c-4d46-bec5-36641475ecb0",
  locationName: "Schinner Inc",
  locationCategory: "Casework",
  streetAddress: "2058 Laurel Circle",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "e0d8fe7a-f37f-4606-b786-b0ed3a078a38",
  locationName: "Ullrich-MacGyver",
  locationCategory: "Plumbing & Medical Gas",
  streetAddress: "781 Sutteridge Place",
  state: "Georgia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "7161c421-0795-4249-8620-0919ece5790c",
  locationName: "Cremin, Brekke and Friesen",
  locationCategory: "Structural & Misc Steel Erection",
  streetAddress: "659 Lake View Street",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "aa9760a9-8824-4df8-83f4-5565e37336bf",
  locationName: "Fadel Group",
  locationCategory: "Electrical",
  streetAddress: "75 Eliot Junction",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "a7218e34-6c9e-4140-a654-8df9fffd4184",
  locationName: "Collins, Trantow and Welch",
  locationCategory: "EIFS",
  streetAddress: "915 Express Way",
  state: "Pennsylvania",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "01816fa5-08a1-4f4f-a75d-6ef4d109bb3b",
  locationName: "Ryan-Koelpin",
  locationCategory: "Structural and Misc Steel (Fabrication)",
  streetAddress: "2 Union Avenue",
  state: "Utah",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "8b1d3012-fcad-40cc-893b-f69b303c455c",
  locationName: "Koelpin, Buckridge and Schamberger",
  locationCategory: "Masonry",
  streetAddress: "09695 Commercial Lane",
  state: "Kentucky",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "ecdfeb8e-637c-4aed-97d3-795d47fdca0d",
  locationName: "Vandervort-Blanda",
  locationCategory: "Framing (Wood)",
  streetAddress: "8443 Lindbergh Road",
  state: "North Carolina",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "25508997-f0ca-4918-8a52-3f1dd1ed0cf3",
  locationName: "Dietrich-DuBuque",
  locationCategory: "Roofing (Asphalt)",
  streetAddress: "4319 Towne Pass",
  state: "Ohio",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "51d765ae-b3cf-4421-897e-1d7287ff3f2d",
  locationName: "Turcotte-Jerde",
  locationCategory: "Wall Protection",
  streetAddress: "54 Westerfield Plaza",
  state: "Louisiana",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "9d1bc0e7-e2fc-45df-ab0b-0012ba2ea6dc",
  locationName: "Kirlin, Trantow and Williamson",
  locationCategory: "Drywall & Acoustical (FED)",
  streetAddress: "9535 Katie Way",
  state: "Arizona",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "94908986-8ad4-4c16-8f0e-807c05f5a7e5",
  locationName: "Waters, Sauer and Heathcote",
  locationCategory: "Framing (Steel)",
  streetAddress: "31364 Anderson Hill",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "2837fe18-7af9-4e0f-97c8-16bd8d453290",
  locationName: "Bahringer, Von and Miller",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "9 Raven Circle",
  state: "North Carolina",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "3395d4ea-28e6-433d-b466-3e2a44d20a12",
  locationName: "Powlowski Group",
  locationCategory: "Fire Sprinkler System",
  streetAddress: "1 Summit Parkway",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "0936d893-3844-4765-a563-1c4f818fbf5f",
  locationName: "Stamm, Graham and Lowe",
  locationCategory: "Epoxy Flooring",
  streetAddress: "926 Clove Parkway",
  state: "Oregon",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "966c07e0-7bcf-41f2-aede-aab81ae7b858",
  locationName: "Aufderhar LLC",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "8795 Talmadge Avenue",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "83e057c5-b365-4af4-a990-00366a418dc9",
  locationName: "Spinka and Sons",
  locationCategory: "Overhead Doors",
  streetAddress: "75 Scofield Terrace",
  state: "Utah",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "a2a61ff3-1a4a-439f-8ba6-29af6ba1fb24",
  locationName: "Conroy-Armstrong",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "88108 Oak Valley Avenue",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "9d054687-f728-4472-9d6a-68e013f9b55c",
  locationName: "Bergnaum-Prohaska",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "822 Drewry Street",
  state: "North Carolina",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "916dbe04-9d1a-4b63-8762-b753669b00ad",
  locationName: "Corkery-Brown",
  locationCategory: "Exterior Signage",
  streetAddress: "2 Meadow Vale Plaza",
  state: "Kansas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "3bfa56cc-d0b8-4e4a-a693-c569125620a6",
  locationName: "Lind, Auer and Botsford",
  locationCategory: "Rebar & Wire Mesh Install",
  streetAddress: "60 Division Street",
  state: "Minnesota",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "14e63a6a-f9af-4891-b074-6be95790eb6f",
  locationName: "O'Kon and Sons",
  locationCategory: "Prefabricated Aluminum Metal Canopies",
  streetAddress: "564 Orin Drive",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "8f134379-4122-43f3-8766-e64e3f91ec3a",
  locationName: "Hansen and Sons",
  locationCategory: "Epoxy Flooring",
  streetAddress: "09 Bellgrove Junction",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "df0108fc-09ee-44a3-b1e0-2ed092dc5e01",
  locationName: "Spencer Inc",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "31 Homewood Center",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "3e7ea7bc-be41-4c57-9ab1-e5d28fcf9260",
  locationName: "Smith-Kuphal",
  locationCategory: "Drywall & Acoustical (FED)",
  streetAddress: "851 Talisman Park",
  state: "District of Columbia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "2fd5d846-5371-49ee-8007-a2c8988c73f3",
  locationName: "O'Hara Group",
  locationCategory: "RF Shielding",
  streetAddress: "1386 Dixon Terrace",
  state: "Ohio",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "ae063b4d-4aea-463e-b8b9-b0f161eb8ec9",
  locationName: "Altenwerth Group",
  locationCategory: "Drywall & Acoustical (MOB)",
  streetAddress: "02709 Fuller Plaza",
  state: "Massachusetts",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "9dbbd085-2102-435e-ba76-b64202df24f0",
  locationName: "Douglas-Nader",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "2445 Kingsford Parkway",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "bcb9e90d-faea-45bc-bb41-c5bbdddf2dfc",
  locationName: "Bogan, Herzog and Shanahan",
  locationCategory: "Fire Sprinkler System",
  streetAddress: "096 Harbort Plaza",
  state: "Maryland",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "40c45980-6fdd-490e-ab00-7768d431da12",
  locationName: "Lesch, Hackett and Mraz",
  locationCategory: "Masonry & Precast",
  streetAddress: "89515 Meadow Vale Center",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "7e31ee38-1f11-4391-9458-ffd91f12c0ce",
  locationName: "Erdman, Windler and Runte",
  locationCategory: "Termite Control",
  streetAddress: "3838 Claremont Park",
  state: "Washington",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "8bcef53e-133d-470b-989c-6321d6e3121a",
  locationName: "Rath and Sons",
  locationCategory: "Curb & Gutter",
  streetAddress: "6702 Del Sol Trail",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "85b1428d-86f9-4d57-8f31-9fc8bf10240f",
  locationName: "Gleichner, Larson and Hegmann",
  locationCategory: "Temp Fencing, Decorative Fencing and Gates",
  streetAddress: "11 Florence Place",
  state: "Illinois",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "5c5c39d9-7a5c-49cb-be84-b01f4580bbf5",
  locationName: "Dach and Sons",
  locationCategory: "Marlite Panels (FED)",
  streetAddress: "6055 Bluestem Avenue",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "b82cffd4-e6f6-4c35-b5ec-84557c9fe31a",
  locationName: "Orn, McDermott and Monahan",
  locationCategory: "Drywall & Acoustical (MOB)",
  streetAddress: "764 Jay Alley",
  state: "Georgia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "5e3d2208-109b-40f6-bd4d-dd6a755b2ba5",
  locationName: "Mueller-McCullough",
  locationCategory: "Electrical",
  streetAddress: "24 Ronald Regan Parkway",
  state: "Alabama",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "3c3ec1c3-1a4c-4125-8c64-65c484b39f77",
  locationName: "Heller-Lynch",
  locationCategory: "Roofing (Metal)",
  streetAddress: "7 Village Hill",
  state: "Pennsylvania",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "89f6ee89-e8fa-45e1-88fe-83215f637372",
  locationName: "Heathcote-Price",
  locationCategory: "Elevator",
  streetAddress: "912 Truax Alley",
  state: "Tennessee",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "7c3206a1-7032-4a42-8a1c-1e09733195d2",
  locationName: "Durgan, Cummerata and Fadel",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "9146 Lakewood Plaza",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "b0c9efba-165e-4744-b0f4-943c46a88534",
  locationName: "Frami, Bahringer and Brakus",
  locationCategory: "Roofing (Metal)",
  streetAddress: "72324 Manley Lane",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "fe256a3d-afbe-46c1-9614-10747ba2a49d",
  locationName: "Bechtelar Group",
  locationCategory: "Rebar & Wire Mesh Install",
  streetAddress: "7406 Weeping Birch Terrace",
  state: "Missouri",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "958e2187-961a-4e3a-8803-4afe93d15e0d",
  locationName: "Langworth, Steuber and Hirthe",
  locationCategory: "Temp Fencing, Decorative Fencing and Gates",
  streetAddress: "0 Ruskin Trail",
  state: "Washington",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "df63b0fd-a51a-4885-8ff9-ae754d936363",
  locationName: "Ferry LLC",
  locationCategory: "Drilled Shafts",
  streetAddress: "744 Hauk Hill",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "8b99692d-c0c7-4e73-b14d-37c468c1e30c",
  locationName: "Medhurst, Wisozk and Ward",
  locationCategory: "Framing (Steel)",
  streetAddress: "255 Fallview Road",
  state: "Georgia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "fe987e9d-cf1d-4560-a66e-cace518ee7a7",
  locationName: "Marquardt, Ortiz and Ebert",
  locationCategory: "Electrical and Fire Alarm",
  streetAddress: "749 Comanche Place",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "13e7ac08-bc13-468d-9d3d-39e134faacb9",
  locationName: "Kovacek-Halvorson",
  locationCategory: "Drywall & Acoustical (MOB)",
  streetAddress: "48 Hovde Avenue",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "0d9429cf-e24d-431c-bd94-6967f78d6155",
  locationName: "Hamill, Carter and Bauch",
  locationCategory: "Structural & Misc Steel Erection",
  streetAddress: "9826 Mcbride Junction",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "11ff021d-1695-4513-ae18-ea6561212eda",
  locationName: "Hudson, Wilkinson and Quitzon",
  locationCategory: "Framing (Steel)",
  streetAddress: "7484 Lunder Center",
  state: "Virginia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "edf207e5-4e50-4324-95a2-96865ae40802",
  locationName: "Barton-Mills",
  locationCategory: "Asphalt Paving",
  streetAddress: "34 Nancy Way",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "824ac9fc-09fa-4dfd-81f6-421cd8fddc9e",
  locationName: "Stroman and Sons",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "656 Grasskamp Avenue",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "a288d532-0f54-4fc7-88f7-a0673cba4709",
  locationName: "Weissnat, Marks and Stracke",
  locationCategory: "Doors, Frames & Hardware",
  streetAddress: "9 Mayer Court",
  state: "Nevada",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "af0f0f27-4120-478c-b7b2-7a90b05d10f4",
  locationName: "Homenick, Weimann and Farrell",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "6385 Bonner Plaza",
  state: "District of Columbia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "f68fb2af-1b39-46ea-ae33-398df626d52b",
  locationName: "Christiansen Inc",
  locationCategory: "Plumbing & Medical Gas",
  streetAddress: "7 Scofield Alley",
  state: "Massachusetts",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "cd9b5967-3d3a-4243-9929-add17701238b",
  locationName: "Towne Group",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "2983 Becker Way",
  state: "New Hampshire",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "234a1065-e61b-429f-90d0-8157d4b14360",
  locationName: "Huels, McGlynn and Wiegand",
  locationCategory: "Temp Fencing, Decorative Fencing and Gates",
  streetAddress: "19 Summerview Pass",
  state: "Louisiana",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "6563f2e8-05a0-4761-ba3f-08507722c906",
  locationName: "Ratke, Wehner and Nolan",
  locationCategory: "HVAC",
  streetAddress: "97 North Avenue",
  state: "Michigan",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "46ad9dd5-eb1d-48c0-ac74-0da7730a7a6c",
  locationName: "Kling, Bartell and Cummings",
  locationCategory: "Doors, Frames & Hardware",
  streetAddress: "673 Pearson Point",
  state: "District of Columbia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "1f949347-b1fc-4960-8105-eef45763edc9",
  locationName: "Johnston-Stroman",
  locationCategory: "Drilled Shafts",
  streetAddress: "92 Duke Road",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "483c1cde-ab1d-414a-b59a-ff95372e4424",
  locationName: "Wiegand Inc",
  locationCategory: "HVAC",
  streetAddress: "60 Longview Center",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "a9f20589-f1b7-4ec0-a777-51718cb93b3c",
  locationName: "Kuhn, Ritchie and McDermott",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "30362 Veith Point",
  state: "Colorado",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "0d642152-f311-4a8a-96d2-747139b1bb71",
  locationName: "Stokes-Bergnaum",
  locationCategory: "Rebar & Wire Mesh Install",
  streetAddress: "64 Quincy Parkway",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "89b8aae6-e79d-4b30-a581-a447b5353d2c",
  locationName: "McGlynn, Frami and Hilll",
  locationCategory: "Exterior Signage",
  streetAddress: "96384 Lotheville Road",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "7dba285c-6be4-48a1-939b-263e4d1e1bd1",
  locationName: "O'Conner and Sons",
  locationCategory: "Site Furnishings",
  streetAddress: "72861 Schmedeman Park",
  state: "Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "eed7079e-e997-4024-af12-e93991ee1704",
  locationName: "Rice LLC",
  locationCategory: "Glass & Glazing",
  streetAddress: "7032 Maryland Court",
  state: "Kansas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "49522d08-f6a5-402a-ab4c-22e972a54e2f",
  locationName: "King, Kerluke and McCullough",
  locationCategory: "Temp Fencing, Decorative Fencing and Gates",
  streetAddress: "7 John Wall Plaza",
  state: "Indiana",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "51f252ac-1f7f-47f9-9b4a-e99e8bceb0db",
  locationName: "Collier, Volkman and Berge",
  locationCategory: "Roofing (Asphalt)",
  streetAddress: "55726 Springview Avenue",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "602995cc-4f5e-4a8a-92e1-c67a9a0af2df",
  locationName: "Lubowitz LLC",
  locationCategory: "Structural & Misc Steel Erection",
  streetAddress: "9532 Hoepker Pass",
  state: "District of Columbia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "2268852f-ba99-4d6e-928b-07f81433fe61",
  locationName: "Rodriguez-Farrell",
  locationCategory: "Granite Surfaces",
  streetAddress: "54748 Anhalt Place",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "e0f5a879-1d09-4ba9-bdf0-b686902e4a9d",
  locationName: "Reichel Group",
  locationCategory: "Temp Fencing, Decorative Fencing and Gates",
  streetAddress: "23876 Chive Crossing",
  state: "Oklahoma",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "9d3709e3-634b-4939-b89c-f970aafeb1f5",
  locationName: "Wuckert and Sons",
  locationCategory: "Epoxy Flooring",
  streetAddress: "93 Jackson Lane",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "418a924c-b0f7-44ec-b10c-f45e98c04936",
  locationName: "Mante, Mills and Robel",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "24913 Thompson Parkway",
  state: "Illinois",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "3e5f5cc6-af82-4737-8328-336f7413537a",
  locationName: "Mante Group",
  locationCategory: "Plumbing & Medical Gas",
  streetAddress: "83 Pierstorff Alley",
  state: "Kentucky",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "deda72fe-1e03-4981-a3c3-2e4ca85e141e",
  locationName: "Purdy, Mann and Hoppe",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "4 Banding Parkway",
  state: "Georgia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "b70f7e12-9734-4a3d-8be8-d93ff1b2cc4c",
  locationName: "Schaefer, Howell and Brown",
  locationCategory: "HVAC",
  streetAddress: "16 Prairie Rose Avenue",
  state: "Connecticut",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "735c8813-3a97-4032-a14c-0c2bc04ad1af",
  locationName: "Haley-Harvey",
  locationCategory: "Construction Clean and Final Clean",
  streetAddress: "75 Shopko Point",
  state: "Ohio",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "9f7759ca-3337-4f77-8349-f9ee74eb59e0",
  locationName: "Kris, Labadie and Gleason",
  locationCategory: "Glass & Glazing",
  streetAddress: "0463 Mayer Circle",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "b5b77f29-52dd-4511-af64-82e36b2ff18a",
  locationName: "Feest-Leuschke",
  locationCategory: "Masonry & Precast",
  streetAddress: "2 Mandrake Circle",
  state: "Minnesota",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "29affa18-1d67-43e4-a392-00338f61fea5",
  locationName: "Hudson and Sons",
  locationCategory: "Framing (Wood)",
  streetAddress: "9 Blackbird Avenue",
  state: "Georgia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "6e30a472-72b0-4310-8bd1-d6116f440070",
  locationName: "Hilpert, Lubowitz and MacGyver",
  locationCategory: "RF Shielding",
  streetAddress: "2 Ohio Circle",
  state: "Michigan",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "40352598-0ef8-4e9e-a3d7-e7dc7dff46e1",
  locationName: "Champlin LLC",
  locationCategory: "Overhead Doors",
  streetAddress: "635 Canary Lane",
  state: "Washington",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "b3c29963-bb46-4f4e-9a13-9561501bc676",
  locationName: "Borer-Upton",
  locationCategory: "RF Shielding",
  streetAddress: "5 Elmside Crossing",
  state: "Pennsylvania",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "da0bfb04-3380-46bc-8e1c-03e04e265721",
  locationName: "Jenkins, Schimmel and Wilderman",
  locationCategory: "Drilled Shafts",
  streetAddress: "16 Morningstar Street",
  state: "Missouri",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "dfe00d06-5609-4705-aaf2-8be7c9ec51b9",
  locationName: "Berge-Kemmer",
  locationCategory: "Fire Sprinkler System",
  streetAddress: "089 Di Loreto Pass",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "a6db5018-6245-4264-80ad-698a6d81c601",
  locationName: "Little and Sons",
  locationCategory: "Epoxy Flooring",
  streetAddress: "1369 Clemons Crossing",
  state: "Nebraska",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "6f51e2a0-c09a-4118-951a-30c8f36ee3bd",
  locationName: "Bashirian-Vandervort",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "118 Dapin Plaza",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "f33f01bc-a3fd-4247-a9fa-7ece719d27ad",
  locationName: "Raynor Group",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "3 Mayer Avenue",
  state: "Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "4e2489fa-825f-46b0-b115-ffe7aa4c321f",
  locationName: "Mante-Bogan",
  locationCategory: "Prefabricated Aluminum Metal Canopies",
  streetAddress: "422 Mendota Center",
  state: "Massachusetts",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "7d112e66-e461-416a-a7e8-c89854f9308f",
  locationName: "Hyatt, Price and Leffler",
  locationCategory: "Plumbing & Medical Gas",
  streetAddress: "4 Lyons Lane",
  state: "Kentucky",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "eba91870-9620-43a9-9980-d570ef9f07c8",
  locationName: "Lockman-Kub",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "0498 Southridge Avenue",
  state: "Indiana",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "c5f7d164-47b1-4d23-a49c-74286f1922f1",
  locationName: "Ziemann, Howell and Morissette",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "467 Grasskamp Terrace",
  state: "Alaska",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "3bd3a4d6-03e3-4fa6-94eb-0967957201e8",
  locationName: "Ruecker, Fay and Gorczany",
  locationCategory: "Exterior Signage",
  streetAddress: "4595 American Ash Hill",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "f7a38b9f-303b-4c70-ad2d-098167a531e2",
  locationName: "Hessel and Sons",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "1 Raven Place",
  state: "Ohio",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "c97744e1-d789-47b3-bd90-e99f9b14753e",
  locationName: "Sipes, Wuckert and O'Connell",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "33870 Sachs Road",
  state: "Virginia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "2691190a-7ab7-4001-a187-666a0c39e038",
  locationName: "Daugherty-Jaskolski",
  locationCategory: "Fire Protection",
  streetAddress: "015 Monica Court",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "3c677b61-ed8e-4fbf-b245-d407c4fe6c1c",
  locationName: "Jenkins and Sons",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "94 Harper Lane",
  state: "Pennsylvania",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "5439fca7-3920-44e8-9951-4c40a24f9a17",
  locationName: "Adams-Fisher",
  locationCategory: "Structural & Misc Steel Erection",
  streetAddress: "00733 Mcbride Place",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "545be334-89cf-4193-a41a-3783e05dc996",
  locationName: "King-Grant",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "2708 Upham Parkway",
  state: "Pennsylvania",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "caf492d3-7316-48e3-a545-c82ccd443bf6",
  locationName: "Ruecker Group",
  locationCategory: "Plumbing & Medical Gas",
  streetAddress: "6 Harper Pass",
  state: "North Carolina",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "2b780090-14a2-4de7-8b48-0795bcb68c39",
  locationName: "Zieme-Quigley",
  locationCategory: "Masonry & Precast",
  streetAddress: "0769 Northridge Crossing",
  state: "District of Columbia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "bb2bd97f-7db8-4212-a6ce-1ee56697328f",
  locationName: "Hamill, Schroeder and Graham",
  locationCategory: "Drilled Shafts",
  streetAddress: "0 Union Junction",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "27c12d03-cdfa-4e6f-9aff-c69ee23ece31",
  locationName: "Mante, Cummings and Rohan",
  locationCategory: "RF Shielding",
  streetAddress: "2193 Pleasure Crossing",
  state: "North Carolina",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "c53b2876-7db5-453f-9790-b6531af3728d",
  locationName: "Bruen Inc",
  locationCategory: "Overhead Doors",
  streetAddress: "522 Continental Crossing",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "ec01783d-9ccb-41b9-9ad5-1dd88999c308",
  locationName: "Kessler LLC",
  locationCategory: "Epoxy Flooring",
  streetAddress: "2 Warner Plaza",
  state: "Nebraska",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "4c22119b-28d9-4d00-995d-bb4a70d1ff7f",
  locationName: "Pollich-Sanford",
  locationCategory: "EIFS",
  streetAddress: "41 Ridgeview Drive",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "161af509-2d52-4efc-b113-1af57dc729fd",
  locationName: "Senger, Durgan and MacGyver",
  locationCategory: "Overhead Doors",
  streetAddress: "0014 Almo Hill",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "9c29630c-2fa8-4f5f-b1b8-0475a60d4662",
  locationName: "Rau, Treutel and Lowe",
  locationCategory: "Electrical",
  streetAddress: "9 Onsgard Junction",
  state: "Colorado",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "858b03e5-c8ab-4ff3-9f03-7efbfd6a50f9",
  locationName: "Torp LLC",
  locationCategory: "Prefabricated Aluminum Metal Canopies",
  streetAddress: "89603 Mitchell Avenue",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "d90994ad-1582-42ef-a433-d7034c49cf09",
  locationName: "Abbott and Sons",
  locationCategory: "Doors, Frames & Hardware",
  streetAddress: "6 Marquette Avenue",
  state: "Illinois",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "a1631d06-7b00-4c4b-ae7c-2aa69dd6240e",
  locationName: "Gerhold, Rutherford and Koss",
  locationCategory: "Roofing (Metal)",
  streetAddress: "0667 Bayside Way",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "b983d5db-1e69-47a5-8c8f-b6c2ef7d9919",
  locationName: "Vandervort, Stoltenberg and Zulauf",
  locationCategory: "Structural and Misc Steel (Fabrication)",
  streetAddress: "01104 Cascade Street",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "28c6d0a3-a123-4036-96aa-f1035374ee9d",
  locationName: "Stoltenberg Group",
  locationCategory: "Prefabricated Aluminum Metal Canopies",
  streetAddress: "45 Eastwood Drive",
  state: "Georgia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "912ad800-f0d7-4693-b870-2edeb7ce2ec8",
  locationName: "Gutkowski Inc",
  locationCategory: "Electrical and Fire Alarm",
  streetAddress: "8 West Place",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "283720ed-1086-41cb-ac68-c8093b5a9208",
  locationName: "Purdy-Brekke",
  locationCategory: "Structural and Misc Steel (Fabrication)",
  streetAddress: "2 Golden Leaf Point",
  state: "Massachusetts",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "24351d69-c03c-43a1-83e0-f4e62818e731",
  locationName: "Emard-Lebsack",
  locationCategory: "Ornamental Railings",
  streetAddress: "6 Butternut Hill",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "9902639b-3411-4275-b658-f8f11a8fc525",
  locationName: "Hahn LLC",
  locationCategory: "Framing (Wood)",
  streetAddress: "2 Vera Park",
  state: "Georgia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "dcb77ecb-b5b7-4e68-badf-80f470af625b",
  locationName: "Schroeder-Bogan",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "82 Russell Hill",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "fbf673aa-13d1-4bc7-a967-d1f280fc464f",
  locationName: "Moore, Abbott and Cremin",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "9973 Claremont Parkway",
  state: "Alabama",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "2b203a76-c30c-40d6-831e-54d05b2fcf45",
  locationName: "Rodriguez-Ondricka",
  locationCategory: "Construction Clean and Final Clean",
  streetAddress: "783 Corben Pass",
  state: "Oklahoma",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "702dac30-958b-49b9-9bbf-785034f45581",
  locationName: "Kertzmann, Corkery and Corwin",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "2123 Melby Way",
  state: "Colorado",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "f3066d3a-aa0c-4479-958f-14ed5165331f",
  locationName: "McDermott-Feil",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "449 Lawn Hill",
  state: "Washington",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "3c52aeec-33ad-4d7f-ae95-34bb1785e94d",
  locationName: "Considine-Roob",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "847 Chinook Hill",
  state: "Arizona",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "04e86afc-09fc-4b3c-bbd7-35143d9db0d9",
  locationName: "Fadel-Runolfsson",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "130 Pierstorff Street",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "7767c0f9-d329-4ade-bba6-4975fff620d4",
  locationName: "Langworth, Wiegand and Reinger",
  locationCategory: "Fire Protection",
  streetAddress: "8608 Dennis Trail",
  state: "Arizona",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "6b3ff1e7-899e-49a4-8948-057776c39c7c",
  locationName: "Thiel LLC",
  locationCategory: "Fire Protection",
  streetAddress: "791 Service Court",
  state: "Virginia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "37154c0c-e457-4769-8743-711d7854c6a4",
  locationName: "Kuphal, Weissnat and Runolfsdottir",
  locationCategory: "Structural & Misc Steel Erection",
  streetAddress: "83605 Luster Parkway",
  state: "North Carolina",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "ea678678-1e84-4b08-82dd-d50d41845a6a",
  locationName: "Mosciski, Greenfelder and Casper",
  locationCategory: "Asphalt Paving",
  streetAddress: "1 Susan Road",
  state: "Alabama",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "c4615565-697b-4096-8c88-805cb9c7caf1",
  locationName: "Jacobs-Donnelly",
  locationCategory: "Glass & Glazing",
  streetAddress: "529 Buell Crossing",
  state: "New Mexico",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "3698c5fd-aea4-4346-8229-db9bcbf07bb3",
  locationName: "Hand-Douglas",
  locationCategory: "Structural & Misc Steel Erection",
  streetAddress: "46748 Anthes Lane",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "ab9444ca-bed4-4c90-90d6-31870635beeb",
  locationName: "Huel Inc",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "0544 Talisman Alley",
  state: "Colorado",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "8a54124e-fdd0-4d86-9e07-bb654c93f6ea",
  locationName: "Lockman, Ferry and Keebler",
  locationCategory: "RF Shielding",
  streetAddress: "73 Lukken Circle",
  state: "Georgia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "7698d431-e82d-4647-ad90-0d7286997e4d",
  locationName: "Haag-Dach",
  locationCategory: "Prefabricated Aluminum Metal Canopies",
  streetAddress: "889 Dixon Point",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "6aa0e1d3-0f1d-4cb4-b3ee-06c67acea1b1",
  locationName: "Cronin-Monahan",
  locationCategory: "Plumbing & Medical Gas",
  streetAddress: "7827 Main Crossing",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "613c5b14-fcd7-4d4a-a8e9-25fb49eb8767",
  locationName: "Johnson LLC",
  locationCategory: "Marlite Panels (FED)",
  streetAddress: "8 Surrey Circle",
  state: "Michigan",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "af00f8a8-991b-4721-a850-aa45a32a0f91",
  locationName: "Wilderman and Sons",
  locationCategory: "Electrical and Fire Alarm",
  streetAddress: "25 Garrison Trail",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "f323545a-867d-4730-9e81-d2b461f5f548",
  locationName: "Williamson and Sons",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "6 Northland Street",
  state: "Georgia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "6c999c23-a9f1-4258-8bbd-ecd63bc8ce6c",
  locationName: "Waters Inc",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "77014 Hayes Drive",
  state: "Illinois",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "ca0b99b8-0e51-4b5c-8a59-85a9690b3da8",
  locationName: "Watsica, Stroman and Kshlerin",
  locationCategory: "Framing (Steel)",
  streetAddress: "490 Thierer Hill",
  state: "Kentucky",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "ee688ce3-abff-4212-84e7-326b57832b6c",
  locationName: "Morissette, Mosciski and Heller",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "58526 Prairie Rose Lane",
  state: "Georgia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "41d2e960-9046-4d46-80bb-a5318c078a89",
  locationName: "Schultz Group",
  locationCategory: "Drywall & Acoustical (FED)",
  streetAddress: "9604 Hovde Drive",
  state: "Wyoming",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "ad9bca75-d3f0-4052-875b-9a656097d9a8",
  locationName: "Harvey-Balistreri",
  locationCategory: "Structural and Misc Steel (Fabrication)",
  streetAddress: "99524 7th Crossing",
  state: "Tennessee",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "988aabe8-5f7c-47cb-9e24-e263b2247167",
  locationName: "Schmidt LLC",
  locationCategory: "Wall Protection",
  streetAddress: "3194 South Way",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "85120e70-f934-4d27-9e28-d86a7089bd47",
  locationName: "Runolfsdottir-Bailey",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "2 Russell Lane",
  state: "Indiana",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "fd942b21-b8ac-409e-a599-4abc4cb5eb2c",
  locationName: "Maggio, Schmeler and Beer",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "91 Riverside Avenue",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "de1e8b75-1bec-4d14-999d-d34b04507326",
  locationName: "Murray, Hessel and Donnelly",
  locationCategory: "HVAC",
  streetAddress: "8 Sauthoff Point",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "da5bacdc-b639-48c6-bdb4-00746159ad29",
  locationName: "Heller, Jast and Heathcote",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "00418 Hoard Place",
  state: "Indiana",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "7738f50d-5f0c-4818-abd5-46bf869ab274",
  locationName: "Swaniawski and Sons",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "234 Burrows Circle",
  state: "Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "0436908f-fb1b-404b-8325-0ce81696db1a",
  locationName: "Howell Group",
  locationCategory: "Asphalt Paving",
  streetAddress: "3 Buhler Trail",
  state: "Utah",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "45077405-182d-4fc3-89bb-7ca9c250c359",
  locationName: "Murphy-Dietrich",
  locationCategory: "Curb & Gutter",
  streetAddress: "2916 Oriole Road",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "e1bf3ee2-8d28-4366-94a2-56014200ff46",
  locationName: "Johnston Group",
  locationCategory: "Fire Protection",
  streetAddress: "61 Continental Court",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "4abdca9e-b279-4ca7-b56e-aac663eed4b6",
  locationName: "Murphy Group",
  locationCategory: "Exterior Signage",
  streetAddress: "2841 Thackeray Street",
  state: "Louisiana",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "8131329c-3e5f-48fe-a256-25d901bb6758",
  locationName: "Ferry, Hudson and Stehr",
  locationCategory: "Framing (Steel)",
  streetAddress: "32 Old Gate Plaza",
  state: "District of Columbia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "6ff49de2-f0dc-4815-86ff-808272913a9d",
  locationName: "Kertzmann, Jenkins and Huels",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "2676 Forest Avenue",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "3df53297-38b6-4e8a-b7e6-32ef6fb75cfd",
  locationName: "Strosin-Rolfson",
  locationCategory: "HVAC",
  streetAddress: "14 Darwin Drive",
  state: "North Carolina",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "fb166b7e-ee6c-4eb3-839c-2c36850c7122",
  locationName: "O'Reilly-Rowe",
  locationCategory: "Site Furnishings",
  streetAddress: "69 Lien Alley",
  state: "Ohio",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "cc65b9a5-985f-4816-a622-baf61c83b9e0",
  locationName: "Barrows Group",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "642 Barby Lane",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "9a7edcd2-e72f-45a1-b656-31afcc5c36a1",
  locationName: "Nolan-Beier",
  locationCategory: "Structural & Misc Steel Erection",
  streetAddress: "26956 Katie Road",
  state: "Tennessee",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "0b54081e-6a1d-451d-832a-4e58f03f447a",
  locationName: "Heathcote, Quigley and Zboncak",
  locationCategory: "Glass & Glazing",
  streetAddress: "516 Ohio Parkway",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "113700f2-5b2b-4ea8-98bd-af80e0de63e2",
  locationName: "Hahn and Sons",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "4359 Montana Avenue",
  state: "Kentucky",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "d737e4d6-5446-4ca8-86ee-44750ca3f46a",
  locationName: "Quitzon-Jacobs",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "444 8th Pass",
  state: "Nebraska",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "d8690e4a-43d2-48e3-aa4a-7d08943d6048",
  locationName: "Rath, Lehner and Metz",
  locationCategory: "Exterior Signage",
  streetAddress: "437 Colorado Avenue",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "a5128f1d-6098-4b37-87d4-c476d8431990",
  locationName: "Rolfson and Sons",
  locationCategory: "Curb & Gutter",
  streetAddress: "4 Eggendart Parkway",
  state: "Georgia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "fb479ce3-f0b9-4164-bd70-0dd6215602e8",
  locationName: "Breitenberg, Armstrong and Hayes",
  locationCategory: "Roofing (Asphalt)",
  streetAddress: "6 Lindbergh Court",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "af643555-18ad-4d76-bebe-08eae747e753",
  locationName: "Krajcik, Rath and Larkin",
  locationCategory: "Fire Sprinkler System",
  streetAddress: "0 Chinook Lane",
  state: "District of Columbia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "dabed17e-0dd0-4334-af4a-a75346c67413",
  locationName: "Mante and Sons",
  locationCategory: "Roofing (Metal)",
  streetAddress: "41 Scofield Parkway",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "8b433c42-22f2-4d80-9b3b-e34b6089401a",
  locationName: "Jacobson Group",
  locationCategory: "Curb & Gutter",
  streetAddress: "41676 Texas Center",
  state: "Ohio",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "7dad5b33-8ea6-4cc2-bf22-dd475c3547bc",
  locationName: "O'Kon, Von and Ziemann",
  locationCategory: "Rebar & Wire Mesh Install",
  streetAddress: "2 Hayes Place",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "268aec6b-0240-43e0-9336-6b74103dbfa4",
  locationName: "Schulist-Doyle",
  locationCategory: "Curb & Gutter",
  streetAddress: "3 Valley Edge Alley",
  state: "Ohio",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "9de5750b-66e0-420f-8bfc-b418cad07714",
  locationName: "Hilll LLC",
  locationCategory: "Hard Tile & Stone",
  streetAddress: "7140 Crescent Oaks Point",
  state: "Oklahoma",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "50003545-822a-4e58-9e2c-bbeca3263a52",
  locationName: "Nienow, O'Reilly and Schmitt",
  locationCategory: "Rebar & Wire Mesh Install",
  streetAddress: "5 Stone Corner Street",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "ec43c5a7-cc3f-4200-a621-056d90a4ec6c",
  locationName: "Bashirian-Sipes",
  locationCategory: "Masonry",
  streetAddress: "305 Red Cloud Alley",
  state: "Louisiana",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "03d15d1e-3679-4260-9a5a-e6d26a8dcc1f",
  locationName: "O'Conner-Haag",
  locationCategory: "Rebar & Wire Mesh Install",
  streetAddress: "8479 Forster Junction",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "8d21bd75-b9fb-499f-9923-e8d4f35f8230",
  locationName: "Quitzon, Durgan and Cormier",
  locationCategory: "Exterior Signage",
  streetAddress: "94398 Maple Wood Center",
  state: "Ohio",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "6dd504cc-73e6-44e5-9d6c-6aebe4886280",
  locationName: "Kilback and Sons",
  locationCategory: "Marlite Panels (FED)",
  streetAddress: "4 Washington Trail",
  state: "South Dakota",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "9805fb49-624a-42c8-9363-5e9cba2bed3a",
  locationName: "Zulauf, Boyle and Wolff",
  locationCategory: "Drywall & Acoustical (MOB)",
  streetAddress: "470 Anderson Place",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "0c5881b9-39ed-4449-886e-8324f359d794",
  locationName: "Russel, Kassulke and Rosenbaum",
  locationCategory: "Site Furnishings",
  streetAddress: "40 Riverside Court",
  state: "Pennsylvania",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "03b15a71-0bdd-4ae2-8cb5-230d89075747",
  locationName: "Feil Inc",
  locationCategory: "Casework",
  streetAddress: "84760 Londonderry Hill",
  state: "Georgia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "2cb1db1b-a810-4315-9b9f-ec40c8cad564",
  locationName: "Tillman, Dibbert and Maggio",
  locationCategory: "Masonry",
  streetAddress: "0 Scoville Avenue",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "f7a00a82-e744-4bbc-bde6-43ea48d66280",
  locationName: "Kertzmann-Mosciski",
  locationCategory: "Curb & Gutter",
  streetAddress: "3286 Hansons Way",
  state: "North Dakota",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "9b8dc3d2-1587-438c-aa17-15310409f50d",
  locationName: "Emard, Konopelski and Bauch",
  locationCategory: "Granite Surfaces",
  streetAddress: "1 Roth Place",
  state: "Ohio",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "ed483501-c131-45e2-8e56-7dd97dc7c121",
  locationName: "Jacobs-Hilpert",
  locationCategory: "Masonry",
  streetAddress: "41666 Delladonna Avenue",
  state: "Delaware",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "c8803267-79a8-44ae-84b0-5c0a033a8301",
  locationName: "Hartmann-Corkery",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "86602 Grayhawk Circle",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "ef61ca98-cd27-4c81-b553-21f6052decc7",
  locationName: "Erdman, Bernhard and Christiansen",
  locationCategory: "RF Shielding",
  streetAddress: "097 Clemons Trail",
  state: "Illinois",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "a0c87ac1-c2b2-4d62-a2fb-bb5d4d157d10",
  locationName: "Lang-Purdy",
  locationCategory: "HVAC",
  streetAddress: "11696 Tony Drive",
  state: "Michigan",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "440eb8c9-266d-437c-a0f4-cbbd1fd25de5",
  locationName: "Pacocha, Heidenreich and O'Keefe",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "6 Washington Way",
  state: "Arizona",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "ca1fb805-2400-419e-877e-11ef1dae5dba",
  locationName: "Borer-Volkman",
  locationCategory: "Glass & Glazing",
  streetAddress: "759 Village Place",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "0335113a-d199-4b80-9ad3-af1b4539b7b6",
  locationName: "Kautzer-Gislason",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "257 Mitchell Lane",
  state: "Arizona",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "f1d11609-9cfe-4d2c-8392-45ccc69dec14",
  locationName: "Jenkins LLC",
  locationCategory: "Construction Clean and Final Clean",
  streetAddress: "31 Thierer Park",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "e1e9de80-ea9a-4dcc-a641-7d8cef759265",
  locationName: "Smitham Group",
  locationCategory: "Epoxy Flooring",
  streetAddress: "2243 Anthes Park",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "5fc2c104-be13-4054-9bad-befc0925181f",
  locationName: "Cole Group",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "42661 Parkside Alley",
  state: "Colorado",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "5d4f01f4-7f1f-42bf-aadd-e4adab9ca651",
  locationName: "MacGyver, Muller and Schowalter",
  locationCategory: "Overhead Doors",
  streetAddress: "93508 Blaine Way",
  state: "West Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "876597c8-b313-4eec-a4dd-ec0af591974c",
  locationName: "Kuhic, Hintz and Labadie",
  locationCategory: "RF Shielding",
  streetAddress: "91 Grover Plaza",
  state: "Oklahoma",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "136ba2c8-2fcc-453f-b5fd-86e2c8182fcf",
  locationName: "Wintheiser LLC",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "0331 Artisan Place",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "6640fffe-1842-4f50-95ee-d75ddf38e8c1",
  locationName: "Kris LLC",
  locationCategory: "Plumbing & Medical Gas",
  streetAddress: "05 Dunning Place",
  state: "Arizona",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "c194290b-6ce2-49bb-b2b2-b653045f1151",
  locationName: "Bode LLC",
  locationCategory: "Wall Protection",
  streetAddress: "47 Independence Point",
  state: "Georgia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "09e66c0f-5e4f-47d1-aef3-7ad1f4f5eede",
  locationName: "Weimann Inc",
  locationCategory: "Framing (Steel)",
  streetAddress: "26891 Novick Crossing",
  state: "West Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "040390f3-9093-465b-9e23-efe99ccb6c0a",
  locationName: "Rice Inc",
  locationCategory: "Temp Fencing, Decorative Fencing and Gates",
  streetAddress: "6 Arkansas Junction",
  state: "Alabama",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "1ee2597d-72b2-45ba-a781-164dc38ea279",
  locationName: "Harber-Schumm",
  locationCategory: "Framing (Wood)",
  streetAddress: "25 Menomonie Alley",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "8924d22e-daf5-4cdd-9c98-28fccda8e519",
  locationName: "Grimes and Sons",
  locationCategory: "Curb & Gutter",
  streetAddress: "744 Dottie Street",
  state: "Tennessee",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "1fdb8bec-29c6-4470-8c51-ede7be7f8775",
  locationName: "Terry and Sons",
  locationCategory: "Overhead Doors",
  streetAddress: "236 Sherman Court",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "9ecf6112-4248-423b-9f81-ca0b9e06463c",
  locationName: "Wilkinson, Feeney and Abshire",
  locationCategory: "Exterior Signage",
  streetAddress: "87 Vermont Place",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "5d575e81-38ce-4af3-aeab-34787b7088c9",
  locationName: "Kilback Group",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "222 7th Drive",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "9612b104-4fb7-4c37-b7f7-c34b9ebea77d",
  locationName: "Pfannerstill, Ward and Hane",
  locationCategory: "Prefabricated Aluminum Metal Canopies",
  streetAddress: "726 Stone Corner Road",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "a3bfae89-3812-4c0f-8b32-8c87894f118c",
  locationName: "Stracke, Jones and Towne",
  locationCategory: "Casework",
  streetAddress: "3 Green Ridge Junction",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "dc14ae97-c03e-4ed7-b6cc-17b0c64ddfc5",
  locationName: "MacGyver Group",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "444 Melby Drive",
  state: "Montana",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "32a8ceb4-18dc-4341-87d6-c69a4f8b6dc6",
  locationName: "Denesik Group",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "6 Stang Court",
  state: "District of Columbia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "930a8b71-92aa-4147-96ed-694133eab6d4",
  locationName: "Gerlach and Sons",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "44 Pawling Lane",
  state: "Oklahoma",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "00febd62-82ec-4134-88cf-640551572722",
  locationName: "Hartmann, Herman and Dickinson",
  locationCategory: "Masonry",
  streetAddress: "99690 Manley Park",
  state: "Washington",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "a94b2203-82f1-447f-81c4-1ad65219c958",
  locationName: "Carroll, Bahringer and Beier",
  locationCategory: "Hard Tile & Stone",
  streetAddress: "87519 Northland Hill",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "9171608d-80f2-47b4-8aca-5f434790f1ff",
  locationName: "Gulgowski-Keeling",
  locationCategory: "Framing (Wood)",
  streetAddress: "727 Butternut Drive",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "5407ec5e-3a97-4036-8267-d275eebaa1be",
  locationName: "Treutel, D'Amore and Jacobs",
  locationCategory: "Drilled Shafts",
  streetAddress: "23554 Namekagon Park",
  state: "Kansas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "33ba7b69-1f64-4497-8323-45fa5cd4f8a4",
  locationName: "Kautzer Inc",
  locationCategory: "Construction Clean and Final Clean",
  streetAddress: "23917 Autumn Leaf Alley",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "3e9d7b42-289d-4680-afd2-a46ca5b79d5c",
  locationName: "Schroeder, Reinger and O'Hara",
  locationCategory: "Masonry & Precast",
  streetAddress: "36154 Granby Hill",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "74edb51f-e8ac-4c34-a6b5-097fda9f4354",
  locationName: "Bradtke LLC",
  locationCategory: "Epoxy Flooring",
  streetAddress: "2518 Sunbrook Avenue",
  state: "Illinois",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "04b32aec-3c1e-4172-bdd6-448b2e000eb0",
  locationName: "O'Conner LLC",
  locationCategory: "Glass & Glazing",
  streetAddress: "80 Clyde Gallagher Center",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "f58452ca-e0fb-4945-8d77-4b22bd5a42ac",
  locationName: "Bahringer and Sons",
  locationCategory: "Fire Sprinkler System",
  streetAddress: "77 Amoth Street",
  state: "District of Columbia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "632ea572-5575-44e1-8ee8-38516c0a80ba",
  locationName: "Walsh and Sons",
  locationCategory: "Temp Fencing, Decorative Fencing and Gates",
  streetAddress: "1 Homewood Drive",
  state: "Pennsylvania",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "fa522b36-2f1e-45b4-a97f-d9ab64fc7ba7",
  locationName: "Orn, Kertzmann and Kuphal",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "72069 Gulseth Pass",
  state: "Illinois",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "4483a930-da30-41d2-bccc-b4ce58d7fde7",
  locationName: "Sipes Group",
  locationCategory: "Glass & Glazing",
  streetAddress: "6 Bobwhite Terrace",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "8cf9d72f-f686-464a-9fdc-7f9f9f8338a0",
  locationName: "Balistreri, Larson and Wisoky",
  locationCategory: "Drywall & Acoustical (MOB)",
  streetAddress: "354 8th Circle",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "161447b1-0ee1-437a-8127-5e7677cbfd2c",
  locationName: "Romaguera Inc",
  locationCategory: "Masonry",
  streetAddress: "99665 Evergreen Junction",
  state: "Delaware",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "375632ed-ca47-4ac1-bd15-f398196d55d3",
  locationName: "Mueller and Sons",
  locationCategory: "EIFS",
  streetAddress: "1636 Oak Center",
  state: "North Dakota",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "7afc4fc7-2682-4932-bad0-712faa2ce08e",
  locationName: "Auer-Haag",
  locationCategory: "Doors, Frames & Hardware",
  streetAddress: "9 Mayer Place",
  state: "District of Columbia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "56bc5a99-3cba-4756-98fc-3c4395ebfa25",
  locationName: "Connelly Inc",
  locationCategory: "Construction Clean and Final Clean",
  streetAddress: "36891 Lotheville Plaza",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "ca9615a5-0ae6-4b91-8e84-8a5cbc3397f6",
  locationName: "Kirlin-Tremblay",
  locationCategory: "Construction Clean and Final Clean",
  streetAddress: "77803 Carey Drive",
  state: "Arizona",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "970f190e-21d0-4b1c-a234-a9f48f45b8b6",
  locationName: "Weissnat-Dooley",
  locationCategory: "Temp Fencing, Decorative Fencing and Gates",
  streetAddress: "57869 Nova Pass",
  state: "Michigan",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "5d5a2b28-47f1-4aea-852d-4e98a6bc7cdc",
  locationName: "Marquardt, Dickinson and Maggio",
  locationCategory: "RF Shielding",
  streetAddress: "1 Maple Wood Terrace",
  state: "Missouri",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "f72509c7-0f7d-43d2-ad48-20d08898d1a7",
  locationName: "Jones and Sons",
  locationCategory: "RF Shielding",
  streetAddress: "2547 Kennedy Drive",
  state: "Kansas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "c22a465a-b62f-4577-9f2a-a077e7e7334d",
  locationName: "Runte-Huels",
  locationCategory: "Temp Fencing, Decorative Fencing and Gates",
  streetAddress: "86 Doe Crossing Center",
  state: "Washington",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "131d4e2f-2997-48a0-ad2c-189b825bacf7",
  locationName: "Ruecker LLC",
  locationCategory: "Electrical",
  streetAddress: "226 Gale Junction",
  state: "Indiana",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "6c280259-099a-4e65-a5eb-a7d974c42283",
  locationName: "Goldner-O'Keefe",
  locationCategory: "Elevator",
  streetAddress: "5 Stoughton Parkway",
  state: "Oklahoma",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "79543049-bfa5-4667-8240-b531bae34657",
  locationName: "Hessel-Bogisich",
  locationCategory: "Site Furnishings",
  streetAddress: "40882 Barnett Junction",
  state: "Connecticut",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "d1f300a6-fb56-4e8c-9dc3-5399246e26bd",
  locationName: "Volkman-Harber",
  locationCategory: "Granite Surfaces",
  streetAddress: "568 Crescent Oaks Junction",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "3eb1dc77-b4e3-4f2b-8653-708981605477",
  locationName: "Beer-O'Conner",
  locationCategory: "Prefabricated Aluminum Metal Canopies",
  streetAddress: "36647 Melby Court",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "927c446e-401a-494b-bfc0-9d72376a2365",
  locationName: "Dietrich-O'Conner",
  locationCategory: "Elevator",
  streetAddress: "4043 Manley Hill",
  state: "Alabama",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "347f4dcc-7b04-4cf2-a0a4-1e98d2a1d46f",
  locationName: "Jenkins, Gutmann and Cartwright",
  locationCategory: "Electrical",
  streetAddress: "53 Armistice Pass",
  state: "New Jersey",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "24309202-f69d-4bfa-a7c0-2771150647fa",
  locationName: "Ankunding, Zieme and Kozey",
  locationCategory: "Framing (Steel)",
  streetAddress: "65326 Riverside Park",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "4aa52be6-a76d-467b-a753-8251eedc03d1",
  locationName: "Barrows-Sauer",
  locationCategory: "Casework",
  streetAddress: "34 Lighthouse Bay Drive",
  state: "Virginia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "ed010b67-ca94-4686-b400-b544d5fbebd0",
  locationName: "Kuhn, Murphy and Schamberger",
  locationCategory: "Glass & Glazing",
  streetAddress: "3531 Sauthoff Alley",
  state: "Louisiana",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "7460dc8e-1284-44ab-a6fb-941f6b6b1a3e",
  locationName: "O'Kon, Graham and Ryan",
  locationCategory: "Waterproofing & Caulking",
  streetAddress: "2984 Westerfield Alley",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "11e34e77-3143-4f67-bf95-0d2bd9883cc1",
  locationName: "Smith and Sons",
  locationCategory: "Plumbing & Medical Gas",
  streetAddress: "9721 Everett Alley",
  state: "New Mexico",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "50ce8dde-3037-49c6-8318-b2a28f56802a",
  locationName: "Dooley, Parker and Metz",
  locationCategory: "Masonry",
  streetAddress: "0 Larry Terrace",
  state: "Missouri",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "e293dbef-ef4a-4fc5-85c2-8a98eee5598e",
  locationName: "Rowe, Satterfield and Halvorson",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "4843 Haas Court",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "e454a77d-9962-4426-a5df-d42c72f06829",
  locationName: "Ward, West and Stark",
  locationCategory: "Temp Fencing, Decorative Fencing and Gates",
  streetAddress: "91 Pine View Place",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "b1d5114c-ff8f-4889-90c0-ccf8aa5e5eac",
  locationName: "Carroll Inc",
  locationCategory: "Overhead Doors",
  streetAddress: "1750 Merrick Point",
  state: "Arizona",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "8ee72abb-6602-4124-b8e0-26c7f2773a06",
  locationName: "Dibbert LLC",
  locationCategory: "Asphalt Paving",
  streetAddress: "6903 Schurz Road",
  state: "Maryland",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "a956cd81-be86-4b07-99bf-dc2551246859",
  locationName: "Veum-Moore",
  locationCategory: "Waterproofing & Caulking",
  streetAddress: "48 Michigan Drive",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "7807e7d4-ad3f-4f8c-9d87-6d7d10f9ba87",
  locationName: "Casper, O'Kon and Sanford",
  locationCategory: "Waterproofing & Caulking",
  streetAddress: "3564 Dixon Court",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "4d57f2d6-09df-49e8-bf03-5fe2eb0100d5",
  locationName: "Crist-Herzog",
  locationCategory: "Epoxy Flooring",
  streetAddress: "0305 Truax Lane",
  state: "Indiana",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "43ff1f41-3440-4c85-ae9d-6b22368b3458",
  locationName: "Will, Hirthe and Renner",
  locationCategory: "Ornamental Railings",
  streetAddress: "43349 Jenna Place",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "79f98415-2491-4aa8-8d94-17a89db2a449",
  locationName: "DuBuque LLC",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "84 Florence Alley",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "f9a5ecb0-7431-4fc9-bd31-be98ebe302ec",
  locationName: "McCullough and Sons",
  locationCategory: "Drywall & Acoustical (FED)",
  streetAddress: "24 2nd Plaza",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "32cae90e-3021-4eda-8a90-75503f1c7bcc",
  locationName: "Streich-Hoeger",
  locationCategory: "Glass & Glazing",
  streetAddress: "1142 Vidon Alley",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "43ce728e-2526-4f18-9c30-4a21fd525741",
  locationName: "Hermann, Prohaska and Farrell",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "35607 Armistice Parkway",
  state: "Colorado",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "7fea7d0c-c5dc-4d6d-bd05-5787bc290ea8",
  locationName: "Stroman, Tillman and Keebler",
  locationCategory: "Electrical",
  streetAddress: "12 5th Park",
  state: "Oregon",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "e25f1e3f-18d5-4f1c-8bb3-a5e208e6735b",
  locationName: "Zboncak Inc",
  locationCategory: "Hard Tile & Stone",
  streetAddress: "042 Sheridan Drive",
  state: "Wisconsin",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "53499ca9-0d1d-4201-b0f6-2c4dcc5d7217",
  locationName: "Streich and Sons",
  locationCategory: "Termite Control",
  streetAddress: "34128 Kipling Crossing",
  state: "Connecticut",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "5006e2d3-fa63-407f-af4a-c20efd184693",
  locationName: "Ratke Group",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "84207 Tomscot Parkway",
  state: "Illinois",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "f205e0f5-88b9-4e24-a9e9-2fbdef563dad",
  locationName: "Kiehn-Heidenreich",
  locationCategory: "Elevator",
  streetAddress: "61874 Village Green Circle",
  state: "Nevada",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "06b2af69-254b-4493-b9ea-4df28f8a4d96",
  locationName: "Morissette, Kris and Sporer",
  locationCategory: "Electrical",
  streetAddress: "6 Towne Center",
  state: "Massachusetts",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "7a46a7d1-1d08-4690-80e2-1944ca140511",
  locationName: "Zieme, Wehner and Littel",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "730 Talisman Lane",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "dc27efc9-1820-451b-918b-bcb8599095cb",
  locationName: "Grady, Kilback and Parisian",
  locationCategory: "Drilled Shafts",
  streetAddress: "42777 Grayhawk Road",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "964a9947-5d5a-4102-9da2-6b6a12cb56cf",
  locationName: "Stamm LLC",
  locationCategory: "Termite Control",
  streetAddress: "7 Caliangt Drive",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "30f5ea6b-4777-402d-81ae-269b35a2abfd",
  locationName: "Padberg, Harber and Morar",
  locationCategory: "Curb & Gutter",
  streetAddress: "707 Hooker Junction",
  state: "Colorado",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "60371b30-6cc4-4554-860c-9c01c08b0fb4",
  locationName: "Boyle-Steuber",
  locationCategory: "RF Shielding",
  streetAddress: "51 Aberg Avenue",
  state: "Michigan",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "77fed139-24c9-47aa-9cc9-1b0910a0d0ed",
  locationName: "Runolfsson-Jerde",
  locationCategory: "Fire Protection",
  streetAddress: "81 Donald Way",
  state: "Kentucky",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "3b3e7590-fc49-4ea0-ae9e-626209ce47c0",
  locationName: "Mraz, Schowalter and Auer",
  locationCategory: "EIFS",
  streetAddress: "0 Jenifer Hill",
  state: "Arizona",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "ced2d1b0-53b8-4a21-b92c-10e110266594",
  locationName: "Deckow-Grady",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "4214 Mallard Avenue",
  state: "Wisconsin",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "5c8459fe-6b06-4fde-b3b3-26b83f74b26a",
  locationName: "Macejkovic, Goodwin and Barrows",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "6297 Debra Alley",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "158d11b2-1b4e-4392-9a65-afbf1134cfa0",
  locationName: "Cartwright Group",
  locationCategory: "Asphalt Paving",
  streetAddress: "7741 Brentwood Pass",
  state: "District of Columbia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "3c07379f-7c36-41a6-8daf-0a2cfc0efe25",
  locationName: "Koepp, Conroy and Langosh",
  locationCategory: "Prefabricated Aluminum Metal Canopies",
  streetAddress: "5162 Daystar Way",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "69cbbcbf-9c97-403e-8e55-f8a5d62a0db0",
  locationName: "Monahan-Donnelly",
  locationCategory: "Fire Protection",
  streetAddress: "7577 Roth Way",
  state: "Nebraska",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "376ba39a-ab8f-4b72-9713-1adc7fc8b5de",
  locationName: "Ullrich, Mitchell and Konopelski",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "38077 Sage Drive",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "2ee3009f-c047-40eb-bead-bb97928ca3b0",
  locationName: "Schiller-Tillman",
  locationCategory: "Fire Sprinkler System",
  streetAddress: "3559 Surrey Pass",
  state: "Tennessee",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "2fee4a3e-b035-4909-8d24-69a49f4204c6",
  locationName: "Corwin and Sons",
  locationCategory: "Fire Protection",
  streetAddress: "82755 Sugar Point",
  state: "Georgia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "a61920e6-77a6-468a-abd1-9516a2f649c2",
  locationName: "Lang-Goldner",
  locationCategory: "Drilled Shafts",
  streetAddress: "3604 Meadow Valley Hill",
  state: "Oklahoma",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "e3a8cf66-d9df-4f66-83af-44b332d7e8ea",
  locationName: "Gulgowski Group",
  locationCategory: "Plumbing & Medical Gas",
  streetAddress: "6 Center Place",
  state: "Nebraska",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "c93efc1c-3034-4f20-9d1f-49e8394c8a73",
  locationName: "White-Leuschke",
  locationCategory: "Waterproofing & Caulking",
  streetAddress: "760 Debs Pass",
  state: "Georgia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "217cadd5-d1b2-42de-9f2e-eff7230d521e",
  locationName: "Beahan, Bernhard and Gutkowski",
  locationCategory: "Asphalt Paving",
  streetAddress: "0328 Blackbird Park",
  state: "Nebraska",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "14ec020d-3f86-46ba-aa5b-62812e8fc383",
  locationName: "Harvey and Sons",
  locationCategory: "Structural & Misc Steel Erection",
  streetAddress: "9076 Petterle Trail",
  state: "Idaho",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "6eac4591-78d5-4944-a94f-3808924c611e",
  locationName: "Weber, Kunde and Leuschke",
  locationCategory: "Doors, Frames & Hardware",
  streetAddress: "8 Clemons Drive",
  state: "Michigan",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "ba145c74-37a9-4130-95f7-f2c55f4fd5a1",
  locationName: "Torp-Reichert",
  locationCategory: "EIFS",
  streetAddress: "59731 Forest Run Crossing",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "bdb0e1f2-0d59-424a-b94e-2aa3d5b1f658",
  locationName: "Dicki Inc",
  locationCategory: "Casework",
  streetAddress: "8340 Derek Hill",
  state: "Kansas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "dc3d6d11-2629-4b9c-bcf2-56bbd064614c",
  locationName: "Harris and Sons",
  locationCategory: "Marlite Panels (FED)",
  streetAddress: "7 Bluestem Avenue",
  state: "Kentucky",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "cd5219ab-a43d-46b1-9398-2c4b16ea7f58",
  locationName: "Bogisich-Aufderhar",
  locationCategory: "Marlite Panels (FED)",
  streetAddress: "6359 Commercial Hill",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "46c57906-7aa8-4326-b779-f132678ba5bd",
  locationName: "Roberts-Grant",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "4020 Barby Alley",
  state: "Illinois",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "ed7da335-28eb-4b9d-96f4-e93a5e26e435",
  locationName: "Funk, Nikolaus and Anderson",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "83524 Prairieview Road",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "4878b18f-98f0-48ea-8100-7e7f51e18e29",
  locationName: "Volkman LLC",
  locationCategory: "Fire Sprinkler System",
  streetAddress: "4410 Roxbury Court",
  state: "Colorado",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "f9815d09-e6ac-4902-8a43-1bd2f2607935",
  locationName: "Cummerata, West and Fay",
  locationCategory: "Exterior Signage",
  streetAddress: "457 Harper Pass",
  state: "Arizona",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "c2e19899-6212-495e-b306-55fed0e1554d",
  locationName: "Mann-Spinka",
  locationCategory: "Granite Surfaces",
  streetAddress: "2909 Mallard Circle",
  state: "Louisiana",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "b7070d87-a9fd-4acf-8cf8-3838500d2eab",
  locationName: "Orn-Kreiger",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "26471 Merrick Junction",
  state: "Alabama",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "bda58695-2b02-4f4d-b2f2-cbe921a26aea",
  locationName: "Bergstrom-Upton",
  locationCategory: "Curb & Gutter",
  streetAddress: "57 Banding Place",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "060e89e2-d2c5-4ef9-92f8-908d57b252a8",
  locationName: "Mosciski-Stehr",
  locationCategory: "Site Furnishings",
  streetAddress: "3 Anniversary Place",
  state: "Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "b93b41fb-7958-4d12-a348-907ab644d370",
  locationName: "Johns Inc",
  locationCategory: "Exterior Signage",
  streetAddress: "38895 Brickson Park Avenue",
  state: "Georgia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "250c9283-155f-4d46-aee5-e2c261a9aeab",
  locationName: "Bailey, Heathcote and Morar",
  locationCategory: "Electrical",
  streetAddress: "25838 American Ash Hill",
  state: "Michigan",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "e2e38807-6be2-407d-89f5-abd378a62750",
  locationName: "Lakin and Sons",
  locationCategory: "Exterior Signage",
  streetAddress: "57018 Oakridge Trail",
  state: "Ohio",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "95dfa329-2c30-45fc-ae51-ec75be601e88",
  locationName: "Braun and Sons",
  locationCategory: "Electrical and Fire Alarm",
  streetAddress: "56 Lillian Hill",
  state: "Minnesota",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "70af3946-830f-4b86-a4cc-1d6def4d8328",
  locationName: "Reinger and Sons",
  locationCategory: "Framing (Wood)",
  streetAddress: "4904 Gulseth Avenue",
  state: "Nevada",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "7300d3ac-3636-47d0-b9e2-d0811f74e45b",
  locationName: "Doyle, Lakin and Pacocha",
  locationCategory: "Curb & Gutter",
  streetAddress: "87517 Wayridge Lane",
  state: "Virginia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "2cb0f9a3-dea9-485b-ab67-d4231e39ee47",
  locationName: "Barton-Lakin",
  locationCategory: "Curb & Gutter",
  streetAddress: "6 Fallview Alley",
  state: "Arizona",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "0785b83c-59f3-4f20-86a1-1fe4523729ce",
  locationName: "Ortiz LLC",
  locationCategory: "EIFS",
  streetAddress: "461 American Ash Lane",
  state: "Oklahoma",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "0cc9dd5d-8237-40e7-ad4e-1706492936b7",
  locationName: "Reynolds-Brown",
  locationCategory: "Asphalt Paving",
  streetAddress: "5 Elmside Drive",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "3b37204d-eaae-4c6c-9440-ef8c3849eaf3",
  locationName: "Kirlin-Douglas",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "974 Merrick Way",
  state: "Colorado",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "74e78bc5-cf1e-4234-9d56-2f87745352a7",
  locationName: "Ondricka-Hoppe",
  locationCategory: "Masonry & Precast",
  streetAddress: "8865 Hazelcrest Plaza",
  state: "Arkansas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "f93c92e6-2846-400c-911d-bad0a1319783",
  locationName: "Roob Inc",
  locationCategory: "Drilled Shafts",
  streetAddress: "5720 Buhler Avenue",
  state: "Pennsylvania",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "dd081847-4392-4ee6-af46-9413e1440633",
  locationName: "Stroman-Huel",
  locationCategory: "Casework",
  streetAddress: "6677 David Point",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "a1d95bde-3006-4adc-8317-6345a6110c25",
  locationName: "Kuvalis-Upton",
  locationCategory: "Termite Control",
  streetAddress: "38309 Truax Point",
  state: "Kansas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "1e97ebdf-7b66-48b0-ac6b-e035b3bebee0",
  locationName: "Green, Wolff and Brekke",
  locationCategory: "Elevator",
  streetAddress: "3516 Superior Terrace",
  state: "Oklahoma",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "aca0c9a2-0e91-48c0-b19f-18893c2073c3",
  locationName: "Moen-Bergstrom",
  locationCategory: "Site Furnishings",
  streetAddress: "3886 Becker Crossing",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "ec56997a-cc3a-4a27-8cbd-c7d7a1fe467c",
  locationName: "Hudson-Jakubowski",
  locationCategory: "Marlite Panels (FED)",
  streetAddress: "0 Chive Junction",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "93055af0-d3eb-455a-ba2e-374e3ad91399",
  locationName: "Conroy, Rosenbaum and Jast",
  locationCategory: "Casework",
  streetAddress: "1 Farmco Park",
  state: "Pennsylvania",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "cd65b2c3-8696-4be1-b3da-2072c548cb37",
  locationName: "Gottlieb, Legros and Krajcik",
  locationCategory: "Ornamental Railings",
  streetAddress: "0 Forest Avenue",
  state: "District of Columbia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "c028e436-5906-41e7-88bd-fb5e6f5a034d",
  locationName: "Johns Group",
  locationCategory: "Site Furnishings",
  streetAddress: "48099 Thompson Way",
  state: "Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "1210e7fd-95e1-4108-adf7-4d3dc60cf061",
  locationName: "Bashirian-Bernhard",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "2 Sachtjen Lane",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "14341969-7439-46f0-ac31-9c9fb2701039",
  locationName: "Price-Turner",
  locationCategory: "Drywall & Acoustical (MOB)",
  streetAddress: "34530 Upham Crossing",
  state: "Tennessee",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "e4130564-93c9-413b-a532-75ddaad15578",
  locationName: "Boehm-Morissette",
  locationCategory: "Framing (Wood)",
  streetAddress: "58538 Independence Terrace",
  state: "Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "af3023b3-f51d-4f3a-94c7-e4b7c607a03c",
  locationName: "Adams LLC",
  locationCategory: "Rebar & Wire Mesh Install",
  streetAddress: "78407 Summer Ridge Point",
  state: "Georgia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "551bd1a7-e905-49e9-a8d0-ae67fa8a9236",
  locationName: "Harber Inc",
  locationCategory: "Electrical",
  streetAddress: "85412 Spaight Hill",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "e1669f17-02f9-4e36-a468-f62072d1c875",
  locationName: "Hammes, Homenick and Kulas",
  locationCategory: "Wall Protection",
  streetAddress: "5207 Aberg Circle",
  state: "Illinois",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "4b742578-8398-4ad7-bb7a-13bb53de99fa",
  locationName: "Schaefer-Mraz",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "04 Marquette Park",
  state: "Tennessee",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "b76a8f7b-8826-41f9-8897-c27d39fbba95",
  locationName: "Koch, Balistreri and Yundt",
  locationCategory: "Plumbing & Medical Gas",
  streetAddress: "698 8th Junction",
  state: "North Carolina",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "b2ee02d3-4239-4281-9e4c-24ea21b677fe",
  locationName: "Kling, McDermott and Bartoletti",
  locationCategory: "RF Shielding",
  streetAddress: "20760 Northland Alley",
  state: "Illinois",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "fb3a6013-afac-423a-945a-339b7f8c33de",
  locationName: "Dooley, Robel and Runolfsdottir",
  locationCategory: "Site Furnishings",
  streetAddress: "49 Welch Park",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "2ea1561e-8c61-46fb-a858-4b9d1a5c2713",
  locationName: "Corwin-Bogisich",
  locationCategory: "Casework",
  streetAddress: "2890 Corben Pass",
  state: "New Jersey",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "fe41a36d-e548-445f-9234-3f5d625f7419",
  locationName: "Mayert-Bradtke",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "3 Waywood Pass",
  state: "Nevada",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "49938d5d-8802-46c0-b054-1764b1135247",
  locationName: "Schamberger, Haag and Stracke",
  locationCategory: "Doors, Frames & Hardware",
  streetAddress: "8946 Petterle Lane",
  state: "Arizona",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "b09eea85-d182-4838-896c-7f8c484f830f",
  locationName: "Moen and Sons",
  locationCategory: "Drywall & Acoustical (FED)",
  streetAddress: "33 Magdeline Drive",
  state: "Oklahoma",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "2bf00480-9200-4382-85c8-6029f8f42dc6",
  locationName: "Hand and Sons",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "93403 Petterle Place",
  state: "Tennessee",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "96e65dc5-c3e4-440d-b49c-ff3292d7c298",
  locationName: "Kirlin and Sons",
  locationCategory: "Drilled Shafts",
  streetAddress: "5 Petterle Point",
  state: "Colorado",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "f2fd0398-608f-4a3f-9272-1c3bb8262d0a",
  locationName: "Paucek-Trantow",
  locationCategory: "Termite Control",
  streetAddress: "19963 Beilfuss Hill",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "11c95d7e-68d9-4e92-a2a8-82400b3b4906",
  locationName: "Breitenberg-Beer",
  locationCategory: "Masonry & Precast",
  streetAddress: "6 Waubesa Hill",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "a61dc58f-4ebd-4fd3-8f70-b7660356c6f4",
  locationName: "Raynor Group",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "68 Sommers Plaza",
  state: "Connecticut",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "2412b0d8-ee5a-435b-9d2d-9c01518d6880",
  locationName: "Hyatt, Von and Smitham",
  locationCategory: "Doors, Frames & Hardware",
  streetAddress: "3 Sunfield Center",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "d7fc728c-8e7d-48e3-a918-474baaf9eba3",
  locationName: "Kirlin LLC",
  locationCategory: "Site Furnishings",
  streetAddress: "1072 Crownhardt Lane",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "46798144-11fd-4d8a-a846-e6167109c9ed",
  locationName: "Green, Herman and Funk",
  locationCategory: "Elevator",
  streetAddress: "2299 Fulton Hill",
  state: "Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "e2574962-3ee7-4422-8a9a-8ccc68ec590e",
  locationName: "Altenwerth, Mayert and Rosenbaum",
  locationCategory: "Drywall & Acoustical (FED)",
  streetAddress: "5 Fairview Circle",
  state: "Minnesota",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "ac64abc9-8c15-4652-aa5c-f5e279b2f1df",
  locationName: "Harris Group",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "26 Karstens Drive",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "f20a2f98-1a27-4e7a-bac2-b92f6908a47c",
  locationName: "Volkman-Schaden",
  locationCategory: "Asphalt Paving",
  streetAddress: "1260 Toban Plaza",
  state: "Tennessee",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "d43ce8c6-d5f5-4638-be8e-25af800ddab7",
  locationName: "Metz Group",
  locationCategory: "Granite Surfaces",
  streetAddress: "80 Stone Corner Parkway",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "919ce503-a07d-46c9-bc40-ec40a75271c6",
  locationName: "Conroy-Cummings",
  locationCategory: "Asphalt Paving",
  streetAddress: "62 School Circle",
  state: "Nebraska",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "be7acbe4-4ef7-4db5-bb03-65623d482a37",
  locationName: "Spinka-Donnelly",
  locationCategory: "Marlite Panels (FED)",
  streetAddress: "60584 Anderson Center",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "9d2b9a6b-dc33-4db1-ac49-e5a129efd39f",
  locationName: "Pouros LLC",
  locationCategory: "Drywall & Acoustical (MOB)",
  streetAddress: "98 Northwestern Plaza",
  state: "Michigan",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "2d85c00c-414e-4a5f-a8c9-eacf78ab623a",
  locationName: "Ledner and Sons",
  locationCategory: "Elevator",
  streetAddress: "6 Waywood Alley",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "59ad5f7c-edc4-4bab-a9dd-872791721ad5",
  locationName: "MacGyver Group",
  locationCategory: "Elevator",
  streetAddress: "0790 Oneill Drive",
  state: "Arizona",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "3d9307b2-1100-4973-850a-ceba080e0246",
  locationName: "Parker-Huel",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "8 Ruskin Pass",
  state: "Pennsylvania",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "9e92000a-ea3e-4027-a6f9-fe7055a67308",
  locationName: "Wehner, Deckow and Casper",
  locationCategory: "Roofing (Asphalt)",
  streetAddress: "05351 Old Gate Street",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "3a54541d-8c82-41e3-a66a-1f45414b93a5",
  locationName: "Smitham Group",
  locationCategory: "Structural & Misc Steel Erection",
  streetAddress: "0308 Sunbrook Terrace",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "8b255ebf-5e3a-414f-98ef-d4baa51fb141",
  locationName: "Dach LLC",
  locationCategory: "Curb & Gutter",
  streetAddress: "95 Michigan Road",
  state: "Ohio",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "94b4a4fd-1444-4611-b82a-ebd477b40c76",
  locationName: "Frami-Lockman",
  locationCategory: "Construction Clean and Final Clean",
  streetAddress: "7 Badeau Road",
  state: "Alabama",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "d9f2433f-4042-44a7-a089-5f3c74644829",
  locationName: "Thiel-Kuhic",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "42835 Esch Place",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "dad48996-9168-4cb6-b178-01d39ba35e7e",
  locationName: "Runte-Welch",
  locationCategory: "HVAC",
  streetAddress: "1 Sloan Circle",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "825f977e-e07c-4188-8ee0-0b077df9da5d",
  locationName: "Sawayn Group",
  locationCategory: "Drilled Shafts",
  streetAddress: "14 Ruskin Road",
  state: "District of Columbia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "b3168cef-ddc1-4ce1-96a2-d8ddd6c9aab4",
  locationName: "Aufderhar, Reilly and Zieme",
  locationCategory: "Elevator",
  streetAddress: "459 Farmco Way",
  state: "Ohio",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "18e25bad-271a-4a3c-a3f0-3c1992278d02",
  locationName: "Connelly-Abbott",
  locationCategory: "Roofing (Asphalt)",
  streetAddress: "620 Anthes Road",
  state: "Ohio",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "25532d06-a046-4588-822a-2e0af036879e",
  locationName: "Beahan, Zemlak and Streich",
  locationCategory: "Construction Clean and Final Clean",
  streetAddress: "4000 Fairfield Alley",
  state: "Missouri",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "e2d34a5e-55d2-4d08-9cc6-836692b4e5e2",
  locationName: "Fisher, Dickinson and Bayer",
  locationCategory: "Granite Surfaces",
  streetAddress: "399 Welch Court",
  state: "North Carolina",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "daebb0f6-6646-467f-a366-aa3ad3c20881",
  locationName: "Ondricka, Ernser and Tromp",
  locationCategory: "Fire Protection",
  streetAddress: "75 Anderson Parkway",
  state: "Ohio",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "57210ade-fb1d-4519-8807-f3412e03c42b",
  locationName: "Greenfelder, Renner and Mann",
  locationCategory: "Framing (Wood)",
  streetAddress: "419 Luster Circle",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "9d55e2da-c958-44da-bead-1763612d54cf",
  locationName: "Gottlieb and Sons",
  locationCategory: "RF Shielding",
  streetAddress: "54706 High Crossing Center",
  state: "Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "32ccb727-86bb-4ece-a086-9770b96307cc",
  locationName: "Kshlerin, McCullough and Pagac",
  locationCategory: "Masonry & Precast",
  streetAddress: "933 Melody Hill",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "daf3d623-2598-4cf5-9666-90402391f51f",
  locationName: "O'Kon LLC",
  locationCategory: "Fire Protection",
  streetAddress: "848 Tennessee Avenue",
  state: "Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "ba291631-fa76-4b53-953c-81c7b7be48f8",
  locationName: "Waelchi Group",
  locationCategory: "RF Shielding",
  streetAddress: "82236 Village Place",
  state: "Kansas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "e34507af-4105-4eb1-bedc-2e86f4369ddd",
  locationName: "Ferry-McLaughlin",
  locationCategory: "Epoxy Flooring",
  streetAddress: "8 Hollow Ridge Park",
  state: "Tennessee",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "893284ab-4a22-45f3-b2f2-e6c20395270b",
  locationName: "Greenholt-Schamberger",
  locationCategory: "Casework",
  streetAddress: "9 Bunting Crossing",
  state: "Pennsylvania",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "c358718e-f5cb-4027-bb06-62b66d8f8105",
  locationName: "Schroeder, Larson and Corwin",
  locationCategory: "Rebar & Wire Mesh Install",
  streetAddress: "6521 Bluejay Way",
  state: "Virginia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "711f2237-302b-481c-bd20-803cd2f70ea3",
  locationName: "Harber, Runolfsson and Kerluke",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "422 Ridgeway Street",
  state: "Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "d55bcc8a-5476-4b9f-b148-c2bdc5b8a472",
  locationName: "Hermann-Reinger",
  locationCategory: "Roofing (Asphalt)",
  streetAddress: "462 Almo Point",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "cfacc736-3582-4abc-a131-8c9c4b919b0e",
  locationName: "O'Keefe, Senger and Stoltenberg",
  locationCategory: "Plumbing & Medical Gas",
  streetAddress: "7 Bultman Circle",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "aacd0706-b9e6-4600-921f-a4664b9d2651",
  locationName: "Reinger, Lueilwitz and Lind",
  locationCategory: "Construction Clean and Final Clean",
  streetAddress: "1 Brickson Park Junction",
  state: "Nebraska",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "78e42c20-15f7-4b33-933e-f68a62c98242",
  locationName: "Trantow and Sons",
  locationCategory: "Drilled Shafts",
  streetAddress: "209 Pond Lane",
  state: "Minnesota",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "45825102-e118-44da-b8a7-7c5a78891adb",
  locationName: "Reynolds-Prohaska",
  locationCategory: "Structural & Misc Steel Erection",
  streetAddress: "8887 Novick Pass",
  state: "Michigan",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "3f6e9878-f1aa-4593-a36d-d58deeef5fca",
  locationName: "Reilly, Runolfsdottir and MacGyver",
  locationCategory: "EIFS",
  streetAddress: "217 Shasta Drive",
  state: "Washington",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "ee68c16b-49db-4f30-99be-e69295a9ba5a",
  locationName: "Frami Inc",
  locationCategory: "Structural and Misc Steel (Fabrication)",
  streetAddress: "241 Dahle Court",
  state: "Oregon",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "70845bfc-a062-4f25-91ee-5d912fe60629",
  locationName: "Kuhic, Klein and Towne",
  locationCategory: "Asphalt Paving",
  streetAddress: "6546 Veith Circle",
  state: "Oregon",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "7bc0a9b9-1707-479a-9dfa-af343855a3c5",
  locationName: "Wolf, Cronin and Reinger",
  locationCategory: "Plumbing & Medical Gas",
  streetAddress: "075 Comanche Point",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "633acb01-7a14-4947-ae04-95e37bf952bf",
  locationName: "Koss-Barton",
  locationCategory: "Fire Protection",
  streetAddress: "84 Village Junction",
  state: "Washington",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "53bb0c50-3a5a-4ae5-a757-74f32bd66a07",
  locationName: "Macejkovic LLC",
  locationCategory: "Masonry & Precast",
  streetAddress: "380 Melvin Street",
  state: "Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "10094e8f-1c20-4559-92a8-6494b06d0dd5",
  locationName: "Mraz, Lemke and Armstrong",
  locationCategory: "Electrical and Fire Alarm",
  streetAddress: "144 American Court",
  state: "Ohio",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "f5712aa0-f81f-4bf1-b26d-f3504a81cceb",
  locationName: "Dickens-Krajcik",
  locationCategory: "RF Shielding",
  streetAddress: "00361 Morrow Road",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "374104b3-b5cc-49a5-b1e4-d243f8ad6ec0",
  locationName: "Lindgren-Weimann",
  locationCategory: "Doors, Frames & Hardware",
  streetAddress: "298 Sugar Trail",
  state: "Oklahoma",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "13e51c0c-1d19-43be-b296-c9a37f70a527",
  locationName: "Hammes, Gulgowski and Bogan",
  locationCategory: "Hard Tile & Stone",
  streetAddress: "61 Upham Circle",
  state: "Missouri",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "d28696ea-9083-425e-8c75-56fce3bb9098",
  locationName: "Abbott, Kreiger and Kulas",
  locationCategory: "Epoxy Flooring",
  streetAddress: "4012 Ridgeway Alley",
  state: "Idaho",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "35447d89-2319-466d-8f5c-0723ffb87a7a",
  locationName: "Murazik, Gleichner and Weber",
  locationCategory: "Granite Surfaces",
  streetAddress: "5 Old Gate Drive",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "1f7fd545-4028-4411-be49-a529cbe0f582",
  locationName: "Johnson, Runolfsson and Sipes",
  locationCategory: "Structural & Misc Steel Erection",
  streetAddress: "28442 Declaration Center",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "b6124f20-6601-4891-8325-3e4a2cc7472c",
  locationName: "Rempel-Blick",
  locationCategory: "Waterproofing & Caulking",
  streetAddress: "575 Green Ridge Junction",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "3ff51b77-085e-4a82-b65e-364ff405c8b9",
  locationName: "Denesik, Effertz and Reynolds",
  locationCategory: "Fire Sprinkler System",
  streetAddress: "6 Holmberg Lane",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "c06a109d-73d3-453c-80f1-ad69cf416f5c",
  locationName: "Kunze-Towne",
  locationCategory: "Wall Protection",
  streetAddress: "8177 Melody Alley",
  state: "Illinois",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "a7b7ef26-e9b5-4ca8-abc6-df1fb85bd3fd",
  locationName: "Cole, Collier and Walker",
  locationCategory: "Overhead Doors",
  streetAddress: "52 Judy Way",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "5060121d-d4ca-43b3-8de0-e407aeac7888",
  locationName: "Dickinson LLC",
  locationCategory: "Masonry & Precast",
  streetAddress: "78 Old Shore Street",
  state: "Nebraska",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "e12ff7e6-9d48-466c-81ce-1eb3257adc0f",
  locationName: "Goldner, Goodwin and Sipes",
  locationCategory: "Fire Protection",
  streetAddress: "26 Loftsgordon Crossing",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "4e05262d-26f4-430f-b803-72bca8d43e53",
  locationName: "Grant-Hamill",
  locationCategory: "Roofing (Metal)",
  streetAddress: "0 Spohn Parkway",
  state: "Illinois",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "aa681ae4-70eb-4abf-af28-da9fd383114b",
  locationName: "Towne and Sons",
  locationCategory: "HVAC",
  streetAddress: "15 La Follette Road",
  state: "Ohio",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "cfc14358-73de-43c3-a611-0f8128f6decb",
  locationName: "Boyle, Rogahn and Kovacek",
  locationCategory: "Glass & Glazing",
  streetAddress: "075 Magdeline Drive",
  state: "Missouri",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "0c117888-5574-40e1-89ac-bdc6166de839",
  locationName: "Steuber Inc",
  locationCategory: "Fire Protection",
  streetAddress: "02841 Longview Court",
  state: "Maryland",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "c2ab6edf-e751-4584-93c9-38259a956b6d",
  locationName: "Okuneva, Torphy and Gleason",
  locationCategory: "Doors, Frames & Hardware",
  streetAddress: "4745 Red Cloud Center",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "3aaf8684-8883-4fdd-84fc-d27f80097e87",
  locationName: "Murazik-Lang",
  locationCategory: "Structural & Misc Steel Erection",
  streetAddress: "449 Buell Road",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "6bba5f72-e7bc-4efc-8c6b-ecb5fa84cbea",
  locationName: "Koelpin Inc",
  locationCategory: "Framing (Wood)",
  streetAddress: "11 Pine View Trail",
  state: "New Mexico",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "9e7e48e9-aeb0-46b3-b697-e7df1cf0bada",
  locationName: "Kessler, Brakus and Gulgowski",
  locationCategory: "Construction Clean and Final Clean",
  streetAddress: "3457 Evergreen Park",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "4e1a6889-0f82-4352-8ac5-f215a5561201",
  locationName: "Schuppe, Sporer and Heathcote",
  locationCategory: "Marlite Panels (FED)",
  streetAddress: "1084 Fremont Avenue",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "8cbc51a6-7b71-4716-9c2b-0f8daebbfdbc",
  locationName: "Tromp, Klein and Goodwin",
  locationCategory: "Hard Tile & Stone",
  streetAddress: "5 Northland Drive",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "98b89f05-21f8-44cf-b65a-f7d5e706819c",
  locationName: "Grant, Hudson and Lueilwitz",
  locationCategory: "Electrical",
  streetAddress: "1 Mariners Cove Junction",
  state: "Indiana",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "82a04b5e-7a4c-44d4-8807-6c2daf62558a",
  locationName: "Gleason-Trantow",
  locationCategory: "Casework",
  streetAddress: "66334 David Drive",
  state: "Indiana",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "7edee867-44d1-4cc5-8ae7-2fb378346380",
  locationName: "Harris-Reynolds",
  locationCategory: "EIFS",
  streetAddress: "64432 Cardinal Alley",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "8ccbc837-3476-404c-a26c-5c8b3604cac4",
  locationName: "Gulgowski-Kuhic",
  locationCategory: "Granite Surfaces",
  streetAddress: "76 Manitowish Drive",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "2173b328-ad37-4f02-9295-b0e1d15db5b6",
  locationName: "Jast Inc",
  locationCategory: "Roofing (Metal)",
  streetAddress: "39477 Raven Center",
  state: "Nebraska",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "673a2545-b6e4-41c6-9da4-af3373752e41",
  locationName: "Bednar Inc",
  locationCategory: "Exterior Signage",
  streetAddress: "05 Londonderry Crossing",
  state: "Virginia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "b67b7bb3-2465-4c5f-a520-0f6c3f7bacb5",
  locationName: "Ortiz-McClure",
  locationCategory: "Fire Sprinkler System",
  streetAddress: "346 Drewry Crossing",
  state: "Oregon",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "32c2c96d-d33c-4711-b21d-7dd0e87e6b0d",
  locationName: "Nitzsche-Bauch",
  locationCategory: "Elevator",
  streetAddress: "26562 Lighthouse Bay Lane",
  state: "Ohio",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "14d98d96-dd54-497f-8734-9d86dfb09978",
  locationName: "Kovacek-Bergstrom",
  locationCategory: "Drilled Shafts",
  streetAddress: "38 Express Trail",
  state: "South Carolina",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "909e22f7-c948-4b34-8eeb-a3673cf8d897",
  locationName: "Rempel, Murazik and Luettgen",
  locationCategory: "Roofing (Metal)",
  streetAddress: "8078 Manufacturers Trail",
  state: "Maryland",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "205715e7-a6d8-4d79-8916-f8c8d9440411",
  locationName: "Ankunding-Gleichner",
  locationCategory: "Electrical and Fire Alarm",
  streetAddress: "635 Clyde Gallagher Crossing",
  state: "Kansas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "1ae4ca16-fdad-47bc-9dd6-49bcf6194f63",
  locationName: "Kassulke-Erdman",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "59654 Glacier Hill Street",
  state: "Missouri",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "7d6f1c14-e71e-4366-8a28-c22c1352641a",
  locationName: "Klein, Gislason and Runte",
  locationCategory: "HVAC",
  streetAddress: "910 Carberry Crossing",
  state: "Arizona",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "711f4ff0-c138-4c35-81c7-02b0db9bd73f",
  locationName: "Champlin-Murazik",
  locationCategory: "Fire Protection",
  streetAddress: "50028 Prentice Lane",
  state: "Illinois",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "615423b7-030d-454a-922a-7b6c675425ac",
  locationName: "Jones Group",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "081 Kipling Crossing",
  state: "Washington",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "827904ea-9384-4b3d-820e-e0d4863f73b3",
  locationName: "Rowe-Goyette",
  locationCategory: "Exterior Signage",
  streetAddress: "469 Petterle Plaza",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "8b43916b-46f7-44ce-9f7d-804808e2e2ec",
  locationName: "Wilkinson-Hyatt",
  locationCategory: "Framing (Steel)",
  streetAddress: "8 Johnson Alley",
  state: "Virginia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "282fbdb4-3f5b-4e26-8151-804d1d18ae77",
  locationName: "Christiansen-Larson",
  locationCategory: "Overhead Doors",
  streetAddress: "82998 Bartelt Street",
  state: "Wisconsin",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "c05a06ca-119e-48ad-a96b-f7089393f64c",
  locationName: "Kemmer-Homenick",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "7 Oakridge Crossing",
  state: "Georgia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "98b814d0-13ab-41db-b282-156e536d5779",
  locationName: "Boyle LLC",
  locationCategory: "Glass & Glazing",
  streetAddress: "812 Thompson Center",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "bf3ba898-fe94-47d8-9624-09fdbc1cd135",
  locationName: "Weissnat Inc",
  locationCategory: "Fire Sprinkler System",
  streetAddress: "3448 Bultman Street",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "d046aacc-4202-4184-813a-81447425b309",
  locationName: "Dicki LLC",
  locationCategory: "Curb & Gutter",
  streetAddress: "3550 Little Fleur Hill",
  state: "Kansas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "3d054cf8-ee0c-400f-9360-de670273e2be",
  locationName: "Krajcik, Heathcote and Emard",
  locationCategory: "Painting & Vinyl Wall Covering",
  streetAddress: "65488 Barnett Place",
  state: "District of Columbia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "7b3227c3-1638-4954-9409-c922db5205dd",
  locationName: "Hegmann, Metz and Harvey",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "055 Hansons Point",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "a7c994ba-5dc7-4870-a9ee-85a053b0adfa",
  locationName: "VonRueden Inc",
  locationCategory: "Electrical",
  streetAddress: "49798 Forest Run Parkway",
  state: "Georgia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "923d82da-b83c-40f2-83db-4fa0afda2d60",
  locationName: "Becker-Greenholt",
  locationCategory: "Drilled Shafts",
  streetAddress: "91036 Golf Point",
  state: "Michigan",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "4dd82b69-7e8c-47e3-8468-d34494940cba",
  locationName: "Bednar Group",
  locationCategory: "Marlite Panels (FED)",
  streetAddress: "3698 Eagle Crest Point",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "a2c81042-494e-47ef-892a-6877acfd1d69",
  locationName: "Hermann-Ward",
  locationCategory: "Termite Control",
  streetAddress: "9 Fairview Circle",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "c48021ed-e9c7-4283-808f-618f4222a878",
  locationName: "Bailey, Lemke and Simonis",
  locationCategory: "Fire Sprinkler System",
  streetAddress: "947 Division Junction",
  state: "Alabama",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "18646a82-c775-4367-9696-5845720438b3",
  locationName: "Zulauf LLC",
  locationCategory: "Overhead Doors",
  streetAddress: "439 Butternut Drive",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "e105c47a-906c-4273-b6b3-4acd912bb23f",
  locationName: "Jacobi Inc",
  locationCategory: "Roofing (Metal)",
  streetAddress: "20797 Carey Road",
  state: "Virginia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "a748bc83-ee0a-4670-a790-4119d62163de",
  locationName: "Turner LLC",
  locationCategory: "Termite Control",
  streetAddress: "01947 Dryden Street",
  state: "Mississippi",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "c5bc204e-6152-47ff-be9b-3fdd72aac528",
  locationName: "Gaylord, Bosco and Frami",
  locationCategory: "Roofing (Metal)",
  streetAddress: "73114 Red Cloud Street",
  state: "Indiana",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "07daa0d7-7da4-4a20-a82a-1d71f50b6e98",
  locationName: "Zulauf-Crist",
  locationCategory: "HVAC",
  streetAddress: "33641 Farwell Center",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "165e82f8-e54e-4393-a0f6-77ed13f092db",
  locationName: "Bartell Group",
  locationCategory: "Construction Clean and Final Clean",
  streetAddress: "6 Straubel Way",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "39b31ce1-868f-42d6-926e-4d5c8a3e2eaf",
  locationName: "Bosco Group",
  locationCategory: "Site Furnishings",
  streetAddress: "4207 Kropf Way",
  state: "Alabama",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "b2d1206e-127f-4664-bb94-09ab02ccdbca",
  locationName: "Pollich-Wolff",
  locationCategory: "Drywall & Acoustical (FED)",
  streetAddress: "2611 Luster Lane",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "217d8fdb-77a7-46da-8aaa-a001c7898846",
  locationName: "Borer-Bechtelar",
  locationCategory: "Roofing (Metal)",
  streetAddress: "86121 Haas Drive",
  state: "Kentucky",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "418a608f-fc36-4c1b-8174-952553c6576a",
  locationName: "Stoltenberg, Parisian and Sawayn",
  locationCategory: "HVAC",
  streetAddress: "23 Dorton Hill",
  state: "Florida",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "80fafc84-ddde-4dab-9be1-202ac852e047",
  locationName: "Emmerich-Koss",
  locationCategory: "Masonry",
  streetAddress: "74902 Sherman Place",
  state: "Washington",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "791ba736-b5c7-4eca-a0ee-c207d7c80acf",
  locationName: "Prohaska-Rau",
  locationCategory: "Framing (Wood)",
  streetAddress: "22 Heath Junction",
  state: "Wisconsin",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "48a606dc-d477-4f04-8198-94f902e5b3b3",
  locationName: "Jones-Sauer",
  locationCategory: "Electrical and Fire Alarm",
  streetAddress: "0 Nova Lane",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "cd8f928a-0d6b-41b1-bd77-ce296d4ed895",
  locationName: "Heidenreich-Bode",
  locationCategory: "Drilled Shafts",
  streetAddress: "0096 Annamark Avenue",
  state: "Arkansas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "41948a18-6af5-42c6-9c35-8549e3181a3d",
  locationName: "Macejkovic-Franecki",
  locationCategory: "Termite Control",
  streetAddress: "4705 Old Gate Terrace",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "1c8df301-c213-4257-abc7-31efb65395e4",
  locationName: "Schumm, Wuckert and D'Amore",
  locationCategory: "Masonry",
  streetAddress: "2666 Stang Parkway",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "bd59742c-1e8a-4a57-876d-e865611f892b",
  locationName: "Hegmann, Hoeger and O'Conner",
  locationCategory: "Epoxy Flooring",
  streetAddress: "921 Sundown Hill",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "76d81f55-8a5c-42ff-a163-60b2635ae568",
  locationName: "Gleichner-Skiles",
  locationCategory: "Casework",
  streetAddress: "1234 La Follette Street",
  state: "Oklahoma",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "a05bb15f-7a12-42e8-beb6-f06dfa281d59",
  locationName: "Mertz-Cronin",
  locationCategory: "Epoxy Flooring",
  streetAddress: "3705 Towne Point",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "a4fbed77-4494-481c-a07c-4a69f6191502",
  locationName: "McDermott Group",
  locationCategory: "Doors, Frames & Hardware",
  streetAddress: "1 Rusk Trail",
  state: "New Jersey",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "abe592fa-6450-4c91-b96a-da90f355f8e0",
  locationName: "Schaden Group",
  locationCategory: "Marlite Panels (FED)",
  streetAddress: "35 Vera Trail",
  state: "Nebraska",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "4d6a3b29-9b0c-40fe-ad07-1cbe45b8fe66",
  locationName: "Okuneva, Schultz and Moen",
  locationCategory: "Wall Protection",
  streetAddress: "8446 Pond Junction",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "36e305dc-80dc-4938-9704-158c10549381",
  locationName: "Sanford LLC",
  locationCategory: "Drywall & Acoustical (FED)",
  streetAddress: "15436 Dayton Trail",
  state: "Georgia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "08b27f7f-00c0-40fd-afec-b8c8f68d5167",
  locationName: "Botsford, Pacocha and Larson",
  locationCategory: "Fire Sprinkler System",
  streetAddress: "81 Utah Court",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "fd0dbfdb-fa58-4dde-873a-394537e28c79",
  locationName: "Halvorson, Waelchi and Glover",
  locationCategory: "Electrical and Fire Alarm",
  streetAddress: "277 Fieldstone Parkway",
  state: "Georgia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "b4a69769-0ca5-4a98-b202-d6f9ae4e14d9",
  locationName: "Romaguera Inc",
  locationCategory: "Framing (Wood)",
  streetAddress: "23 Dunning Court",
  state: "Washington",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "6041c7dc-f10f-40bd-831d-6a36faac764d",
  locationName: "MacGyver Group",
  locationCategory: "Wall Protection",
  streetAddress: "3 Old Shore Street",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "0b9ed576-d62d-49aa-bef3-30d1a1410651",
  locationName: "O'Conner, Metz and Carter",
  locationCategory: "Roofing (Metal)",
  streetAddress: "5 Autumn Leaf Way",
  state: "Georgia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "2029ae68-f100-4c1a-ae75-23c2d3ee3e7e",
  locationName: "O'Reilly Inc",
  locationCategory: "Masonry & Precast",
  streetAddress: "9 Amoth Junction",
  state: "Kansas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "129310a2-68c7-428f-95e8-7ab828cfa62b",
  locationName: "Gaylord-Kozey",
  locationCategory: "Glass & Glazing",
  streetAddress: "53 Scofield Court",
  state: "New Jersey",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "5b40bd7b-f9f9-41ff-ad93-ac16aa1d5bf7",
  locationName: "Beatty, Reilly and O'Conner",
  locationCategory: "Casework",
  streetAddress: "00930 Hanover Circle",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "0f1767e4-1746-41a5-8690-f106bf2cc5ee",
  locationName: "Graham-Waelchi",
  locationCategory: "Rebar & Wire Mesh Install",
  streetAddress: "0 Canary Point",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "951f5484-dc41-457b-8f3e-56001105f755",
  locationName: "Reichel LLC",
  locationCategory: "Sitework & Site Utilities",
  streetAddress: "3 1st Junction",
  state: "Kansas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "a0c4d8ab-ee6e-485c-a4aa-b6ae824612b6",
  locationName: "Leffler, Ledner and Schultz",
  locationCategory: "Framing (Steel)",
  streetAddress: "47988 Morning Lane",
  state: "North Carolina",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "cd35fdc7-3c4a-46de-a1da-2cda7a3dcb97",
  locationName: "Donnelly LLC",
  locationCategory: "Epoxy Flooring",
  streetAddress: "67 Ryan Street",
  state: "New York",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "1fc45529-e345-45b1-8c25-2c95baa3e570",
  locationName: "Johnston-Bahringer",
  locationCategory: "Soft Flooring and Base",
  streetAddress: "20 Bluejay Hill",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "a287145f-3d21-46ed-ba69-cf647ba6389b",
  locationName: "Wilderman-Swift",
  locationCategory: "Waterproofing & Caulking",
  streetAddress: "0802 Kings Street",
  state: "West Virginia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "f98ae0f6-0b82-439e-bcdc-79134c58400c",
  locationName: "Kshlerin-Keebler",
  locationCategory: "Elevator",
  streetAddress: "465 Ramsey Terrace",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "208762e1-0aa6-4bfc-8fe0-acffc03e78f7",
  locationName: "Reinger, Daniel and Jerde",
  locationCategory: "Elevator",
  streetAddress: "3 Riverside Crossing",
  state: "Illinois",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "c4e0ee4e-15f2-449d-b848-59de5edf4a7a",
  locationName: "Cremin, Altenwerth and Dickinson",
  locationCategory: "Roofing (Asphalt)",
  streetAddress: "76861 Blue Bill Park Drive",
  state: "Texas",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "75015426-ce99-49f2-9a70-f6d28917dfc0",
  locationName: "Gleichner LLC",
  locationCategory: "Marlite Panels (FED)",
  streetAddress: "57 Hanson Parkway",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "79499a96-9550-4f45-baf9-cfa287ad77fc",
  locationName: "O'Kon-Rice",
  locationCategory: "Plumbing & Medical Gas",
  streetAddress: "38267 Brown Center",
  state: "Idaho",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "a9cceb64-a889-4ece-9a84-db3ec13ffa6b",
  locationName: "Gleichner-Emard",
  locationCategory: "Drilled Shafts",
  streetAddress: "3143 Michigan Junction",
  state: "Ohio",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "5fd278b8-aea1-4a06-bf9d-81756f47d919",
  locationName: "Crooks Inc",
  locationCategory: "Structural and Misc Steel (Fabrication)",
  streetAddress: "22 Manley Way",
  state: "Kentucky",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "708ba3f5-5ca4-480f-b2ee-497d43de2572",
  locationName: "Ledner, Schroeder and Sauer",
  locationCategory: "Retaining Wall and Brick Pavers",
  streetAddress: "66424 Northridge Crossing",
  state: "California",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "35116fb8-06a8-46fd-abbe-eb96a4c7f103",
  locationName: "Adams LLC",
  locationCategory: "Doors, Frames & Hardware",
  streetAddress: "2 Barnett Center",
  state: "Mississippi",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "6df33380-10c8-4cd5-abb2-52a07b590eb2",
  locationName: "Jacobs-Von",
  locationCategory: "Roofing (Metal)",
  streetAddress: "52090 Algoma Junction",
  state: "North Carolina",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "b7c24c7e-b581-451a-81c1-9a9c5f58db86",
  locationName: "Cole Group",
  locationCategory: "EIFS",
  streetAddress: "423 Alpine Terrace",
  state: "Illinois",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "5687cf1f-c558-4366-8d69-29842805dbc9",
  locationName: "Kunze-Crona",
  locationCategory: "Temp Fencing, Decorative Fencing and Gates",
  streetAddress: "4108 Anniversary Parkway",
  state: "Louisiana",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "6c6f0f43-fe15-4834-a4a1-9e1c97221399",
  locationName: "Abbott-Brown",
  locationCategory: "Hard Tile & Stone",
  streetAddress: "4428 Cardinal Crossing",
  state: "Kansas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "fb938a99-589b-42cb-bcee-031df731a6aa",
  locationName: "Huel-Zboncak",
  locationCategory: "Casework",
  streetAddress: "392 Hoepker Place",
  state: "New Hampshire",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "8edb9194-033d-4d29-b24f-dea9f1e4c116",
  locationName: "Reichert, Bartoletti and Shanahan",
  locationCategory: "HVAC",
  streetAddress: "42 Pawling Terrace",
  state: "Virginia",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "6145482b-c474-4211-9a74-cd253030a98b",
  locationName: "McKenzie, Brown and Okuneva",
  locationCategory: "Asphalt Paving",
  streetAddress: "88870 Calypso Crossing",
  state: "Georgia",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "4bea9d3f-95f1-4d4e-a022-c14a102c938e",
  locationName: "Kautzer-Berge",
  locationCategory: "Drywall & Acoustical (MOB)",
  streetAddress: "4901 Starling Drive",
  state: "Nebraska",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "e63756ce-bd28-491b-b8b4-2e112ef4289b",
  locationName: "Hettinger LLC",
  locationCategory: "Landscaping & Irrigation",
  streetAddress: "49604 Magdeline Crossing",
  state: "Florida",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "2ce7cb46-ef42-4609-949c-280550f8aace",
  locationName: "Stanton, Farrell and Kuhic",
  locationCategory: "Granite Surfaces",
  streetAddress: "839 Cherokee Terrace",
  state: "California",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}, {
  locationId: "ba770a71-6ccc-4ab7-8da3-b21f58e33f08",
  locationName: "Kunde Inc",
  locationCategory: "Electrical and Fire Alarm",
  streetAddress: "2689 Saint Paul Terrace",
  state: "Kentucky",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "7b09a95e-cd71-402f-bcad-91ad58f3ee01",
  locationName: "Davis-Hahn",
  locationCategory: "Glass & Glazing",
  streetAddress: "2 Jay Pass",
  state: "New York",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "b3e9b5f9-2844-4b1a-a379-51065eac5946",
  locationName: "Kilback LLC",
  locationCategory: "Ornamental Railings",
  streetAddress: "31 Trailsway Circle",
  state: "Illinois",
  country: "United states",
  Status: "Active",
  StatusBg: "#8BE78B"
}, {
  locationId: "523794e8-b2a2-44af-ac90-87fa1a45efc4",
  locationName: "Jerde-Paucek",
  locationCategory: "Asphalt Paving",
  streetAddress: "7502 Luster Place",
  state: "Texas",
  country: "United states",
  Status: "Inactive",
  StatusBg: "red"
}];