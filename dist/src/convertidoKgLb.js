'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ConvertidorKgLb;
function ConvertidorKgLb() {
	var opcion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kg';
	var cantidad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	var MULT_LB_A_KG = 0.453592;
	var MULT_KG_A_LB = 2.20462;

	if (opcion == 'kg') {
		multiplicador = MULT_LB_A_KG;
		console.log('Se eligió convertir a kilogramos');
	} else if (opcion == 'lb') {
		multiplicador = MULT_KG_A_LB;
		console.log('Se eligió convertir a libras');
	} else {
		console.log("La opcion ingresada es incorrecta, debe poner 'kg' para convertir a kilos o 'lb' para convertir a libras");
	}

	return cantidad * multiplicador;
}