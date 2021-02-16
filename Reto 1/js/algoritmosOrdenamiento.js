function burbujaAscendente(array){
    let aux=0;
 for( let i=0;i<array.length;i++){
     for(let j=0;j<array.length;j++){
         if(array[j]>array[j+1]){
          aux=array[j+1];
          array[j+1]=array[j];
          array[j]=aux;
         }
     }
 }
 return arrayOrden;
}

function seleccionAscendente(array){
    const swap=(array,idx1,idx2) =>{
        ([array[idx1],array[idx2]]=[array[idx1],array[idx1]]);
        for(let i=0;i<array.length;i++){
            let posicionValMenTemp=i;
            for(let j=i+1;j<array.length;j++){
                if(array[posicionValMenTemp]>array[j]){
                    posicionValMenTemp=j;

                }
                
            }
            if(i != posicionValMenTemp){
                swap(array,i,posicionValMenTemp);
            }
           
        }
    
    }
    return array;
}

function insercionAsendente(array){
    let posicionActual;
    for(let i=1;i<array.length;i++){
        posicionActual=array[i];
        let j=0;
        for( j=i-1;j >=0 && array[j]>posicionActual;j--){
            array[j+1]=array[j];
        }
        array[j+1] =posicionActual;
    }
    return array;
}

function burbujaDescendente(array){
    let aux=0;
 for( let i=0;i<array.length;i++){
     for(let j=0;j<array.length;j++){
         if(array[j]<array[j+1]){
          aux=array[j+1];
          array[j+1]=array[j];
          array[j]=aux;
         }
     }
 }
 return array;
}

function seleccionDescendente(array){
    for(let i=0;i<(array.length)-1;i++){
        min=i;
        for(j=i+1;j<(array.length)+1;j++){
            if(array[j]>array[min]){
                min=j;
            }
        }
   }
   return array;
}

function insercionDesendente(array){
    let posicionActual;
    for(let i=1;i<array.length;i++){
        posicionActual=array[i];
        let j=0;
        for( j=i-1;j >=0 && array[j]<posicionActual;j--){
            array[j+1]=array[j];
        }
        array[j+1] =posicionActual;
    }
    return array;
}



let arregloFamilia = new Array();
let arregloDeportes = new Array();
let arregloProfesiones = new Array();
let n=0;

arregloFamilia[n]=Math.floor((Math.random()*6)+1);
arregloDeportes[n]=Math.floor((Math.random()*6)+1);
arregloProfesiones[n]=Math.floor((Math.random()*6)+1);


/* llenar con numeros aleatorios */
for (var i = 1; i < 6; i++) {
    arregloFamilia[i] = Math.floor((Math.random()*6)+1);
    for (var j = 0; j < i; j++) {
        if (arrayFamilia[i]==arrayFamilia[j]) {
            i--;
        }
    }
}

for (var i = 1; i < 6; i++) {
    arregloDeportes[i] = Math.floor((Math.random()*6)+1);
    for (var j = 0; j < i; j++) {
        if (arrayFamilia[i]==arrayFamilia[j]) {
            i--;
        }
    }
}

for (var i = 1; i < 6; i++) {
    arregloProfesiones[i] = Math.floor((Math.random()*6)+1);
    for (var j = 0; j < i; j++) {
        if (arrayFamilia[i]==arrayFamilia[j]) {
            i--;
        }
    }
}
/* -------------------------------------------------------------- */

function insertarImagen(){

    let seleccionGrupo=document.getElementById("select").value;

    if(seleccionGrupo=== "1"){
        for(var i=0;i<arregloFamilia.length;i++){
            let pasos1= `img/familia/${arregloFamilia[i]}.png`;
            document.getElementById(`img${i}`).src = pasos1;
        }
    }else if ( seleccionGrupo === "2"){
        for(var i=0;i<arregloDeportes.length;i++){
            let pasos2= `img/deportes/${arregloDeportes[i]}.png`;
            document.getElementById(`img${i}`).src = pasos2;
        }  
    }else if ( seleccionGrupo === "3"){
        for(var i=0;i<arregloProfesiones.length;i++){
            let pasos3= `img/profesiones/${arregloProfesiones[i]}.png`;
            document.getElementById(`img${i}`).src = pasos3;
        }   
    }
}

