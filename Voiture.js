class voiture {

    constructor(license, color, weight, power, tank, places,){

    this.license = license;
    this.color = color;
    this.weight = weight;
    this.power = power;
    this.tank = tank;
    this.places = places;
    this.gas = 5;
    this.insurance = null;

if (this.insurance = true)  {
    return this.boardMessage = 'Great you have now an insurance'
    }else {
        return this.boardMessage = 'You dont have any insurance'
    }
}

repeindre (newColor) {
   if (newColor === this.color){
    return ('Thanks for the refreshment')
}  else{
    this.color = newColor;
    return (newColor + ' ' + 'Great choice thanks')
    }
   }

mettreEssence (addGas) {
    if ((addGas + this.gas) <= this.tank){
     this.gas += addGas
     return ('Your tank containt now ' + this.gas);
}   else{
    return ('Not possible too much gas add');
     }
 }

seDeplacer(distance , speed) {
    this.gasTrip = null;
    if (speed < 50){
       this.gasTrip = ((distance *10)/100);
}
   if ((speed >= 50) && (speed < 90 )){
    this.gasTrip= ((distance * 5)/100);
}
   if ((speed >= 90) && (speed <130)){
    this.gasTrip= ((distance * 8)/100);
}
   if (speed >=130){
    this.gasTrip= ((distance * 12)/100);
   }
   if (this.gas >= this.gasTrip){
       return ('You can do this'+ ' ' + this.gasTrip +'L' + ' '+  'be consumed for this trip ');
   } else {
       return ('No possible gas too low ');
   }
  }



toString (){
    return`About youre car : license is ${this.license}, power is ${this.power} and color is ${this.color}`
    }
}
    
let car1 = new voiture ("CF-501-MM" , "pink" , 1500 , 110 , 60.0 , 5 )
console.log(car1)


car1.repeindre("green")
car1.mettreEssence (150)
car1.seDeplacer ( 10, 4)
car1.insurance = true
console.log(car1)

//console.log (car1.toString());