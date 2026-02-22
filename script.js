const models = [
  // LLM
  {
    id: 1, name: "GPT-4o", org: "OpenAI", type: "llm", icon: "🧠",
    iconBg: "rgba(16,163,127,0.15)", iconBorder: "rgba(16,163,127,0.3)",
    accent: "#10a37f", glow: "rgba(16,163,127,0.08)",
    badgeBg: "rgba(16,163,127,0.1)", badgeColor: "#10a37f", badgeBorder: "rgba(16,163,127,0.3)",
    desc: "OpenAI's most capable omnimodal model, natively handling text, audio, and images with human-like speed and fluency.",
    useTags: ["Customer Support", "Code Generation", "Content Writing", "Data Analysis", "Education"],
    useCases: [
      "Automates Tier-1 customer support at enterprise scale",
      "Generates & reviews code across 50+ programming languages",
      "Writes long-form blog posts, marketing copy, and reports",
      "Interprets uploaded charts and documents for business intelligence",
      "Powers real-time AI tutors in edtech applications"
    ],
    specs: { "Release": "2024", "Context": "128K tokens", "Access": "API + ChatGPT", "Modality": "Text/Image/Audio" }
  },
  {
    id: 2, name: "Claude 3.5 Sonnet", org: "Anthropic", type: "llm", icon: "🔮",
    iconBg: "rgba(124,111,255,0.15)", iconBorder: "rgba(124,111,255,0.3)",
    accent: "#7c6fff", glow: "rgba(124,111,255,0.08)",
    badgeBg: "rgba(124,111,255,0.1)", badgeColor: "#7c6fff", badgeBorder: "rgba(124,111,255,0.3)",
    desc: "Anthropic's flagship safety-focused reasoning model with exceptional coding and nuanced analytical abilities.",
    useTags: ["Legal Analysis", "Coding", "Research", "Writing", "Reasoning"],
    useCases: [
      "Drafts and reviews complex legal contracts",
      "Performs multi-step mathematical and logical reasoning chains",
      "Generates comprehensive research summaries from papers",
      "Powers agentic coding assistants for software development",
      "Creates nuanced narrative content for games and storytelling"
    ],
    specs: { "Release": "2024", "Context": "200K tokens", "Access": "API + Claude.ai", "Modality": "Text/Image" }
  },
  {
    id: 3, name: "Gemini 1.5 Pro", org: "Google DeepMind", type: "multimodal", icon: "💫",
    iconBg: "rgba(66,133,244,0.15)", iconBorder: "rgba(66,133,244,0.3)",
    accent: "#4285f4", glow: "rgba(66,133,244,0.08)",
    badgeBg: "rgba(66,133,244,0.1)", badgeColor: "#4285f4", badgeBorder: "rgba(66,133,244,0.3)",
    desc: "Google's frontier multimodal model with industry-leading 1M token context window for processing entire codebases and long videos.",
    useTags: ["Video Analysis", "Code Understanding", "Document Q&A", "Search", "Research"],
    useCases: [
      "Analyzes full-length movies frame-by-frame for content moderation",
      "Understands and reasons over entire GitHub repositories",
      "Answers questions from 1,000-page PDFs in seconds",
      "Processes hours of audio transcripts for meeting summaries",
      "Integrates with Google Search for grounded real-time answers"
    ],
    specs: { "Release": "2024", "Context": "1M tokens", "Access": "API + Google AI Studio", "Modality": "Text/Image/Video/Audio" }
  },
  {
    id: 4, name: "Llama 3.1 405B", org: "Meta AI", type: "llm", icon: "🦙",
    iconBg: "rgba(24,119,242,0.15)", iconBorder: "rgba(24,119,242,0.3)",
    accent: "#1877f2", glow: "rgba(24,119,242,0.08)",
    badgeBg: "rgba(24,119,242,0.1)", badgeColor: "#1877f2", badgeBorder: "rgba(24,119,242,0.3)",
    desc: "Meta's largest open-source language model, rivaling closed proprietary systems while enabling private on-premise deployment.",
    useTags: ["Self-hosted AI", "Fine-tuning", "Research", "Privacy-first Apps", "Agents"],
    useCases: [
      "Hospital systems deploy on-premise to protect patient data",
      "Companies fine-tune for proprietary domain knowledge",
      "Academic researchers build open experiments without API costs",
      "Creates multi-agent workflows for complex automation",
      "Powers sovereign AI systems in regulated industries"
    ],
    specs: { "Release": "2024", "Params": "405B", "Access": "Open Source", "Modality": "Text" }
  },
  {
    id: 5, name: "Mistral Large 2", org: "Mistral AI", type: "llm", icon: "🌬️",
    iconBg: "rgba(255,107,107,0.15)", iconBorder: "rgba(255,107,107,0.3)",
    accent: "#ff6b6b", glow: "rgba(255,107,107,0.08)",
    badgeBg: "rgba(255,107,107,0.1)", badgeColor: "#ff6b6b", badgeBorder: "rgba(255,107,107,0.3)",
    desc: "European flagship LLM optimized for multilingual tasks, function calling, and low-latency enterprise applications.",
    useTags: ["Multilingual", "Function Calling", "Enterprise", "EU Compliance", "RAG"],
    useCases: [
      "Multilingual customer service bots in 80+ languages",
      "Structured function calling for business automation pipelines",
      "GDPR-compliant AI for European enterprises",
      "Real-time translation and localization at scale",
      "Retrieval-augmented generation for knowledge bases"
    ],
    specs: { "Release": "2024", "Context": "128K tokens", "Access": "API + Open Weights", "Modality": "Text" }
  },
  {
    id: 6, name: "Command R+", org: "Cohere", type: "llm", icon: "📡",
    iconBg: "rgba(0,245,196,0.15)", iconBorder: "rgba(0,245,196,0.3)",
    accent: "#00f5c4", glow: "rgba(0,245,196,0.08)",
    badgeBg: "rgba(0,245,196,0.1)", badgeColor: "#00f5c4", badgeBorder: "rgba(0,245,196,0.3)",
    desc: "Enterprise-grade RAG-optimized LLM built for production search, grounding, and accurate business knowledge retrieval.",
    useTags: ["Enterprise RAG", "Search", "Grounding", "Business AI", "Document Q&A"],
    useCases: [
      "Internal enterprise search over millions of documents",
      "Legal discovery tools for law firms and compliance teams",
      "Grounded financial reporting with citation tracking",
      "Customer-facing product knowledge bots for e-commerce",
      "Analyst-grade research synthesis for investment firms"
    ],
    specs: { "Release": "2024", "Context": "128K tokens", "Access": "API", "Modality": "Text" }
  },
  {
    id: 7, name: "DeepSeek-R1", org: "DeepSeek", type: "llm", icon: "🔬",
    iconBg: "rgba(255,209,102,0.15)", iconBorder: "rgba(255,209,102,0.3)",
    accent: "#ffd166", glow: "rgba(255,209,102,0.08)",
    badgeBg: "rgba(255,209,102,0.1)", badgeColor: "#ffd166", badgeBorder: "rgba(255,209,102,0.3)",
    desc: "Chinese frontier reasoning model matching GPT-o1 performance with full open weights and dramatically lower training costs.",
    useTags: ["Math Olympiad", "Complex Reasoning", "Open Source", "Cost Efficient", "STEM"],
    useCases: [
      "Solving competition-level mathematics and olympiad problems",
      "Multi-step logical puzzle solving for game AI",
      "Low-cost alternative to GPT-4 for enterprise reasoning tasks",
      "Scientific hypothesis generation for research labs",
      "Complex legal reasoning and case analysis"
    ],
    specs: { "Release": "2025", "Params": "671B (MoE)", "Access": "Open Source", "Modality": "Text" }
  },
  {
    id: 8, name: "Grok-2", org: "xAI", type: "llm", icon: "⚡",
    iconBg: "rgba(255,165,0,0.15)", iconBorder: "rgba(255,165,0,0.3)",
    accent: "#ffa500", glow: "rgba(255,165,0,0.08)",
    badgeBg: "rgba(255,165,0,0.1)", badgeColor: "#ffa500", badgeBorder: "rgba(255,165,0,0.3)",
    desc: "xAI's sarcastic and uncensored assistant with real-time X/Twitter access and a rebellious personality.",
    useTags: ["Real-time News", "Social Media", "Creative Writing", "Humor", "Market Intel"],
    useCases: [
      "Real-time social media analysis and trend detection on X",
      "Financial market sentiment analysis from live tweets",
      "Unfiltered creative and edgy content generation",
      "Political discourse monitoring and analysis",
      "Breaking news summarization as events unfold"
    ],
    specs: { "Release": "2024", "Context": "128K tokens", "Access": "X Premium+", "Modality": "Text/Image" }
  },

  // VISION
  {
    id: 9, name: "GPT-4 Vision", org: "OpenAI", type: "vision", icon: "👁️",
    iconBg: "rgba(16,163,127,0.15)", iconBorder: "rgba(16,163,127,0.3)",
    accent: "#10a37f", glow: "rgba(16,163,127,0.08)",
    badgeBg: "rgba(16,163,127,0.1)", badgeColor: "#10a37f", badgeBorder: "rgba(16,163,127,0.3)",
    desc: "Multimodal vision understanding enabling AI to see, interpret, and reason about images as naturally as text.",
    useTags: ["Medical Imaging", "Manufacturing QA", "Accessibility", "Document OCR", "Retail"],
    useCases: [
      "Radiology AI that detects anomalies in X-rays and MRI scans",
      "Factory QA systems inspecting products for defects in real-time",
      "Describes images aloud for visually impaired users",
      "Extracts and structures data from scanned paper forms",
      "Visual search for e-commerce product matching"
    ],
    specs: { "Release": "2023", "Modality": "Image+Text", "Access": "API", "Resolution": "High" }
  },
  {
    id: 10, name: "CLIP", org: "OpenAI", type: "vision", icon: "🔗",
    iconBg: "rgba(255,107,107,0.15)", iconBorder: "rgba(255,107,107,0.3)",
    accent: "#ff6b6b", glow: "rgba(255,107,107,0.08)",
    badgeBg: "rgba(255,107,107,0.1)", badgeColor: "#ff6b6b", badgeBorder: "rgba(255,107,107,0.3)",
    desc: "Contrastive Language-Image Pretraining — learns visual concepts from natural language descriptions, enabling zero-shot image classification.",
    useTags: ["Zero-shot Classification", "Image Search", "Content Moderation", "Tagging", "Retrieval"],
    useCases: [
      "Social platforms use CLIP for NSFW content moderation at scale",
      "Image search engines matching photos to text queries",
      "Automatic product tagging in e-commerce catalogs",
      "Wildlife species identification from camera trap photos",
      "Art museum digital archive search and discovery"
    ],
    specs: { "Release": "2021", "Modality": "Image+Text", "Access": "Open Source", "Training": "400M pairs" }
  },
  {
    id: 11, name: "SAM 2", org: "Meta AI", type: "vision", icon: "✂️",
    iconBg: "rgba(24,119,242,0.15)", iconBorder: "rgba(24,119,242,0.3)",
    accent: "#1877f2", glow: "rgba(24,119,242,0.08)",
    badgeBg: "rgba(24,119,242,0.1)", badgeColor: "#1877f2", badgeBorder: "rgba(24,119,242,0.3)",
    desc: "Segment Anything Model 2 — segments any object in any image or video from a single click, enabling universal visual understanding.",
    useTags: ["Medical Segmentation", "Video Editing", "AR/VR", "Robotics", "Satellite Imagery"],
    useCases: [
      "Tumor segmentation in medical CT scans and MRIs",
      "Video editing tools for one-click background removal",
      "AR apps that precisely segment real-world objects",
      "Surgical robotics for organ and tissue identification",
      "Flood mapping from satellite imagery for disaster response"
    ],
    specs: { "Release": "2024", "Modality": "Image+Video", "Access": "Open Source", "Speed": "Real-time" }
  },
  {
    id: 12, name: "YOLO v10", org: "THU & Ultralytics", type: "vision", icon: "🎯",
    iconBg: "rgba(255,209,102,0.15)", iconBorder: "rgba(255,209,102,0.3)",
    accent: "#ffd166", glow: "rgba(255,209,102,0.08)",
    badgeBg: "rgba(255,209,102,0.1)", badgeColor: "#ffd166", badgeBorder: "rgba(255,209,102,0.3)",
    desc: "You Only Look Once v10 — the gold standard for real-time object detection running at millisecond speeds on edge devices.",
    useTags: ["Autonomous Vehicles", "Surveillance", "Sports Analytics", "Drone", "Smart Cities"],
    useCases: [
      "Self-driving car perception stack for pedestrian and vehicle detection",
      "Retail stores counting customers and tracking foot traffic",
      "Sports camera systems tracking ball and player positions",
      "Drone surveillance for border and perimeter security",
      "Smart traffic lights optimizing signal timing with vehicle counts"
    ],
    specs: { "Release": "2024", "Modality": "Image/Video", "Access": "Open Source", "Speed": "<10ms" }
  },

  // AUDIO
  {
    id: 13, name: "Whisper v3", org: "OpenAI", type: "audio", icon: "🎙️",
    iconBg: "rgba(139,92,246,0.15)", iconBorder: "rgba(139,92,246,0.3)",
    accent: "#8b5cf6", glow: "rgba(139,92,246,0.08)",
    badgeBg: "rgba(139,92,246,0.1)", badgeColor: "#8b5cf6", badgeBorder: "rgba(139,92,246,0.3)",
    desc: "Open-source automatic speech recognition trained on 680K hours of diverse audio, achieving near-human transcription accuracy.",
    useTags: ["Transcription", "Subtitles", "Meeting Notes", "Accessibility", "Podcast"],
    useCases: [
      "Live court reporter replacement for legal proceedings",
      "Auto-generating subtitles for video content creators",
      "Medical visit documentation from doctor-patient conversations",
      "Real-time captioning for deaf and hard-of-hearing communities",
      "Podcast transcript generation for SEO and indexing"
    ],
    specs: { "Release": "2023", "Languages": "100+", "Access": "Open Source", "Accuracy": "~2% WER" }
  },
  {
    id: 14, name: "ElevenLabs TTS", org: "ElevenLabs", type: "audio", icon: "🔊",
    iconBg: "rgba(0,245,196,0.15)", iconBorder: "rgba(0,245,196,0.3)",
    accent: "#00f5c4", glow: "rgba(0,245,196,0.08)",
    badgeBg: "rgba(0,245,196,0.1)", badgeColor: "#00f5c4", badgeBorder: "rgba(0,245,196,0.3)",
    desc: "State-of-the-art voice cloning and text-to-speech synthesis with emotional nuance and sub-500ms latency for real-time applications.",
    useTags: ["Voice Cloning", "Audiobooks", "Game NPCs", "IVR Systems", "Accessibility"],
    useCases: [
      "Publishers convert bestsellers to audiobooks in hours",
      "Game studios create thousands of unique NPC voice lines",
      "Bereaved families preserve loved ones' voices forever",
      "Content creators dub videos in 29 languages with their own voice",
      "Interactive voice response systems with natural-sounding agents"
    ],
    specs: { "Release": "2023", "Languages": "29+", "Access": "API", "Latency": "<500ms" }
  },
  {
    id: 15, name: "MusicGen", org: "Meta AI", type: "audio", icon: "🎵",
    iconBg: "rgba(255,107,107,0.15)", iconBorder: "rgba(255,107,107,0.3)",
    accent: "#ff6b6b", glow: "rgba(255,107,107,0.08)",
    badgeBg: "rgba(255,107,107,0.1)", badgeColor: "#ff6b6b", badgeBorder: "rgba(255,107,107,0.3)",
    desc: "Open-source music generation model producing high-quality, controllable audio from text prompts and melody conditioning.",
    useTags: ["Background Music", "Game Audio", "Film Scoring", "Advertising", "Royalty-free"],
    useCases: [
      "Game developers create adaptive, procedural soundtracks",
      "Indie filmmakers generate royalty-free film scores",
      "Content creators produce unique background tracks for YouTube",
      "Advertising agencies generate custom jingles on demand",
      "Meditation apps create custom ambient soundscapes for users"
    ],
    specs: { "Release": "2023", "Output": "Stereo Audio", "Access": "Open Source", "Control": "Text+Melody" }
  },
  {
    id: 16, name: "Suno AI", org: "Suno", type: "audio", icon: "🎤",
    iconBg: "rgba(255,209,102,0.15)", iconBorder: "rgba(255,209,102,0.3)",
    accent: "#ffd166", glow: "rgba(255,209,102,0.08)",
    badgeBg: "rgba(255,209,102,0.1)", badgeColor: "#ffd166", badgeBorder: "rgba(255,209,102,0.3)",
    desc: "Full song generation model creating complete tracks with vocals, instruments, and lyrics from a single text prompt.",
    useTags: ["Song Creation", "Education", "Marketing", "Personalization", "Therapy"],
    useCases: [
      "Anyone can make a complete song without musical training",
      "Teachers create custom educational songs for any subject",
      "Brands generate custom brand anthems in minutes",
      "Birthday and greeting platforms personalize songs for occasions",
      "Music therapy apps create personalized therapeutic music"
    ],
    specs: { "Release": "2024", "Output": "Full songs w/ vocals", "Access": "Web Platform", "Duration": "2-4 min" }
  },

  // IMAGE GENERATION
  {
    id: 17, name: "DALL-E 3", org: "OpenAI", type: "image-gen", icon: "🎨",
    iconBg: "rgba(16,163,127,0.15)", iconBorder: "rgba(16,163,127,0.3)",
    accent: "#10a37f", glow: "rgba(16,163,127,0.08)",
    badgeBg: "rgba(16,163,127,0.1)", badgeColor: "#10a37f", badgeBorder: "rgba(16,163,127,0.3)",
    desc: "OpenAI's text-to-image model with superior prompt adherence and the ability to render legible text inside images.",
    useTags: ["Marketing Visuals", "Book Illustration", "Concept Art", "Product Mockups", "Social Media"],
    useCases: [
      "Marketing teams generate campaign visuals in minutes",
      "Authors illustrate self-published books affordably",
      "Architects create concept visualizations for clients",
      "Game designers prototype character and environment art",
      "Social media managers create eye-catching graphics daily"
    ],
    specs: { "Release": "2023", "Resolution": "1024x1024", "Access": "API + ChatGPT", "Style": "Photorealistic+Art" }
  },
  {
    id: 18, name: "Stable Diffusion 3", org: "Stability AI", type: "image-gen", icon: "🌊",
    iconBg: "rgba(124,111,255,0.15)", iconBorder: "rgba(124,111,255,0.3)",
    accent: "#7c6fff", glow: "rgba(124,111,255,0.08)",
    badgeBg: "rgba(124,111,255,0.1)", badgeColor: "#7c6fff", badgeBorder: "rgba(124,111,255,0.3)",
    desc: "Open-source image synthesis powerhouse enabling local generation with extensive community fine-tunes and LoRA customization.",
    useTags: ["Local Generation", "Fine-tuning", "Custom Models", "Fashion", "Architecture"],
    useCases: [
      "Fashion designers visualize clothing lines before production",
      "Interior designers show clients photorealistic room mockups",
      "Privacy-first image generation without cloud APIs",
      "Artists create fine-tuned models on personal art styles",
      "Game studios batch-generate texture and asset variations"
    ],
    specs: { "Release": "2024", "Access": "Open Source", "Resolution": "Up to 2MP", "Customization": "Full" }
  },
  {
    id: 19, name: "Midjourney v6", org: "Midjourney", type: "image-gen", icon: "✨",
    iconBg: "rgba(255,107,107,0.15)", iconBorder: "rgba(255,107,107,0.3)",
    accent: "#ff6b6b", glow: "rgba(255,107,107,0.08)",
    badgeBg: "rgba(255,107,107,0.1)", badgeColor: "#ff6b6b", badgeBorder: "rgba(255,107,107,0.3)",
    desc: "The artist's choice for stunning, aesthetically refined image generation with unparalleled stylistic control.",
    useTags: ["Fine Art", "Album Covers", "Editorial", "Concept Boards", "Luxury Brands"],
    useCases: [
      "Musicians generate album artwork and promotional materials",
      "Magazine editors create editorial fashion imagery",
      "Creative directors produce mood boards for brand pitches",
      "Tattoo artists design custom ink concepts for clients",
      "Book cover designers produce options in hours not weeks"
    ],
    specs: { "Release": "2024", "Access": "Discord Subscription", "Aesthetic": "Premium Art", "Control": "Style Refs" }
  },
  {
    id: 20, name: "Flux.1", org: "Black Forest Labs", type: "image-gen", icon: "⚗️",
    iconBg: "rgba(0,245,196,0.15)", iconBorder: "rgba(0,245,196,0.3)",
    accent: "#00f5c4", glow: "rgba(0,245,196,0.08)",
    badgeBg: "rgba(0,245,196,0.1)", badgeColor: "#00f5c4", badgeBorder: "rgba(0,245,196,0.3)",
    desc: "Next-generation flow-based image model achieving photographic realism with excellent text rendering and prompt fidelity.",
    useTags: ["Photorealism", "Text in Images", "Product Photography", "Portraits", "Open Source"],
    useCases: [
      "E-commerce brands generate product photos without studios",
      "Photographers use AI to create impossible compositions",
      "Infographic designers embed legible text in generated images",
      "Social media influencers create photorealistic virtual backgrounds",
      "Real estate agents visualize renovated property interiors"
    ],
    specs: { "Release": "2024", "Access": "Open + API", "Variants": "Schnell/Dev/Pro", "Text": "Best-in-class" }
  },

  // VIDEO GENERATION
  {
    id: 21, name: "Sora", org: "OpenAI", type: "video-gen", icon: "🎬",
    iconBg: "rgba(16,163,127,0.15)", iconBorder: "rgba(16,163,127,0.3)",
    accent: "#10a37f", glow: "rgba(16,163,127,0.08)",
    badgeBg: "rgba(16,163,127,0.1)", badgeColor: "#10a37f", badgeBorder: "rgba(16,163,127,0.3)",
    desc: "OpenAI's text-to-video model understanding and simulating the physical world with cinematic quality up to 60 seconds.",
    useTags: ["Film Production", "Ads", "Social Content", "Training Data", "Visualization"],
    useCases: [
      "Independent filmmakers create cinematic scenes on no budget",
      "Advertising agencies produce TV spots without physical shoots",
      "Architects visualize buildings in animated walkthroughs",
      "Scientists visualize complex phenomena like protein folding",
      "Social creators produce viral short-form video content"
    ],
    specs: { "Release": "2024", "Duration": "Up to 60s", "Access": "ChatGPT Plus", "Quality": "1080p" }
  },
  {
    id: 22, name: "Runway Gen-3", org: "Runway", type: "video-gen", icon: "🎞️",
    iconBg: "rgba(124,111,255,0.15)", iconBorder: "rgba(124,111,255,0.3)",
    accent: "#7c6fff", glow: "rgba(124,111,255,0.08)",
    badgeBg: "rgba(124,111,255,0.1)", badgeColor: "#7c6fff", badgeBorder: "rgba(124,111,255,0.3)",
    desc: "Professional video generation platform used in Hollywood productions for VFX, video editing, and motion synthesis.",
    useTags: ["VFX", "Post-Production", "Motion Graphics", "Ad Production", "Content"],
    useCases: [
      "Hollywood studios use for digital doubles and VFX shots",
      "Video editors perform AI-powered inpainting and background replacement",
      "Music video directors create surreal visual effects",
      "News studios generate illustrative b-roll footage",
      "Startups produce polished product demo videos without crews"
    ],
    specs: { "Release": "2024", "Access": "API + Web", "Control": "Motion Brush", "Integration": "Adobe Suite" }
  },
  {
    id: 23, name: "Kling AI", org: "Kuaishou", type: "video-gen", icon: "📽️",
    iconBg: "rgba(255,107,107,0.15)", iconBorder: "rgba(255,107,107,0.3)",
    accent: "#ff6b6b", glow: "rgba(255,107,107,0.08)",
    badgeBg: "rgba(255,107,107,0.1)", badgeColor: "#ff6b6b", badgeBorder: "rgba(255,107,107,0.3)",
    desc: "Chinese video generation breakthrough delivering 2-minute, high-quality videos with realistic physics simulation.",
    useTags: ["Long Videos", "Physics Simulation", "Social Video", "Character Motion", "Storytelling"],
    useCases: [
      "Creates 2-minute short films from text descriptions",
      "Realistic human character animation for storytelling",
      "Chinese social media content production at massive scale",
      "E-learning video creation without production teams",
      "Fashion brands animate clothing in realistic motion"
    ],
    specs: { "Release": "2024", "Duration": "Up to 2min", "Access": "Web + API", "Physics": "Advanced" }
  },

  // CODE AI
  {
    id: 24, name: "GitHub Copilot", org: "GitHub / OpenAI", type: "code", icon: "💻",
    iconBg: "rgba(255,209,102,0.15)", iconBorder: "rgba(255,209,102,0.3)",
    accent: "#ffd166", glow: "rgba(255,209,102,0.08)",
    badgeBg: "rgba(255,209,102,0.1)", badgeColor: "#ffd166", badgeBorder: "rgba(255,209,102,0.3)",
    desc: "The world's most deployed AI pair programmer, completing code from context, tests, and natural language comments.",
    useTags: ["IDE Integration", "Code Completion", "Documentation", "Test Gen", "Refactoring"],
    useCases: [
      "Developers report 55% faster coding with AI autocomplete",
      "Auto-generates unit tests for existing functions",
      "Converts legacy code between languages automatically",
      "Writes boilerplate so engineers focus on architecture",
      "Explains unfamiliar codebases through natural language"
    ],
    specs: { "Release": "2021", "Languages": "All major", "Access": "Subscription", "Integration": "VS Code, JetBrains" }
  },
  {
    id: 25, name: "Cursor", org: "Anysphere", type: "code", icon: "🖱️",
    iconBg: "rgba(0,245,196,0.15)", iconBorder: "rgba(0,245,196,0.3)",
    accent: "#00f5c4", glow: "rgba(0,245,196,0.08)",
    badgeBg: "rgba(0,245,196,0.1)", badgeColor: "#00f5c4", badgeBorder: "rgba(0,245,196,0.3)",
    desc: "AI-native code editor enabling whole-codebase understanding, natural language editing, and autonomous bug fixing.",
    useTags: ["Full Codebase AI", "NL Code Editing", "Debugging", "Startups", "Rapid Dev"],
    useCases: [
      "Solo founders build full-stack apps with minimal coding experience",
      "Edits multiple files simultaneously based on one natural language command",
      "Automatically locates and fixes bugs across entire codebases",
      "Refactors large legacy projects with AI-guided suggestions",
      "Interview prep — generates explained solutions to LeetCode problems"
    ],
    specs: { "Release": "2023", "Access": "Subscription", "Models": "GPT-4o/Claude/Custom", "Type": "IDE" }
  },
  {
    id: 26, name: "AlphaCode 2", org: "Google DeepMind", type: "code", icon: "🏆",
    iconBg: "rgba(66,133,244,0.15)", iconBorder: "rgba(66,133,244,0.3)",
    accent: "#4285f4", glow: "rgba(66,133,244,0.08)",
    badgeBg: "rgba(66,133,244,0.1)", badgeColor: "#4285f4", badgeBorder: "rgba(66,133,244,0.3)",
    desc: "DeepMind's competition programming AI that outperforms 85% of human competitive programmers on Codeforces.",
    useTags: ["Competitive Programming", "Algorithms", "Interview Prep", "Research", "Optimization"],
    useCases: [
      "Competitive programmers use as a sparring partner for contests",
      "Software engineers practice algorithmic interview questions",
      "Optimization problems in logistics and supply chain",
      "Researchers explore computational complexity solutions",
      "CS educators create challenging problem sets with solutions"
    ],
    specs: { "Release": "2023", "Benchmark": "Top 15%", "Access": "Research", "Focus": "Algorithms" }
  },
  {
    id: 27, name: "Devin", org: "Cognition AI", type: "code", icon: "🤖",
    iconBg: "rgba(255,107,107,0.15)", iconBorder: "rgba(255,107,107,0.3)",
    accent: "#ff6b6b", glow: "rgba(255,107,107,0.08)",
    badgeBg: "rgba(255,107,107,0.1)", badgeColor: "#ff6b6b", badgeBorder: "rgba(255,107,107,0.3)",
    desc: "The world's first AI software engineer capable of autonomously completing multi-hour programming tasks end-to-end.",
    useTags: ["Autonomous Coding", "Full Stack Dev", "Bug Fixing", "API Integration", "Agents"],
    useCases: [
      "Autonomously builds and deploys web applications from specs",
      "Fixes GitHub issues end-to-end without human intervention",
      "Migrates databases and refactors large codebases",
      "Integrates third-party APIs into existing products",
      "Creates data science notebooks and ML pipelines autonomously"
    ],
    specs: { "Release": "2024", "Access": "Waitlist", "Type": "AI Agent", "Task Length": "Multi-hour" }
  },

  // MULTIMODAL
  {
    id: 28, name: "Gemini Ultra", org: "Google DeepMind", type: "multimodal", icon: "🌐",
    iconBg: "rgba(66,133,244,0.15)", iconBorder: "rgba(66,133,244,0.3)",
    accent: "#4285f4", glow: "rgba(66,133,244,0.08)",
    badgeBg: "rgba(66,133,244,0.1)", badgeColor: "#4285f4", badgeBorder: "rgba(66,133,244,0.3)",
    desc: "Google's most powerful model surpassing human expert performance on MMLU and natively processing text, image, audio, video, and code.",
    useTags: ["Research", "Expert Tasks", "Long Video", "Science", "Education"],
    useCases: [
      "Medical researchers analyze multi-hour surgical procedure videos",
      "Scientists run computational chemistry simulations with reasoning",
      "Educators receive expert-level tutoring across all STEM subjects",
      "Legal teams process entire case files with documents and audio",
      "Intelligence analysts synthesize multi-source multimedia briefings"
    ],
    specs: { "Release": "2024", "Context": "1M tokens", "Access": "Google One AI Premium", "Modality": "All" }
  },
  {
    id: 29, name: "LLaVA 1.6", org: "Haotian Liu et al.", type: "multimodal", icon: "🦅",
    iconBg: "rgba(0,245,196,0.15)", iconBorder: "rgba(0,245,196,0.3)",
    accent: "#00f5c4", glow: "rgba(0,245,196,0.08)",
    badgeBg: "rgba(0,245,196,0.1)", badgeColor: "#00f5c4", badgeBorder: "rgba(0,245,196,0.3)",
    desc: "Open-source visual instruction tuning model connecting language models with vision encoders for versatile image understanding.",
    useTags: ["Open Source", "On-Premise", "Research", "Medical", "Chart Analysis"],
    useCases: [
      "Academic labs deploy locally for vision-language research",
      "Hospitals analyze medical images with data privacy guarantees",
      "Interprets scientific charts and plots in research papers",
      "Accessibility tools describing visual content for blind users",
      "Factory automation combining vision with natural language commands"
    ],
    specs: { "Release": "2024", "Access": "Open Source", "Modality": "Image+Text", "Base": "LLaMA" }
  },

  // ROBOTICS
  {
    id: 30, name: "RT-2", org: "Google DeepMind", type: "robotics", icon: "🦾",
    iconBg: "rgba(255,209,102,0.15)", iconBorder: "rgba(255,209,102,0.3)",
    accent: "#ffd166", glow: "rgba(255,209,102,0.08)",
    badgeBg: "rgba(255,209,102,0.1)", badgeColor: "#ffd166", badgeBorder: "rgba(255,209,102,0.3)",
    desc: "Robotics Transformer 2 — enables robots to follow natural language instructions and perform physical tasks by combining vision and language.",
    useTags: ["Manufacturing", "Warehouse", "Home Robots", "Healthcare", "Agriculture"],
    useCases: [
      "Assembly line robots execute verbal instructions for flexible manufacturing",
      "Warehouse bots navigate and pick items from natural language orders",
      "Home assistant robots respond to everyday household commands",
      "Hospital robots handle tasks like delivering medications",
      "Agricultural robots harvest produce based on verbal task descriptions"
    ],
    specs: { "Release": "2023", "Type": "Vision-Language-Action", "Access": "Research", "Input": "Language+Vision" }
  },
  {
    id: 31, name: "Figure 02", org: "Figure AI", type: "robotics", icon: "🚶",
    iconBg: "rgba(124,111,255,0.15)", iconBorder: "rgba(124,111,255,0.3)",
    accent: "#7c6fff", glow: "rgba(124,111,255,0.08)",
    badgeBg: "rgba(124,111,255,0.1)", badgeColor: "#7c6fff", badgeBorder: "rgba(124,111,255,0.3)",
    desc: "General-purpose humanoid robot powered by OpenAI's multimodal AI enabling natural conversation and complex dexterous manipulation.",
    useTags: ["Manufacturing", "Logistics", "Hazardous Environments", "Elderly Care", "Construction"],
    useCases: [
      "BMW deploys in factories for car assembly tasks",
      "Handles materials in environments unsafe for humans",
      "Elderly care companions performing physical assistance",
      "Construction site material handling and labor tasks",
      "Retail and logistics fulfillment in warehouses"
    ],
    specs: { "Release": "2024", "Type": "Humanoid Robot", "Height": "5'6\"", "Speed": "1.2 m/s" }
  },
  {
    id: 32, name: "Spot", org: "Boston Dynamics", type: "robotics", icon: "🐕",
    iconBg: "rgba(255,107,107,0.15)", iconBorder: "rgba(255,107,107,0.3)",
    accent: "#ff6b6b", glow: "rgba(255,107,107,0.08)",
    badgeBg: "rgba(255,107,107,0.1)", badgeColor: "#ff6b6b", badgeBorder: "rgba(255,107,107,0.3)",
    desc: "Agile quadruped robot with AI-powered navigation, inspection, and manipulation capabilities for real-world deployment.",
    useTags: ["Industrial Inspection", "Construction", "Public Safety", "Energy", "Mining"],
    useCases: [
      "Oil & gas platforms use Spot for hazardous site inspections",
      "Construction sites track progress and detect safety violations",
      "Police departments use for bomb disposal reconnaissance",
      "Nuclear plants inspect radioactive areas remotely",
      "Utility companies patrol pipelines and infrastructure"
    ],
    specs: { "Release": "2020", "Type": "Quadruped", "Battery": "90 min", "Payload": "14 kg" }
  },

  // SCIENCE AI
  {
    id: 33, name: "AlphaFold 3", org: "Google DeepMind", type: "science", icon: "🧬",
    iconBg: "rgba(6,214,160,0.15)", iconBorder: "rgba(6,214,160,0.3)",
    accent: "#06d6a0", glow: "rgba(6,214,160,0.08)",
    badgeBg: "rgba(6,214,160,0.1)", badgeColor: "#06d6a0", badgeBorder: "rgba(6,214,160,0.3)",
    desc: "Predicts the 3D structure of proteins, DNA, RNA, and small molecules with atomic accuracy — revolutionizing biology and drug discovery.",
    useTags: ["Drug Discovery", "Disease Research", "Genetics", "Vaccine Design", "Biotech"],
    useCases: [
      "Accelerates drug discovery by predicting protein-drug binding",
      "Researchers solved protein structure problems stuck for 50 years",
      "Vaccine development for diseases like malaria and HIV",
      "Understanding genetic mutations linked to cancer",
      "Designing novel enzymes for industrial biotechnology"
    ],
    specs: { "Release": "2024", "Accuracy": "Atomic level", "Access": "AlphaFold Server", "Coverage": "All biomolecules" }
  },
  {
    id: 34, name: "GNoME", org: "Google DeepMind", type: "science", icon: "💎",
    iconBg: "rgba(255,209,102,0.15)", iconBorder: "rgba(255,209,102,0.3)",
    accent: "#ffd166", glow: "rgba(255,209,102,0.08)",
    badgeBg: "rgba(255,209,102,0.1)", badgeColor: "#ffd166", badgeBorder: "rgba(255,209,102,0.3)",
    desc: "Graph Networks for Materials Exploration — discovered 2.2 million new crystal structures, expanding known stable materials by 45x.",
    useTags: ["Battery Research", "Superconductors", "Solar Cells", "Clean Energy", "Electronics"],
    useCases: [
      "Identifies new lithium-ion battery materials for EVs",
      "Discovers room-temperature superconductor candidates",
      "Designs novel solar cell materials for higher efficiency",
      "Creates better semiconductors for electronics",
      "Finds new thermoelectric materials for waste heat recovery"
    ],
    specs: { "Release": "2023", "Discoveries": "2.2M structures", "Access": "Research", "Type": "Graph Neural Net" }
  },
  {
    id: 35, name: "GraphCast", org: "Google DeepMind", type: "science", icon: "🌤️",
    iconBg: "rgba(66,133,244,0.15)", iconBorder: "rgba(66,133,244,0.3)",
    accent: "#4285f4", glow: "rgba(66,133,244,0.08)",
    badgeBg: "rgba(66,133,244,0.1)", badgeColor: "#4285f4", badgeBorder: "rgba(66,133,244,0.3)",
    desc: "AI weather prediction system outperforming traditional models with 10-day global forecasts in under 60 seconds.",
    useTags: ["Weather Forecasting", "Climate Research", "Disaster Warning", "Energy Grid", "Agriculture"],
    useCases: [
      "Meteorological agencies generate forecasts 1000x faster",
      "Early warning systems for hurricanes and severe weather",
      "Energy grids optimize renewable power generation predictions",
      "Farmers plan planting and harvesting with better long-range forecasts",
      "Shipping routes optimized based on ultra-accurate sea forecasts"
    ],
    specs: { "Release": "2023", "Speed": "<60 seconds", "Horizon": "10 days", "Access": "Research" }
  },
  {
    id: 36, name: "Med-PaLM 2", org: "Google", type: "science", icon: "⚕️",
    iconBg: "rgba(255,107,107,0.15)", iconBorder: "rgba(255,107,107,0.3)",
    accent: "#ff6b6b", glow: "rgba(255,107,107,0.08)",
    badgeBg: "rgba(255,107,107,0.1)", badgeColor: "#ff6b6b", badgeBorder: "rgba(255,107,107,0.3)",
    desc: "Medical large language model scoring expert-level performance on USMLE medical licensing exams for clinical question answering.",
    useTags: ["Clinical Decision", "Medical Education", "Patient Q&A", "Diagnostics", "EHR Analysis"],
    useCases: [
      "Physicians use for differential diagnosis support",
      "Medical students practice clinical reasoning with AI feedback",
      "Patients get plain-language explanations of conditions",
      "EHR systems extract insights from unstructured clinical notes",
      "Hospital systems flag at-risk patients from medical records"
    ],
    specs: { "Release": "2023", "Benchmark": "Expert USMLE", "Access": "Cloud Research", "Type": "Medical LLM" }
  },

  // RECOMMENDATION & SEARCH
  {
    id: 37, name: "YouTube Recommendations", org: "Google", type: "recommendation", icon: "📺",
    iconBg: "rgba(255,0,0,0.15)", iconBorder: "rgba(255,0,0,0.3)",
    accent: "#ff0000", glow: "rgba(255,0,0,0.08)",
    badgeBg: "rgba(255,0,0,0.1)", badgeColor: "#ff4444", badgeBorder: "rgba(255,0,0,0.3)",
    desc: "Deep neural recommendation system serving 70% of all videos watched on YouTube using multi-task learning and user signals.",
    useTags: ["Content Discovery", "Personalization", "Engagement", "Creator Growth", "Ad Targeting"],
    useCases: [
      "Serves 500 hours of content uploaded per minute to right viewers",
      "Helps unknown creators reach relevant audiences organically",
      "Personalizes 2+ billion user homepages simultaneously",
      "Targets advertising to relevant audiences with pinpoint accuracy",
      "Surfaces trending content for news discovery"
    ],
    specs: { "Scale": "2B+ users", "Type": "Deep Neural Net", "Signals": "Watch time, clicks", "Updates": "Real-time" }
  },
  {
    id: 38, name: "Spotify Discover Weekly", org: "Spotify", type: "recommendation", icon: "🎧",
    iconBg: "rgba(30,215,96,0.15)", iconBorder: "rgba(30,215,96,0.3)",
    accent: "#1ed760", glow: "rgba(30,215,96,0.08)",
    badgeBg: "rgba(30,215,96,0.1)", badgeColor: "#1ed760", badgeBorder: "rgba(30,215,96,0.3)",
    desc: "Collaborative filtering + NLP model that creates perfectly personalized 30-song playlists regenerated every Monday.",
    useTags: ["Music Discovery", "Personalization", "Artist Exposure", "Mood Matching", "Playlist Gen"],
    useCases: [
      "60M users receive a unique playlist perfectly matching their taste",
      "Indie artists discovered by millions who wouldn't find them otherwise",
      "Mood-based recommendations for working, exercising, or relaxing",
      "Bridges cultural gaps by recommending music from other regions",
      "Introduces listeners to new genres adjacent to their tastes"
    ],
    specs: { "Scale": "600M+ users", "Type": "Collaborative Filtering + NLP", "Update": "Weekly", "Songs": "30 per playlist" }
  },
  {
    id: 39, name: "Google Search (AI Overview)", org: "Google", type: "search", icon: "🔍",
    iconBg: "rgba(66,133,244,0.15)", iconBorder: "rgba(66,133,244,0.3)",
    accent: "#4285f4", glow: "rgba(66,133,244,0.08)",
    badgeBg: "rgba(66,133,244,0.1)", badgeColor: "#4285f4", badgeBorder: "rgba(66,133,244,0.3)",
    desc: "AI-powered search synthesis generating direct answers with citations, reducing the need to visit individual web pages.",
    useTags: ["Information Retrieval", "Synthesis", "Research", "Shopping", "Local Search"],
    useCases: [
      "Instantly answers complex multi-part research questions",
      "Synthesizes medical information from multiple authoritative sources",
      "Compares products across dozens of reviews automatically",
      "Provides localized business information with hours and ratings",
      "Generates step-by-step how-to answers for practical tasks"
    ],
    specs: { "Scale": "8.5B+ queries/day", "Type": "RAG + LLM", "Access": "Google Search", "Speed": "Milliseconds" }
  },
  {
    id: 40, name: "Perplexity AI", org: "Perplexity AI", type: "search", icon: "🌀",
    iconBg: "rgba(20,100,255,0.15)", iconBorder: "rgba(20,100,255,0.3)",
    accent: "#1464ff", glow: "rgba(20,100,255,0.08)",
    badgeBg: "rgba(20,100,255,0.1)", badgeColor: "#6699ff", badgeBorder: "rgba(20,100,255,0.3)",
    desc: "AI-native answer engine combining real-time web search with LLM synthesis for cited, conversational answers.",
    useTags: ["Research", "Fact-checking", "Academic", "News", "Technical Answers"],
    useCases: [
      "Journalists fact-check claims with real-time source citations",
      "Academics quickly survey literature on any topic",
      "Developers get cited technical answers about libraries and APIs",
      "Breaking news synthesis from dozens of sources instantly",
      "Investment research on company news and market trends"
    ],
    specs: { "Release": "2022", "Type": "Search + LLM RAG", "Access": "Free + Pro", "Sources": "Real-time web" }
  },

  // AUTONOMOUS AGENTS
  {
    id: 41, name: "AutoGPT", org: "Torantulino", type: "llm", icon: "🔄",
    iconBg: "rgba(255,165,0,0.15)", iconBorder: "rgba(255,165,0,0.3)",
    accent: "#ffa500", glow: "rgba(255,165,0,0.08)",
    badgeBg: "rgba(255,165,0,0.1)", badgeColor: "#ffa500", badgeBorder: "rgba(255,165,0,0.3)",
    desc: "Pioneering autonomous AI agent that chains LLM calls with tools to independently complete complex multi-step tasks.",
    useTags: ["Research Automation", "Market Analysis", "Content Pipeline", "Coding Tasks", "Lead Gen"],
    useCases: [
      "Automatically researches and drafts competitive intelligence reports",
      "End-to-end content pipelines from topic to published post",
      "Autonomously writes and debugs code from feature descriptions",
      "Lead generation: finds contacts, writes emails, sends outreach",
      "Market research by browsing web, collecting and synthesizing data"
    ],
    specs: { "Release": "2023", "Type": "LLM Agent", "Access": "Open Source", "Tools": "Web, File, Code" }
  },
  {
    id: 42, name: "Waymo Driver", org: "Waymo", type: "robotics", icon: "🚗",
    iconBg: "rgba(0,170,255,0.15)", iconBorder: "rgba(0,170,255,0.3)",
    accent: "#00aaff", glow: "rgba(0,170,255,0.08)",
    badgeBg: "rgba(0,170,255,0.1)", badgeColor: "#00aaff", badgeBorder: "rgba(0,170,255,0.3)",
    desc: "Level 4 autonomous driving system fusing LiDAR, radar, and cameras with deep learning for commercial robotaxi operations.",
    useTags: ["Autonomous Driving", "Robotaxi", "Logistics", "Safety", "Urban Mobility"],
    useCases: [
      "Fully driverless commercial robotaxi service in Phoenix and SF",
      "Reduces accidents caused by human error on city roads",
      "Mobility solution for elderly and disabled populations",
      "Last-mile delivery without human drivers",
      "Data collection for urban traffic optimization"
    ],
    specs: { "Release": "2020 (commercial)", "Type": "Autonomous Vehicle", "Level": "Level 4", "Cities": "Phoenix, SF, Austin" }
  },
  {
    id: 43, name: "AlphaGo / AlphaZero", org: "Google DeepMind", type: "science", icon: "⚫",
    iconBg: "rgba(6,214,160,0.15)", iconBorder: "rgba(6,214,160,0.3)",
    accent: "#06d6a0", glow: "rgba(6,214,160,0.08)",
    badgeBg: "rgba(6,214,160,0.1)", badgeColor: "#06d6a0", badgeBorder: "rgba(6,214,160,0.3)",
    desc: "Reinforcement learning system mastering Go, Chess, and Shogi through self-play, discovering moves never seen in millennia of human play.",
    useTags: ["Game Mastery", "Drug Discovery", "Chip Design", "Strategy AI", "Optimization"],
    useCases: [
      "Defeated world Go champion, proving superhuman RL capabilities",
      "Principles applied to protein structure prediction (AlphaFold)",
      "Google uses AlphaChip to design faster, better TPUs autonomously",
      "Chess engines now routinely train using AlphaZero techniques",
      "Operations research for scheduling and logistics optimization"
    ],
    specs: { "Release": "2016/2017", "Type": "Reinforcement Learning", "Games": "Go, Chess, Shogi", "Access": "Research" }
  },
  {
    id: 44, name: "Gemma 2", org: "Google DeepMind", type: "llm", icon: "💠",
    iconBg: "rgba(66,133,244,0.15)", iconBorder: "rgba(66,133,244,0.3)",
    accent: "#4285f4", glow: "rgba(66,133,244,0.08)",
    badgeBg: "rgba(66,133,244,0.1)", badgeColor: "#4285f4", badgeBorder: "rgba(66,133,244,0.3)",
    desc: "Google's lightweight open model family outperforming models 2x their size for edge deployment and fine-tuning.",
    useTags: ["Edge Deployment", "Mobile AI", "On-device", "Fine-tuning", "Low-latency"],
    useCases: [
      "AI features in Android apps running entirely on-device",
      "Low-cost inference for resource-constrained startups",
      "Privacy-preserving on-device text processing",
      "Fine-tuned for domain-specific enterprise use cases",
      "Educational deployments in low-bandwidth environments"
    ],
    specs: { "Release": "2024", "Sizes": "2B, 9B, 27B", "Access": "Open Weights", "Modality": "Text" }
  },
  {
    id: 45, name: "Phi-3", org: "Microsoft", type: "llm", icon: "🪟",
    iconBg: "rgba(0,120,212,0.15)", iconBorder: "rgba(0,120,212,0.3)",
    accent: "#0078d4", glow: "rgba(0,120,212,0.08)",
    badgeBg: "rgba(0,120,212,0.1)", badgeColor: "#0078d4", badgeBorder: "rgba(0,120,212,0.3)",
    desc: "Microsoft's small language model punching above its weight class, running at GPT-3.5 quality on a smartphone.",
    useTags: ["Mobile AI", "Edge Computing", "IoT", "Offline AI", "Enterprise"],
    useCases: [
      "AI assistants running fully offline on mobile devices",
      "Copilot features embedded directly in Windows for edge processing",
      "IoT devices with embedded intelligence for local decisions",
      "Enterprise compliance tools processing data without cloud",
      "Emerging markets with limited internet access"
    ],
    specs: { "Release": "2024", "Size": "3.8B params", "Access": "Open Source", "Runs on": "Phone/Laptop" }
  },
  {
    id: 46, name: "Stable Video Diffusion", org: "Stability AI", type: "video-gen", icon: "🎥",
    iconBg: "rgba(124,111,255,0.15)", iconBorder: "rgba(124,111,255,0.3)",
    accent: "#7c6fff", glow: "rgba(124,111,255,0.08)",
    badgeBg: "rgba(124,111,255,0.1)", badgeColor: "#7c6fff", badgeBorder: "rgba(124,111,255,0.3)",
    desc: "Open-source image-to-video model generating consistent short video clips from single still images.",
    useTags: ["Product Animation", "Social Media", "E-commerce", "Cinemagraphs", "NFT"],
    useCases: [
      "E-commerce platforms animate product photos for richer listings",
      "Social media creators turn artwork into mesmerizing video loops",
      "Fashion brands bring lookbook photos to life with subtle motion",
      "Photographers create cinemagraph effects for premium clients",
      "Digital artists animate their paintings for NFT collections"
    ],
    specs: { "Release": "2023", "Access": "Open Source", "Input": "Image", "Output": "Video clips" }
  },
  {
    id: 47, name: "DALL-E 3 GPT-4V Combo", org: "OpenAI", type: "multimodal", icon: "🔀",
    iconBg: "rgba(16,163,127,0.15)", iconBorder: "rgba(16,163,127,0.3)",
    accent: "#10a37f", glow: "rgba(16,163,127,0.08)",
    badgeBg: "rgba(16,163,127,0.1)", badgeColor: "#10a37f", badgeBorder: "rgba(16,163,127,0.3)",
    desc: "The ChatGPT multimodal stack combining vision understanding and image generation for iterative visual creation.",
    useTags: ["Image Iteration", "Design Feedback", "Visual Education", "Prototyping", "Accessibility"],
    useCases: [
      "Designers receive AI critique of uploaded mockups",
      "Users describe images verbally and receive generated visuals",
      "Teachers upload diagrams and get explanations for students",
      "Architects iterate building designs through conversation",
      "Blind users describe what they want to see generated"
    ],
    specs: { "Release": "2023", "Modality": "Image in + Image out", "Access": "ChatGPT Plus", "Loop": "Generative" }
  },
  {
    id: 48, name: "NotebookLM", org: "Google", type: "multimodal", icon: "📓",
    iconBg: "rgba(255,209,102,0.15)", iconBorder: "rgba(255,209,102,0.3)",
    accent: "#ffd166", glow: "rgba(255,209,102,0.08)",
    badgeBg: "rgba(255,209,102,0.1)", badgeColor: "#ffd166", badgeBorder: "rgba(255,209,102,0.3)",
    desc: "AI research assistant grounded in user-uploaded documents, generating summaries, Q&A, and podcast-style audio discussions.",
    useTags: ["Research", "Studying", "Document Q&A", "Podcast Generation", "Note-taking"],
    useCases: [
      "Students upload textbooks and quiz themselves before exams",
      "Researchers synthesize dozens of papers into coherent summaries",
      "Journalists analyze document dumps and find key narratives",
      "Executives get audio briefings from uploaded board reports",
      "Lawyers review case documents through conversational Q&A"
    ],
    specs: { "Release": "2024", "Access": "Google One", "Sources": "Up to 50 docs", "Output": "Text + Audio" }
  },
  {
    id: 49, name: "Amazon Rekognition", org: "Amazon AWS", type: "vision", icon: "👥",
    iconBg: "rgba(255,153,0,0.15)", iconBorder: "rgba(255,153,0,0.3)",
    accent: "#ff9900", glow: "rgba(255,153,0,0.08)",
    badgeBg: "rgba(255,153,0,0.1)", badgeColor: "#ff9900", badgeBorder: "rgba(255,153,0,0.3)",
    desc: "Cloud computer vision service detecting objects, faces, unsafe content, and celebrities at massive enterprise scale.",
    useTags: ["Face Recognition", "Content Moderation", "Security", "Identity Verification", "Retail Analytics"],
    useCases: [
      "Social platforms automatically moderate millions of uploaded images",
      "Banks verify customer identity from selfie photos",
      "Event security matches attendees to invitation photos",
      "Retailers analyze shopper demographics and traffic patterns",
      "News archives automatically tag celebrity photos at scale"
    ],
    specs: { "Type": "Computer Vision API", "Access": "AWS", "Scale": "Unlimited", "Features": "10+ vision tasks" }
  },
  {
    id: 50, name: "Anthropic Claude Code", org: "Anthropic", type: "code", icon: "🖥️",
    iconBg: "rgba(124,111,255,0.15)", iconBorder: "rgba(124,111,255,0.3)",
    accent: "#7c6fff", glow: "rgba(124,111,255,0.08)",
    badgeBg: "rgba(124,111,255,0.1)", badgeColor: "#7c6fff", badgeBorder: "rgba(124,111,255,0.3)",
    desc: "Agentic coding AI embedded in the terminal that understands entire codebases and autonomously writes, edits, and runs code.",
    useTags: ["Terminal AI", "Agentic Coding", "Codebase Understanding", "Refactoring", "DevOps"],
    useCases: [
      "Understands and modifies 100,000+ line codebases from the command line",
      "Writes end-to-end features including tests and documentation",
      "Automates DevOps scripts, CI/CD configs, and deployment tasks",
      "Reviews pull requests and suggests comprehensive improvements",
      "Explains any part of a codebase in plain English to new developers"
    ],
    specs: { "Release": "2025", "Access": "CLI Tool", "Integration": "Terminal", "Context": "Full codebase" }
  }
];

