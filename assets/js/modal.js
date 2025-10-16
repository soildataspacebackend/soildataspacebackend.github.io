// ==========================
// Modal responsive adaptado al carrusel
// ==========================

//URL
  var urlBase = "https://soildataspacebackend.onrender.com";

// Cerrar modal
function closeModal(modalBg) {
  modalBg.classList.add("animate-fadeOut");
  document.body.style.overflow = "";
  setTimeout(() => modalBg.remove(), 200);
}

// Mostrar el modal
function showModal(noticia, color) {
  // Eliminar modal anterior si existe
  const old = document.getElementById("news-modal");
  if (old) old.remove();

  //Imagen por defecto
  var finalImage = noticia.image;
  if (finalImage == "") {
      finalImage = "assets/images/hero.png";}

  //Botón por defecto
  var finalbuttonText = noticia.buttonText;
  if (finalbuttonText == "" || finalbuttonText == null) finalbuttonText = "Visitar";

  // Crear fondo del modal
  const modalBg = document.createElement("div");
  modalBg.id = "news-modal";
  modalBg.className =
    "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 overflow-y-auto";

  // Modal adaptado al estilo del carrusel
  modalBg.innerHTML = `
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl sm:max-w-4xl md:max-w-5xl overflow-hidden animate-fadeIn flex flex-col h-auto sm:h-[85vh]">
      
      <!-- Botón cerrar -->
      <button class="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold leading-none z-10" id="close-modal">&times;</button>

      <!-- Imagen superior -->
      <div class="flex-shrink-0 h-64 overflow-hidden relative">
        <img src="${finalImage}" alt="${noticia.title}" class="w-full h-full object-cover object-center transition-transform duration-300">
        <span class="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-semibold bg-white/90 text-${color}-700 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-${color}-500 animate-ping"></span> ${noticia.category}
        </span>
      </div>

      <!-- Contenido scrolleable -->
      <div class="flex-grow overflow-y-auto p-6 sm:p-8 space-y-4 text-gray-700 leading-relaxed">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-${color}-700">${noticia.title}</h2>
        <p class="text-sm text-gray-500">${noticia.date} | ${noticia.author}</p>
        <p class="text-base sm:text-lg">${noticia.description}</p>
        <p class="text-base sm:text-lg">${noticia.content}</p>

        ${noticia.link ? `
          <a id="news-link-modal"  href="${noticia.link}" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-${color}-600 text-white font-semibold hover:bg-${color}-700 transition">
            ${finalbuttonText} <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
          </a>` : ""}
      </div>

      <!-- 🔽 Botón abajo derecha -->
      <button id="delete-news"
        class="absolute bottom-4 right-4 px-5 py-2 rounded-lg text-white font-semibold shadow-md 
        bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 transition">
        Borrar
      </button>

    </div>
  `;
  
  document.body.appendChild(modalBg);
  document.body.style.overflow = "hidden";

  //No aparece el botón si no hay enlace
  const botonVisitar = document.getElementById('news-link-modal');
  if ((noticia.link == ""||noticia.link == null)&&botonVisitar){
    botonVisitar.style.display = 'none';
    botonVisitar.setAttribute("disabled", "disabled");
    botonVisitar.textContent = '';
  }

  const token = localStorage.getItem('token');
  //si no esta logeado, no se muestra
  const deleteNewsButton = document.getElementById('delete-news'); // Botón de borrar noticia
  if (!token) {
    deleteNewsButton.style.display = 'none';
    deleteNewsButton.setAttribute("disabled", "disabled");
    deleteNewsButton.textContent = '';
  }

  // Cerrar al hacer clic fuera o en la X
  modalBg.addEventListener("click", (e) => {
    if (e.target === modalBg || e.target.id === "close-modal") closeModal(modalBg);
  });

  // Botón de borrar. Al hacer clic se borra una noticia.
    const deleteBtn = modalBg.querySelector("#delete-news");

    if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {

            // Se hace un fetch a la API
            fetch(urlBase + "/api/v1/news/deleteNew", {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',  
                  'id': noticia.id
                },
                body: JSON.stringify({
                    id: token
                })
            }).then(response => {
                if (!response.ok) throw new Error('No se ha podido borrar');
                return response.json();
            }).then(data => {
                location.reload(); // Recarga la página tras borrar la noticia
            })

            // De momento se cierra el modal
            closeModal(modalBg);
        });
    }
}

// ==========================
// Inicializar modal en carrusel
// ==========================
function initNewsModal(newsArray, colorList, containerId = 'news-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const articles = container.querySelectorAll('article');
  articles.forEach((article, index) => {
    const noticia = newsArray[index];
    const color = colorList[index % colorList.length];

    article.classList.add('noticia');
    article.setAttribute('data-title', noticia.title);

    article.addEventListener('click', () => showModal(noticia, color));
  });
}

// ==========================
// Animaciones
// ==========================
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeOut {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(10px); }
}
.animate-fadeIn { animation: fadeIn 0.25s ease-out; }
.animate-fadeOut { animation: fadeOut 0.2s ease-in forwards; }

/* Scroll suave interno */
#news-modal .overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}
#news-modal .overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.2);
  border-radius: 3px;
}
`;
document.head.appendChild(style);
