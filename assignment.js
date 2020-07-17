// feetToMile
function feetToMile(feet){
    if(feet>0){
    mile= feet*0.00018939393;
    return mile;
    }
    else{
        return "distan cannot be negative"
    }
}
var howManyMile= feetToMile(20);
console.log(howManyMile);
var howManyMile= feetToMile(-1);
console.log(howManyMile);
// woodCalculator
function woodCalculator(chair,table,bed){
    totalWoodNedded = chair*1+table*3+bed*5;
    return totalWoodNedded;
}
var howManyWoodNedded = woodCalculator(5,3,5);
console.log(howManyWoodNedded);

// brickCalculator
function brickCalculator(floorsNumber){
    if(floorsNumber<=10){
        bricksneeded = floorsNumber*15;
        return bricksneeded;
    }
    else if(10<floorsNumber && floorsNumber<=20){
        bricksneeded = floorsNumber*12;
        return bricksneeded;
    }
    else{
        bricksneeded = floorsNumber*10;
        return bricksneeded;
    }
}

var bricks = brickCalculator(10);
console.log(bricks);

// tinnyFriend
friends=["kolimullah","solimullah","jack","rose","joe"];
littleFriend = friends[0];
function tinnyFriend(friends){
    for(var i=0;i<friends.length;i++){
        var name = friends[i];
       
       if(name.length<littleFriend.length){
           littleFriend=name;
           
        }

    }
    return littleFriend;
}
var result = tinnyFriend(friends);
console.log(result);