//Todo esto se ejecuta cuando se carga el DOM
document.addEventListener('DOMContentLoaded', () => {

    //URL copiada del otro documento guarrisimo
    var urlBase = "https://soildataspacebackend.onrender.com";

    // 1. Identificador del botón en index.html
    const openModalButton = document.getElementById('open-create-news-modal');

    if (openModalButton) {
        openModalButton.addEventListener('click', (e) => {
            // Evita que el enlace o botón tengan un comportamiento de navegación
            e.preventDefault(); 
            
            // 2. Ejecuta la función del modal
            showModal();
        });
    }

    // Código para mostrar
    function showModal() {
      // Id del modal  
      const MODAL_ID = "news-form-modal-bg"; 

        // Eliminar modal anterior si existe
        const old = document.getElementById(MODAL_ID);
        if (old) old.remove();

        // Variables

        // Crear fondo del modal
        const modalBg = document.createElement("div");
        modalBg.id = MODAL_ID; // <-- Usamos el ID corregido
        modalBg.className =
            "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 overflow-y-auto";

        // Estructura responsive del modal...
        modalBg.innerHTML = `
            <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl sm:max-w-4xl md:max-w-5xl overflow-hidden animate-fadeIn flex flex-col h-auto sm:h-[85vh] overflow-y-auto">
                
                
                <button class="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold leading-none z-10" id="close-modal">&times;</button>

                <form id="news_form" class="flex flex-col gap-4 p-6" method="POST" action="endpoint_POST"> 
                    <h2 class="text-2xl sm:text-3xl font-extrabold text-emerald-700 mb-8">Crear Nueva Noticia</h2>
                    <p>Título: </p><input type="text" name="title" placeholder="Título de la noticia." required class="input-noticia" />
                    <p>Fecha: </p><input type="date" name="date" placeholder="dd/mm/yyyy" class="input-noticia" />
                    <p>Autor: </p><input type="text" name="author" placeholder="Autor de la noticia." required class="input-noticia" />
                    <p>Categoría: </p><input type="text" name="category" placeholder="Categoría de la noticia." required class="input-noticia" />
                    <p>Descripción: </p><input type="text" name="description" placeholder="Descripción corta." required class="input-noticia" />
                    <p>Contenido: </p><textarea name="content" placeholder="Contenido de la noticia." required class="input-noticia-alto" rows="5"></textarea>
                    <p>Enlace: </p><input type="text" name="link" placeholder="Enlace a la noticia" class="input-noticia" />
                    <p>Texto del botón: </p><input type="text" name="button_text" placeholder="Texto del botón en la interfaz." class="input-noticia" />
                    <p>Imagen: </p><input type="file" name="image" placeholder="Imagen de portada" class="input-noticia" accept="image/png, image/jpeg, .png, .jpg"
/>
                    
                    <button type="submit"
                        class="w-full inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-10 text-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 rounded-lg transition-all duration-300 transform hover:scale-102 hover:shadow-lg">
                        Crear noticia
                    </button>

                    <p id="errorMessage" class="text-sm text-red-600 mt-2 hidden">ERROR: No se pudo crear la noticia. Revisa los caracteres introducidos y el archivo.</p>
                </form>
            </div>
        `;

        document.body.appendChild(modalBg);

        // Bloquear scroll del body mientras está abierto
        document.body.style.overflow = "hidden";

        // Cerrar al hacer clic fuera o en la X
        modalBg.addEventListener("click", (e) => {
            if (e.target === modalBg || e.target.id === "close-modal") {
                closeModal(modalBg);
            }
        });

        // Funcionalidad provisional para guardar nuevas noticias
        const newsForm = document.getElementById('news_form');
        if (newsForm) {
            newsForm.addEventListener('submit', async (e) => {
                e.preventDefault(); 

                // Crear un objeto FormData para capturar todos los campos
                const formData = new FormData(newsForm);
                const newNewsItem = {};

                // Iterar sobre los datos y crear el diccionario (Object)
                for (const [key, value] of formData.entries()) {
                    newNewsItem[key] = value;
                }
                
                //Convertir imagen a base64
                //Espera a que la función asíncrona termine
                var imgBase64 = ""; //por defecto envía un string vacío
                //console.log(newNewsItem.image);
                //si la imagen NO es vacía
                if (newNewsItem.image.name!='') {
                    if (imageSecurity(newNewsItem.image)) { //si la imagen es correcta
                        imgBase64 = await convertImageBase64(newNewsItem.image); //convertir imagen a base64 si existe
                    }   else {
                        errorMessage();
                        return;
                    }
                }

                //Obtener token del localstore
                const token = localStorage.getItem('token');
            
                //Recorre todo los textos, si no son seguras las sube vacías
                for (const [key, value] of Object.entries(newNewsItem)){
                    if (key!='date'&&key!='image'){
                        if (textValidation(value)){
                            newNewsItem[key] = "";
                            errorMessage();
                            return;
                        }
                    }
                }
                
                //Crear body de la petición post
                var body = JSON.stringify({
                authToken: {
                    id: token 
                },
                news : {
                    title: newNewsItem.title,
                    date: newNewsItem.date,
                    author: newNewsItem.author,
                    category: newNewsItem.category,
                    image: imgBase64,
                    description: newNewsItem.description,
                    content: newNewsItem.content,
                    link: newNewsItem.link,
                    buttonText: newNewsItem.button_text
                }                
                })

                //Realizar petición post
                fetch(urlBase+"/api/v1/news/addNew",{
                method: 'POST',
                headers : {
                'Content-type': 'application/json' },
                body: body
                })
                .then(response => {
                if (!response.ok) {
                    throw new Error('Noticia no creada');
                } else {
                    // Cerrar el modal
                    closeModal(modalBg);
                    //Recargar página para que se vean los cambios
                    location.reload();
                }});
            });
        }
    }


    //Función que convierte un archivo a Base64
    //Es asíncrona
    async function convertImageBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        // Cuando la lectura termina correctamente, reader.result contiene un DataURL (string).
        reader.onload = () => resolve(reader.result);
        // En caso de error, rechazar
        reader.onerror = reject;
        // Convertir fichero a Base64
        reader.readAsDataURL(file);
    });
    }

    // Función para cerrar el modal, utiliza una animación
    function closeModal(modalBg) {
        modalBg.classList.add("animate-fadeOut");
        document.body.style.overflow = "";
        setTimeout(() => modalBg.remove(), 200);
    }

    //Comprobaciones de imagen, devuelve true si la imagen es correcta
    function imageSecurity(img){

        //Comprobar tipo de archivo
        const tipoArchivo = img.type;
        const tiposAceptados = ['image/jpeg', 'image/png'];

        if (!tiposAceptados.includes(tipoArchivo)) return false

        return true
    }

    //Comprobaciones de texto, devuelve true cuando hay un error
    function textValidation(text){
        if (typeof text !== 'string') {
            // Ignora o maneja tipos de datos no válidos
            return false; 
        }

        //expresiones de urls
        const urlRegex = /(?:https?:\/\/|ftps?:\/\/|www\.|[a-z0-9-]+\.[a-z]{2,})(?:\S*)/gi;

        //Limpiar texto de saltos de línea
        var cleanedText = text.replace(/[\n\r\t]/g, '');
        //limpiar url
        cleanedText = cleanedText.replace(urlRegex, '');

        //HTML y CSS
        const keyCharacters = /[<>&\//]/g; 
        const keyWords = /(<script|javascript:|eval\(|onload=|onerror=|onmouseover=|document\.|window\.|alert\(|prompt\(|confirm\()/i;

        // Comprueba ambas expresiones regulares
        const insecureCharacters = keyCharacters.test(cleanedText);
        const insecureWords = keyWords.test(cleanedText);
        
        //DEVOLVER
        return insecureCharacters || insecureWords;
    }

    function errorMessage(){
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.classList.remove('hidden');
    }
    
});