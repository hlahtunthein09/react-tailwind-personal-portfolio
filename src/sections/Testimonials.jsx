import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"


const testimonials = [
  {
    quote: "Outstanding work on our React application. Htun delivered a high-performance, well-structured, and user-friendly solution that significantly improved the overall experience and reliability of our product.",
    author: "Myat Min Phyo",
    role: "CTO, TechStart Inc.",
    avatar: "/images/testimonials/person1.jpg",
  },

  {
    quote: "Working with Htun was a game-changer for our project. His technical skills, creativity, and reliability helped us overcome challenges and deliver high-quality results on time.",
    author: "Zay Khant Linn",
    role: "Product Manager, Digital Innovations.",
    avatar: "/images/testimonials/person2.jpg",
  },

  {
    quote: "Htun transformed our vision into reality with a stunning, user-friendly interface that was both intuitive and polished.",
    author: "Zeyar Paing",
    role: "Founder, StartupHub.",
    avatar: "/images/testimonials/person3.jpg",
  },

  {
    quote: "Incredible expertise in React and modern web technologies, consistently delivering fast, reliable, and maintainable solutions.",
    author: "Wai Phyo Naing",
    role: "Lead Developer, WebSolutions Co.",
    avatar: "/images/testimonials/person4.jpg",
  }
]

const Testimonials = () => {

  const [ activeIndex, setActiveIndex ] = useState(0);

  const next = () =>{
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () =>{
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };


  return (
    <section
      id="testimonials"
      className="py-32 relative overflow-hidden"
    >
      {/* background */}
      <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div
        className="container mx-auto px-6 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">What People Say</span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">amazing people.</span>
          </h2>

        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />

                {/* Author and Role s*/}
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => ( 
                  <button 
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${ 
                      idx === activeIndex 
                              ? "w-8 bg-primary" 
                              : "bg-muted-foreground/30 hover:bg-muted-foreground/50" }`}
                  />
                ))}
              </div>

              <button 
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={next}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials