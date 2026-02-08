

const experiences = [
  {
    period: "2023 - 2025",
    role: "Warehouse Data Entry",
    company: "Focus Star Tobacco Comapny",
    description:
      "Performed data entry for warehouse inventory, recording stock movements, updating records, and ensuring accurate documentation of incoming and outgoing goods.",
    technologies: ["TME lite", "Microsoft Office 365"],
    current: true,
  },

  {
    period: "2023 - 2023",
    role: "Phone Service Technician",
    company: "i-Lab apple service",
    description:
      "Provided hardware and software repair services for smartphones, including screen replacement, battery repair, troubleshooting, and system diagnostics.",
    technologies: ["Utility tools", "Some Firmwares", "iTunes"],
    current: false,
  },

  {
    period: "2022 - 2023",
    role: "3D animator",
    company: "Quasar Animation Studio",
    description:
      "I worked as a 3D animator, creating product animation videos with realistic visuals, smooth motion, and clear storytelling.",
    technologies: ["Blender", "Adobe Photoshop", "Filmora"],
    current: false,
  },

  {
    period: "2021 - 2022",
    role: "Freelance 3D animator",
    company: "Diginity",
    description:
      "I worked as a freelance 3D animator, creating product animation videos with realistic visuals, smooth motion, and clear storytelling.",
    technologies: ["Blender", "Adobe Photoshop",],
    current: false,
  }
];



const Experience = () => {
    return (
      <section id="experience" className="py-32 relative overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
          />

          <div className='container mx-auto px-6 relative z-10'>
            {/* Section header */}
            <div className="max-w-3xl mb-16">
              <span
                className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
              >
                Career Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                Experience that <span className="font-serif italic font-normal text-white"> speaks volumes.</span>
              </h2>

              <p 
                className="text-muted-foreground animate-fade-in animation-delay-200"
              >
                Between 2021 and 2025, I worked across creative, technical, and operational roles — from 3D animation and smartphone repair to warehouse data entry and inventory management.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* vertical line */}
              {/* <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0  w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" /> */}
              <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0  w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent transform -translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

              {/* Experience Items */}
              <div className="space-y-12">
                {experiences.map((exp, index) =>(
                  <div 
                    key={index}
                    className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                    style={{
                      animationDelay: `${(index + 1) * 150}ms`,
                    }}
                  >

                    {/* Timeline dots */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                      {exp.current && (<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />)}
                    </div>

                    {/* Contents */}
                    <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16 "}`}>
                      <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                        
                        <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}> 
                          {exp.technologies.map((tech, techIndex) => (  
                            <span 
                              key={techIndex} 
                              className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
    )
}

export default Experience