

// var word = "bottles";
// var count = 99;

// while (count > 0) {
//     console.log(count + " " + word + " of beer on the wall");
//     console.log(count + " " + word + " of beer");
//     console.log("Take one down, pass it around");
//     count--;
    
//     if (count > 0) {
//         console.log(count + " " + word + " of beer on the wall");
//     } else {
//         console.log("No more" + " " + word + " of beer on the wall");
//     }
// }




// function woof(name, weight) {
//     if (weight > 20) {
//         console.log(name + " goes WOOF WOOF");
//     } else {
//         console.log(name + " goes woof woof");
//     }
// };

// woof("sparky", 44);
// woof("rover", 22);
// woof("rex", 33);
// woof("melinda", 13);


// function doIt(param) {
//     param = 2;
// }

// var test = 3;
// doIt(test);
// console.log(test);



// function clunk(times) {
//     var num = times;
//     while (num > 0) {
//         display("clunk");
//         num--;
//     }
// }

// function thingamajig(size) {
//     var facky = 1;
//     clunkCounter = 0;
//     if (size == 0) {
//         display("clank");
//     } else if (size == 1) {
//         display("thunk");
//     } else {
//         while (size > 1) {
//             facky *= size;
//             size--;
//         }
//         clunk(facky);
//     }
// }

// function display(output) {
//     console.log(output);
//     clunkCounter = clunkCounter + 1;
// }

// var clunkCounter = 0;
// thingamajig(5);
// console.log(clunkCounter);


// var book = {
    
//     author: "Jordan B. Peterson",
//     title: "12 Rules for Life",
//     year: 2018,
//     publisher: "Penguin Random House",
//     bestseller: true 



// };

// console.log(book);

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

var chevy = {
    make: "Chevy",
    model:"Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

var worthAlook = prequal(taxi);

if (worthAlook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}

var worthAlook = prequal(cadi);

if (worthAlook) {
    console.log("You gotta check out this " + cadi.make + " " + cadi.model);
} else {
    console.log("You should really pass on the " + cadi.make + " " + cadi.model);
}

var worthAlook = prequal(fiat);

if (worthAlook) {
    console.log("You gotta check out this " + fiat.make + " " + fiat.model);
} else {
    console.log("You should really pass on the " + fiat.make + " " + fiat.model);
}

var worthAlook = prequal(chevy);

if (worthAlook) {
    console.log("You gotta check out this " + chevy.make + " " + chevy.model);
} else {
    console.log("You should really pass on the " + chevy.make + " " + chevy.model);
}