document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    toggle.title = sidebar.classList.contains("collapsed")
      ? "Mostrar menú"
      : "Ocultar menú";
    toggle.textContent = sidebar.classList.contains("collapsed") ? "☰" : "⇦";
    if (sidebar.classList.contains("collapsed")) {
      toggle.style.left = ".3rem";
    } else {
      toggle.style.left = "5.5rem";
    }
  });
  // diver.js para poder explicar como funciona el sidebar y el toggle porque me da palo hablar de ello u.u
  // Instancia de driver.js
  const driver = window.driver.js.driver;

  // Configuramos el tour con pasos múltiples
  const driverObj = driver({
    showProgress: true,
    allowClose: true,
    animate: true,
    steps: [
      {
        element: "#header",
        popover: {
          title: "Encabezado decorativo",
          description:
            "Aquí está el logo institucional, tu avatar, y una ilusión de control. No hagas mucho caso.",
          side: "right",
          align: "start",
        },
      },
      {
        element: "#user-info",
        popover: {
          title: "Identidad visual",
          description:
            "Tu nombre y foto aparecen aquí. Nada en esta interfaz cambiará aunque pierdas el alma.",
          side: "right",
          align: "start",
        },
      },
      {
        element: "#top-tabs",
        popover: {
          title: "Navegación irónica",
          description:
            "Secciones como 'indicadores de fracaso' o 'postulaciones ignoradas'. Útiles para reír o llorar.",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "#toggleSidebar",
        popover: {
          title: "Interruptor de desesperanza",
          description:
            "Haz clic para mostrar u ocultar el menú lateral. Como todo en tu vida laboral: puede o no funcionar.",
          side: "right",
          align: "start",
        },
      },
      {
        element: "#sidebar",
        popover: {
          title: "Menú lateral burocrático",
          description:
            "Navega por secciones irrelevantes. La opción 'Ayuda' está desactivada porque nadie vendrá a ayudarte.",
          side: "right",
          align: "start",
        },
      },
      {
        element: "#resumen_paro",
        popover: {
          title: "Tiempo promedio sin empleo",
          description:
            "Te muestra cuántos meses llevas fuera del sistema productivo. Spoiler: muchos.",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "#resumen_postulaciones",
        popover: {
          title: "Rechazos silenciosos",
          description:
            "Aquí se listan procesos en los que nadie se molestó ni en rechazar formalmente tu candidatura.",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "#recomendaciones_cv",
        popover: {
          title: "Actualizaciones inútiles del CV",
          description:
            "Cada cambio en tu currículum ha sido ignorado meticulosamente. Pero sigue intentándolo.",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "#resumen_autoestima",
        popover: {
          title: "Medidor de autoestima",
          description:
            "Una métrica que baja con cada email automático de 'gracias por tu interés'.",
          side: "top",
          align: "start",
        },
      },
      {
        element: "footer",
        popover: {
          title: "Aquí termina el recorrido",
          description:
            "También podríamos llamarlo 'final del trayecto'. Esperamos que te haya decepcionado lo justo.",
          side: "top",
          align: "start",
        },
      },
      {
        popover: {
          title: "Gracias por no rendirte (aún)",
          description:
            "Esto fue SEPE Labs. Un dashboard hecho con cinismo, datos y una pizca de abandono institucional.",
        },
      },
    ],
  });

  driverObj.drive(); // Inicia el tour
});
