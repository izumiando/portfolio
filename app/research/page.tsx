export default function Research() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        research
      </h1>
      <p className="mb-8">
        {``}
      </p>
      
      <div className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Impacts of Dataset Imbalance on Single-Cell Foundation Models
        </h2>
        <h3 className="mb-4 text-lg">
          scverse Conference 2025 at Stanford
        </h3>
        <p className="mb-6">
          Preliminary results from my work in the Campbell Lab extending Hassaan's Iniquitate pipeline.
        </p>
        
        <div className="mt-6">
          <p className="mb-4 text-sm">Poster:</p>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="/scverse_poster.pdf"
              width="100%"
              height="500px"
              className="border-none"
              title="scverse 2025 Poster"
            />
          </div>
          <div className="mt-2 text-right">
            <a 
              href="/scverse_poster.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              Open in new tab
            </a>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Deploying User-Friendly Software: Six Recommendations to Make Single-Cell Foundation Models More Usable For Scientific Discovery
        </h2>
        <h3 className="mb-4 text-lg">
          <a 
            href="https://openreview.net/forum?id=m6AUiyAWr0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            ICML 2025 CODEML Workshop
          </a>
        </h3>
        
        <div className="mb-4">
          <a 
            href="https://openreview.net/forum?id=m6AUiyAWr0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read Paper
          </a>
        </div>
        
        <div className="mt-6">
          <p className="mb-4 text-sm">Poster:</p>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="/icml_poster_final.pdf"
              width="100%"
              height="800px"
              className="border-none"
              title="ICML 2025 Poster"
            />
          </div>
          <div className="mt-2 text-right">
            <a 
              href="/icml_poster_final.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              Open in new tab
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}