const categoryStyles = {
  llm: { bg: "#0d1a2a", accent: "#7c6fff", label: "Large Language Models", icon: "🧠" },
  vision: { bg: "#0d1a1a", accent: "#00f5c4", label: "Computer Vision", icon: "👁️" },
  audio: { bg: "#1a0d1a", accent: "#8b5cf6", label: "Audio & Speech", icon: "🎵" },
  "image-gen": { bg: "#1a1a0d", accent: "#ffd166", label: "Image Generation", icon: "🎨" },
  "video-gen": { bg: "#1a0d0d", accent: "#ff6b6b", label: "Video Generation", icon: "🎬" },
  code: { bg: "#0d1a0d", accent: "#10a37f", label: "Code AI", icon: "💻" },
  multimodal: { bg: "#0d0d1a", accent: "#4285f4", label: "Multimodal", icon: "🌐" },
  robotics: { bg: "#1a1a0d", accent: "#ffa500", label: "Robotics & Agents", icon: "🤖" },
  science: { bg: "#0d1a14", accent: "#06d6a0", label: "Science AI", icon: "🔬" },
  recommendation: { bg: "#1a0d14", accent: "#ff0044", label: "Recommendations", icon: "⭐" },
  search: { bg: "#0d0d1a", accent: "#4285f4", label: "AI Search", icon: "🔍" },
};

