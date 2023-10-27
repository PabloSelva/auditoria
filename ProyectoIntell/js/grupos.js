

       //funcion del menu del ususario
   document.addEventListener("DOMContentLoaded", function () {
       const userIcon = document.querySelector(".user-icon");
       const userMenu = document.querySelector(".dropdown-menu");
       const customizeOption = document.getElementById("customize");
       const colorPicker = document.getElementById("colorPicker");
       const header = document.querySelector("header");
       const companyName = localStorage.getItem("companyName");
  
       // Verifica si hay un nombre de empresa almacenado en localStorage
       const storedCompanyName = localStorage.getItem("companyName");

       // Verifica si el elemento con ID "companyName" existe
       const companyNameElement = document.getElementById("companyName");

       if (storedCompanyName && companyNameElement) {
           // Actualiza el contenido de <h1> con el nombre de la empresa almacenado
           companyNameElement.textContent = storedCompanyName;
       }



       //icono del menu del ususario
       userIcon.addEventListener("click", function () {
           if (userMenu.style.display === "block") {
               userMenu.style.display = "none";
           } else {
               userMenu.style.display = "block";
           }
       });

       // darle clicl fuera del menu del usuario para cerrarlo
       document.addEventListener("click", function (e) {
           if (!userMenu.contains(e.target) && e.target !== userIcon) {
               userMenu.style.display = "none";
           }
       });

        // Mostrar el cuadro de diálogo de color cuando se hace clic en "Personalizar"
       customizeOption.addEventListener("click", function () {
           colorPicker.click();
        });

        // Cambiar el color de fondo del encabezado cuando se selecciona un color
       colorPicker.addEventListener("input", function () {
           const selectedColor = colorPicker.value;
           header.style.backgroundColor = selectedColor;
       });

       ///////////js para cajas contenedoras////////
       addSpaceBtn.addEventListener("click", function () {
       const spaceName = spaceNameInput.value;

       // Crear una nueva caja cuadrada
       const newBox = document.createElement("div");
       newBox.classList.add("caja");
      // newBox.textContent = spaceName;

      // Crear un botón para abrir el menú de opciones
       const menuButton = document.createElement("button");
       menuButton.classList.add("menu-button");
       menuButton.textContent = "⋮"; // Puedes ajustar el contenido del botón

       // Agregar el botón al comienzo de la caja
       newBox.appendChild(menuButton);

       // Crear un menú de contexto personalizado
const contextMenu = document.createElement("div");
contextMenu.classList.add("context-menu");
contextMenu.style.display = "none"; // Inicialmente, el menú está oculto

// Agregar las opciones al menú
const changeNameOption = document.createElement("div");
changeNameOption.textContent = "Cambiar nombre";
changeNameOption.addEventListener("click", () => {
// Lógica para cambiar el nombre de la caja
// Puedes mostrar un cuadro de diálogo o un campo de entrada de texto aquí
contextMenu.style.display = "none"; // Ocultar el menú después de hacer clic
});
contextMenu.appendChild(changeNameOption);

//Boton de eliminar grupo
const deleteOption = document.createElement("div");
deleteOption.textContent = "Eliminar";

deleteOption.addEventListener("click", () => {
    // Mostrar la ventana modal de confirmación para eliminar
    const deleteConfirmationModal = document.getElementById("deleteConfirmationModal");
    deleteConfirmationModal.style.display = "block";

    // Ocultar el menú de contexto
    contextMenu.style.display = "none";
    
});

// Agregar ventana modal de confirmación
const deleteConfirmationModal = document.getElementById("deleteConfirmationModal");
const confirmDeleteBtn = document.getElementById("confirmDelete");
const cancelDeleteBtn = document.getElementById("cancelDelete");

// Evento de clic para el botón "Eliminar"
deleteOption.addEventListener("click", () => {
    // Mostrar la ventana modal de confirmación para eliminar
    deleteConfirmationModal.style.display = "block";

    // Ocultar el menú de contexto
    contextMenu.style.display = "none";
});

// Evento de clic para el botón "Aceptar" en la ventana modal de confirmación
confirmDeleteBtn.addEventListener("click", () => {
    // Lógica para eliminar el espacio aquí
    // Puedes eliminar la caja o realizar cualquier acción necesaria

    // Ocultar la ventana modal de confirmación después de eliminar
    deleteConfirmationModal.style.display = "none";
});

// Evento de clic para el botón "Cancelar" en la ventana modal de confirmación
cancelDeleteBtn.addEventListener("click", () => {
    // Ocultar la ventana modal de confirmación sin eliminar
    deleteConfirmationModal.style.display = "none";
});






// botón "Eliminar" al menú de contexto después de crearlo
contextMenu.appendChild(deleteOption);


// Agregar el menú de contexto a la caja
newBox.appendChild(contextMenu);

// Función para ocultar el menú de contexto
function hideContextMenu() {
contextMenu.style.display = "none";
// Eliminar el evento de clic en el documento después de ocultar el menú
document.removeEventListener("click", hideContextMenu);
}



       // Agregar un evento de clic al botón de menú
       menuButton.addEventListener("click", (event) => {
           event.stopPropagation(); // Evita que el clic en el botón se propague y cierre la caja
           contextMenu.style.display = "block";
           document.addEventListener("click", hideContextMenu);
   
       });

       // Agrega un evento de clic a la opción "Cambiar nombre" del menú
changeNameOption.addEventListener("click", (e) => {
// Mostrar la ventana modal al hacer clic en "Cambiar nombre"
const nameChangeModal = document.getElementById("nameChangeModal");
nameChangeModal.style.display = "block";

// Evitar que se propague el clic al menú de contexto
e.stopPropagation();
});

// Agregar un evento de clic al botón de cierre de la ventana modal
const nameChangeModalClose = document.getElementById("nameChangeModalClose");
nameChangeModalClose.addEventListener("click", () => {
// Ocultar la ventana modal al hacer clic en el botón de cierre
const nameChangeModal = document.getElementById("nameChangeModal");
nameChangeModal.style.display = "none";
});

// Agregar un evento de envío al formulario de cambio de nombre
const nameChangeForm = document.getElementById("nameChangeForm");
nameChangeForm.addEventListener("submit", (event) => {
event.preventDefault();
// Obtener el nuevo nombre del espacio desde el campo de entrada
const newName = document.getElementById("newName").value;
// Realizar la lógica para cambiar el nombre del espacio con el nuevo nombre (puedes adaptar esto a tu aplicación)

// Ocultar la ventana modal después de cambiar el nombre
const nameChangeModal = document.getElementById("nameChangeModal");
nameChangeModal.style.display = "none";
});

       

      // Crear un párrafo para el nombre y agregarlo a la caja
       const nameParagraph = document.createElement("p");
       nameParagraph.textContent = spaceName;
       newBox.appendChild(nameParagraph);

       // Crear un campo de entrada de texto oculto
       const editInput = document.createElement("input");
       editInput.type = "text";
       editInput.classList.add("edit-input");
       editInput.style.display = "none";
       newBox.appendChild(editInput);

       // Agregar la nueva caja al contenedor
       cajasContainer.appendChild(newBox);

       // Limpiar el input
       spaceNameInput.value = "";
       });

       // Función para enfocar el campo de entrada
        function focusSpaceNameInput() {
           spaceNameInput.focus();
       }

       // Abrir el modal al hacer clic en el botón "Agregar"
       openModalBtn.addEventListener("click", function() {
           modal.style.display = "block";
           focusSpaceNameInput();
       });
       
       
   });

       //funcion dl boton de seleccioanr logo
   document.addEventListener("DOMContentLoaded", function () {
       const logoInput = document.getElementById("logoInput");
       const logoImage = document.getElementById("logoImage");

       logoInput.addEventListener("change", function () {
       const file = logoInput.files[0];
           if (file) {
               const reader = new FileReader();

               reader.onload = function (e) {
               logoImage.src = e.target.result;
               logoImage.style.display = "block";
               };

               reader.readAsDataURL(file);
           }
        });
   });

       // Obtener referencias a los elementos del DOM
       const modal = document.getElementById("myModal");
       const openModalBtn = document.getElementById("openModal");
       const closeModalBtn = document.getElementsByClassName("close")[0];
       const cancelBtn = document.getElementById("cancel");
       const spaceForm = document.getElementById("spaceForm");
       const addSpaceBtn = document.getElementById("addSpace");
       const spaceNameInput = document.getElementById("spaceName");
       const cajasContainer = document.getElementById("cajas-container");
       const addMembersModalBtn = document.getElementById("addMembersModal");
       const membersModal = document.getElementById("membersModal");
       const addMemberForm = document.getElementById("addMemberForm");
       const memberEmailInput = document.getElementById("memberEmail");
       const memberFirstNameInput = document.getElementById("memberFirstName");
       const memberLastNameInput = document.getElementById("memberLastName");
       const memberMaidenNameInput = document.getElementById("memberMaidenName");
       const memberPhoneInput = document.getElementById("memberPhone");
       const addMemberBtn = document.getElementById("addMember");
       const cancelAddMemberBtn = document.getElementById("cancelAddMember");
       const membersModalClose = document.getElementById("membersModalClose");

      

       // Función para habilitar o deshabilitar el botón "Agregar" según el contenido del campo
       function toggleAddButton() {
           if (spaceNameInput.value.trim() !== "") {
               addSpaceBtn.disabled = false;
           } else {
               addSpaceBtn.disabled = true;
           }
       }

       // Escuchar los cambios en el campo de entrada
       spaceNameInput.addEventListener("input", toggleAddButton);

       // Cuando se abre el modal, asegurarse de que el botón "Agregar" esté deshabilitado inicialmente
       openModalBtn.addEventListener("click", function() {
           modal.style.display = "block";
           spaceNameInput.value = ""; // Limpiar el campo
           toggleAddButton(); // Llamar a la función para asegurarse de que el botón esté en el estado correcto
           focusSpaceNameInput(); // Enfocar el campo de entrada
       });


       // Cerrar el modal al hacer clic en la "x" o en el botón "Cancelar"
       closeModalBtn.addEventListener("click", function() {
           modal.style.display = "none";
       });

       cancelBtn.addEventListener("click", function() {
           modal.style.display = "none";
       });

       // Cerrar el modal si el usuario hace clic fuera de él
       window.addEventListener("click", function(event) {
           if (event.target === modal) {
               modal.style.display = "none";
           }
       });

       // Capturar el envío del formulario
       spaceForm.addEventListener("submit", function(event) {
           event.preventDefault(); // Prevenir el envío del formulario (por defecto)
           
           // Aquí se agrega código para procesar el formulario, por ejemplo:
           const spaceName = document.getElementById("spaceName").value;
           console.log("Nombre del Espacio:", spaceName);
           
           // Cerrar el modal después de procesar el formulario
           modal.style.display = "none";
       });

       // Agrega un evento para abrir el modal de miembros
        addMembersModalBtn.addEventListener("click", function() {
        membersModal.style.display = "block";
        });

        // Agrega un evento para cerrar el modal de miembros al hacer clic en la "x" 
        membersModalClose.addEventListener("click", function() {
            membersModal.style.display = "none";
        });

        // Cierra el modal de miembros si se hace clic fuera de él
        window.addEventListener("click", function(event) {
            if (event.target === membersModal) {
                membersModal.style.display = "none";
            }
        });


// Agrega un evento para procesar el formulario de miembros al hacer clic en "Agregar"
addMemberForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario (por defecto)

    // Obtener los datos del miembro ingresados en el formulario
    const memberEmail = memberEmailInput.value;
    const memberFirstName = memberFirstNameInput.value;
    const memberLastName = memberLastNameInput.value;
    const memberMaidenName = memberMaidenNameInput.value;
    const memberPhone = memberPhoneInput.value;

    // Agregar acciones con esos datos

    // Limpia los campos del formulario
    memberEmailInput.value = "";
    memberFirstNameInput.value = "";
    memberLastNameInput.value = "";
    memberMaidenNameInput.value = "";
    memberPhoneInput.value = "";

    // Cierra el modal de miembros
    membersModal.style.display = "none";
});




       
       
