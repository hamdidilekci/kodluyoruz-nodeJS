const fs = require("fs");

// ************  CREATE ****************
function myWriteFile(filename,data) {
    fs.writeFileSync(filename, data, 'utf8', (err) => {
        if (err) throw err;
    });
};


// ************  READ ****************
function myReadJsonFile(filename) {
    return  JSON.parse( fs.readFileSync(filename, 'utf8') ); 
};

// ************  UPDATE DATA  ****************
function myUpdateAge(filename,age) {
    
    let data = myReadJsonFile(filename);
    data.age = age;
    myWriteFile( filename, JSON.stringify(data) ) 

};


// ************  DELETE FİLE  ****************

function myDeleteFile(filename) {
    fs.unlink(filename, (err) => {
        if (err) throw err;
        console.log(`${filename} was deleted`);
      });
};


  myWriteFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}');
  myReadJsonFile('employees.json');
  myUpdateAge('employees.json', 32);
  myDeleteFile('employees.json');
