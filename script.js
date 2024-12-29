document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("surveyForm");
    const resultContainer = document.getElementById("resultContainer");
    const recommendedMethod = document.getElementById("recommendedMethod");
    const explanation = document.getElementById("explanation");
  
    // Puntajes iniciales para cada método
    let scores = {
      smart: 0,
      okr: 0,
      bsc: 0,
      grow: 0,
    };
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Reiniciamos los puntajes
      scores.smart = 0;
      scores.okr = 0;
      scores.bsc = 0;
      scores.grow = 0;
  
      // Obtenemos las respuestas seleccionadas
      const q1 = form.querySelector('input[name="q1"]:checked').value;
      const q2 = form.querySelector('input[name="q2"]:checked').value;
      const q3 = form.querySelector('input[name="q3"]:checked').value;
  
      // Sumamos al método elegido
      scores[q1]++;
      scores[q2]++;
      scores[q3]++;
  
      // Ordenamos por puntaje
      const sortable = Object.entries(scores).sort((a, b) => b[1] - a[1]);
      const topMethod = sortable[0][0];
  
      // Explicaciones resumidas
      const explanations = {
        smart:
          "El método SMART se basa en definir objetivos Específicos, Medibles, Alcanzables, Relevantes y con un tiempo definido. Ideal para metas concretas y de corto plazo.",
        okr:
          "OKR (Objectives and Key Results) te ayuda a establecer objetivos ambiciosos y resultados clave medibles. Es útil para equipos que desean iterar rápidamente y promover la transparencia.",
        bsc:
          "Balanced Scorecard (BSC) traduce la estrategia en objetivos medibles en dimensiones financiera, de clientes, de procesos internos y de crecimiento. Es adecuado para organizaciones que buscan una visión integral.",
        grow:
          "El Modelo GROW (Goal, Reality, Options, Will) se centra en el autodescubrimiento y la facilitación de objetivos. Útil para coaching individual o de equipo y para el desarrollo personal."
      };
  
      // Mostramos el resultado
      recommendedMethod.textContent = topMethod.toUpperCase();
      explanation.textContent = explanations[topMethod];
      resultContainer.style.display = "block";
  
      // Realizamos scroll hacia la sección de resultados
      resultContainer.scrollIntoView({ behavior: "smooth" });
    });
  });
  