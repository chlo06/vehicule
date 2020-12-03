class Voiture {

    constructor(license, color, weight, power, tank, places,){

    this.license = license;
    this.color = color;
    this.weight = weight;
    this.power = power;
    this.tank = tank;
    this.places = places;
    this.gas = 5;
    this.insurance = false ;
    this.boardMessage = 'You dont have any insurance cannot take the road like that'    
}
addInsurance (newInsurance){
    if (newInsurance === this.insurance) {
        this.boardMessage = 'You dont have any insurance cannot take the road like that'
        } else {
            this.insurance = newInsurance
            this.boardMessage = 'Great you have now an insurance ! Enjoy'
        }
    }
repeindre (newColor) {
   if (newColor == this.color){
    return 'Thanks for the refreshment'
}  else{
    this.color = newColor;
     return this.color + ' ' + 'Great choice thanks'
    }
   }

mettreEssence (addGas) {
    if ((addGas + this.gas) <= this.tank){
     this.gas += addGas
     return 'Your tank containt now ' + this.gas;
    } return 'Not possible too much gas add';
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
    this.gasTrip= ((distance * 12)/100)
   } ;
   
   if (this.gas >= this.gasTrip){
       return 'You can do this'+ ' ' + this.gasTrip +'L' + ' '+  'be consumed for this trip ';
   }   return 'No possible gas too low ';
  }

toString (){
    return`About youre car : license is ${this.license}, power is ${this.power} and color is ${this.color}`
    }
}
    