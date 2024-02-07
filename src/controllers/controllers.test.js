const {turnoController, obraSocialController} = require("./Index");
const ObraSocial = require('../models/ObraSocial')



test('Juego de perdedor', () => {
    let OS= new ObraSocial  ;
    OS = await obraSocialController.getObraSocial("62dc6b30294deeae93787cef");


    const nombre = OS.nombre;
    expect(nombre).toBe('Osde 720');
});

// Prueba para un juego de todos 1
test('Juego de todos 1', () => {
    const juego = new Juego();

    for (let tiro = 0; tiro < 20; tiro++) {
        juego.tirar(1); // El jugador derriba 1 pin en cada tiro
    }

    const puntuacion = juego.puntuacion();
    expect(puntuacion).toBe(20);
});

test('Juego con al menos un Spare', () => {
    const juego = new Juego();

    juego.tirar(5); // Frame 1, lanzamiento 1: Se derriban 5 pinos
    juego.tirar(5); // Frame 1, lanzamiento 2: Se derriban 5 pinos (Spare)
    juego.tirar(3); // Frame 2, lanzamiento 1: Se derriban 3 pinos
    juego.tirar(5);

    const puntuacion = juego.puntuacion();
    expect(puntuacion).toBe(21);
});