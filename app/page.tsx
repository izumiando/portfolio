import SpotifyNowPlaying from 'app/components/spotify-now-playing'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Izumi Ando
      </h1>
      <p className="mb-4">
        {`Brought to you from Tokyo! - Nov 2025`}
        </p>
      <div className="my-8">
        <p className="mb-2">weirdly intimate</p>
        <SpotifyNowPlaying />
      </div>
    </section>
  )
}
