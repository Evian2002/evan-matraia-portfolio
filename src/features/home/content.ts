export const githubUrl = "https://github.com/Evian2002/evan-matraia-portfolio";

export const homeMeta = {
  title: "Evan Matraia — Multimedia Designer based in Lithuania",
  description:
    "Portfolio of Evan Matraia, a multimedia designer based in Lithuania specializing in UI/UX, graphic design, video editing and game development.",
  ogTitle: "Evan Matraia — Multimedia Designer",
  ogDescription:
    "Multimedia designer based in Lithuania. Explore selected work across web, motion, games and 3D.",
} as const;

export const softwareTools = [
  { name: "Adobe Suite", icon: "adobe", bg: "linear-gradient(135deg,#ff4d4d,#ffb347)" },
  { name: "Affinity", icon: "affinity", bg: "linear-gradient(135deg,#9eff4d,#3ec300)" },
  { name: "Figma", icon: "figma", bg: "linear-gradient(135deg,#f24e1e,#a259ff)" },
  { name: "Javascript", icon: "javascript", bg: "linear-gradient(135deg,#f7df1e,#e6c200)" },
  { name: "Webflow", icon: "webflow", bg: "linear-gradient(135deg,#4353ff,#28a7ff)" },
  { name: "JetBrains", icon: "jetbrains", bg: "linear-gradient(135deg,#ff318c,#fcee09)" },
  { name: "Davinci Resolve", icon: "davinci", bg: "linear-gradient(135deg,#233a7a,#7aa6ff)" },
  { name: "Blender", icon: "blender", bg: "linear-gradient(135deg,#ea7600,#ffb347)" },
  { name: "Ableton Live", icon: "ableton", bg: "linear-gradient(135deg,#1a1a1a,#444)" },
] as const;

export const skills = [
  "Copywriting",
  "Video Editing",
  "UI/UX Design",
  "Graphic Design",
  "Vibe Coding",
  "Design Thinking",
] as const;

