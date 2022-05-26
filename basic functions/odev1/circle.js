function circleArea(radius) {
    let pi = 3.14;
    let sonuc = pi*(radius**2);
    return sonuc;
}

function circleCircumference(radius) {
    let sonuc = radius**2;
    return sonuc;
}

module.exports = {
    circleArea,
    circleCircumference
};