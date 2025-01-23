import { Button, ButtonSecondary } from "../components/elements/Button";
import "./LandingPage.css"
const content = [
  {
    title: " Write & Share",
    desc: "Create your own novel, upload your story, and share it with the community to spark collaboration.",
    image: "/images/pen-tool.png"
  },
  {
    title: "Collaborate & Vote",
    desc: "Readers and contributors can propose alternate versions of your story. Let the community vote and decide the next chapter.",
    image: "/images/nodes.png"
  },
  {
    title: "Community-Driven Creativity",
    desc: "Experience a decentralized platform where every voice matters and stories evolve with collective input.",
    image: "/images/brain.png"
  }
]

export default function LandingPage() {
  return (
    <main className="px-4 xl:px-24 relative text-dark-100">
      <section className="flex flex-col md:grid md:grid-cols-2 mt-8 md:mt-16 z-10">
        <article className="flex flex-col md:gap-4 my-auto order-3 md:order-1">
          <h1 className="__text-gradient font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-transparent leading-normal bg-clip-text">Empowering Stories with Decentralized Collaboration</h1>
          <p className="text-dark-400 text-xs md:text-base lg:text-xl">Write your story, refine the plot, and let the community decide what comes next.</p>
          <ul className="flex gap-4 mt-4 md:mt-8">
            <Button>Explore Stories</Button>
            <ButtonSecondary>Start your story</ButtonSecondary>
          </ul>
        </article>

        <figure className="order-1 md:order-2">
          <img src="/images/hero-block.png" alt="" />
        </figure>
      </section>

      <section className="mt-24 md:mt-32 lg:mt-44 space-y-8 md:space-y-24">
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-relaxed">Collaborate, Create, and <br /> Refine</h1>
        <ul className="flex flex-col gap-8 md:grid grid-cols-3 md:gap-16 xl:gap-36">
          {content.map((X, index) => (
            <figure key={index} className="flex flex-col items-center justify-between gap-4 bg-light-100 shadow-custom-light p-8 rounded-xl">
              <img src={X.image} className="aspect-auto h-32 md:h-40 w-fit" alt="" />
              <div className="flex flex-col items-center text-center gap-2 md:gap-4">
                <h2 className="font-semibold text-xl md:text-2xl">{X.title}</h2>
                <p className="text-dark-300 text-sm">{X.desc}</p>
              </div>
            </figure>
          ))}
        </ul>
      </section>
      <img src="/images/bg-gradientcircle.png" className="absolute -z-10 left-0 h-[75%] w-full top-[1%]" alt="" />
    </main>
  )
}