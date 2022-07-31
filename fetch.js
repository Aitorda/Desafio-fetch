
//DESAFIO FETCH, primer caso sin await y segundo caso con await


//PRIMER CASO
 const lista = document.getElementById("lista");

fetch ("./data.json")
.then(respuesta => respuesta.json())
.then(departamentos => {
    departamentos.forEach(departamento =>{
        const li =document.createElement(`li`);
        li.innerHTML=`
        <h2>${departamento.nombre}</h2>
        <p>El precio por noche es de $${departamento.precio}</p>
        <p>Cuenta con una capacidad para ${departamento.cantidadPersonas} personas.</p>
        <p>El departamento seleccionado ${departamento.cochera}</p>
        <hr/>

        `;
        lista.append (li);
    })

    
}).catch (error => console.log(error));



// SEGUNDO CASO

const alquileres = async () => {
    try {
        const respuesta = await fetch("./data.json");
        const departamentos = await respuesta.json ();

        departamentos.forEach(departamento =>{
            const li =document.createElement(`li`);
            li.innerHTML=`
                <h2>${departamento.nombre}</h2>
                <p>El precio por noche es de $${departamento.precio}</p>
                <p>Cuenta con una capacidad para ${departamento.cantidadPersonas} personas.</p>
                <p>El departamento seleccionado ${departamento.cochera}</p>
                <hr/>
            `;
            lista.append (li);
        })
        } catch (error){
        console.log(error);
        }  

}
alquileres ();