function ordenar(){
let algoritmo =  document.getElementById("algortimoSeleccionado").value;
let grupoImagenes=document.getElementById("select").value;
if((algoritmo==="1")&&(document.getElementById("tipoOrden1").checked)){
    
    switch(grupoImagenes){
        case 1:
            burbujaDescendente(arregloFamilia);
            for(let i=0;i<arregloFamilia.length;i++){
                let pasos1=`img/familia/${arregloFamilia[i]}.png`;
                document.getElementById(`img${i}`).src = pasos1;
            }
            break;
        
        case 2: 
        burbujaDescendente(arregloDeportes);
        for(let i=0;i<arregloDeportes.length;i++){
            let pasos2=`img/deportes/${arregloDeportes[i]}.png`;
            document.getElementById(`img${i}`).src = pasos2;
        }
        break;
        
        case 3:
            burbujaDesendente(arregloProfesiones);
            for(let i=0;i<arregloProfesiones.length;i++){
                let pasos3=`img/familia/${arregloProfesiones[i]}.png`;
                document.getElementById(`img${i}`).src = pasos3;
            }
            break;
    }
}else if((algoritmo==="1")&&(document.getElementById("tipoOrden2").checked)){
    switch(grupoImagenes){
        case 1:
            burbujaAscendente(arregloFamilia);
            for(let i=0;i<arregloFamilia.length;i++){
                let pasos1=`img/familia/${arregloFamilia[i]}.png`;
                document.getElementById(`img${i}`).src = pasos1;
            }
            break;
        
        case 2: 
        burbujaAscendente(arregloDeportes);
        for(let i=0;i<arregloDeportes.length;i++){
            let pasos1=`img/deportes/${arregloDeportes[i]}.png`;
            document.getElementById(`img${i}`).src = pasos2;
        }
        break;
        
        case 3:
            burbujaAscendente(arregloDeportes);
            for(let i=0;i<arregloDeportes.length;i++){
                let pasos3=`img/profesiones/${arregloDeportes[i]}.png`;
                document.getElementById(`img${i}`).src = pasos3;
            }
            break;

    }
}else if((algoritmo==="2")&&(document.getElementById("tipoOrden1").checked)){
    switch(grupoImagenes){
        case 1:
            seleccionDescendente(arregloFamilia);
            for(let i=0;i<arregloFamilia.length;i++){
                let pasos1=`img/familia/${arregloFamilia[i]}.png`;
                document.getElementById(`img${i}`).src = pasos1;
            }
            break;
        
        case 2: 
        seleccionDescendente(arregloDeportes);
        for(let i=0;i<arregloDeportes.length;i++){
            let pasos2=`img/deportes/${arregloFamilia[i]}.png`;
             document.getElementById(`img${i}`).src = pasos2;
        }
        break;
        
        case 3:
            seleccionDescendente(arregloProfesiones);
            for(let i=0;i<arregloProfesiones.length;i++){
                let pasos3=`img/profesiones/${arregloProfesiones[i]}.png`;
                document.getElementById(`img${i}`).src = pasos3;
            }
            break;
    }
}else if((algoritmo==="2")&&(document.getElementById("tipoOrden2").checked)){
    switch(grupoImagenes){
        case 1:
            seleccionAscendente(arregloFamilia);
            for(let i=0;i<arregloFamilia.length;i++){
                let pasos1=`img/familia/${arregloFamilia[i]}.png`;
                document.getElementById(`img${i}`).src = pasos1;
            }
            break;
        
        case 2: 
        seleccionAscendente(arregloDeportes);
        for(let i=0;i<arregloDeportes.length;i++){
            let pasos2=`img/deportes/${arregloDeportes[i]}.png`;
            document.getElementById(`img${i}`).src = pasos2;
        }
        break;
        
        case 3:
            seleccionAscendente(arregloProfesiones);
            for(let i=0;i<arregloProfesiones.length;i++){
                let pasos3=`img/profesionales/${arregloProfesiones[i]}.png`;
                document.getElementById(`img${i}`).src = pasos3;
            }
            break;

    }
}else if((algoritmo==="3")&&(document.getElementById("tipoOrden1").checked)){
    switch(grupoImagenes){
        case 1:
            insercionDesendente(arregloFamilia);
            for(let i=0;i<arregloFamilia.length;i++){
                let pasos1=`img/familia/${arregloFamilia[i]}.png`;
                document.getElementById(`img${i}`).src = pasos1;
            }
            break;
        
        case 2: 
        insercionDesendente(arregloDeportes);
        for(let i=0;i<arregloDeportes.length;i++){
            let pasos2=`img/deportes/${arregloDeportes[i]}.png`;
            document.getElementById(`img${i}`).src = pasos2;
        }
        break;
        
        case 3:
            insercionDesendente(arregloProfesiones);
            for(let i=0;i<arregloProfesiones.length;i++){
                let pasos3=`img/profesiones/${arregloProfesiones[i]}.png`;
                document.getElementById(`img${i}`).src = pasos3;
            }
            break;
    }   
}else if((algoritmo==="3")&&(document.getElementById("tipoOrden2").checked)){
    switch(grupoImagenes){
        case 1:
            insercionAsendente(arregloFamilia);
            for(let i=0;i<arregloFamilia.length;i++){
                let pasos1=`img/familia/${arregloFamilia[i]}.png`;
                document.getElementById(`img${i}`).src = pasos1;
            }
            break;
        
        case 2: 
        insercionAsendente(arregloDeportes);
        for(let i=0;i<arregloDeportes.length;i++){
            let pasos2=`img/deportes/${arregloDeportes[i]}.png`;
            document.getElementById(`img${i}`).src = pasos2;
        }
        break;
        
        case 3:
            insercionAsendente(arregloProfesiones);
            for(let i=0;i<arregloProfesiones.length;i++){
                let pasos3=`img/profesiones/${arregloProfesiones[i]}.png`;
                document.getElementById(`img${i}`).src = pasos3;
            }
            break;
    }   
}
}