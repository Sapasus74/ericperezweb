var language = "es";

var translations = {
    "es": {
        "sobreMiMenu": "[Sobre Mi]",
        "proyectosMenu" :"[Proyectos]",
        "conociminetosMenu" : "[Conociminetos]",
        "contactoMenu": "[Contacto]",
        "informacionHola": "Hola, mi nombre es [Eric Perez]",
        "informacionCiberseguridad": "apasionada por la ciberseguridad",
        "sobreMi": "[Sobre Mi]",
        "aboutMe": "Soy un estudiante de Administración de Sistemas Informáticos en Red (ASIR). Me apasiona el mundo de la ciberseguridad y el hacking ético y estoy comprometido con explorar sus dificultades y desafíos. Desde que entré en el mundo de la informática, tuve claro que lo que me interesaba estaba en asegurar sistemas y proteger la información digital.",
        "proyectos":"[Proyectos]",
        "proyectoFormualario":"Formulario con Login",
        "formualarioTexto":"Formulario hecho con PHP creado para proyecto de clase",
        "conociminetos":"[Conocimientos]",
    },
    "en": {
        "sobreMiMenu": "[About Me]",
        "proyectosMenu" :"[Projects]",
        "conociminetosMenu" : "[Knowledge]",
        "contactoMenu": "[Contact]",
        "informacionHola": "Hi, my name is [Eric Perez]",
        "informacionCiberseguridad": "passionate about cybersecurity",
        "sobreMi": "[About Me]",
        "aboutMe": "I am a student of Network Systems Administration (ASIR). I am passionate about the world of cybersecurity and ethical hacking and I am committed to exploring its difficulties and challenges. Since I entered the world of computing, I was clear that what interested me was in securing systems and protecting digital information.",
        "proyectos":"[Projects]",
        "proyectoFormualario":"Form with Login",
        "formualarioTexto":"Form made with PHP created for class project",
        "conociminetos":"[Knowledge]",
    }
};

function changeLanguage() {
    language = language === "es" ? "en" : "es";
    document.getElementById("sobreMi-menu").innerText = translations[language]["sobreMiMenu"];
    document.getElementById("proyectos-menu").innerText = translations[language]["proyectosMenu"];
    document.getElementById("conociminetos-menu").innerText = translations[language]["conociminetosMenu"];
    document.getElementById("contacto-menu").innerText = translations[language]["contactoMenu"];
    document.getElementById("informacion-hola").innerText = translations[language]["informacionHola"];
    document.getElementById("informacion-ciberseguridad").innerText = translations[language]["informacionCiberseguridad"];
    document.getElementById("sobre-mi").innerText = translations[language]["sobreMi"];
    document.getElementById("about-me").innerText = translations[language]["aboutMe"];    
    document.getElementById("proyectos").innerText = translations[language]["proyectos"];
    document.getElementById("proyecto-formualario").innerText = translations[language]["proyectoFormualario"];
    document.getElementById("formualario-texto").innerText = translations[language]["formualarioTexto"];
    document.getElementById("conociminetos").innerText = translations[language]["conociminetos"];
}

document.getElementById("language-switch").addEventListener("click", changeLanguage);
