import SpotifyNowPlaying from 'app/components/spotify-now-playing'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Izumi Ando
      </h1>
      <p className="mb-4">
        {`You know that trend where people ask strangers to introduce themselves 
        without touching on their job or hobbies?
        Being somewhat of an introvert, I've never been asked to participate in this 
        activity irl, but recently I've spent some time thinking about how 
        I would respond if I found myself in such a situation.`}
        </p>
        <p className="mb-4">
        {`Lucky. That's how I would describe myself. Lucky especially in regards to
        the people I've been surrounded by throughout my life. 
        
        From my incredibly supportive family, 
        my friends who constantly light up my world, 
        the teachers and mentors who inspre me, 
        the incredibly cool people I randomly encouter in the most unexpected places...`}
        </p>
        
        <p className="mb-4">
        {`Those who know me, know that I have an uncanny 
        hit rate for "small world" encounters.
        You're probably one of those people, too. `}
        </p>

        <p className="mb-4">
        {`So even though I have no idea who is reading this right now, 
        hi! Thanks for stopping by my little nook of the internet.`}
        </p>
      <div className="my-8">
        <p className="mb-2 font-bold">welcome to this weirdly intimate corner</p>
        <SpotifyNowPlaying />
      </div>
    </section>
  )
}
