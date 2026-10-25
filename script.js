
gsap.registerPlugin(ScrollTrigger);

//  Dark mode toggle 
const darkModeToggle = document.getElementById("darkModeToggle");
const rootElement = document.documentElement;

const storedTheme = localStorage.getItem("kwkc-theme");
if (storedTheme === "dark") rootElement.classList.add("dark");

darkModeToggle.addEventListener("click", () => {
  rootElement.classList.toggle("dark");
  localStorage.setItem(
    "kwkc-theme",
    rootElement.classList.contains("dark") ? "dark" : "light"
  );
});

//  Page-load intro timeline 

const introTimeline = gsap.timeline({
  defaults: { duration: 0.55, ease: "power2.out" }, 
});

introTimeline
  .from("header", { y: -40, opacity: 0 })
 
  .from(
    "#hero [data-intro]:not(div)",
    { y: 30, opacity: 0, stagger: 0.1 },
    "-=0.25"
  )
  
  .from(
    "#hero div[data-intro]",
    { y: 20, opacity: 0, stagger: 0.06, ease: "power1.out" }, 
    "<"
  )
  
  .from(
    "#hero .hero-image",
    { scale: 0.94, opacity: 0, duration: 0.65, ease: "power3.out" }, 
    "-=0.15"
  );


document.getElementById("replayBtn").addEventListener("click", () => {
  introTimeline.restart();
});


const mm = gsap.matchMedia();

mm.add(
  {
    motionOK: "(prefers-reduced-motion: no-preference)",
    reduceMotion: "(prefers-reduced-motion: reduce)",
  },
  (context) => {
    const { motionOK } = context.conditions;

  
    if (!motionOK) {
      gsap.set(
        ".reveal, .services-card, .feature-card, .contact-panel, .hero-image, .section-title, #siteFooter",
        { opacity: 1, y: 0, scale: 1, rotate: 0, clearProps: "all" }
      );
      return;
    }

    gsap.utils.toArray(".reveal").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // Section headings gentle slide-up as they enter
    gsap.utils.toArray(".section-title").forEach((title) => {
      gsap.fromTo(
        title,
        { y: 40, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          ease: "none", 
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "top 55%",
            scrub: true,
          },
        }
      );
    });

    //  Hero layered 
    gsap.to("#hero .hero-headline", {
      yPercent: -20,
      ease: "none", 
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to("#hero .hero-copy", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to("#hero .hero-cta", {
      yPercent: -25,
      scale: 1.02,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to("#hero .hero-image", {
      yPercent: -22,
      scale: 1.06,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    //  Services scrub) 
    gsap.utils.toArray(".services-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0.2, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "none", 
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            end: "top 55%",
            scrub: true,
          },
        }
      );
    });

    //Featured (scrub) 
    gsap.utils.toArray(".feature-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0.2,
          y: 50,
          rotate: index % 2 === 0 ? -3 : 3,
        },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          ease: "none", 
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            end: "top 55%",
            scrub: true,
          },
        }
      );
    });

    // Contact (scrub)
    gsap.fromTo(
      ".contact-panel",
      { opacity: 0.2, scale: 0.92 },
      {
        opacity: 1,
        scale: 1,
        ease: "none", 
        scrollTrigger: {
          trigger: ".contact-panel",
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // scrub)
    gsap.utils.toArray(".blob").forEach((blob, index) => {
      gsap.to(blob, {
        yPercent: (index + 1) * 15 * (index % 2 === 0 ? 1 : -1),
        ease: "none", 
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });

    // Progress bar (scrub)
    gsap.to("#progressBar", {
      scaleX: 1,
      transformOrigin: "left center",
      ease: "none", 
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Footer fade tied to scrub 
    gsap.fromTo(
      "#siteFooter",
      { opacity: 0.2, y: 30 },
      {
        opacity: 1,
        y: 0,
        ease: "none", 
        scrollTrigger: {
          trigger: "#siteFooter",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }
);