import * as services from './app/services/index.mjs';
main();

function main() {
    let prueba = services.prueba();
    console.log(prueba);
}