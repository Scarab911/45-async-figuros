const _data = require('./lib/data');
const helpers = require('./lib/helpers');
const Figura = require('./js/Figura');
const { log } = require('console');

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
    Figura.size()
    // sukuriam failus

    for (i = 0; i < figuruDydziai.length; i++) {
        const param = figuruDydziai[i];
        await _data.create('figuros', `figura-${i + 1}`, param)
    }

    // perskaitom failus ir atnaujiname


    for (i = 0; i < figuruDydziai.length; i++) {
        let figure = await _data.read('figuros', `figura-${i + 1}`)

        //objecto destrukturizacija?

        const { width, height } = helpers.parseJsonToObject(figure);

        const figureSize = Figura.size(width, height);

        let text = `figura-${width}-${height}-${figureSize}`

        const hash = helpers.hash(text)

        const parsedInfo = {
            width,
            height,
            size: figureSize,
            hash
        }
        await _data.update('figuros', `figura-${i + 1}`, parsedInfo)

    }
    const allFiles = await _data.list('figuros')
    console.log(allFiles);


    // spausdiname visus failu pavadinimus

})();
