function mash(){
    home="You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids";
    return home;
}

answer=mash()
console.log(answer)

function getHome(){
    homes = ["Mansion", "Apartment", "Shack", "House", process.argv[2]];
    let pick = Math.random() * homes.length;
    let integer = Math.floor(pick);
    return homes[integer];
}

let getHomes = getHome();
//console.log(getHomes);

function getChildrenCount(){
    let children = Math.random();
    const times101 = children * 5;
    const final = Math.floor(times101); 
    Math.floor(Math.random() * 2) + 1
     return final

}

getChildrenCount();

