const huiswerkMaken = (vak, callback) => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} maken`); // ${string interpolation} put variables etc inside string 
    setTimeout(() => {
        callback();
    }, 3000);    
};

const klaarMetHuisWerk = () => {
    console.log('Kijk moeders, ik ben klaar met mijn huiswerk');
}

huiswerkMaken('wiskunde', klaarMetHuisWerk);