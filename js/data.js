// ============================================================
// All the editable copy lives here — swap in your real content
// without touching the markup or the interaction logic.
// ============================================================

const INTRO = {
  title: "hi! i'm elsie, an ui/ux designer and software developer.",
  body: "🌱 grow a sprout to read about a project, or catch a butterfly to learn about work experience!!!",
  cta: { label: "get in touch!", href: "#contact" },
  h1: "CS · Game Design · Digital Studies"
};

// Each key must match a data-project value on a .sprout in index.html
const PROJECTS = {
  "run-buddy": {
    image: "images/run-buddy-screenshot.jpg",
    title: "run buddy",
    body: [
      "Run Buddy is a web app that builds you a running playlist matched to your pace. You enter your mile time, height, and preferred genre, and it calculates your step cadence and pulls songs that matches your stride."
    ],
    tags: [["figma", "figma", "https://www.figma.com/design/Av5eNWYyCNzacyZ6G0xdqV/Untitled?node-id=0-1&t=IkPY8ytFHwFm3lFg-1"], 
          ["github", "github", "https://github.com/elsieeva/RunBuddy"], 
          ["demo", "demo", "https://elsieeva.github.io/RunBuddy/"]]
  },
  "fanpass": {
    image: "images/fanpass-screenshot.jpg",
    title: "fanpass",
    body: [
            "FanPass is a full-stack web platform that reduces ticket scalping by limiting purchases and resales to verified fans. I built the core frontend in React and Tailwind and the backend logic enforcing purchase limits and resale price caps."
    ],
    tags: [["figma", "figma", "https://www.figma.com/design/ExOtOwQ7ToYf6sNB8Thn39/FanPass?node-id=0-1&t=eXc2t52wRt7HhgDm-1"], 
          ["github", "github", "https://github.com/elsieeva/FanPass"], 
          ["demo", "demo", "https://cs571-f25.github.io/p108/"]]
  },
  "asl-classifier": {
    image: "images/asl-screenshot.jpg",
    title: "asl classifier",
    body: [
            "An AI model that classifies ASL fingerspelling, numbers 1–9 and letters A–Z, from photos, achieving 90% accuracy on cross-dataset test data. Built using transfer learning with DenseNet201, training on roughly 60,000 images combined from two public datasets.",
    ],
    tags: [["github", "github", "https://github.com/luna85043/asl-translator"],
            ["article", "article", "https://medium.com/@elsieeva313/asl-ai-model-11955b1bf59a?postPublishedType=initial"]]
  },
  "os-shell": {
    image: "images/os-shell-screenshot.jpg",
    title: "os shell",
    body: [
            "OS Shell is a custom Unix-style shell built in C, supporting both interactive and batch (script) execution modes.",
    ],
    tags: [["github", "github", "https://github.com/elsieeva/OSShell/tree/main"]]
  },
  "mise": {
    image: "images/mise-screenshot.jpg",
    title: "mise",
    body: [
            "Mise is an AI-powered recipe app that turns free-form user input into structured, personalized recipes using the Gemini API. You can import existing recipes and search your collection by ingredient, or use the AI function to generate new recipe variations.",
    ],
    //TO DO: add figma and demo
    tags: [
          ["github", "github", "https://github.com/elsieeva/Mise"], 
          ]
  }
};

// Shown on the "get in touch" screen (swapped in when the intro CTA is clicked)
const CONTACT = {
  headline: "like my garden? get in touch",
  body: "Hi! I'm Elsie Thomas, a senior studying Computer Science (with minors in Game Design and Digital Studies). I love working where design and code meet. Right now I'm designing at Rythmeet and the web developer for WSUM 91.7 FM, and I'm looking for a full-time software engineering, UX/UI, or hybrid design-engineer role starting in 2027. Please reach out, I'd love to connect!",
  linkedin: "https://www.linkedin.com/in/elsieevathomas/",
  email: "elsieevathomas04@gmail.com"
};

// Each key must match a data-exp value (and #bfly-<key> id) on a .butterfly in index.html
const EXPERIENCES = {
  "rythmeet": {
    company: "rythmeet",
    image: "images/rythmeetwork.jpg",
    role: "Product / UX Engineering Intern",
    dates: "1/26 - present",
    body: [
    "Redesigned the app's profile and landing page experience.",
    "Led a redesign of the product logo and visual identity.",
    "Designed and maintained a reusable Figma component library to keep the UI consistent across the product."
    ],
    tags: [
      ["web", "web", "https://rythmeet.com/"], 
      ]
  },
  "wsum": {
    company: "wsum",
    image: "images/wsumafter.jpg",
    role: "Web Developer",
    dates: "6/26 - present",
    body: [
      "Led brand identity work and implementation for the station.",
      "Redesigned site navigation to better match the station's web aesthetic, cutting the number of tabs almost in half.",
      "Worked as the lead developer for the WSUM website"
    ],
    tags: [
      ["web", "web", "https://wsum.org/"], 
    ]
  },
  // "starbucks": {
  //   company: "starbucks",
  //   role: "[confirm your title]",
  //   dates: "[confirm start] – present",
  //   body: [
  //     "[placeholder — add a bullet or two on what you actually do/have learned here]"
  //   ],
  //   note: "placeholder — confirm title and add real bullets"
  // },
  // "hero-coffee-bar": {
  //   company: "hero coffee bar",
  //   role: "[confirm your title]",
  //   dates: "05/2021 – [confirm real end date — flagged as a likely typo in your roadmap]",
  //   body: [
  //     "[placeholder — add a bullet or two on what you actually did here]"
  //   ],
  //   note: "placeholder — confirm dates and add real bullets"
  // }
};
