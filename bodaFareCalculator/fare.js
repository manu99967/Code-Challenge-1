function calculateBodaFare(DistanceInKm) {
   const baseFare = 50;
   const chargePerKm = 15;
   const fare= baseFare + (distanceInKM * chargePerKm);

   console.log('Uko kwote? Io ni ${distanceInKm} km:');
   console.log('Ukikalia Pikipiki: KES ${baseFare}');
   console.log('Mpaka Uko: KES ${ distanceInKm * chargePerKm}');
   console.log('Total: KES ${fare}');
   console.log('Panda Pikipiki!')


   }

   const distance = Number(prompt('Unashuka wapi Mkubwa? Kilometre ngapi?:'))
   calculateBodaFare(distance);
