export const rides:Array<object> = [
  {
    rideID: 0,
    date:"31-10-2023",
    departure:"06:15",
    distance: 20,
    vehicle:"Renault Clio 1-ABC-23",
    passengers: 4,

    startLocationName: "Agency Hotel",
    startLocationAdress: "Runderweg 11 1234 AB Amsterdam",

    destinationName: "Jumbo Online",
    destinationAdress:"Gyroscoopweg 10 1042 AC Amsterdam",

  },  
  {
    rideID: 1,
    date:"31-10-2023",
    departure:"14:30",
    distance: 20,
    vehicle:"Renault Clio 1-ABC-23",
    passengers: 4,

    startLocationName: "Jumbo Online",
    startLocationAdress:"Gyroscoopweg 10 1042 AC Amsterdam",

    destinationName: "Agency Hotel",
    destinationAdress: "Runderweg 11 1234 AB Amsterdam",

  },
  {
    rideID: 2,
    date:"01-11-2023",
    departure:"06:15",
    distance: 20,
    vehicle:"Ford Transit 4-DEF-56",
    passengers: 8,

    startLocationName: "Agency Hotel",
    startLocationAdress: "Runderweg 11 1234 AB Amsterdam",

    destinationName: "Jumbo Online",
    destinationAdress:"Gyroscoopweg 10 1042 AC Amsterdam",

  },  
  {
    rideID: 3,
    date: "01-11-2023",
    departure:"14:30",
    distance: 20,
    vehicle:"Ford Transit 4-DEF-56",
    passengers: 8,

    startLocationName: "Jumbo Online",
    startLocationAdress:"Gyroscoopweg 10 1042 AC Amsterdam",

    destinationName: "Agency Hotel",
    destinationAdress: "Runderweg 11 1234 AB Amsterdam",

  },
  {
    rideID: 4,
    date:"31-10-2023",
    departure:"08:35",
    distance: 117.1,
    vehicle:"Renault Clio 1-ABC-23",
    passengers: 1,

    startLocationName: "Agency Hotel",
    startLocationAdress: "Runderweg 11 1234 AB Amsterdam",

    destinationName: "Agency Headquaters",
    destinationAdress:"Valkhofparkstraat 123 1122 AD Nijmegen",

  },
  {
    rideID: 5,
    date:"31-10-2023",    
    departure:"16:30",
    distance: 117,
    vehicle:"Renault Clio 1-ABC-23",
    passengers: 1,

    startLocationName: "Agency Headquaters",
    startLocationAdress:"Valkhofparkstraat 123 1122 AD Nijmegen",

    destinationName: "Agency Hotel",
    destinationAdress: "Runderweg 11 1234 AB Amsterdam",
  },
]

export const passengers:Array<object> = [
  {
    workerId: 123,
    name: "Tomasz",
    destination:{
      name:"Jumbo Online",
      adress:"Gyroscoopweg 10 1042 AC Amsterdam"
    },
  },
  {
    workerId: 124,
    name: "Daniel",
        destination:{
      name:"Jumbo Online",
      adress:"Gyroscoopweg 10 1042 AC Amsterdam"
    },
  },
  {
    workerId: 125,
    name: "Magda",
        destination:{
      name:"Jumbo Online",
      adress:"Gyroscoopweg 10 1042 AC Amsterdam"
    },
  },
  {
    workerId: 223,
    name: "Marek",
        destination:{
      name:"Jumbo Online",
      adress:"Gyroscoopweg 10 1042 AC Amsterdam"
    },
  },
  {
    workerId: 225,
    name: "Krzysztof",
        destination:{
      name:"Jumbo Online",
      adress:"Gyroscoopweg 10 1042 AC Amsterdam"
    },
  },
  {
    workerId: 1123,
    name: "Petr",
        destination:{
      name:"Jumbo Online",
      adress:"Gyroscoopweg 10 1042 AC Amsterdam"
    },
  },
  {
    workerId: 1231,
    name: "Oleksandr",
        destination:{
      name:"Jumbo Online",
      adress:"Gyroscoopweg 10 1042 AC Amsterdam"
    },
  },
  {
    workerId: 898,
    name: "Błażej",
    destination:{
      name:"Jumbo Online",
      adress:"Gyroscoopweg 10 1042 AC Amsterdam"
    },
  },
  {
    workerId: 666,
    name: "Jerzy",
    destination:{
      name:"IKEA",
      adress:"Swedenstraat 12 1010 IK Amsterdam"
    },
  },
  {
    workerId: 665,
    name: "Jarosław",
    destination:{
      name:"Albert Heijn E-Store",
      adress:"Bornhout 5 1046 PP"
    },
  },
]