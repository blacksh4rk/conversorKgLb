export default function ConvertidorKgLb (opcion='kg',cantidad=1){
	const MULT_LB_A_KG=0.453592
	const MULT_KG_A_LB=2.20462
	
	if(opcion=='kg'){
		multiplicador=MULT_LB_A_KG
		console.log('Se eligió convertir a kilogramos')
	}else if(opcion=='lb'){
		multiplicador=MULT_KG_A_LB
		console.log('Se eligió convertir a libras')
	}else{
		console.log("La opcion ingresada es incorrecta, debe poner 'kg' para convertir a kilos o 'lb' para convertir a libras")	
	}

	return cantidad*multiplicador
}