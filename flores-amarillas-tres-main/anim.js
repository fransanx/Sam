// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Georgia", time: 10 },
  { text: "wrap me up in all your...", time: 12 },
  { text: "i want you...", time: 16 },
  { text: "in my arms", time: 20 },
  { text: "oh, let me hold ya", time: 21.5 },
  { text: "I'll never let you go again", time: 26.7 },
  { text: "like i did", time: 31 },
  { text: "oh, i used to say", time: 32.5 },
  { text: "i would never fall in love again untill i found her", time: 36.8 },
  { text: "i said,''i would never fall unless it's you i fall into''", time: 43.7 },
  { text: "i was lost within the darkness, but then i found her", time: 50.5 },
  { text: "i found you", time: 57.3 },
  { text: "heaven", time: 68 },
  { text: "When i held you again", time: 70 },
  { text: "How could we ever just be friends", time: 74 },
  { text: "I would ever rather die than let you go", time: 80.5 },
  { text: "Juliet to your Romeo", time: 86 },
  { text: "How i heard you say", time: 89.6 },
  { text: "i would never fall in love again untill i found her", time: 93.7 },
  { text: "i said,''i would never fall unless it's you i fall into''", time: 100 },
  { text: "i was lost within the darkness, but then i found her", time: 107 },
  { text: "I found you", time: 114.3 },
  { text: "i would never fall in love again untill i found her", time: 136 },
  { text: "i said,''i would never fall unless it's you i fall into''", time: 143.6 },
  { text: "i was lost within the darkness, but then i found her", time: 150.6 },
  { text: "I found you", time: 157.6 },
  { text: "I love you.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);