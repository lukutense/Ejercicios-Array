/* Ejercicio con Arrays */

let obtenerChatStatus = (usuarias)=>{

    let nombreUsuaria1 = ''
    let nombreUsuaria2 = ''
    
        if(usuarias.length == 1) {
            nombreUsuaria1 = usuarias 
            console.log (nombreUsuaria1 + ' está conectada')
        } else if (usuarias.length == 2) {
            nombreUsuaria1 = usuarias[0]
            nombreUsuaria2 = usuarias[1]
            console.log (nombreUsuaria1 + ' y ' + nombreUsuaria2 + ' están conectadas')
        } else if (usuarias.length == 3) {
            nombreUsuaria1 = usuarias[0]
            nombreUsuaria2 = usuarias [1]
            console.log(nombreUsuaria1 + ', ' + nombreUsuaria2 + ' y ' + (usuarias.length - 2) + ' personas más están conectadas')
        }
    
    }
    
    obtenerChatStatus(['Ada'])
    
    obtenerChatStatus(['Ada','Grace'])
    
    obtenerChatStatus(['Ada','Grace', 'Marie']) 
    
    
    
    
    
    /* Ejercicio N2 de Arrays */

    let esMatrizCuadrada=(matrices)=> {
        
        if ((matrices[0].length == matrices[1].length) && (matrices[0].length == matrices[2].length)){
            console.log('true')
        } else {
            console.log('false')
        }
    
    }
    
    
    esMatrizCuadrada([[4,5],[2,7,1],[8,10]])
    
    esMatrizCuadrada([[4,5,9],[2,7,1],[8,10,5]])