export interface AccountCaseStudy {
  id: string;
  name: string;
  platform: string;
  category: string;
  positioning: string;
  role: string;
  direction: string;
  strategy: string;
  testing: string;
  tools: string[];
  results: string;
  highlights?: string;
  metrics?: { label: string; value: string }[];
  coverImage?: string;
  accountLink?: string;
  viralVideos?: { title: string; views: string; thumbnail?: string; videoUrl?: string }[];
  strategyInsights?: {
    positioning: string;
    contentDirection: string;
    contentTypes: string[];
    tools: string[];
    whatWasTested: string[];
    keyResults: string;
    keyLearnings: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  concepts?: string;
  workflow?: string;
  problem?: string;
  process?: string;
  challenges?: string;
  outcome?: string;
  reflection?: string;
  keyFeatures?: string[];
  mockups?: string[];
  tools: string[];
  date?: string;
  painPoints?: { title: string; content: string }[];
  coverImage?: string;
  coverFit?: 'cover' | 'contain';
  coverPosition?: string;
  showcaseVideo?: string;
  youtubeId?: string;
  customSections?: { title: string; content: string; icon?: string }[];
}

export const accounts: AccountCaseStudy[] = [
  {
    id: "humva-tiktok",
    name: "Humva",
    platform: "TikTok",
    category: "AIGC Content Growth / Product Promotion",
    positioning: "AIGC-driven product promotion and community growth.",
    role: "Content Operations & AIGC Strategist",
    direction: "Short-form promotional content with high visual impact.",
    strategy: "Leveraging AIGC tools to create cinematic product stories.",
    testing: "A/B testing hooks, editing rhythm, and visual styles.",
    tools: ["Midjourney", "Runway", "CapCut", "TikTok Analytics"],
    results: "Significant increase in engagement and follower conversion through optimized hooks.",
    metrics: [
        { label: "GROWTH", value: "Content Strategy" },
        { label: "FOCUS", value: "AIGC Product Storytelling" },
        { label: "CONTENT", value: "Short-form Video" },
        { label: "TOOLS", value: "Midjourney / Runway / CapCut" }
    ],
    coverImage: "/accounts/humva.png",
    accountLink: "https://www.tiktok.com/@official_humva_ai?_r=1&_t=ZS-9507e6M3RZa",
    viralVideos: [
      { 
        title: "Is This Humva AI?", 
        views: "8,329", 
        thumbnail: "/accounts/humva1.PNG",
        videoUrl: "https://vt.tiktok.com/ZSuKWFXjX/" 
      },
      { 
        title: "I Wasn't Built For This", 
        views: "2,982", 
        thumbnail: "/accounts/humva2.JPG",
        videoUrl: "https://vt.tiktok.com/ZSuKnGAgg/"
      },
      { 
        title: "Breaking News: Digital Creators", 
        views: "415.6K", 
        thumbnail: "/accounts/humva3.PNG",
        videoUrl: "https://vt.tiktok.com/ZSuKWUQvH/"
      }
    ],
    strategyInsights: {
      positioning: "AIGC-driven product promotion and content-led growth for an AI product platform.",
      contentDirection: "Cinematic product storytelling, AI workflow demonstrations, and short-form promotional content.",
      contentTypes: ["Short-form videos", "Product storytelling videos", "Workflow demos", "Feature highlights", "Tutorial-style content"],
      tools: ["Midjourney", "Runway", "CapCut", "Photoshop", "TikTok Analytics"],
      whatWasTested: ["Video hooks", "Editing rhythm", "Caption styles", "Thumbnail styles", "Music selection", "Video length"],
      keyResults: "Identified high-performing storytelling formats and improved engagement through stronger hooks and visual consistency.",
      keyLearnings: "Short cinematic storytelling performs better than direct product demos, and strong hooks in the first few seconds are critical for performance."
    }
  },
  {
    id: "tusee-sneaker",
    name: "TuSee Sneaker",
    platform: "TikTok",
    category: "Overseas Content Operations",
    positioning: "Vertical content for sneaker enthusiasts in overseas markets.",
    role: "Overseas Content Lead",
    direction: "Sneaker-related vertical content.",
    strategy: "Audience targeting and short-form content testing.",
    testing: "User growth patterns and niche community engagement.",
    tools: ["TikTok", "CapCut", "Sneaker News APIs"],
    results: "Established a consistent posting rhythm that stabilized baseline views.",
    metrics: [
        { label: "GROWTH", value: "Product Content" },
        { label: "FOCUS", value: "Sneaker Visual Content" },
        { label: "CONTENT", value: "Short-form Video" },
        { label: "STRATEGY", value: "Content Consistency" }
    ],
    coverImage: "/accounts/tusee-sneaker.png",
    accountLink: "https://www.tiktok.com/@tusee.legitcheck",
    viralVideos: [
      { 
        title: "Chanel Sneaker Legit Check", 
        views: "34K", 
        thumbnail: "/accounts/sneaker1.jpg",
        videoUrl: "https://vt.tiktok.com/ZSuKWbW5e/"
      },
      { 
        title: "Timberland: Real vs Fake", 
        views: "417.2K", 
        thumbnail: "/accounts/sneaker2.jpg",
        videoUrl: "https://vt.tiktok.com/ZSuKWQ44K/"
      },
      { 
        title: "Nike Dunk: Real vs Fake", 
        views: "2.5M", 
        thumbnail: "/accounts/sneaker3.jpg",
        videoUrl: "https://vt.tiktok.com/ZSuKWWuBQ/"
      }
    ],
    strategyInsights: {
      positioning: "Overseas sneaker-focused short-form content for product exposure and community growth.",
      contentDirection: "Sneaker product showcases, close-up product visuals, and short-form lifestyle sneaker content.",
      contentTypes: ["Product showcase videos", "Sneaker detail videos", "Comparison videos", "Short-form lifestyle content"],
      tools: ["CapCut", "Photoshop", "TikTok Analytics"],
      whatWasTested: ["Different product angles", "Close-up shots", "Video pacing", "Captions", "Hashtags", "Posting frequency"],
      keyResults: "Improved content consistency and identified sneaker detail videos and close-up shots as high-performing formats.",
      keyLearnings: "Clear product visuals and fast pacing perform better than longer storytelling content in sneaker-focused accounts."
    }
  },
  {
    id: "tusee-beauty",
    name: "TuSee Beauty",
    platform: "TikTok",
    category: "Overseas Content Operations",
    positioning: "Beauty-focused content testing for global audiences.",
    role: "Content Operations Specialist",
    direction: "Beauty-related account content.",
    strategy: "Testing hook / thumbnail / tags combinations.",
    testing: "Platform optimization for beauty niche.",
    tools: ["TikTok", "CapCut", "Trend Analysis Tools"],
    results: "Optimized thumbnail strategies led to a 20% increase in click-through rates.",
    metrics: [
        { label: "GROWTH", value: "Tutorial Content" },
        { label: "FOCUS", value: "Beauty Product Content" },
        { label: "CONTENT", value: "Short-form Video" },
        { label: "STRATEGY", value: "Educational Content" }
    ],
    coverImage: "/accounts/tusee-beauty.png",
    accountLink: "https://www.tiktok.com/@tusee.beauty",
    viralVideos: [
      { 
        title: "Best Dior Lipsticks for Summer 2025", 
        views: "365.1K", 
        thumbnail: "/accounts/beauty1.jpg",
        videoUrl: "https://vt.tiktok.com/ZSuK7BWy5/"
      },
      { 
        title: "Clinique Butter Gel: Real vs Fake", 
        views: "32K", 
        thumbnail: "/accounts/beauty2.jpg",
        videoUrl: "https://vt.tiktok.com/ZSuKWoBbJ/"
      },
      { 
        title: "Gucci Perfume Bloom: Real vs Fake", 
        views: "165.5K", 
        thumbnail: "/accounts/beauty3.jpg",
        videoUrl: "https://vt.tiktok.com/ZSuK7evPP/"
      }
    ],
    strategyInsights: {
      positioning: "Beauty-related short-form content for overseas audiences and product visibility.",
      contentDirection: "Beauty product showcases, tutorial-style content, and product demonstration videos.",
      contentTypes: ["Product demos", "Tutorial videos", "Before-and-after content", "Short-form beauty content"],
      tools: ["CapCut", "Photoshop", "TikTok Analytics"],
      whatWasTested: ["Tutorial vs product showcase formats", "Captions", "Video pacing", "Hashtags", "Posting frequency"],
      keyResults: "Tutorial-style content and clear product demonstrations performed better than static product videos.",
      keyLearnings: "Educational and tutorial-style content improves engagement and helps build content consistency."
    }
  },
  {
    id: "xhs-personal",
    name: "Rednote Personal IP",
    platform: "Rednote",
    category: "Personal Brand / Lifestyle Content",
    positioning: "Building a personal IP through high-quality lifestyle and photography content.",
    role: "Content Creator",
    direction: "Personal lifestyle, food, and travel photography.",
    strategy: "Visual storytelling through aesthetic photography and local guides.",
    testing: "Visual consistency and community engagement.",
    tools: ["Lightroom", "Photoshop", "Rednote"],
    results: "Established a consistent aesthetic that resonates with the local community.",
    metrics: [
        { label: "FOCUS", value: "Personal Branding" },
        { label: "CONTENT", value: "Visual Content" },
        { label: "STYLE", value: "AIGC Visuals" },
        { label: "DIRECTION", value: "Original IP" }
    ],
    coverImage: "/accounts/xhs-personal.png",
    accountLink: "https://www.xiaohongshu.com/user/profile/5f8b4e7a000000000101f8f8",
    viralVideos: [
      { 
        title: "Secret Cherry Blossom Spot in Toronto", 
        views: "15 Likes · 0 Collections", 
        thumbnail: "/accounts/rednote1.jpg",
        videoUrl: "http://xhslink.com/o/A5Mx1h8sgz6"
      },
      { 
        title: "Jade Toronto: Most Photogenic Restaurant", 
        views: "74 Likes · 34 Collections", 
        thumbnail: "/accounts/rednote2.jpg",
        videoUrl: "http://xhslink.com/o/53tDAgpXPBS"
      },
      { 
        title: "District 11: Best Value Hidden Gem", 
        views: "115 Likes · 167 Collections", 
        thumbnail: "/accounts/rednote3.jpg",
        videoUrl: "http://xhslink.com/o/90CL3A0flAU"
      }
    ],
    strategyInsights: {
      positioning: "Personal lifestyle and photography-focused IP on Xiaohongshu.",
      contentDirection: "Lifestyle photography, restaurant reviews, and travel guides.",
      contentTypes: ["Photography posts", "Restaurant guides", "Travel tips", "Personal vlogs"],
      tools: ["Lightroom", "CapCut", "Xiaohongshu"],
      whatWasTested: ["Photography styles", "Cover designs", "Caption hooks", "Hashtags", "Posting times"],
      keyResults: "High-aesthetic photography and practical local guides consistently drive higher engagement.",
      keyLearnings: "Authentic personal sharing combined with high-quality visuals builds strong community trust."
    }
  },
  {
    id: "douyin-personal",
    name: "Douyin Personal IP",
    platform: "Douyin",
    category: "Short-form Personal Content Growth",
    positioning: "Personal content creation with a focus on growth iteration.",
    role: "Content Creator",
    direction: "Personal content creation and storytelling.",
    strategy: "Iterative content creation based on platform rhythm.",
    testing: "Posting frequency and content hooks.",
    tools: ["Douyin", "CapCut"],
    results: "Achieved steady growth through continuous iteration of content rhythm.",
    metrics: [
        { label: "GROWTH", value: "Platform Growth" },
        { label: "FOCUS", value: "Short-form Content" },
        { label: "STRATEGY", value: "Hook Optimization" },
        { label: "TESTING", value: "Content Experiments" }
    ],
    coverImage: "/accounts/douyin-personal.png",
    accountLink: "https://www.douyin.com/user/...",
    viralVideos: [
      { 
        title: "Christmas Gesture Dance", 
        views: "15K Likes · 3024 Collections", 
        thumbnail: "/accounts/dy1.jpg",
        videoUrl: "https://v.douyin.com/eLVGDxhfndk/" 
      },
      { 
        title: "Island Getaway", 
        views: "257 Likes · 37 Collections", 
        thumbnail: "/accounts/dy2.jpg",
        videoUrl: "https://v.douyin.com/bARCi0_j0Ns/"
      },
      { 
        title: "Blackpink Concert Sharing", 
        views: "181 Likes · 8 Collections", 
        thumbnail: "/accounts/dy3.jpg",
        videoUrl: "https://v.douyin.com/_Xj9p3ywT0k/"
      }
    ],
    strategyInsights: {
      positioning: "Short-form personal content and platform growth experiment.",
      contentDirection: "Lifestyle content, interactive short videos, and platform trend-based content.",
      contentTypes: ["Short-form lifestyle videos", "Interactive content", "Trend-based videos"],
      tools: ["CapCut", "Douyin", "Platform Analytics"],
      whatWasTested: ["Video hooks", "Content topics", "Posting frequency", "Captions", "Editing styles"],
      keyResults: "Identified content topics and formats that generated higher engagement and improved overall account growth.",
      keyLearnings: "Consistent posting and strong hooks are key factors for short-form content growth."
    }
  },
  {
    id: "tuanzi-ip",
    name: "Blob团子",
    platform: "Rednote / Multi-platform",
    category: "In Progress / Original IP Development",
    positioning: "Original character building through AIGC-generated assets.",
    role: "IP Developer & AIGC Artist",
    direction: "Original character building, GIFs, and wallpapers.",
    strategy: "Developing a cohesive IP ecosystem using AI tools.",
    testing: "Character appeal and asset variety (GIFs vs Wallpapers).",
    tools: ["Midjourney", "Luma AI", "Photoshop"],
    results: "Successfully launched the first seasonal theme 'Winter & Spring' with positive initial engagement.",
    metrics: [
        { label: "FOCUS", value: "Original Character IP" },
        { label: "CONTENT", value: "AIGC Visual Content" },
        { label: "FORMAT", value: "GIF / Wallpaper" },
        { label: "DIRECTION", value: "Visual Experimentation" }
    ],
    coverImage: "/accounts/cover.png",
    accountLink: "https://xhslink.com/m/6Lorrp4wtcR",
    viralVideos: [
      { 
        title: "《冬天和春天》", 
        views: "Featured Work", 
        thumbnail: "/accounts/blob1.png"
      },
      { 
        title: "《冰屋面包房》", 
        views: "Featured Work", 
        thumbnail: "/accounts/blob 2.png"
      },
      { 
        title: "《浮冰下午茶》", 
        views: "Featured Work", 
        thumbnail: "/accounts/blob3.png"
      },
      { 
        title: "《鲸鱼之梦》", 
        views: "Featured Work", 
        thumbnail: "/accounts/blob 4.png"
      },
      { 
        title: "《极地列车》", 
        views: "Featured Work", 
        thumbnail: "/accounts/blob5.png"
      }
    ],
    strategyInsights: {
      positioning: "AIGC character IP 'Blob团子' exploring seasonal themes and visual storytelling.",
      contentDirection: "Original character building, seasonal illustrations, and AIGC visual experiments.",
      contentTypes: ["Character illustrations", "Seasonal themes", "Wallpapers", "Visual storytelling"],
      tools: ["Midjourney", "Photoshop", "GIF tools"],
      whatWasTested: ["Character styles", "Color palettes", "Animation formats", "Content formats"],
      keyResults: "Explored multiple visual styles and built a foundation for a consistent AIGC character IP.",
      keyLearnings: "Consistent character design and visual identity are important for building an original IP account."
    }
  }
];

export const projects: Project[] = [
  {
    id: "humva-zootopia",
    title: "Humva Promotional Video – Zootopia Style",
    category: "AIGC Video Production",
    summary: "A cinematic promotional video for Humva AI, leveraging AIGC tools to achieve a Zootopia-inspired aesthetic.",
    description: "This project is an AIGC promotional video created for Humva, using a Zootopia-inspired visual direction to explore a more cinematic and story-driven way of presenting the product. Instead of relying on a standard feature demo, the video was designed to make the product feel more vivid, animated, and memorable through a stylized fictional world.",
    concepts: "The core idea was to move away from conventional product promotion and experiment with narrative-based visual communication. Inspired by the energetic atmosphere and world-building style of Zootopia, the project aimed to present the product through a more playful but still polished visual language.",
    workflow: "The workflow combined storyboard planning, AI-generated visuals, and video assembly. I first used Nano Banana to generate storyboard frames and explore how different scenes could connect visually. This helped establish the pacing, shot sequence, and overall structure of the video before moving into production. I then used Google Flow to build a more coherent motion-based video workflow and refine scene transitions, allowing the final output to feel more continuous and cinematic.",
    process: "I began by defining the visual tone and key scenes for the video. Nano Banana was used in the early stage to generate storyboard-style frames, which helped map out composition, scene changes, and the overall narrative flow. After that, I used Google Flow to develop the sequence into a more complete video structure, testing how different generated clips could be connected more smoothly. The final stage focused on editing, pacing, and refining the visual rhythm so the project would feel closer to a short branded film rather than a simple AI video experiment.",
    tools: ["Google Flow", "Nano Banana", "Midjourney", "Runway", "CapCut"],
    challenges: "One of the main challenges was maintaining visual consistency across multiple AI-generated scenes while still keeping the video dynamic. Another challenge was turning separately generated visuals into a sequence that felt intentional and connected. Using storyboard frames early in the process helped solve part of this issue by making the pacing and scene logic clearer before full production.",
    outcome: "The project demonstrated how AIGC tools can be used not only for visual generation, but also for pre-production planning and narrative development. By combining storyboard generation with motion-based workflow tools, the final result felt more structured, cinematic, and suitable for brand storytelling.",
    reflection: "This project helped me better understand the importance of pre-visualization in AIGC video production. Using Nano Banana for storyboard generation made it easier to clarify visual direction before production, while Google Flow helped turn fragmented generated scenes into a more cohesive video sequence. I learned that in AI video work, the strength of the final result often depends as much on planning and sequencing as on the generated visuals themselves.",
    coverImage: "/accounts/zootopia.png",
    coverFit: "contain",
    youtubeId: "jPbADrNQbP4"
  },
  {
    id: "humva-pixar",
    title: "Humva Product Launch Video – Pixar Style",
    category: "AIGC Video Production",
    summary: "A product launch video featuring a Pixar-style 3D aesthetic, created entirely with AI workflows.",
    description: "For the official launch of Humva's new features, I designed a video that mimics the high-fidelity 3D animation style of Pixar. The project uses a narrative-driven short film approach to hook the audience, making the product introduction feel like a natural part of a compelling story.",
    concepts: "The objective was to create a warm, approachable, and high-quality visual identity for the product launch. By adopting a Pixar-inspired 3D aesthetic and a short-story narrative perspective, we aimed to capture the viewer's attention immediately and keep them engaged until the end, ensuring they fully understand Humva's product value through an immersive experience.",
    workflow: "The workflow centered on high-fidelity 3D style generation and character-driven storytelling. I used Nano Banana for initial storyboarding and Google Flow to manage the motion-based video sequence, ensuring a smooth narrative flow. Midjourney was used to establish the visual benchmark for the 'Pixar look,' which was then animated using Luma AI and Pika Labs.",
    process: "Iterated on '3D render' style prompts to achieve the specific lighting and texture characteristic of modern animation. I used Nano Banana to map out the story beats and Google Flow to refine the transitions between AI-generated scenes. Synced the final visuals with a custom AI voiceover and added final polish in After Effects.",
    tools: ["Google Flow", "Nano Banana", "Midjourney", "Luma AI", "Pika Labs", "After Effects"],
    challenges: "Achieving the specific 'squash and stretch' feel of professional 3D animation using AI tools required significant iteration. Maintaining character consistency across different lighting environments was also a key technical hurdle.",
    outcome: "Successfully communicated complex product features in an accessible, visually stunning format that resonated with the target audience.",
    reflection: "This project demonstrated that AI can now achieve high-end 3D aesthetics that previously required massive render farms. I learned how to better control lighting and texture prompts to maintain a consistent 'studio' look.",
    coverImage: "/accounts/pixar.png",
    coverFit: "contain",
    youtubeId: "qfwh876R8zc"
  },
  {
    id: "cliniclog-design",
    title: "ClinicLog Multilingual Healthcare App",
    category: "Product Design (UX/UI)",
    summary: "A mobile application designed to bridge the communication gap in multilingual healthcare environments.",
    description: "ClinicLog is a multilingual medical communication app designed to help patients and doctors communicate more clearly during and after medical visits. The app focuses on reducing misunderstandings caused by language barriers and improving post-visit information clarity.",
    problem: "Many patients leave medical appointments without fully understanding instructions, medication details, or next steps, especially when there is a language barrier between the patient and the doctor. Important information is often forgotten or misunderstood after the visit, which can lead to missed medication, incorrect follow-up actions, or confusion about treatment.",
    concepts: "ClinicLog was designed to provide a structured after-visit summary that patients can review later in their own language. The app allows doctors or patients to input information through typing, voice input, or photo upload, and then generates a clear after-visit summary that can be saved in the case file and reviewed anytime.",
    keyFeatures: [
      "After-visit summary entered by doctor after consultation",
      "Supports voice input, typing, or photo upload",
      "Accessible through Case File or end-of-chat summary",
      "Fully bilingual (patient’s language + English)",
      "Stores visit records for future reference"
    ],
    workflow: "The app flow starts with a consultation or conversation record, then moves to an after-visit summary where key information is structured into symptoms, diagnosis, medication, and next steps. The summary is saved in the case file so patients can review it later instead of relying on memory or handwritten notes.",
    process: "The design process started with identifying communication problems in multilingual medical visits. I mapped the user journey from consultation to post-visit review and focused on the after-visit stage as the main design opportunity. The interface was designed to be simple, readable, and easy to navigate for both doctors and patients.",
    outcome: "The final design demonstrates how AI-assisted summaries and multilingual support could improve post-visit understanding and reduce communication gaps between doctors and patients. The project focuses on improving clarity, accessibility, and patient confidence after medical visits.",
    reflection: "This project helped me understand how product design is not only about interface layout, but also about identifying real user pain points and designing solutions around user workflows and information clarity.",
    mockups: ["/accounts/1.png", "/accounts/2.png", "/accounts/3.png", "/accounts/4.png"],
    tools: ["Figma", "Adobe Illustrator", "User Research"],
    coverImage: "/accounts/cliniclog.png"
  },
  {
    id: "humva-poster",
    title: "Humva AI Product Design",
    category: "Product Design (AIGC)",
    summary: "A high-impact product design case study for Humva AI, focusing on automated video and image generation.",
    description: "This project explores the integration of AIGC into a professional product workflow. Humva AI is designed to help users create promotional videos and brand assets directly from their product URL. All product visuals and mockups shown here were generated using AIGC tools to demonstrate the platform's capabilities.",
    problem: "Creating high-quality promotional videos and brand-consistent assets is often time-consuming and expensive for small teams. Standard tools require significant manual effort to maintain visual identity across different media formats.",
    concepts: "The core concept of Humva is 'From URL to Content.' By automatically analyzing a website's brand kit (colors, fonts, tone), the AI can generate tailored video demos, promo clips, and marketing images that feel native to the brand.",
    keyFeatures: [
      "AI Website Understanding: Extracts brand identity from any URL",
      "Smart Brand Kit: Automatically captures colors, tone, and style",
      "Demo Video Generation: Turns screen recordings into guided demos",
      "Promo Video Automation: Uses flexible templates for viral content",
      "Image Generation: Creates product visuals, posters, and meme-style images",
      "Fully Editable Layouts: Allows for instant refinement and regeneration"
    ],
    workflow: "The user flow is streamlined: 1. Enter Product URL -> 2. AI Extracts Brand Identity -> 3. Select Content Type (Demo/Promo/Image) -> 4. Customize and Export. This loop ensures that even non-designers can produce professional-grade assets.",
    process: "The design process involved mapping out the AI's logic for brand extraction and creating a series of flexible templates that could adapt to any visual style. I focused on making the 'AI Understanding' step feel transparent and reliable for the user.",
    outcome: "A cohesive product vision that demonstrates how AI can empower creators to build better product videos and visuals with minimal manual overhead. The project successfully bridges the gap between raw AI power and professional design needs.",
    reflection: "Building Humva taught me the importance of 'AI transparency'—users need to feel in control even when the AI is doing the heavy lifting. Designing for flexibility was key to making the tool useful across diverse industries.",
    mockups: [
      "/accounts/1-1.png",
      "/accounts/2-1.png",
      "/accounts/3-1.png",
      "/accounts/4-1.png",
      "/accounts/5.png",
      "/accounts/6.png",
      "/accounts/7.png"
    ],
    tools: ["Midjourney", "Photoshop", "Illustrator", "Figma"],
    coverImage: "/accounts/humva-1.png",
    coverFit: "contain"
  },
  {
    id: "dating-app-critique",
    title: "Dating App Critique Campaign",
    category: "Product Design (Critique)",
    summary: "A satirical campaign critiquing modern dating culture through posters and a dedicated website concept.",
    description: "This project is a conceptual campaign that critiques the logic behind dating apps and how they turn relationships into a system of scoring, ranking, and continuous engagement. Instead of promoting a product, this campaign uses satirical posters to highlight the hidden logic of dating platforms.",
    customSections: [
      {
        title: "Campaign Idea",
        content: "The campaign uses satire to reveal how dating apps operate more like marketplaces than social platforms. Users are turned into profiles, profiles become data, and data becomes a ranking system. The posters are designed to look like advertisements at first glance, but the message reveals a critical perspective on how dating platforms actually work.",
        icon: "Lightbulb"
      },
      {
        title: "AIGC Workflow",
        content: "To achieve a high-fidelity advertising aesthetic while maintaining surreal elements, the posters were generated using a combination of Midjourney and Google Flow. Midjourney was used to establish the core visual metaphors and character details, while Google Flow helped refine the composition and ensure visual consistency across the campaign assets.",
        icon: "Brain"
      },
      {
        title: "Poster 1 – Individual Level",
        content: "Poster 1 focuses on the individual level. Dating apps encourage users to continuously optimize their profiles, photos, and personal information to become more attractive in the system. In this process, people are broken down into tags, scores, and categories, turning individuals into products that can be quickly compared and replaced.",
        icon: "Layout"
      },
      {
        title: "Poster 2 – Platform / Business Level",
        content: "Poster 2 focuses on the platform level. Dating apps do not necessarily benefit when users leave the platform after finding a partner. Instead, the platform profits from continuous engagement, subscriptions, and visibility boosts. The poster uses visual satire to suggest that users’ time, attention, and emotions are continuously pulled into the platform economy.",
        icon: "Activity"
      },
      {
        title: "Visual Style",
        content: "The visual style combines a clean advertising layout with surreal and symbolic elements. Bright colors and clean typography make the posters look like real advertisements, while the visual elements reveal the hidden message behind the campaign. The goal was to create a contrast between advertising aesthetics and critical content.",
        icon: "Layout"
      }
    ],
    outcome: "This project explores how visual campaigns can be used not only for promotion, but also for critique. The posters demonstrate how design and visual storytelling can communicate social commentary through familiar advertising formats.",
    reflection: "This project helped me understand how campaign design is not only about selling products, but also about communicating ideas and perspectives. Visual design can be used as a tool for critique, storytelling, and social commentary.",
    mockups: ["/accounts/poster1.png", "/accounts/poster2.png"],
    tools: ["Midjourney", "Google Flow", "Figma", "Photoshop", "Copywriting"],
    coverImage: "/accounts/datingapp.png",
    coverFit: "contain"
  }
];

export const skills = {
  aigc: ["Midjourney", "Google Flow", "Dreamina", "Nano Banana", "VEED.io", "Luma AI"],
  design: ["Figma", "Photoshop", "Illustrator", "InDesign"],
  editing: ["CapCut", "Premiere Pro", "After Effects"],
  technical: ["HTML", "JavaScript", "A/B Testing", "SQL (Basic)", "Data Analysis"],
  marketing: ["Digital Storytelling", "Brand Identity", "Campaign Management", "Growth Hacking"],
  languages: ["English (5 years overseas)", "Chinese (Native)"],
  interests: ["Guitar", "Photography", "Guzheng"]
};

export const experiences = [
  {
    company: "RightBrain – Humva AI",
    role: "AI Content Growth & Operations Intern",
    date: "Aug 2025 – Nov 2025",
    location: "Beijing, China",
    responsibilities: [
      "Responsible for AI platform content growth and data optimization.",
      "Platform Growth: Instagram 3.8K followers, top content 242K+ views | TikTok 4.1K followers, top video 45K+ views.",
      "Content Optimization: Conducted A/B testing on hooks, thumbnails, and captions to improve engagement and completion rate.",
      "AI Content Production: Built reusable prompt templates and supported AI video generation and editing workflows.",
      "Community Operations: Managed Reddit community, increasing organic brand exposure and user acquisition."
    ],
    outcomes: "Achieved significant growth across multiple social platforms using AIGC-driven workflows.",
    platforms: ["Instagram", "TikTok", "Reddit"],
    highlights: "AIGC Workflow, Data-Driven Growth"
  },
  {
    company: "Turingsense – Tusee App",
    role: "Overseas Social Media Operations Intern",
    date: "Apr 2024 – Sep 2024",
    location: "Beijing, China",
    responsibilities: [
      "Responsible for overseas short video content operations and user growth for the TUSEE App.",
      "Platform Growth: TikTok viral video 2.4M+ views, contributing to 3.3K+ followers | Instagram content 16.9K+ views, 1.4K+ followers.",
      "Distribution Optimization: Tested hooks, thumbnails, and hashtags through A/B testing to improve engagement.",
      "User Conversion: Built Facebook community funnel to convert traffic into active users.",
      "Creator Collaboration: Partnered with vertical KOL creators to expand content reach and acquisition efficiency."
    ],
    outcomes: "Successfully scaled overseas presence through viral content and community building.",
    platforms: ["TikTok", "Instagram", "Facebook"],
    highlights: "Viral Content, KOL Partnership"
  }
];

export const education = {
  school: "University of Toronto",
  degree: "Bachelor of Communication, Culture, Information & Technology (DEM)",
  period: "Sep 2023 – Jun 2027",
  location: "Toronto, CA",
  gpa: "C-GPA: 3.6 / 4.0 | S-GPA: 3.82",
  highlights: ["Dean's List", "Entrance Scholarship Recipient"],
  coursework: ["Digital Marketing", "User Experience & Interface Design", "Web Design", "Project Management", "Economics"],
  description: "Focusing on the intersection of digital business, creative media, and information technology."
};
