/* Soil DataSpace — app.js */
(() => {
  'use strict';

  //URL
    var urlBase = "https://soildataspacebackend.onrender.com";



  document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de socios ---
    const partnersData = [
      { abbr: 'UJA', name: 'Universidad de Jaén', desc: 'Promotora y coordinación técnica; investigación, análisis y usuario', grad: 'from-blue-600 to-blue-800', bcol: 'bg-blue-100 text-blue-800', logo: 'assets/images/logos/uja.jpg' },
      { abbr: 'IFAPA', name: 'IFAPA (Junta de Andalucía)', desc: 'Productor/consumidor de datos; coordinación de políticas y usuario', grad: 'from-green-600 to-green-800', bcol: 'bg-green-100 text-green-800', logo: 'assets/images/logos/ifapa.jpg' },
      { abbr: 'ITACyL', name: 'ITACyL (Junta de Castilla y León)', desc: 'Productor/consumidor de datos; coordinación de políticas y usuario', grad: 'from-red-500 to-red-700', bcol: 'bg-red-100 text-red-800', logo: 'assets/images/logos/itacyl.jpg' },
      { abbr: 'Esri', name: 'Esri España', desc: 'Proveedor tecnológico y facilitador (tecnología geoespacial)', grad: 'from-orange-500 to-orange-700', bcol: 'bg-orange-100 text-orange-800', logo: 'assets/images/logos/esri.jpg' },
      { abbr: 'Coop', name: 'Cooperativas Agroalimentarias de España', desc: 'Consumidor y usuario; agente tractor del sector agrícola', grad: 'from-yellow-500 to-yellow-700', bcol: 'bg-yellow-100 text-yellow-800', logo: 'assets/images/logos/coop.jpg' },
      { abbr: 'Andaltec', name: 'Andaltec', desc: 'Centro tecnológico (plástico, materiales y transferencia)', grad: 'from-fuchsia-600 to-fuchsia-800', bcol: 'bg-fuchsia-100 text-fuchsia-800', logo: 'assets/images/logos/andaltec.png' },
      { abbr: 'CITOLIVA', name: 'CITOLIVA', desc: 'Centro tecnológico del olivar y el aceite', grad: 'from-rose-500 to-rose-700', bcol: 'bg-rose-100 text-rose-800', logo: 'assets/images/logos/citoliva.png' },
      { abbr: 'ceiA3', name: 'ceiA3', desc: 'Campus de Excelencia Internacional Agroalimentario', grad: 'from-violet-500 to-violet-700', bcol: 'bg-violet-100 text-violet-800', logo: 'assets/images/logos/CEIA3.png' },
      { abbr: 'FCRJ', name: 'Fundación Caja Rural de Jaén', desc: 'Apoyo institucional y ecosistema territorial', grad: 'from-amber-600 to-amber-800', bcol: 'bg-amber-100 text-amber-800', logo: 'assets/images/logos/CAJARURAL.jpg' },
      { abbr: 'D.O. SM', name: 'D.O. Sierra Mágina', desc: 'Denominación de Origen (sector oleícola)', grad: 'from-green-700 to-green-900', bcol: 'bg-green-100 text-green-800', logo: 'assets/images/logos/sierraMagina.png' },
      { abbr: 'COI', name: 'Consejo Oleícola Internacional', desc: 'Organismo internacional del sector oleícola', grad: 'from-slate-600 to-slate-800', bcol: 'bg-slate-100 text-slate-800', logo: 'assets/images/logos/COI.png' },
      { abbr: 'ASAJA', name: 'ASAJA', desc: 'Asociación agraria; representación de agricultores', grad: 'from-emerald-700 to-emerald-900', bcol: 'bg-emerald-100 text-emerald-800', logo: 'assets/images/logos/asaja.jpg' },
      { abbr: 'COAG', name: 'COAG', desc: 'Coordinadora de organizaciones de agricultores y ganaderos', grad: 'from-lime-700 to-lime-900', bcol: 'bg-lime-100 text-lime-800', logo: 'assets/images/logos/coag.jpg' },
      { abbr: 'UPA', name: 'UPA', desc: 'Unión de Pequeños Agricultores y Ganaderos', grad: 'from-teal-700 to-teal-900', bcol: 'bg-teal-100 text-teal-800', logo: 'assets/images/logos/upa.png' },
      { abbr: 'INFAOLIVA', name: 'INFAOLIVA', desc: 'Federación del sector oleícola', grad: 'from-yellow-600 to-yellow-800', bcol: 'bg-yellow-100 text-yellow-800', logo: 'assets/images/logos/infaoliva.png' },
      { abbr: 'SIE', name: 'Sistemas Informáticos Europeos', desc: 'Tecnología y servicios TIC', grad: 'from-blue-500 to-blue-700', bcol: 'bg-blue-100 text-blue-800', logo: 'assets/images/logos/sie.jpg' },
      { abbr: 'JAV', name: 'JAV', desc: 'Empresa interesada en datos/servicios del espacio', grad: 'from-rose-600 to-rose-800', bcol: 'bg-rose-100 text-rose-800', logo: 'assets/images/logos/jav.jpg' },
      { abbr: 'CONSULE', name: 'CONSULE', desc: 'Consultoría/servicios vinculados al ecosistema', grad: 'from-indigo-600 to-indigo-800', bcol: 'bg-indigo-100 text-indigo-800', logo: 'assets/images/logos/consule.png' },
      { abbr: 'Deere', name: 'John Deere', desc: 'Fabricante; agricultura de precisión y maquinaria', grad: 'from-green-500 to-green-700', bcol: 'bg-green-100 text-green-800', logo: 'assets/images/logos/deere.png' },
      { abbr: 'Fertina', name: 'Fertinagro Biotech', desc: 'Bio/Agrotech; fertilización y suelos', grad: 'from-amber-500 to-amber-700', bcol: 'bg-amber-100 text-amber-800', logo: 'assets/images/logos/ferti.jpg' },
      { abbr: 'Cajamar', name: 'Cajamar', desc: 'Finanzas/cooperativismo agro; innovación sectorial', grad: 'from-sky-500 to-sky-700', bcol: 'bg-sky-100 text-sky-800', logo: 'assets/images/logos/cajamar.jpg' },
      { abbr: 'NUTESCA', name: 'NUTESCA', desc: 'Empresa interesada en datos y analítica', grad: 'from-fuchsia-500 to-fuchsia-700', bcol: 'bg-fuchsia-100 text-fuchsia-800', logo: 'assets/images/logos/nutesca.png' },
    ];




      /* --- Render de socios --- */
    const track = document.getElementById('partners-track');
    if (track) {
      track.innerHTML = partnersData.map(d => `
        <article class="group snap-start shrink-0 w-[200px] sm:w-[220px] bg-white rounded-xl p-4 shadow-sm text-center transition hover:shadow-md" title="${d.name}: ${d.desc}">
          <div class="mx-auto mb-3 flex items-center justify-center w-32 h-16 rounded-xl bg-transparent p-0">
            ${d.logo
              ? `<img src="${d.logo}" alt="Logo ${d.name}" class="max-h-12 w-auto object-contain object-center transition-transform duration-200 group-hover:scale-[1.02]" loading="lazy" decoding="async" onerror="this.classList.add('hidden'); this.nextElementSibling.classList.remove('hidden');">
                 <span class="hidden px-2 py-1 rounded ${d.bcol} font-bold">${d.abbr}</span>`
              : `<span class="px-2 py-1 rounded ${d.bcol} font-bold">${d.abbr}</span>`
            }
          </div>
          <h3 class="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">${d.name}</h3>
          <p class="text-[12px] text-gray-600 mt-1 line-clamp-2 leading-snug">${d.desc}</p>
        </article>
      `).join('');
    }

/* -------------------------------------------------
   📰 CONFIGURACIÓN Y CARGA DE NOTICIAS
--------------------------------------------------- */

var news = [];

// Añadir una nueva noticia al principio del array
function addNewsItem(newNewsItem) {
  news.unshift(newNewsItem);
}

// Colores usados para el gradiente de cada tarjeta
const color_list = [
  "emerald",
  "violet",
  "amber",
  "fuchsia",
  "teal",
  "rose"
];

// Referencia al contenedor donde se insertarán las noticias
const newsContainer = document.getElementById('news-container');

if (newsContainer) {

  // 🔸 Función para crear la estructura HTML de una noticia
  const createNewsItem = (n, index) => {
    const color = color_list[index % color_list.length];
    const finalImage = n.image || "assets/images/hero.png";
    const finalbuttonText = n.buttonText || "Visitar";

    // Si no hay link, no muestra el botón
    let buttonHtml = '';
    if (n.link && n.link !== "") {
      buttonHtml = `
        <a href="${n.link}" target="_blank" rel="noopener noreferrer"
          onclick="event.stopPropagation()"
          class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-${color}-600 text-white text-sm font-semibold hover:bg-${color}-700 transition">
          ${finalbuttonText} <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
        </a>
      `;
    }

    // Devuelve la tarjeta de noticia completa
    return `
    <article class="group shrink-0 snap-start w-[420px] sm:w-[460px] md:w-[500px] relative rounded-3xl p-1 bg-gradient-to-r from-${color}-500 to-cyan-500 transition-transform duration-300 hover:scale-[1.04] transform-gpu hover:overscroll-contain flex flex-col">
      <div class="flex flex-col flex-1 rounded-[calc(1.5rem-4px)] bg-white/95 backdrop-blur-md shadow-lg overflow-hidden">

        <!-- Imagen -->
        <div class="relative h-56 overflow-hidden flex-shrink-0">
          <img src="${finalImage}" alt="${n.title}" class="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110" />
          <span class="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[13px] font-semibold bg-white/90 text-${color}-700 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-${color}-500 animate-ping"></span> ${n.category}
          </span>
        </div>

        <!-- Contenido -->
        <div class="flex flex-col justify-between p-6 flex-1">
          <div class="flex-1">
            <h3 class="text-xl sm:text-2xl font-extrabold leading-snug bg-gradient-to-r from-${color}-700 to-cyan-700 bg-clip-text text-transparent mb-2">
              ${n.title}
            </h3>
            <p class="text-gray-700 text-lg sm:text-xl leading-relaxed whitespace-pre-line">
              ${n.description}
            </p>
          </div>
          <div class="mt-5">
            ${buttonHtml}
          </div>
        </div>
      </div>
    </article>
    `;
  };

  // 🔹 Llamada al backend para obtener las noticias
  fetch(urlBase + "/api/v1/news/all")
    .then(response => {
      if (!response.ok) throw new Error('Noticias no encontradas');
      return response.json();
    })
    .then(data => {
      news = data.news;
      newsContainer.innerHTML = news.map(createNewsItem).join('');

      // Inicializa modales si existe la función
      if (typeof initNewsModal === 'function') {
        initNewsModal(news, color_list, 'news-container');
      }
    })
    .catch(error => console.error('Error cargando noticias:', error));
}

/* -------------------------------------------------
   🧭 NAVEGACIÓN DEL CARRUSEL
--------------------------------------------------- */

const newsScroller = document.getElementById('news-scroller');

if (newsScroller) {
  // Desplazamiento con botones
  const step = () => 480;

  document.querySelectorAll('#news [data-dir]').forEach(btn => {
    btn.addEventListener('click', () =>
      newsScroller.scrollBy({ left: (+btn.dataset.dir) * step(), behavior: 'smooth' })
    );
  });

  // 🚀 Scroll natural con rueda o touchpad
  newsScroller.addEventListener('wheel', e => {
    const isVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);

    // Si el scroll es vertical (rueda normal) → deja pasar el evento
    if (isVertical) return;

    // Si el scroll es horizontal (touchpad o Shift+rueda) → mueve el carrusel
    e.preventDefault();
    newsScroller.scrollLeft += e.deltaX || e.deltaY;
  }, { passive: false });
}


  // ------------- Modal de Login -------------
        const loginBtnHeader = document.getElementById('loginBtnHeader'); // Botón "Iniciar Sesión / Cerrar Sesión"
        const loginModal = document.getElementById('loginModal'); // Modal de login
        const closeLoginModal = document.getElementById('closeLoginModal'); // Botón del cierre dentro del modal de login
        const toast = document.getElementById('toast'); // Cartel de bienvenida
        const toastMessage = document.getElementById('toastMessage'); // Mensaje asociado
        const createNewsButton = document.getElementById('open-create-news-modal'); // Botón de crear noticia

        // Lógica asociada al botón de login: Abrir modal o hacer logout según el token
        loginBtnHeader.addEventListener('click', (e) => {
            e.preventDefault();
            const token = localStorage.getItem('token');

            if (token) {
                // Logout
                localStorage.removeItem('token');
                location.reload(); // Recarga la página tras desloguear
            } else {
                // Abrir modal
                loginModal.classList.remove('hidden');
                loginModal.classList.add('flex');

                // Limpiar formulario y mensaje de error
                loginForm.reset(); // vacía usuario y contraseña
                loginMessage.classList.add('hidden'); // oculta mensaje de error
            }
        });

        // Cerrar modal con la X
        closeLoginModal.addEventListener('click', () => {
            loginModal.classList.add('hidden');
            loginModal.classList.remove('flex');
        });

        // Cerrar modal al hacer clic fuera del contenido
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.add('hidden');
                loginModal.classList.remove('flex');
            }
        });

        // "Base de datos" provisional
        const userData = { username: "Hermes01", password: "12345" };

        // Selecciones del login
        const loginForm = document.getElementById('loginForm');
        const loginMessage = document.getElementById('loginMessage');

        // Función para crear token JWT falso
        function createFakeToken(username) {
            const payload = {
                username,
                iat: Date.now(),
                exp: Date.now() + 3600 * 1000
            };
            return btoa(JSON.stringify(payload));
        }

        // Función para actualizar el botón de login según el token. También pone el botón de crear noticia (TODO => que solo salga cuando está Hermes01 conectado)
        function updateLoginButton() {
          //Obtener token del localstore
            const token = localStorage.getItem('token');
            var status;

            //Petición de status al servidor para confirmar que el token existe.
            fetch(urlBase+"/api/v1/user/status",{
              method: 'GET',
              headers : {
                'Authorization': token
              }
            })
            .then(response => {
              //console.log(response.ok);
              status = response.ok;
              if (status) {
              //Si el token está en el localstore y existe en la base de datos
              loginBtnHeader.classList.remove('from-emerald-600', 'to-cyan-600', 'hover:from-emerald-700', 'hover:to-cyan-700');
              loginBtnHeader.classList.add('from-red-600', 'to-red-800', 'hover:from-red-700', 'hover:to-red-900');
              loginBtnHeader.querySelector('button').textContent = 'Cerrar Sesión';
              createNewsButton.classList.add('from-emerald-600', 'to-cyan-600', 'hover:from-emerald-700', 'hover:to-cyan-700', 'hover:shadow-lg');
              createNewsButton.removeAttribute("disabled");
              createNewsButton.textContent = 'Crear Noticia';

              } else {
              //Sino
              loginBtnHeader.classList.remove('from-red-600', 'to-red-800', 'hover:from-red-700', 'hover:to-red-900');
              loginBtnHeader.classList.add('from-emerald-600', 'to-cyan-600', 'hover:from-emerald-700', 'hover:to-cyan-700');
              loginBtnHeader.querySelector('button').textContent = 'Iniciar Sesión';
              createNewsButton.classList.remove('from-emerald-600', 'to-cyan-600', 'hover:from-emerald-700', 'hover:to-cyan-700', 'hover:shadow-lg');
              createNewsButton.setAttribute("disabled", "disabled");
              createNewsButton.textContent = '';
              }
            });
        }

        // Lógica del modal del formulario de login.
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;

            //token necesario para acceder a la web
            var tokenRecibido

            fetch(urlBase+"/api/v1/user/login",{
              method: 'POST',
              headers : {
                'Content-type': 'application/json'
              },
                body : JSON.stringify({
                name : username,
                password : password
              })
            })
            .then(response => {
              if (!response.ok) throw new Error('Usuario no encontrado');
              return response.json();
            })
            .then( data => {
              tokenRecibido = data.user.authToken;
              //console.log(tokenRecibido);

              if (tokenRecibido) {
                const token = tokenRecibido;
                localStorage.setItem('token', token);

                // Cerrar modal
                loginModal.classList.add('hidden');
                loginModal.classList.remove('flex');

                // Aparece la notificación de bienvenida
                toast.classList.remove('opacity-0');
                toast.classList.add('opacity-100');

                // Poner mensaje dinámico con nombre de usuario
                toastMessage.textContent = `Bienvenido, ${username}`;

                // Desaparece tras un tiempo
                setTimeout(() => {
                    toast.classList.remove('opacity-100');
                    toast.classList.add('opacity-0');
                }, 2500);

                updateLoginButton();
                loginMessage.classList.add('hidden');
                } else {
                    // Opcional: mostrar mensaje de error
                    loginMessage.textContent = "Usuario o contraseña incorrectos";
                    loginMessage.classList.remove('hidden');
                }

            });
        });

        // Inicializar estado al cargar la página
        updateLoginButton();

  });

  // Colaboradores
        const scroller = document.getElementById('partners-scroller');
        if (scroller) {
            const step = () => Math.max(200, scroller.clientWidth * 0.75);

            // Botones izquierda/derecha
            document.querySelectorAll('#partners [data-dir]').forEach(btn => {
                btn.addEventListener('click', () =>
                    scroller.scrollBy({ left: (+btn.dataset.dir) * step(), behavior: 'smooth' })
                );
            });

            // Rueda → scroll horizontal
            scroller.addEventListener('wheel', e => {
                if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { scroller.scrollLeft += e.deltaY; e.preventDefault(); }
            }, { passive: false });

            // Actualiza difuminados según posición
            const updateFades = () => {
                const hasOverflow = scroller.scrollWidth > scroller.clientWidth + 1;
                if (!hasOverflow) {
                    scroller.style.setProperty('--fade-l', '0px');
                    scroller.style.setProperty('--fade-r', '0px');
                    return;
                }
                const atStart = scroller.scrollLeft <= 1;
                const atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 1;
                scroller.style.setProperty('--fade-l', atStart ? '0px' : '28px');
                scroller.style.setProperty('--fade-r', atEnd ? '0px' : '28px');
            };

            scroller.addEventListener('scroll', updateFades, { passive: true });
            window.addEventListener('resize', updateFades);
            // Estado inicial
            updateFades();
        }

  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden", isOpen);
      menuIcon.classList.toggle("hidden", !isOpen);
      closeIcon.classList.toggle("hidden", isOpen);
    });
  }


})();

