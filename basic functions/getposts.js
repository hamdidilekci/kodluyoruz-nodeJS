// ------ callback ---------

/*
let users = [
    {
        name : "Hamdi DILEKCI",
        age : "32",
        job : "web developer"
    },
    {
        name : "Muhammed Ali DILEKCI",
        age : "24",
        job : "web developer"
    },
    {
        name : "Elif Sare DILEKCI",
        age : "5",
        job : "no job"
    }
];


function listUsers() {
   users.map(person => {
    console.log(person.name);
    })
}  

function addUser(employee, callback) {
    users.push(employee);
    callback();
}

addUser({name :"Ozlem Defne DILEKCI", age : "0", job : "no job"},listUsers);
*/

// -------- promise ---------

/*
let users = [
    {
        name : "Hamdi DILEKCI",
        age : "32",
        job : "web developer"
    },
    {
        name : "Muhammed Ali DILEKCI",
        age : "24",
        job : "web developer"
    },
    {
        name : "Elif Sare DILEKCI",
        age : "5",
        job : "no job"
    }
];


function listUsers() {
   users.map(person => {
    console.log(person.name);
    })
}  

function addUser(employee) {

    const promise1 = new Promise((resolve, reject) => {
        users.push(employee);
        resolve(employee);
        reject("cannt added new employee");
    })

    return promise1;
    
};

addUser({name :"Ozlem Defne DILEKCI", age : "0", job : "no job"})
.then(() => {
    console.log("*** new users ***");
    listUsers();
}).catch(error => {
    console.log(error);
});
*/

// -------- async / await --------

let users = [
    {
        name: "Hamdi DILEKCI",
        age: "32",
        job: "web developer"
    },
    {
        name: "Muhammed Ali DILEKCI",
        age: "24",
        job: "web developer"
    },
    {
        name: "Elif Sare DILEKCI",
        age: "5",
        job: "no job"
    }
];


function listUsers() {
    users.map(person => {
        console.log(person.name);
    })
}

function addUser(employee) {

    const promise1 = new Promise((resolve, reject) => {
        users.push(employee);
        resolve(employee);
        reject("cannt added new employee");
    })

    return promise1;

};

async function showUser() {
    try {
        await addUser({ name: "Ozlem Defne DILEKCI", age: "0", job: "no job" });
        console.log("*** new users ***");
        listUsers();
    } catch (error) {
        console.log(error);
    }
};

showUser();

