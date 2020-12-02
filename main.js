class vehicule{

    constructor(){

    this.immat = immat;
    this.carColor = carColor;
    this.weight = weight;
    this.power = power;
    this.tank = tank;
    this.places = places;
    }  

repeindre (color2){

if (color2 === carColor){
    console.log ('Thanks for the refreshment')
}  else{
    this.carColor = color2;
    console.log ('Great choice thanks')
      }
}
}