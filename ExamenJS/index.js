

const selectCentros = document.getElementById('selectCentros');
const centroSeleccionado = document.getElementById('centroSeleccionado');
const nuevoCentro = document.getElementById('nuevoCentro');

let listaCentros = [];

const setListaCentros = async () =>{
    try{
        const response = await axios.get(
        `http://localhost:3000/Centros/`,
        );
        response.data.map(x=>{
          let opt = document.createElement('option');
          opt.value = x.nombre;
          opt.innerHTML = x.nombre;
          selectCentros.appendChild(opt);
        });
     }
  catch(e){
    console.log(e);
  }
}

window.addEventListener('DOMContentLoaded', ()=>{
    setListaCentros();  
})

selectCentros.addEventListener('click', ()=>{
  centroSeleccionado.innerHTML = selectCentros.value;
})

nuevoCentro.addEventListener('keypress', async (e)=>{
  if(e.key === 'Enter'){
    try {
      await axios.post(
          `http://localhost:3000/Centros/`, {
            nombre: nuevoCentro.value,
      })
      let opt = document.createElement('option');
      opt.value = nuevoCentro.value;
      opt.innerHTML = nuevoCentro.value;
      selectCentros.appendChild(opt);      
      nuevoCentro.value = '';
    }
    catch(e){
      console.log(e)
    }
  }
})