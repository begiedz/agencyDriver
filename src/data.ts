
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

const jumboPassengers = passengers.filter((passenger:any) =>{
  return (passenger.destination.adress === "Gyroscoopweg 10 1042 AC Amsterdam")
})

export const rides:Array<object> = [
  {
    rideID: 0,
    departure: {
      date: "31-10-2023",
      time: "06:15",
    },
    distance: 20,
    vehicle: {
      brand: "Renault Clio",
      plate: "1-ABC-23",
    },
    passengers: jumboPassengers,
    startLocation: {
      name: "Agency Hotel",
      address: "Runderweg 11 1234 AB Amsterdam",
    },
    destination: {
      name: "Jumbo Online",
      address: "Gyroscoopweg 10 1042 AC Amsterdam",
    },
  },
  {
    rideID: 1,
    departure: {
      date: "01-11-2023",
      time: "06:15",
    },
    distance: 20,
    vehicle: {
      brand: "Ford Transit",
      plate: "4-DEF-56",
    },
    passengers: jumboPassengers,
    startLocation: {
      name: "Agency Hotel",
      address: "Runderweg 11 1234 AB Amsterdam",
    },
    destination: {
      name: "Jumbo Online",
      address: "Gyroscoopweg 10 1042 AC Amsterdam",
    },
  },
  {
    rideID: 2,
    departure: {
      date: "01-11-2023",
      time: "14:30",
    },
    distance: 20,
    vehicle: {
      brand: "Ford Transit",
      plate: "4-DEF-56",
    },
    passengers: jumboPassengers,
    startLocation: {
      name: "Jumbo Online",
      address: "Gyroscoopweg 10 1042 AC Amsterdam",
    },
    destination: {
      name: "Agency Hotel",
      address: "Runderweg 11 1234 AB Amsterdam",
    },
  },  
  {
    rideID: 3,
    departure: {
      date: "01-11-2023",
      time: "14:30",
    },
    distance: 20,
    vehicle: {
      brand: "Ford Transit",
      plate: "4-DEF-56",
    },
    passengers: jumboPassengers,
    startLocation: {
      name: "Jumbo Online",
      address: "Gyroscoopweg 10 1042 AC Amsterdam",
    },
    destination: {
      name: "Agency Hotel",
      address: "Runderweg 11 1234 AB Amsterdam",
    },
  },
    {
      rideID: 4,
      departure: {
        date: "31-10-2023",
        time: "08:35",
      },
      distance: 117.1,
      vehicle: {
        brand: "Renault Clio",
        plate: "1-ABC-23",
      },
      passengers: 1,
      startLocation: {
        name: "Agency Hotel",
        address: "Runderweg 11 1234 AB Amsterdam",
      },
      destination: {
        name: "Agency Headquaters",
        address: "Valkhofparkstraat 123 1122 AD Nijmegen",
      },
    },
    {
      rideID: 5,
      departure: {
        date: "31-10-2023",
        time: "16:30",
      },
      distance: 117,
      vehicle: {
        brand: "Renault Clio",
        plate: "1-ABC-23",
      },
      passengers: 1,
      startLocation: {
        name: "Agency Headquaters",
        address: "Valkhofparkstraat 123 1122 AD Nijmegen",
      },
      destination: {
        name: "Agency Hotel",
        address: "Runderweg 11 1234 AB Amsterdam",
      },
    },
  ]
  