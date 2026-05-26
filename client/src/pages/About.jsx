import { useEffect, useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const animatedItems = aboutRef.current?.querySelectorAll(".about-reveal");

    if (!animatedItems?.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={aboutRef} className="py-16 bg-bg-main transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="about-reveal about-reveal-left animation-delay-0 text-4xl font-bold text-text-base">Our Mission</h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p className="about-reveal about-reveal-left animation-delay-150">
                Ignite Academy was founded with one purpose: to create a learning environment where 
                anyone can gain the skills and confidence needed to succeed in the digital age.
              </p>
              <p className="about-reveal about-reveal-left animation-delay-300">
                Our mission is to provide high-quality, accessible training that bridges the gap 
                between traditional education and real-world industry demands.
              </p>
              <p className="about-reveal about-reveal-left animation-delay-500">
                Beyond teaching skills, we are building a supportive community. We encourage 
                collaboration and mentorship because learning is most powerful when people inspire one another.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="about-reveal about-reveal-right animation-delay-300 group relative">
            <div className="about-image-glow absolute -inset-4 bg-brand/20 rounded-2xl blur-lg"></div>
            <img 
              src="/Assets/team work.jpg" 
              alt="Team working together" 
              className="about-image-hover relative rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