let activeFilter = 'all';
let searchQuery = '';

function renderCards() {
  const container = document.getElementById('cards-container');
  const noResults = document.getElementById('no-results');
  container.innerHTML = '';

  const filtered = models.filter(m => {
    const matchFilter = activeFilter === 'all' || m.type === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      m.name.toLowerCase().includes(q) ||
      m.org.toLowerCase().includes(q) ||
      m.type.toLowerCase().includes(q) ||
      m.useTags.some(t => t.toLowerCase().includes(q));
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    noResults.classList.add('show');
    return;
  }
  noResults.classList.remove('show');

  // Group by type
  const groups = {};
  filtered.forEach(m => {
    if (!groups[m.type]) groups[m.type] = [];
    groups[m.type].push(m);
  });

  Object.entries(groups).forEach(([type, items]) => {
    const cat = categoryStyles[type] || { label: type, icon: '🤖', accent: '#00f5c4' };

    const header = document.createElement('div');
    header.className = 'category-header reveal';
    header.innerHTML = `
      <div class="cat-icon" style="background: ${cat.accent}1a; border: 1px solid ${cat.accent}33">${cat.icon}</div>
      <div class="cat-title" style="color: ${cat.accent}">${cat.label}</div>
      <div class="cat-line"></div>
      <div class="cat-count">${items.length} model${items.length > 1 ? 's' : ''}</div>
    `;
    container.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'cards-grid';

    items.forEach((m, i) => {
      const card = document.createElement('div');
      card.className = 'card reveal';
      card.style.cssText = `--card-accent: ${m.accent}; --card-glow: ${m.glow}; animation-delay: ${i * 0.05}s`;

      card.innerHTML = `
        <div class="card-header">
          <div class="card-icon" style="background: ${m.iconBg}; border-color: ${m.iconBorder}">${m.icon}</div>
          <div class="card-meta">
            <div class="card-name">${m.name}</div>
            <div class="card-org">${m.org}</div>
          </div>
          <div class="card-type-badge" style="background: ${m.badgeBg}; color: ${m.badgeColor}; border-color: ${m.badgeBorder}">${m.type}</div>
        </div>
        <div class="card-desc">${m.desc}</div>
        <div class="use-cases">
          <div class="use-cases-title">Applications</div>
          <div class="use-case-tags">
            ${m.useTags.map(t => `<span class="use-tag">${t}</span>`).join('')}
          </div>
        </div>
        <div class="card-footer">
          ${Object.entries(m.specs || {}).slice(0,3).map(([k,v]) => `
            <div class="detail-chip">
              <div class="chip-dot" style="background: ${m.accent}"></div>
              <span>${v}</span>
            </div>
          `).join('')}
        </div>
      `;

      card.addEventListener('click', () => openModal(m));
      grid.appendChild(card);
    });

    container.appendChild(grid);
  });

  // Trigger reveal animations
  setTimeout(observeReveal, 50);
}

function openModal(m) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');

  body.innerHTML = `
    <div style="display:flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem">
      <div class="modal-header" style="margin-bottom:0">
        <div class="modal-icon" style="background: ${m.iconBg}; border: 1px solid ${m.iconBorder}">${m.icon}</div>
        <div>
          <div class="modal-title">${m.name}</div>
          <div class="modal-org">${m.org} · <span style="color: ${m.badgeColor}">${m.type.toUpperCase()}</span></div>
        </div>
      </div>
      <button class="modal-close" id="modal-close-btn">✕</button>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Overview</div>
      <div class="modal-desc">${m.desc}</div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Real-World Use Cases</div>
      <ul class="use-case-list">
        ${m.useCases.map(uc => `<li>${uc}</li>`).join('')}
      </ul>
    </div>

    ${m.specs ? `
    <div class="modal-section">
      <div class="modal-section-title">Technical Specs</div>
      <div class="specs-grid">
        ${Object.entries(m.specs).map(([k,v]) => `
          <div class="spec-item">
            <div class="spec-key">${k}</div>
            <div class="spec-val">${v}</div>
          </div>
        `).join('')}
      </div>
    </div>` : ''}
  `;

  overlay.classList.add('open');
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

// Filters
document.getElementById('filters').addEventListener('click', e => {
  if (e.target.classList.contains('filter-btn')) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    activeFilter = e.target.dataset.filter;
    renderCards();
  }
});

// Search
document.getElementById('search-input').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderCards();
});

// Cursor glow
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Reveal on scroll
function observeReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// Update count
document.getElementById('count-models').textContent = models.length;

renderCards();
observeReveal();
