export default function Hero() {
  return (
    <section
      className="h-[80vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/.png')" }}
    >
      <div className="container mx-auto px-4 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Brewed With Love</h2>
        <p className="text-lg md:text-xl mb-6">Your daily dose of coffee happiness</p>
        <a  
          href="#menu"
          className="inline-block bg-[#6F4E37] text-white px-6 py-3 rounded hover:bg-[#563826]"
        >
          Explore Menu
        </a>
      </div>
    </section>
  )
}
