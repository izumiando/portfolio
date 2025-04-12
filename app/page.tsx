import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Izumi Ando
      </h1>
      <p className="mb-4">
        {`Never thought this day would come, but here we are. 
        I bought this domain on GoDaddy while sitting in kweer cafe in Zurich in June 2024. 
        It's been nearly a year and I've finally set up a website for it. Let's see what kind of fun stuff we can do with this!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
