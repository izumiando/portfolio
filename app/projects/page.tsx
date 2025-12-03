export const metadata = {
    title: 'Projects',
    description: 'Read about my digital projects.',
  }
  
  // to do: make the project titles smaller
  export default function Page() {
    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">digital projects</h1>
        <p className="mb-4">
          {`more in progress...`}
        </p>
        <h3 className="font-semibold text-2xl mb-8 tracking-tighter">Japan Guide</h3>
        <p className="mb-4">
          {`Over 10 people reached out to me in early 2025 for travel tips for Japan so I decided to make a Notion guide instead of copy and pasting my responses to everyone. If you're also going to Japan, please feel free to use, share, and give feedback!`}
        </p>
        <a 
        href="https://izumisjapanguide.notion.site/" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'underline' }}
        >View Project 🎏</a>
        
        <h3 className="font-semibold text-2xl mb-4 mt-12 tracking-tighter">holiday card for loved ones - 2024</h3>
        <p className="mb-4">hand drawn and animated in procreate</p>
        <div className="rounded-lg overflow-hidden max-w-md">
          <img
            src="/Happy_Holidays.gif"
            alt="Holiday card for loved ones - 2024"
            className="w-full h-auto"
          />
        </div>
      </section>
    )
  }
  