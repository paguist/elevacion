// ejercicio 1
console.log(hello);                                   
var hello = 'world';                                 

// elevacion
var hello;
console.log(hello); // imprime undefined
hello = 'world';

// ejercicio 2-------------------------------------------------------------------
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// elevacion
function test(){
    var needle = 'magnet';
    console.log(needle); // imprime 'magnet'
}
var needle = 'haystack';
test();


// ejercicio 3----------------------------------------------------------
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// elevacion
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan); // imprime 'super cool'

// jercicio 4------------------------------------------------------------
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// elevacion
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food); // imprime 'half-chicken'
    food = 'gone';
}
var food;
food = 'chicken';
console.log(food); // imprime 'chicken'
eat();

// ejercicio 5------------------------------------------------------
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// elevacion
var mean;
mean(); // TypeError: mean is not a function
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);


// ejercicio 6---------------------------------------------
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// elevacion
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre); // imprime 'rock'
    genre = "r&b";
    console.log(genre); // imprime 'r&b'
}
var genre;
console.log(genre); // imprime undefined
genre = "disco";
rewind();
console.log(genre); // imprime 'disco'

// ejercicio 7--------------------------------------------------------
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// elevacion
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo); // imprime 'seattle'
    dojo = "burbank";
    console.log(dojo); // imprime 'burbank'
}
dojo = "san jose";
console.log(dojo); // imprime 'san jose'
learn();
console.log(dojo); // imprime 'san jose'

// ejercicio 8---------------------------------------------------------------------------------------
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // Error: Asignación a una variable constante
    }
    return dojo;
}

// elevacion
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // Error: Asignación a una variable constante
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); // imprime { name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Berkeley", 0)); // Error: Asignación a una variable constante


