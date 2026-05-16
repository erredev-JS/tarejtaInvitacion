import { EVENT } from './config'

function App() {
  const waUrl = `https://wa.me/${EVENT.whatsapp}?text=${encodeURIComponent(EVENT.rsvpMessage)}`
  const bg = `${import.meta.env.BASE_URL}${EVENT.bgImage}`

  return (
    <main className="min-h-svh w-full bg-stone-400 flex items-center justify-center sm:p-4">
      <div
        className="relative w-3/4 max-w-160 bg-stone-200 shadow-2xl overflow-hidden rounded-2xl"
        style={{
          aspectRatio: EVENT.aspectRatio,
          backgroundImage: `url("${bg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute overflow-hidden rounded-md ring-1 ring-stone-300/60 shadow-inner"
          style={{
            top: `${EVENT.mapBox.top}%`,
            left: `${EVENT.mapBox.left}%`,
            width: `${EVENT.mapBox.width}%`,
            height: `${EVENT.mapBox.height}%`,
          }}
        >
          <iframe
            title="Ubicación del evento"
            src={EVENT.mapsEmbed}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Confirmar asistencia por WhatsApp"
          className="absolute left-1/2 -translate-x-1/2 rounded-full"
          style={{
            bottom: `${EVENT.rsvpBox.bottom}%`,
            width: `${EVENT.rsvpBox.width}%`,
            height: `${EVENT.rsvpBox.height}%`,
          }}
        />
      </div>
    </main>
  )
}

export default App
