const PRESENTATION_CONFIG = {

  // Flying characters -- drop PNGs in assets/ and list them here.
  // Positions are randomized automatically around the slide panel edges.
  // Optional: add  position: { left: "30px", top: "50%" }  to pin a character.
  // Optional: add  height: "100px"  to override the default 140px.
  characters: [
    { src: "assets/char-astro-cloud.png", alt: "Astro" },
    { src: "assets/char-robot-cloud.png", alt: "Robot" },
    { src: "assets/char-robot-flying.png", alt: "Flying Robot" },
    { src: "assets/char-robot-slack.png", alt: "Celebrating Robot" },
  ],

  // Full-viewport background image (1920x1080+ recommended, dark works best)
  background: "assets/sf-bg.png",

  // Top-right cloud logo. Set show:false to hide.
  logo: {
    text: "your brand",
    show: true,
  },

  // Set true to shuffle character positions on each page load
  randomizeCharacters: false,

  // Slide manifest -- names, layout types, and headings for each slide in order.
  //   name   : label shown in the slide counter
  //   layout : layout type (for agent skill reference)
  //   title  : the slide's h1/h2 heading text, applied at runtime
  // Available layouts: title, agenda, cards, code, features, comparison, demo, image, bullets, section
  slides: [
    { name: "Title",            layout: "title",    title: "Title" },
    { name: "Agenda",           layout: "agenda",   title: "Agenda" },
    { name: "Two-Column Cards", layout: "cards",    title: "Two-Column Cards" },
    { name: "Code Example",     layout: "code",     title: "Code Example" },
    { name: "Feature Grid",     layout: "features", title: "Feature Grid" },
    { name: "Closing",          layout: "title",    title: "Closing" },
  ],

  // Auto-play -- automatically advance slides on a timer.
  // Remove or omit to hide the auto-play button entirely.
  //   enabled  : start playing on page load (default false)
  //   interval : milliseconds per slide (default 5000)
  // autoPlay: {
  //   enabled: false,
  //   interval: 5000,
  // },

  // Slide counter -- controls the slide number display.
  //   show     : set to false to hide (default true)
  //   format   : "numbered" (1 / 6 -- Name), "simple" (Slide 1 of 6), "minimal" (1 / 6)
  //   position : "bottom-right", "bottom-left", "top-right", "top-left"
  //   fontSize : CSS font-size value (default "14px")
  //   color    : CSS color value (default uses --text-muted)
  slideCounter: {
    show: true,
    format: "numbered",
  },

  // Color theme -- mapped to CSS custom properties at runtime.
  //   bg      -> --bg           (page background fallback)
  //   surface -> --surface      (card/panel fill, use rgba with ~0.85 opacity)
  //   accent  -> --accent       (links, highlights, progress bar)
  //   pink    -> --pink         (tags, keywords)
  //   yellow  -> --yellow       (values, flags)
  //   green   -> --green        (strings, success)
  theme: {
    bg: "#032D60",
    surface: "rgba(6,65,122,0.85)",
    accent: "#1B96FF",
    pink: "#FF538A",
    yellow: "#FE9339",
    green: "#45C65A",
  },
};
