// Guardar datos del paciente
document.getElementById("formPaciente")?.addEventListener("submit", function(e) {
  e.preventDefault();
  localStorage.setItem("nombre", document.getElementById("nombre").value);
  localStorage.setItem("telefono", document.getElementById("telefono").value);
  localStorage.setItem("email", document.getElementById("email").value);
  window.location.href = "especialidad.html";
});

// Guardar especialidad
function guardarEspecialidad(especialidad) {
  localStorage.setItem("especialidad", especialidad);
  window.location.href = "doctor.html";
}

// Guardar doctor
function guardarDoctor(doctor) {
  localStorage.setItem("doctor", doctor);
  window.location.href = "fecha.html";
}

// Generar fechas (de lunes a viernes, a partir de hoy)
function generarFechas() {
  const contenedor = document.getElementById("fechas");
  const hoy = new Date();
  let count = 0;
  while (count < 5) {
    hoy.setDate(hoy.getDate() + 1);
    if (hoy.getDay() > 0 && hoy.getDay() < 6) { // lunes a viernes
      const fechaStr = hoy.toDateString();
      const btn = document.createElement("button");
      btn.classList.add('boton'); // la clase boton a las fechas
      btn.textContent = fechaStr;
      btn.onclick = () => {
        localStorage.setItem("fecha", fechaStr);
        window.location.href = "horario.html";
      };
      contenedor.appendChild(btn);
      count++;
    }
  }
}

// Generar horarios (media hora desde 07:00 hasta 18:00)
function generarHorarios() {
  const contenedor = document.getElementById("horarios");
  for (let h = 7; h < 18; h++) {
    for (let m of [0, 30]) {
      const hora = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
      const btn = document.createElement("button");
      btn.classList.add('boton'); // la clase boton a las fechas
      btn.textContent = hora;
      btn.onclick = () => {
        localStorage.setItem("horario", hora);
        window.location.href = "confirmacion.html";
      };
      contenedor.appendChild(btn);
    }
  }
}

// Mostrar confirmación final
function mostrarConfirmacion() {
  const resumen = document.getElementById("resumen");
  const datos = [
    ["Nombre y Apellido", localStorage.getItem("nombre")],
    ["Teléfono", localStorage.getItem("telefono")],
    ["Correo", localStorage.getItem("email")],
    ["Especialidad", localStorage.getItem("especialidad")],
    ["Doctor", localStorage.getItem("doctor")],
    ["Fecha", localStorage.getItem("fecha")],
    ["Horario", localStorage.getItem("horario")]
  ];
  datos.forEach(([key, val]) => {
    const li = document.createElement("li");
    li.textContent = `${key}: ${val}`;
    resumen.appendChild(li);
  });
}

