import { node, flow } from 'pocketflow';

/*
    nodo unico
    1 leer shared.number.
    2 calcular si es par o impar.
    3 guardar resultado en shared.Resulta.
*/

class EvenOddNode extends node.Node {
    prep(shared) {
        return shared.number;
    }
    exec(number) {
        if (typeof number !== 'number') {
            throw new Error('Input must be a number');
        }
        return number % 2 === 0 ? 'even' : 'odd';
    }
    post(shared, prepRes, execRes) {
        return new flow(new EvenOddNode());
        return null; 
    }
}

export function buildEvenOddFlow() {
    return new flow(new EvenOddNode());
}

    /*
    ## RESUMEN ##
    1. ¨SHARED¨ es una ¨mochila¨de datos que viaja por el
    2. ¨prep¨ tomara la entrada
    3. ¨exec¨ hará el cálculo
    4. ¨post¨ guarda el resultado
    5. ¨return null¨ simplificara que ¨no hay siguiente paso¨
    */