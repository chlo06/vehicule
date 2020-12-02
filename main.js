class vehicule{

    constructor(){
    
    let color2 = parseInt (prompt ('Choose a color'))
    const immat = 'FC501MM';
    const carColor = 'Rose';
    const weight = parseInt (550);
    const power = 110;
    const tank = 60;
    let gas = 5.0;
    const places = 5;
    let assur = false;
    let dashBoard = " Welcome ";
    }
    car (){
        return `${immat},${carColor},${weight},${power},${tank},${gas},${places},${assur},${dashBoard}`
    }
}
console.log(carColor.car());


if (color2 != carColor){
    console.log ('Thanks for the refreshment')
}  else{
    console.log ('Great choice thanks')
      }
    

