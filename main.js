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
    console.log(' Not possible too much gas add');
     }
 }

seDeplacer(distance , speed) {

}
toString (aboutCar){
    return`About youre car : license is ${this.license}, power is ${this.power} and color is ${this.Color}`
}
}
let car1 = new voiture ("CF501MM" , "pink" , 1500 , 110 , 60.0 , 5)
let gas =(5.0)

//console.log(car1)
car1.repeindre("green")
car1.mettreEssence (150)
//console.log(car1)

console.log (car1.toString());