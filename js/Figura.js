class Figura {
    static randomFiguros(amount) {
        let meassurements = [];
        for (let i = 1; i <= amount; i++) {

            meassurements.push({ width: Figura.random(), height: Figura.random() })
        }
        return meassurements
    }

    static size(width, height) {
        return width * height;
    }
    static random() {
        return Math.floor(Math.random() * 10) + 1;
    }
}

module.exports = Figura;