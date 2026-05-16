// Edita acá los datos del evento. Ningún otro archivo necesita cambios.
export const EVENT = {
  // WhatsApp en formato internacional, sin "+", espacios ni guiones.
  // Ej Argentina: 5491112345678
  whatsapp: '5492616528760',
  rsvpMessage: '¡Hola! Confirmo que voy a Pancho party 🎉',

  // Google Maps > Compartir > Insertar mapa > Copiar HTML > pegá SOLO la URL del src=""
  mapsEmbed:
    'https://www.google.com/maps?q=Adriano+G%C3%B3mez+840,+Maip%C3%BA,+Mendoza&output=embed',

  // Imagen de fondo. Dejá el archivo en /public con este nombre.
  bgImage: 'invitacion.png',

  // Posiciones (%) de los overlays sobre la imagen.
  // Ajustá si tu imagen tiene el cuadro del mapa o el "toca acá" en otro lugar.
  mapBox: { top: 55, left: 27, width: 42, height: 17 },
  rsvpBox: { bottom: 3, width: 55, height: 7 },

  // Relación de aspecto de la imagen (ancho / alto).
  aspectRatio: '1080 / 1416',
} as const
