
let pi = 3.14;
let r = process.argv[2]*1

function areaCalc(radius) {
    let area = (radius**2)*pi
    return area;
}

console.log(`Yarıçapı ${r} olan dairenin alanı: ${areaCalc(r)} `);
