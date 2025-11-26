export const metadata = {
    title: 'Projects',
    description: 'Read about my digital projects.',
  }
  
  // to do: make the project titles smaller
  export default function Page() {
    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
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
      </section>
    )
  }
  