const _data = require('./lib/data');
const helpers = require('./lib/helpers');
const Figura = require('./js/Figura');

(async () => {

    const figuruDydziai = Figura.randomFiguros(5);
    /*
    [
        {width: 5, height: 4},
        {width: 2, height: 3},
        {width: 2, height: 7},
        {width: 1, height: 1},
        {width: 8, height: 6},
    ]
    */
    console.log(figuruDydziai);
    // sukuriam failus

    for (i = 0; i < figuruDydziai.length; i++) {
        const param = figuruDydziai[i];
        await _data.create('figuros', `figura-${i + 1}`, param)
    }

    // perskaitom failus ir atnaujiname

    for (i = 0; i < figuruDydziai.length; i++) {

    }

    // spausdiname visus failu pavadinimus

})();
