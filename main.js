class voiture {

    constructor(license, Color, weight, power, tank, places){

    this.license = license;
    this.Color = Color;
    this.weight = weight;
    this.power = power;
    this.tank = tank;
    this.places = places;
    }  

repeindre (newColor) {
   if (newColor === this.Color){
    console.log ('Thanks for the refreshment')
}  else{
    this.Color = newColor;
    console.log (newColor + ' ' + 'Great choice thanks')
    }
   }

mettreEssence (addGas) {
    if ((addGas + gas) <= this.tank){
     gas += addGas
     console.log('Your tank containt now ' + gas);
}   else{
    console.log('Not possible too much gas add');
     }
 }

seDeplacer(distance , speed) {
    if (speed < 50){
       gasTrip = ((distance *10)/100);
}
   if ((speed >= 50) && (speed < 90 )){
       gasTrip= ((distance * 5)/100);
}
   if ((speed >= 90) && (speed <130)){
       gasTrip= ((distance * 8)/100);
}
   if (speed >=130){
       gasTrip= ((distance * 12)/100);
   }
   if (gas >= gasTrip){
       console.log('You can do this'+ ' ' + gasTrip +'L' + ' '+  'be consumed for this trip ');
   } else {
       console.log('No possible gas too low ');
   }
}


toString (){
    return`About youre car : license is ${this.license}, power is ${this.power} and color is ${this.Color}`
    }
}


let car1 = new voiture ("CF501MM" , "pink" , 1500 , 110 , 60.0 , 5)
let gas =(5.0)
let gasTrip = null;
//console.log(car1)
car1.repeindre("green")
car1.mettreEssence (150)
car1.seDeplacer ( 10, 4)
//console.log(car1)

//console.log (car1.toString());