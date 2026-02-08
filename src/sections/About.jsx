import { Code2, Lightbulb, Rocket, User, Users } from 'lucide-react'
import React from 'react'


const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time.",
    },

    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and delivering light-fast user experiances.",
    },

    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life.",
    },

    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying ahead with the latest technologies and best practices.",
    },
]
const About = () => {
    return (
        <section id='about' className='relative py-32 overflow-hidden'>
            <div className='container mx-auto px-6 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-16 items-center'>
                    {/* Left Column */}
                    <div className='space-y-8'>
                      <div className='animate-fade-in'>
                        <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                          About Me
                        </span>
                      </div>

                      <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
                        Building the future,
                        <span className='font-serif italic font-normal text-white'> one component at a time.</span>
                      </h2>

                      <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
                          <p>
                              I am a passionate web developer with over five years of experience building impactful digital products.
                              My journey began with a strong curiosity about how the web works, 
                              which gradually grew into deep expertise in modern frontend technologies.
                          </p>

                          <p>
                              I specialize in React, Next.js, and TypeScript, creating everything 
                              from sleek landing pages to complex enterprise applications. 
                              My approach combines technical excellence with a keen eye for design and user experience.
                          </p>

                          <p>
                              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                              and sharing knowledge with the developer community.
                          </p>
                      </div>

                      {/* Mission */}
                      <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
                          <p className='text-lg font-medium italic text-foreground'>
                            My mission is to build digital experiences that are not only functional,
                            but genuinely engaging — products that users enjoy using and developers take pride in creating and maintaining.
                          </p>
                      </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className='grid sm:grid-cols-2 gap-6'>
                      {highlights.map((item, index) => (
                        <div 
                          key={index}
                          className='glass p-6 rounded-2xl animate-fade-in'
                          style={{
                            animationDelay: `${(index + 1) * 100}ms`,
                          }}
                        >
                          <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                            {/* remember icons are components */}
                            <item.icon className='w-6 h-6 text-primary'/>
                          </div>

                          <h3 className='text-lg mb-2 font-semibold'>{item.title}</h3>

                          <p className='text-sm text-muted-foreground'>{item.description}</p>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About