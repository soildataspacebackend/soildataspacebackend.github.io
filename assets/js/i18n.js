// assets/js/i18n.js
(() => {
    const I18N = {
        es: {
            // NAV
            'nav.home': 'Inicio', 'nav.project': 'Proyecto', 'nav.useCases': 'Casos de Uso',
            'nav.tech': 'Tecnología', 'nav.partners': 'Socios',

            // HERO
            'hero.title': 'Revolucionando el <span class="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">conocimiento del suelo</span>',
            'hero.subtitle': 'Espacio de Datos de Suelos: ecosistema soberano e interoperable que conecta datos edafológicos, ecológicos y geoespaciales de Andalucía y Castilla y León, alineado con Gaia-X, INSPIRE y OGC.',
            'hero.cta.useCases': 'Explorar casos de uso', 'hero.cta.tech': 'Conocer la tecnología',
            'hero.badge1': 'Fertilidad', 'hero.badge2': 'Carbono', 'hero.badge3': 'Erosión',
            'hero.counter.caption': 'Capas de datos disponibles',

            // PROJECT (titulares intro)
            'project.title': 'El proyecto Soil DataSpace',
            'project.subtitle': 'Un ecosistema de datos soberano que transforma la gestión del suelo en Andalucía y Castilla y León, impulsando la agricultura sostenible, la adaptación al cambio climático y la gestión hídrica.',

            'project.vision.title': 'Nuestra visión',
            'project.vision.text': 'Crear un ecosistema interoperable de datos del suelo alineado con Gaia-X y estándares europeos, facilitando la toma de decisiones en agricultura sostenible, cambio climático y gestión hídrica.',
            'project.vision.b1': 'Soberanía del dato y credenciales verificables',
            'project.vision.b2': 'Metadatos INSPIRE y linaje FAIR',
            'project.vision.b3': 'Servicios OGC (WMS, WFS, WCS)',

            // USE CASES
            'use.title': 'Casos de uso transformadores',
            'use.subtitle': 'Cómo Soil DataSpace transforma la gestión del suelo en AGRI, CLIMA e HIDRO',
            'use.agri.tag': 'Agricultura sostenible',
            'use.agri.text': 'Mapas de fertilidad a alta resolución, indicadores PAC y recomendaciones de fertilización precisa.',
            'use.agri.cta': 'Explorar datos agrícolas',
            'use.clima.tag': 'Captura de carbono',
            'use.clima.text': 'Mapas de carbono orgánico, modelos de secuestro y evaluación de escenarios de mitigación.',
            'use.clima.cta': 'Analizar carbono',
            'use.hidro.tag': 'Gestión hídrica',
            'use.hidro.text': 'Mapas de riesgo de erosión, modelos de escorrentía y alertas tempranas de inundación.',
            'use.hidro.cta': 'Evaluar riesgos',

            // TECHNOLOGY
            'tech.title': 'Tecnología de vanguardia',
            'tech.subtitle': 'Arquitectura robusta y soberana que garantiza interoperabilidad, seguridad y escalabilidad.',
            'tech.gaiax.title': 'Arquitectura Gaia-X',
            'tech.gaiax.text': 'Datos en origen, acceso federado y contratos digitales. Control de uso, trazabilidad y auditoría.',
            'tech.feature1': 'Soberanía del dato',
            'tech.feature2': 'Seguridad reforzada',

            // COVERAGE
            'cov.title': 'Cobertura geográfica',
            'cov.and.title': 'Andalucía',
            'cov.and.desc': 'Datos de suelo de IFAPA y otras instituciones',
            'cov.cyl.title': 'Castilla y León',
            'cov.cyl.desc': 'Datos de suelo de ITACyL y redes de monitoreo',
            'cov.eu.title': 'Integración europea',
            'cov.eu.desc': 'Conexión con ESDAC, Copernicus y otros espacios de datos',

            // PARTNERS
            'partners.title': 'Ecosistema de colaboración',
            'partners.subtitle': 'Consorcio público-privado liderado por la Universidad de Jaén con expertise académico, tecnológico y sectorial.',
            'partners.badge.leader': 'Líder',
            'partners.badge.collab': 'Colaborador',

            // CTA
            'cta.title': 'Únase al ecosistema Soil DataSpace',
            'cta.subtitle': 'Para proveedores de datos, desarrolladores, investigadores y usuarios finales.',
            'cta.request': 'Solicitar acceso',
            'cta.contact': 'Contactar',

            // FOOTER
            'footer.project': 'Proyecto',
            'footer.resources': 'Recursos',
            'footer.contact': 'Contacto',
            'footer.api': 'Documentación API',
            'footer.tutorials': 'Tutoriales',
            'footer.cases': 'Casos de estudio',
            'footer.webinars': 'Webinars'
        },
        en: {
            // NAV
            'nav.home': 'Home', 'nav.project': 'Project', 'nav.useCases': 'Use Cases',
            'nav.tech': 'Technology', 'nav.partners': 'Partners',

            // HERO
            'hero.title': 'Revolutionizing <span class="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">soil knowledge</span>',
            'hero.subtitle': 'Soil DataSpace: a sovereign, interoperable ecosystem connecting soil, ecological and geospatial data from Andalusia and Castile and León, aligned with Gaia-X, INSPIRE and OGC.',
            'hero.cta.useCases': 'Explore use cases', 'hero.cta.tech': 'See the technology',
            'hero.badge1': 'Fertility', 'hero.badge2': 'Carbon', 'hero.badge3': 'Erosion',
            'hero.counter.caption': 'Data layers available',

            // PROJECT
            'project.title': 'The Soil DataSpace project',
            'project.subtitle': 'A sovereign data ecosystem transforming soil management in Andalusia and Castile and León, driving sustainable agriculture, climate adaptation and water management.',

            'project.vision.title': 'Our vision',
            'project.vision.text': 'Create an interoperable soil-data ecosystem aligned with Gaia-X and European standards, enabling decision-making in sustainable agriculture, climate change and water management.',
            'project.vision.b1': 'Data sovereignty and verifiable credentials',
            'project.vision.b2': 'INSPIRE metadata and FAIR lineage',
            'project.vision.b3': 'OGC services (WMS, WFS, WCS)',

            // USE CASES
            'use.title': 'Transformative use cases',
            'use.subtitle': 'How Soil DataSpace transforms soil management across AGRI, CLIMA and HIDRO',
            'use.agri.tag': 'Sustainable agriculture',
            'use.agri.text': 'High-resolution fertility maps, CAP indicators and precise fertilization recommendations.',
            'use.agri.cta': 'Explore agricultural data',
            'use.clima.tag': 'Carbon capture',
            'use.clima.text': 'Soil organic carbon maps, sequestration models and mitigation scenario assessment.',
            'use.clima.cta': 'Analyze carbon',
            'use.hidro.tag': 'Water management',
            'use.hidro.text': 'Erosion risk maps, runoff models and early flood alerts.',
            'use.hidro.cta': 'Assess risks',

            // TECHNOLOGY
            'tech.title': 'Cutting-edge technology',
            'tech.subtitle': 'Robust, sovereign architecture ensuring interoperability, security and scalability.',
            'tech.gaiax.title': 'Gaia-X architecture',
            'tech.gaiax.text': 'Data at source, federated access and data contracts. Usage control, traceability and auditability.',
            'tech.feature1': 'Data sovereignty',
            'tech.feature2': 'Reinforced security',

            // COVERAGE
            'cov.title': 'Geographic coverage',
            'cov.and.title': 'Andalusia',
            'cov.and.desc': 'Soil data from IFAPA and other institutions',
            'cov.cyl.title': 'Castile and León',
            'cov.cyl.desc': 'Soil data from ITACyL and monitoring networks',
            'cov.eu.title': 'European integration',
            'cov.eu.desc': 'Connection with ESDAC, Copernicus and other data spaces',

            // PARTNERS
            'partners.title': 'Collaboration ecosystem',
            'partners.subtitle': 'Public–private consortium led by the University of Jaén with academic, technological and sector expertise.',
            'partners.badge.leader': 'Leader',
            'partners.badge.collab': 'Collaborator',

            // CTA
            'cta.title': 'Join the Soil DataSpace ecosystem',
            'cta.subtitle': 'For data providers, developers, researchers and end users.',
            'cta.request': 'Request access',
            'cta.contact': 'Contact',

            // FOOTER
            'footer.project': 'Project',
            'footer.resources': 'Resources',
            'footer.contact': 'Contact',
            'footer.api': 'API documentation',
            'footer.tutorials': 'Tutorials',
            'footer.cases': 'Case studies',
            'footer.webinars': 'Webinars'
        }
    };

    // Mapa de selectores -> claves i18n
    const MAP = [
        // NAV desktop + móvil
        { sel: 'nav[aria-label="Principal"] a[href="#home"], #mobileMenu a[href="#home"]', key: 'nav.home' },
        { sel: 'nav[aria-label="Principal"] a[href="#project"], #mobileMenu a[href="#project"]', key: 'nav.project' },
        { sel: 'nav[aria-label="Principal"] a[href="#useCases"], #mobileMenu a[href="#useCases"]', key: 'nav.useCases' },
        { sel: 'nav[aria-label="Principal"] a[href="#technology"], #mobileMenu a[href="#technology"]', key: 'nav.tech' },
        { sel: 'nav[aria-label="Principal"] a[href="#partners"], #mobileMenu a[href="#partners"]', key: 'nav.partners' },

        // HERO
        { sel: '#home h2', key: 'hero.title', html: true },
        { sel: '#home h2 + p', key: 'hero.subtitle' },
        { sel: '#home a[href="#useCases"] span:first-child', key: 'hero.cta.useCases' },
        { sel: '#home a[href="#technology"]', key: 'hero.cta.tech' },
        { sel: '#home .grid.grid-cols-3 > div:nth-child(1)', key: 'hero.badge1' },
        { sel: '#home .grid.grid-cols-3 > div:nth-child(2)', key: 'hero.badge2' },
        { sel: '#home .grid.grid-cols-3 > div:nth-child(3)', key: 'hero.badge3' },
        { sel: '#home .absolute.-bottom-6.-right-6 p.text-sm', key: 'hero.counter.caption' },

        // PROJECT intro (título + subtítulo)
        { sel: '#project h2', key: 'project.title' },
        { sel: '#project h2 + p', key: 'project.subtitle' },

        // Bloque "Nuestra visión" dentro de #project (columna .order-2)
        { sel: '#project .order-2 h3', key: 'project.vision.title' },
        { sel: '#project .order-2 p.text-gray-700', key: 'project.vision.text' },
        { sel: '#project .order-2 ul li:nth-child(1) span.text-sm', key: 'project.vision.b1' },
        { sel: '#project .order-2 ul li:nth-child(2) span.text-sm', key: 'project.vision.b2' },
        { sel: '#project .order-2 ul li:nth-child(3) span.text-sm', key: 'project.vision.b3' },

        // USE CASES (título, subtítulo)
        { sel: '#useCases h2', key: 'use.title' },
        { sel: '#useCases h2 + p', key: 'use.subtitle' },
        // AGRI
        { sel: '#useCases article:nth-of-type(1) span.absolute', key: 'use.agri.tag' },
        { sel: '#useCases article:nth-of-type(1) p.text-gray-600', key: 'use.agri.text' },
        { sel: '#useCases article:nth-of-type(1) button', key: 'use.agri.cta' },
        // CLIMA
        { sel: '#useCases article:nth-of-type(2) span.absolute', key: 'use.clima.tag' },
        { sel: '#useCases article:nth-of-type(2) p.text-gray-600', key: 'use.clima.text' },
        { sel: '#useCases article:nth-of-type(2) button', key: 'use.clima.cta' },
        // HIDRO
        { sel: '#useCases article:nth-of-type(3) span.absolute', key: 'use.hidro.tag' },
        { sel: '#useCases article:nth-of-type(3) p.text-gray-600', key: 'use.hidro.text' },
        { sel: '#useCases article:nth-of-type(3) button', key: 'use.hidro.cta' },

        // TECHNOLOGY (cabecera + bloque Gaia-X + features)
        { sel: '#technology h2', key: 'tech.title' },
        { sel: '#technology h2 + p', key: 'tech.subtitle' },
        { sel: '#technology .order-2 h3', key: 'tech.gaiax.title' },
        { sel: '#technology .order-2 p.text-gray-700', key: 'tech.gaiax.text' },
        { sel: '#technology .order-2 .grid > div:nth-child(1) h4', key: 'tech.feature1' },
        { sel: '#technology .order-2 .grid > div:nth-child(2) h4', key: 'tech.feature2' },

        // COVERAGE (dentro de technology)
        { sel: '#technology .bg-white.rounded-2xl.shadow-xl h3', key: 'cov.title' },
        { sel: '#technology .bg-white.rounded-2xl.shadow-xl .grid > div:nth-child(2) > div:nth-child(1) h4', key: 'cov.and.title' },
        { sel: '#technology .bg-white.rounded-2xl.shadow-xl .grid > div:nth-child(2) > div:nth-child(1) p', key: 'cov.and.desc' },
        { sel: '#technology .bg-white.rounded-2xl.shadow-xl .grid > div:nth-child(2) > div:nth-child(2) h4', key: 'cov.cyl.title' },
        { sel: '#technology .bg-white.rounded-2xl.shadow-xl .grid > div:nth-child(2) > div:nth-child(2) p', key: 'cov.cyl.desc' },
        { sel: '#technology .bg-white.rounded-2xl.shadow-xl .grid > div:nth-child(2) > div:nth-child(3) h4', key: 'cov.eu.title' },
        { sel: '#technology .bg-white.rounded-2xl.shadow-xl .grid > div:nth-child(2) > div:nth-child(3) p', key: 'cov.eu.desc' },

        // PARTNERS (cabecera)
        { sel: '#partners h2', key: 'partners.title' },
        { sel: '#partners h2 + p', key: 'partners.subtitle' },

        // CTA final
        { sel: 'section.bg-gradient-to-r.from-emerald-600.to-cyan-600 h2', key: 'cta.title' },
        { sel: 'section.bg-gradient-to-r.from-emerald-600.to-cyan-600 p', key: 'cta.subtitle' },
        { sel: 'section.bg-gradient-to-r.from-emerald-600.to-cyan-600 a.bg-white', key: 'cta.request' },
        { sel: 'section.bg-gradient-to-r.from-emerald-600.to-cyan-600 a.border-2', key: 'cta.contact' },

        // FOOTER (columnas y recursos concretos)
        { sel: 'footer .grid > div:nth-child(2) h3', key: 'footer.project' },
        { sel: 'footer .grid > div:nth-child(3) h3', key: 'footer.resources' },
        { sel: 'footer .grid > div:nth-child(4) h3', key: 'footer.contact' },
        { sel: 'footer .grid > div:nth-child(3) ul li:nth-child(1) a', key: 'footer.api' },
        { sel: 'footer .grid > div:nth-child(3) ul li:nth-child(2) a', key: 'footer.tutorials' },
        { sel: 'footer .grid > div:nth-child(3) ul li:nth-child(3) a', key: 'footer.cases' },
        { sel: 'footer .grid > div:nth-child(3) ul li:nth-child(4) a', key: 'footer.webinars' }
    ];

    function applyTranslations(lang) {
        const dict = I18N[lang] || I18N.es;
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);
        localStorage.setItem('lang', lang);

        // Aplica mapa
        MAP.forEach(({ sel, key, html }) => {
            const el = document.querySelector(sel);
            if (!el || !dict[key]) return;
            if (html) el.innerHTML = dict[key];
            else el.textContent = dict[key];
        });

        // Badges "Líder / Colaborador" en partners (varios, con distinto color)
        const leaderTxt = lang === 'en' ? dict['partners.badge.leader'] : I18N.es['partners.badge.leader'];
        const collabTxt = lang === 'en' ? dict['partners.badge.collab'] : I18N.es['partners.badge.collab'];
        document.querySelectorAll('#partners .inline-block').forEach(el => {
            const t = el.textContent.trim();
            if (t === 'Líder' || t === 'Leader') el.textContent = leaderTxt;
            if (t === 'Colaborador' || t === 'Collaborator') el.textContent = collabTxt;
        });

        // Botón idioma (muestra el destino)
        const btn = document.getElementById('languageToggle');
        if (btn) {
            btn.textContent = lang === 'es' ? 'EN' : 'ES';
            btn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
        }
    }

    // Exponer para reusar si hace falta
    window.SDS_i18n = { applyTranslations };

    document.addEventListener('DOMContentLoaded', () => {
        const saved = localStorage.getItem('lang') || 'es';
        applyTranslations(saved);

        const langBtn = document.getElementById('languageToggle');
        if (langBtn) {
            langBtn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-lang') || 'es';
                const next = current === 'es' ? 'en' : 'es';
                applyTranslations(next);
            });
        }
    });
})();
