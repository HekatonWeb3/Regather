import { Link } from "react-router";

export default function HomePage() {
  return (
    <>
      <main className="px-24 space-y-16 mt-8">
        {/* recommendation carousel */}
        <section className="space-y-4">
          <h1 className="font-semibold text-magentas-100 uppercase">Your Recommendation</h1>
          {/* card novel */}
          <Link to="/" className="flex flex-col gap-2 w-44 group">
            <figure className="relative overflow-hidden rounded-md">
              <img src="/images/heartless.jpg" className="" alt="" />
              <div className="w-full h-full flex top-0 absolute transition-all group-hover:opacity-100 opacity-0 bg-magentas-100/50">
               <h1 className="text-white font-medium m-auto text-lg">Lihat</h1>
              </div>
            </figure>

            <article>
              <h1 className="font-medium text-base">Solo Leveling</h1>
              <p className="text-xs text-dark-300 line-clamp-1">Paranormal</p>
            </article>
          </Link>
        </section>

        <section className="grid gap-16 grid-cols-7 min-h-screen">
          <div className="col-span-5">
            <h1>Latest Novel</h1>

          </div>
          <div className="col-span-2 space-y-4">
            <h2>Most Popular Novel</h2>

            <main className="flex gap-4 hover:bg-magentas-100/20 transition-all">
                <h1 className="my-auto bg-amber-500 p-2 text-sm">1</h1>
              <figure className="flex gap-4 items-center">
                <img src="/images/heartless.jpg" className="h-16" alt="" />
              </figure>
              <article> 
                <h1 className="text-base font-medium">Heartless</h1>
                <div>

                  <p className="text-xs">4.7</p>
                </div>
              </article>
            </main>
          </div>
        </section>

      </main>
    </>
  )
}