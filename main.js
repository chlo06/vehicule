class vehicule{

    constructor(immat, carColor, weight, power, tank, places){

    this.immat = immat;
    this.carColor = carColor;
    this.weight = weight;
    this.power = power;
    this.tank = tank;
    this.places = places;
    }  

repeindre (newColor) {
if (newColor === this.carColor){
    console.log ('Thanks for the refreshment')
}  else{
    this.carColor = newColor;
    console.log (newColor + ' ' + 'Great choice thanks')
      }
}
}
let car1 = new vehicule ("CF501MM" , "pink" , 1500 , 110 , 10.0 , 5)
console.log(car1)
car1.repeindre("green")
