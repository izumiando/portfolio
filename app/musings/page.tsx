import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Musings',
  description: 'Read my musings.',
}

import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">musings</h1>
      
      <div className="mb-8">
        <h2 className="mb-2 text-xl font-semibold tracking-tight">
          sleep deprived day dream
        </h2>
        <h3 className="mb-4 text-lg">
          2020, acrylic on canvas
        </h3>
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/daydream.jpg"
            alt="Sleep deprived day dream - acrylic painting on canvas"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