export const projects = [
  {
    slug: "tixlr-events-website",
    title: "Tixlr Events Website",
    tag: "Web Design / Programming",
    stack: ["PHP", "XAMPP", "Stripe"],
    bg: "linear-gradient(135deg,#f5e4c2,#c9854b)",
    image: "Screenshot 2026-05-20 131856.png",
    description:
      "A full-featured event listing and ticketing platform designed with a warm, inviting color palette. Built for event discovery, registration, and management with PHP and powered with XAMPP. The user has the ability to discover events in their area and sign up for them and the administrator is able to manage those events from their own seperate panel.",
    sections: [
      {
        title: "Event Details Page",
        description:
          "This is the page where the event details can be accessed. Uses an SQL database in order to pull up all of the relevant information and has dynamic ticketing that shows you how many tickets are left to purchase.",
        image: "Screenshot 2026-05-20 162138.png",
      },
      {
        title: "Admin Management Page",
        description:
          "A page where the administrator can see various statistics of how the site is being used as well as manage events and venues. They have different sections for managing events, managing promo codes, and managing venues which can all be toggled.",
        image: "Screenshot 2026-05-20 185319.png",
      },
      {
        title: "Ticket Purchase Page",
        description:
          "A page where the client is able to purchase tickets for the event and select the quantity and ticket type. There is also a section to place a promo code and when the purchase button is clicked it takes you to a stripe purchase screen.",
        image: "Screenshot 2026-05-20 190049.png",
      },
      {
        title: "Client Login Page",
        description:
          "A page where the client can login by inputting their email as well as their password. There is also a register section if needed.",
        image: "Screenshot 2026-05-20 185808.png",
      },
    ],
  },
  {
    slug: "lego-animation",
    title: "Brick-Built Animation",
    tag: "3D Animation / Blender",
    stack: ["Blender", "3D Modelling", "3D Animation"],
    bg: "linear-gradient(135deg,#f5d33f,#c62828)",
    image: "Lego_Animation_Screenshot.png",
    video: "Homework_2_Animation_Evan_M.mp4",
    description:
      "A short 3D animation bringing a minifigure to life as he wakes up from bed and goes to workout, modelled and animated in Blender. The project covers the character setup, the Blender workflow and a fully rendered animation.",
    sections: [
      {
        title: "The Minifigures Movement",
        description:
          "The minifigure moves with a character controller that hooks up to an armature. The environment was made using Mecabricks.com.",
        image: "Lego_Animation_Screenshot.png",
      },
      {
        title: "Blender Workflow",
        description:
          "An overview of the Blender workflow used to build and animate the scene, from modelling and rigging through to rendering. It shows the view of the camera before beginning the scene.",
        image: "Blender_workflow.png",
      },
      {
        title: "Minifigure View",
        description:
          "A closer look at the Lego minifigure model, showing the character detail and construction used in the animation. The ridgid body that the character uses is fully visible.",
        image: "Lego_minifigure_view.png",
      },
    ],
  },
  {
    slug: "convene-application",
    title: "Convene Application",
    tag: "App Design / UI Design",
    stack: ["Figma", "UI Design", "Prototyping", "Mobile"],
    bg: "linear-gradient(135deg,#0d1b2a,#243b5a)",
    image: "Screenshot 2026-05-20 133201.png",
    description:
      "Convene is a social‑interaction and event‑organizing mobile application designed to help people build meaningful connections in an age where technology has made real‑world interaction harder. The app acts as a community hub where users can create, discover, and join events or groups, ranging from spontaneous meetups to large, structured gatherings.",
    sections: [
      {
        title: "Homepage and group/event creation pages",
        description:
          "The home page as well as join pages for events and groups. A keyboard overlay was added to allow the search bar to be functional and the calendar displays \n" +
          "information for the current month. The actual events and groups show \n" +
          "information about the respective event/group as well as an image showing the event. The join pages \n" +
          "stay the same apart from some color added.",
        image: "Screenshot 2026-05-20 203728.png",
      },
      {
        title: "Welcome Screen",
        description:
          "A welcome screen made up of a sign-in screen and a log-in screen. There is also buttons for signing in via google and facebook accounts.",
        image: "Screenshot 2026-05-20 204204.png",
      },
      {
        title: "Group/events search screens and their respective sub-screens",
        description:
          "Here the group page is shown where the user can look through the different groups on offer. They can also tap on each group to see more about it.",
        image: "Screenshot 2026-05-20 203532.png",
      },
      {
        title: "Profile screen and settings",
        description:
          "There is a profile screen where you can write about yourself and your interests. You can also tap on the gear to see various settings such as notification and language settings.",
        image: "Screenshot 2026-05-20 204654.png",
      },
      {
        title: "Chats",
        description:
          "Chat screen where you can select the chats and see different people and their interests. You can also tap on their icon to see more about them as well as which groups they belong to.",
        image: "Screenshot 2026-05-20 202639.png",
      },
    ],
  },
  {
    slug: "frogventures-game",
    title: "Frogventures Home Game",
    tag: "Game Development",
    stack: ["Unity", "C#", "Game Design", "Aseprite"],
    bg: "linear-gradient(135deg,#7bbf6a,#3a7d3a)",
    image: "Frogventures_summer_biome.png",
    video: "Frogventures_Gameplay_final.mp4",
    description:
      "A charming 3D adventure game where you play as a frog on his way home to see his family in time for Christmas. Along the way the frog will encounter different enemies, traps, and puzzles.",
    sections: [
      {
        title: "Summer Biome",
        description:
          "This is where the player starts the game. It is a valley where the frog must gather logs that are spread out around the level in order to build a raft so he can ride down the river to the next level. The frog will encounter duck enemies that will chase him so it benefits the player to be stealthy in this section.",
        image: "Frogventures_summer_biome.png",
      },
      {
        title: "Halloween Biome (Candy Maze)",
        description:
          "This is a spooky biome that the frog ends up on after taking teh raft down the river. He must navigate a maze to collect candy to feed to a monster at the gate in order to get to the next part of the level.",
        image: "frogventures_Halloween_Biome.png",
      },
      {
        title: "Halloween Biome (Ghost Alley)",
        description:
          "Before the frog gets to the next level, he must get through a timed puzzle to try and get past all the ghosts patrolling the area and try not to get hit by the ghosts, otherwise the level will have to start again.",
        image: "Frogventures_halloween_biome_2.png",
      },
      {
        title: "Winter Biome",
        description:
          "This is the Christmas level and the frog is nearing the end of the game. He must navigate through a harsh winter landscape and keep track of a temperature meter so he doesnt freeze. The meter goes up as long as he is by a campfire but once he leaves it it begins to go down, which creates a fun mechanic to work around.",
        image: "Frogventures_winter_biome.png",
      },
    ],
  },
  {
    slug: "junkfall-game-design",
    title: "Junkfall Game Design",
    tag: "Game Design / UI Design",
    stack: ["Figma", "Game Design", "UI Design", "Aseprite"],
    bg: "linear-gradient(135deg,#8bc34a,#558b2f)",
    image: "Junkfall_lava_biome.png",
    video: "Junkfall_Trailer.mov",
    description:
      "A space game concept where the players scavenge and traverse distinct biomes in order to fix their broken ship. This concept is focused on the world-building, character design, and game mechanics design rather than a finished game itself. Figma was used for the creation of the ui and aseprite was used for the character design.",
    sections: [
      {
        title: "'Nauraupo Village' Biome",
        description:
          "The village is the player's home hub, where they can trade with the different NPCs in order to upgrade their suit and and companion robot. In the UI there is a health bar as well as a status for the amount of gears you have and gems. Gears are needed to improve your ship and gems are needed to trade with the villagers in the village. A minimap, oxygen meter, and inventory are also displayed. A fear level is above the robot companions head as well.",
        image: "Junkfall_village_biome.png",
      },
      {
        title: "'Laival Lava Fields' Biome",
        description:
          "A volcanic zone where the player and his companion must navigate through lava obstacles in order to progress. If they get hit by the lava, their health goes down but their suit is also compromised and their oxygen meter will begin to decrease at a faster rate. ",
        image: "Junkfall_lava_biome.png",
      },
      {
        title: "'Greeboh Swamp' Biome",
        description:
          "The swamp is an area that wasn't too fleshed out at the end of the process but there were ideas to add mud mechanics where the player would slow down if walking through it and so on.",
        image: "Junkfall_swamp_biome.png",
      },
      {
        title: "Storyboard and level map",
        description:
          "Storyboards map out the opening sequence, key beats and biome transitions. It details how the player has to go to each biome to complete a different task to progress the game along and then return to a quest-giver in the village. A snowy biome called 'Paticor Peak' was also included in our original mockup but wasn't developed.",
        image: "Junkfall_storyboard.png",
      },
      {
        title: "Game State Mechanics",
        description:
          "Game-state explorations cover the HUD, inventory, crafting, pause and death screens.",
        image: "Junkfall_game_states.png",
      },
    ],
  },
] as const;
