window.addEventListener('load', function()
{
//Funcion que trae todos los elementos nota
Nota.getAll(
    function (notas)
    {
        var selectMain = document.querySelector('select');
        var bodyMain = document.querySelector('body');
        var titleInput = document.querySelector('#tituloI');
        var textArea = document.querySelector('#textarea');
        var titleSpan = document.createElement('span');          
        
        /*var  formul = document.createElement('form'); 
        var titleInput = document.createElement('input');
        var descSpan = document.createElement('span');
        var descInput = document.createElement('input');
        var btnEdit = document.createElement('button');
        var btnErase = document.createElement('button');*/

        for(var i = 0; i < notas.length; i++)
        {
        var optionMain = document.createElement('option');
            optionMain.setAttribute('value', notas[i].pk);
            optionMain.innerHTML = notas[i].titulo;
            selectMain.appendChild(optionMain);
        }


        var btnEliminar = document.querySelector('#btn_eliminar');

        btnEliminar.addEventListener('click', function()
        {
            var id = selectMain.options[selectMain.selectedIndex].value;
            if (id !== 'nulo')
            {
                Nota.delete(id);
                location.reload();
            }else{
                titleSpan.innerHTML = "Debes seleccionar una nota";
                bodyMain.appendChild(titleSpan);
            }
        }, false);

        var btnGuardar = document.querySelector('#btn_guardar');

        btnGuardar.addEventListener('click', function()
            {
                var idG = selectMain.options[selectMain.selectedIndex].value;
                if (idG !== 'nulo')
                {
                    var nuevaNota = new Nota({
                        'pk' : idG,
                        'titulo' : titleInput.value,
                        'descripcion' : textArea.value 
                    });
                    
                    nuevaNota.update();
                    location.reload();
                }else
                {
                   var nuevaNota = new Nota({
                        'pk' : '',
                        'titulo' : titleInput.value,
                        'descripcion' : textArea.value 
                    }); 

                   nuevaNota.insert();
                   //location.reload();
                   //'{"dev_id": "test", "reg_id":"abcd", "name":"test device"}'
                }
            }, false);



        selectMain.addEventListener("click", function()
            {
                var pkMain = selectMain.options[selectMain.selectedIndex].value;

                if(pkMain != 'nulo'){
                        //funcion get 
                        titleSpan.remove();
                    Nota.get(pkMain, function (notas)
                    {
                        titleInput.value = notas.titulo;
                        textArea.value = notas.descripcion;
                        /*titleSpan.setAttribute('for', 'tituloMax');
                        titleSpan.innerHTML = "Titulo: ";
                        formul.appendChild(titleSpan);

                        titleInput.setAttribute('name','tituloMax');
                        titleInput.setAttribute('value', notas.titulo);
                        titleInput.setAttribute('disabled', 'true');
                        titleSpan.appendChild(titleInput);

                        descSpan.setAttribute('for', 'descripcionM');
                        descSpan.innerHTML = "Descripcion: ";
                        formul.appendChild(descSpan);

                        descInput.setAttribute('name','descripcionM');
                        descInput.setAttribute('value', notas.descripcion);
                        descInput.setAttribute('disabled', 'true');
                        descSpan.appendChild(descInput);

                        btnEdit.setAttribute('type', 'submit');
                        btnEdit.innerHTML = "Editar";
                        formul.appendChild(btnEdit);

                        btnErase.setAttribute('type', 'submit');
                        btnErase.innerHTML = "Eliminar";
                        formul.appendChild(btnErase);

                        bodyMain.appendChild(formul);*/
                    });
                }else 
                {
                    titleInput.value = '';
                    textArea.value = '';
                    titleInput.setAttribute('placeholder', 'Titulo');
                    textArea.setAttribute('placeholder', 'Nota');
                }

            }, false); 
    }
);
}
, false);