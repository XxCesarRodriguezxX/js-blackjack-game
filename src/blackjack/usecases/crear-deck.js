import _ from 'underscore';

/**
 *  Esta funcion crea una nueva baraja
 * @param { Array<string> } tiposDeCartas Ejemplo: ['C','D','H','S']
 * @param { Array<string> } tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns { Array<string> } retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if ( !tiposDeCartas || tiposDeCartas.length === 0 ) throw new Error('tiposDeCartas es obligatorio como un arreglo de');
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales es obligatorio como un arreglo de');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;