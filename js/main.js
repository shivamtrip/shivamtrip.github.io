/**
 * Portfolio copy lives in SITE. Add YouTube URLs or 11-char IDs per clip.
 * showcase[] groups multiple videos under one role or project.
 */

const CMU_WORDMARK =
  "https://upload.wikimedia.org/wikipedia/commons/f/f3/Carnegie_Mellon_University_wordmark.svg";

const SITE = {
  skills: [
    "C++ · Python · PyTorch",
    "ROS2 · Gazebo · NVIDIA Isaac Sim",
    "MoveIt · Nav2 · PX4 · MAVLink",
    "SLAM · VIO · state estimation",
    "Motion planning (RRT*, MPC, LQR) · Kalman / particle filters",
    "Imitation & reinforcement learning · LLM task planning",
    "Computer vision (YOLO, CLIP) · RGB-D, LiDAR, IMU, GPS",
    "Git · Jetson · Raspberry Pi",
  ],
  education: [
    {
      org: "Carnegie Mellon University — The Robotics Institute",
      meta: "M.S. Robotic Systems Development · May 2024 · Pittsburgh, PA · GPA 3.87/4.0",
      cmuSpeech: {
        label: "Selected as Student Commencement Speaker for CMU, School of Computer Science (2024)",
        professorQuote: {
          text:
            "Shivam was selected among a number of nominations across programs. He is an excellent example of what we are looking for in our Master’s students.",
          attribution:
            "Professor David Garlan (Associate Dean, School of Computer Science), at 0:41 of the video below",
        },
        videoId: "U2N0dtrmfD4",
        startSeconds: 63,
      },
      logo: CMU_WORDMARK,
      logoAlt: "Carnegie Mellon University",
    },
    {
      org: "MIT World Peace University",
      meta: "B.Tech Mechanical Engineering · May 2021 · Pune, India · GPA 8.75/10",
      detail: "Special Achiever Award (2021).",
      logo: "assets/logos/mit-wpu.svg",
      logoAlt: "MIT World Peace University",
    },
  ],
  achievements: [
    {
      text: "Commencement Speaker, School of Computer Science, Carnegie Mellon University (2024).",
      logo: CMU_WORDMARK,
      logoAlt: "Carnegie Mellon University",
      featured: true,
    },
    {
      text: "Swartz Entrepreneurial Fellow, CMU (2022).",
      logo: CMU_WORDMARK,
      logoAlt: "Carnegie Mellon University",
    },
    {
      text: "Deployed assistive robot in a Pittsburgh care facility; work featured by CMU School of Computer Science.",
      logo: CMU_WORDMARK,
      logoAlt: "Carnegie Mellon University",
    },
    {
      text: "Special Achiever Award, MIT World Peace University (2021).",
      logo: "assets/logos/mit-wpu.svg",
      logoAlt: "MIT World Peace University",
    },
    {
      text: "First employee at Symbol Robotics — established baseline stack for a 32-DoF humanoid mobile manipulator.",
      logo: "assets/logos/symbol-robotics.svg",
      logoAlt: "Symbol Robotics",
    },
  ],
  /**
   * Each group = one employer or highlight. Use clips[] OR clipGroups[{ heading, description?, descriptionToggleLabel?, descriptionLink?, clips }].
   * Optional description = blurb in a collapsible block (closed by default). Supports \n for line breaks; **segments** render bold.
   * Optional descriptionToggleLabel = summary line for that block (default: "Context & role").
   * Optional descriptionLink = { url, text?, lead? } appends a trailing external link (lead = text before the anchor).
   * Per-clip: youtube URL/ID; title optional; description optional (captions under a group heading).
   */
  showcase: [
    {
      org: "Apellix",
      role: "Robotics Software Engineer",
      dates: "Jun 2024 – Present",
      logo: "https://logo.clearbit.com/apellix.com",
      logoAlt: "Apellix",
      companyUrl: "https://apellix.com",
      summary:
        "Developing autonomous **power-wash** and **spray-painting drones** deployed commercially and for the US Army. \n **Focus:** visual localization/SLAM, flight software, and ground control software.",
      clipGroups: [
        {
          heading: "Project 1: Autonomous decontamination of military vehicles (Aug 2025 - Present)",
          descriptionToggleLabel: "Program context & my role",
          description:
            "This work is a part of an ongoing contract between Apellix and the US Army to develop autonomous decontamination drones. The drones autonomously detect a target vehicle, navigate to it, create a spray plan and spray a decontaminant agent on the target vehicle, to eliminate it from any CBRN (Chemical, Biological, Radiological, Nuclear) hazards that occur on the battlefield. \n \n **My Role:** System design, software architecture and software development across perception, planning, SLAM, flight software, system testing and more! ",
          clips: [
            {
              youtube: "https://youtu.be/5MbsL5zI-1M",
              description: "Demo 1 @ Dugway Proving Grounds, Utah (Dec-2025). Identifying red spots on a Chinook helicopter (proxy for contaminant) and autonomously spraying a decontaminant.",
            },
            {
              youtube: "https://youtu.be/I4bwGv6RyEQ",
              description: "Demo 2 @ Dugway Proving Grounds, Utah (Dec-2025). Identifying a HMMWV military vehicle (target vehicle) and autonomously cleaning it with water.",
            },
            {
              youtube: "https://youtu.be/Utg7eF7-vwI",
              description: "Autonomous cleaning demo @ Apellix R&D Center (Jacksonville, FL)",
            },
          ],
        },
        {
          heading: "Project 2: GPS-denied navigation using visual-inertial odometry (Sept 2024 - March 2025)",
          description:
            "This project extends our work with the US Army to enable GPS-denied navigation. We integrated VIO, SLAM and target detection capabilities to enable an Apellix drone to scan for a target vehicle, revolve around it and position itself behind the vehicle, ready to start a cleaning mission. \n \n  **My Role:** System design, software architecture and software development across perception, planning, VIO + SLAM, flight software, system testing and more! ",
          clips: [
            {
              youtube: "https://youtu.be/hFxdq0E6bMg",
              description: "Demo 1: GPS-denied navigation using VIO, SLAM and target recognition",
            },
            {
              youtube: "https://youtu.be/NseWmdItMoo",
              description: "Demo 2: GPS-denied navigation using VIO + SLAM",
            },
            {
              youtube: "https://youtu.be/2-KhX98d-qo",
              description: "Demo 3: Vehicle feature recognition and localization",
            },
          ],
        },
        {
          heading: "Spray Painting & Power Washing Drones (June 2024 - Present)",
          description:
            "Industrial spray painting and pressure washing drones designed and manufactured in Jacksonville, FL. Commercial drones operating in 20+ countries. \n \n **My Role:** Responsible for all aspects of software development & system design, from flight control stack to ground-control app and more.",
          clips: [
            {
              youtube: "https://youtube.com/shorts/v-rld8KODUc?si=prq5Otw-d8eXHueU",
              description: "Demo for Georgia Department of Transportation (Apellix customer)",
            },
            {
              youtube: "https://youtube.com/shorts/4xjOmPAK4Zc?si=HDwP_jajW7zy3mjf",
              description: "Spray-painting drone test at our in-house facility in Jacksonville, FL",
            },
            {
              youtube: "https://youtu.be/_lsKcIl_G7E?si=Zo3X-vYwdFoCpY1U",
              description: "Power washing a building with an Apellix drone",
            },
            {
              youtube: "https://youtube.com/shorts/mMnBETybUbs?si=3XQxu51kSi0kVIQ7",
              description: "Power washing a water tower with an Apellix drone",
            },
          ],
        },
        {
          heading: "Apellix Intelligence (AI) - Autonomous Drone Cleaning (Nov 2025 - Feb 2026)",
          description:
            "Autonomous cleaning for everyone: Draw-a-box and watch the drone autonomously clean that area for you. \n \n **My Role:** Created this concept leveraging my autonomy experience from US Army projects. Immediate demand from our customers for this feature. Opened a new SaaS-based revenue stream for Apellix.",
          clips: [
            {
              youtube: "https://youtu.be/nZRy5b-qqSc?si=Oun14xAvIXUPpHgk",
              description: "Autonomous drone cleaning with Apellix Intelligence (1 of 2).",
            },
            {
              youtube: "https://youtu.be/7VAEC0EPLno",
              startSeconds: 97,
              description: "Autonomous drone cleaning with Apellix Intelligence (2 of 2).",
            },
          ],
        },
      ],
    },
    {
      org: "CMU Assistive Robot",
      role: "Graduate Capstone Project",
      dates: "Sep 2022 – Dec 2023",
      logoAlt: "Carnegie Mellon University",
      summary:
        "Autonomous object fetch-and-retrieval for an assistive mobile manipulator (Perception, Planning, Navigation, Manipulation). Cloud LLM agent linking natural language to HRI, navigation, and manipulation — deployed in a Pittsburgh care facility. \n\n **Use Case:** A user asks Alfred (the Stretch RE1 robot) by voice to bring an object. Alfred interprets the request, plans a route to the object's area, and drives there. It then searches for the object, lines up to grasp it, plans and executes the arm motion to pick it up, and returns to the user with the item.",
      relatedEmbed: {
        url: "https://www.cs.cmu.edu/news/2023/care-home-robot",
        title: "CMU Team Explores Future of Caregiving With Assistive Robot",
      },
      clips: [
        {
          youtube: "https://youtu.be/Km9_RogBT0A?si=v1B3SXMm8bXKXM04",
          description: "Assistive robot at AI Makerspace Lab, CMU (Internal testing)",
        },
        {
          youtube: "https://youtu.be/epFzxcuik8c?si=kuqQcMOShwoySZsC",
          description: "Assistive robot at Vincentian Senior Living, Pittsburgh (deployment)",
        },
        {
          youtube: "https://youtu.be/Q8ZKP0MZZpU?si=ByVSCJcS0ZU-c8So",
          description: "Assistive robot at Vincentian Senior Living (Demo 2)",
        },
      ],
    },
  ],
  /**
   * summary: **phrase** → bold. relatedEmbed: same shape as showcase (iframe + fallback link).
   */
  otherHighlights: {
    summary:
      "I’ve previously worked at **Asteria Aerospace** (1 year) with 3 month internships at **Symbol Robotics**, **Defence Research and Development Organisation (DRDO)** and **SUN Mobility**. For more details, see **my resume** below.",
    relatedEmbed: {
      url: "assets/ShivamTripathy_Resume.pdf",
      title: "Resume — Shivam Tripathy (PDF)",
      fallbackLinkText: "open the PDF in a new tab",
    },
  },
};

function youtubeIdFromInput(input) {
  if (!input || typeof input !== "string") return null;
  const s = input.trim();
  if (!s) return null;
  if (/^[a-zA-Z0-9_-]{11}$/.test(s)) return s;
  try {
    const u = new URL(s, "https://www.youtube.com");
    const path = u.pathname || "";

    const shorts = path.match(/\/shorts\/([^/?]+)/i);
    if (shorts && shorts[1]) {
      const raw = shorts[1].split(/[?&#]/)[0];
      const id = raw.length >= 11 ? raw.slice(0, 11) : raw;
      return /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    }

    if (u.hostname.includes("youtu.be")) {
      const raw = path.replace(/^\//, "").split(/[?&#]/)[0];
      if (!raw) return null;
      const id = raw.length >= 11 ? raw.slice(0, 11) : raw;
      return /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    }

    const v = u.searchParams.get("v");
    if (v) {
      const id = v.slice(0, 11);
      return /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    }

    const embed = path.match(/\/embed\/([^/?]+)/);
    if (embed && embed[1]) {
      const id = embed[1].slice(0, 11);
      return /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    }

    return null;
  } catch {
    return null;
  }
}

function parseYoutubeTimeParam(t) {
  if (t == null || t === "") return 0;
  const s = String(t).trim();
  if (/^\d+$/.test(s)) return parseInt(s, 10);
  let sec = 0;
  let m;
  if ((m = s.match(/(\d+)h/i))) sec += parseInt(m[1], 10) * 3600;
  if ((m = s.match(/(\d+)m/i))) sec += parseInt(m[1], 10) * 60;
  if ((m = s.match(/(\d+)s/i))) sec += parseInt(m[1], 10);
  return sec;
}

function youtubeStartSecondsFromUrl(input) {
  if (!input || typeof input !== "string") return 0;
  try {
    const u = new URL(input, "https://www.youtube.com");
    const t = u.searchParams.get("t") || u.searchParams.get("start");
    return parseYoutubeTimeParam(t);
  } catch {
    return 0;
  }
}

function clipYoutubeStartSeconds(clip) {
  if (clip.startSeconds != null && Number.isFinite(Number(clip.startSeconds))) {
    const n = Math.max(0, Math.floor(Number(clip.startSeconds)));
    return n;
  }
  return youtubeStartSecondsFromUrl(clip.youtube);
}

function achievementToHtml(a) {
  const text = typeof a === "string" ? a : a.text;
  const logo = typeof a === "object" && a.logo ? a.logo : null;
  const logoAlt = typeof a === "object" && a.logoAlt ? a.logoAlt : "";
  const featured = typeof a === "object" && a.featured;
  const img = logo
    ? `<img class="achievements__logo" src="${escapeHtml(logo)}" alt="${escapeHtml(logoAlt)}" width="140" height="40" loading="lazy" decoding="async" onerror="this.remove()" />`
    : "";
  const cls = featured ? " achievements__item--featured" : "";
  return `<li class="achievements__item${cls}">${img}<div class="achievements__body">${escapeHtml(text)}</div></li>`;
}

function educationToHtml(e) {
  const img = e.logo
    ? `<div class="timeline__brand"><img class="timeline__logo" src="${escapeHtml(e.logo)}" alt="${escapeHtml(e.logoAlt || "")}" width="160" height="36" loading="lazy" decoding="async" onerror="this.closest('.timeline__brand')?.remove()" /></div>`
    : "";

  const speechVideoId =
    e.cmuSpeech && typeof e.cmuSpeech.videoId === "string"
      ? e.cmuSpeech.videoId.slice(0, 11)
      : null;
  const speechStartSeconds =
    e.cmuSpeech &&
    e.cmuSpeech.startSeconds != null &&
    Number.isFinite(Number(e.cmuSpeech.startSeconds))
      ? Math.max(0, Math.floor(Number(e.cmuSpeech.startSeconds)))
      : 0;
  const speechVideo =
    speechVideoId && /^[a-zA-Z0-9_-]{11}$/.test(speechVideoId)
      ? `
        <div class="edu-speech__media">
          <iframe
            class="edu-speech__frame"
            data-src="https://www.youtube.com/embed/${escapeHtml(
              speechVideoId
            )}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1${
              speechStartSeconds > 0 ? `&start=${speechStartSeconds}` : ""
            }"
            title="CMU Commencement Speech"
            loading="lazy"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `
      : "";

  const pq = e.cmuSpeech && e.cmuSpeech.professorQuote;
  const pqText =
    pq && pq.text != null ? String(pq.text).trim() : "";
  const pqAttribution =
    pq && pq.attribution != null ? String(pq.attribution).trim() : "";
  const professorQuoteHtml =
    pqText
      ? `
        <blockquote class="edu-speech__quote">
          <p class="edu-speech__quote-text">${escapeHtml(pqText)}</p>
          ${
            pqAttribution
              ? `<cite class="edu-speech__quote-attribution">${escapeHtml(
                  pqAttribution
                )}</cite>`
              : ""
          }
        </blockquote>`
      : "";

  const speech =
    e.cmuSpeech &&
    (e.cmuSpeech.body || e.cmuSpeech.videoId || pqText)
      ? `
      <details class="edu-speech" open>
        <summary>
          <span class="edu-speech__summary-label">${escapeHtml(
            e.cmuSpeech.label || "CMU Speech Video"
          )}</span>
          <span class="edu-speech__summary-hint"></span>
        </summary>
        ${professorQuoteHtml}
        ${
          e.cmuSpeech.body
            ? `<p class="edu-speech__body">${escapeHtml(e.cmuSpeech.body)}</p>`
            : ""
        }
        ${speechVideo}
      </details>`
      : "";

  return `
    <li>
      ${img}
      <p class="timeline__org">${escapeHtml(e.org)}</p>
      <p class="timeline__meta">${escapeHtml(e.meta)}</p>
      <p class="timeline__detail">${escapeHtml(e.detail)}</p>
      ${speech}
    </li>`;
}

function renderOtherHighlights() {
  const oh = SITE.otherHighlights;
  const root = document.getElementById("resume-root");
  if (!oh || !root) return;

  root.replaceChildren();

  const summaryRaw = oh.summary != null ? String(oh.summary).trim() : "";
  if (summaryRaw) {
    const p = document.createElement("p");
    p.className = "other-highlights__summary";
    p.innerHTML = formatInlineBoldHtml(summaryRaw);
    root.appendChild(p);
  }

  const embed = oh.relatedEmbed;
  if (embed && embed.url != null && String(embed.url).trim()) {
    const embedEl = createRelatedEmbedElement(embed);
    if (embedEl) root.appendChild(embedEl);
  }
}

function renderLists() {
  document.getElementById("skills-list").innerHTML = SITE.skills
    .map((t) => `<li>${escapeHtml(t)}</li>`)
    .join("");

  document.getElementById("education-list").innerHTML = SITE.education
    .map(educationToHtml)
    .join("");

  document.getElementById("achievements-list").innerHTML = SITE.achievements
    .map(achievementToHtml)
    .join("");
}

function initEducationSpeechEmbeds() {
  document.querySelectorAll(".edu-speech").forEach((detailsEl) => {
    const frame = detailsEl.querySelector(".edu-speech__frame");
    if (!frame) return;

    const loadVideo = () => {
      const src = frame.getAttribute("data-src");
      if (src && frame.getAttribute("src") !== src) {
        frame.setAttribute("src", src);
      }
    };

    const unloadVideo = () => {
      if (frame.getAttribute("src")) {
        frame.removeAttribute("src");
      }
    };

    if (detailsEl.open) {
      loadVideo();
    }

    detailsEl.addEventListener("toggle", () => {
      if (detailsEl.open) {
        loadVideo();
      } else {
        unloadVideo();
      }
    });
  });
}

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

/** Trusted SITE copy: newlines → <br>, **...** → <strong>. */
function formatInlineBoldHtml(raw) {
  const parts = String(raw).split(/\*\*/);
  return parts
    .map((part, i) => {
      const chunk = escapeHtml(part).replace(/\n/g, "<br>");
      return i % 2 === 0 ? chunk : `<strong>${chunk}</strong>`;
    })
    .join("");
}

/**
 * @param {{ url: string, title?: string, fallbackLinkText?: string }} config
 */
function createRelatedEmbedElement(config) {
  const url = config.url != null ? String(config.url).trim() : "";
  if (!url) return null;
  const titleRaw = config.title != null ? String(config.title).trim() : "";
  const title = titleRaw || url;
  const fallbackLinkText =
    config.fallbackLinkText != null && String(config.fallbackLinkText).trim()
      ? String(config.fallbackLinkText).trim()
      : "open in a new tab";

  const embedWrap = document.createElement("div");
  embedWrap.className = "related-embed";
  const bar = document.createElement("div");
  bar.className = "related-embed__bar";
  const outLink = document.createElement("a");
  outLink.className = "related-embed__link";
  outLink.href = url;
  outLink.target = "_blank";
  outLink.rel = "noopener noreferrer";
  outLink.textContent = title;
  bar.appendChild(outLink);
  embedWrap.appendChild(bar);
  const frame = document.createElement("iframe");
  frame.className = "related-embed__frame";
  frame.src = url;
  frame.title = title;
  frame.loading = "lazy";
  frame.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
  embedWrap.appendChild(frame);
  const fallback = document.createElement("p");
  fallback.className = "related-embed__fallback";
  fallback.append(
    document.createTextNode("If the page doesn’t load here, "),
    (() => {
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = fallbackLinkText;
      return a;
    })(),
    document.createTextNode(".")
  );
  embedWrap.appendChild(fallback);
  return embedWrap;
}

function forEachShowcaseClip(fn) {
  SITE.showcase.forEach((g) => {
    if (g.clipGroups && g.clipGroups.length) {
      g.clipGroups.forEach((cg) => {
        (cg.clips || []).forEach((c) => fn(c, g));
      });
    } else {
      (g.clips || []).forEach((c) => fn(c, g));
    }
  });
}

function showcaseHasClips() {
  let n = 0;
  forEachShowcaseClip(() => {
    n += 1;
  });
  return n > 0;
}

function countValidYoutubeClips() {
  let n = 0;
  forEachShowcaseClip((c) => {
    if (youtubeIdFromInput(c.youtube)) n += 1;
  });
  return n;
}

const players = new Map();
let youtubeInitDone = false;
/** @type {{ videoId: string; startSeconds: number }[]} */
let playerConfigs = [];

function onYouTubeIframeAPIReady() {
  if (youtubeInitDone) return;
  youtubeInitDone = true;
  if (!playerConfigs.length) return;

  playerConfigs.forEach((cfg, index) => {
    const { videoId, startSeconds } = cfg;
    const hostId = `yt-player-${index}`;

    const playerVars = {
      playsinline: 1,
      rel: 0,
      modestbranding: 1,
      fs: 1,
      controls: 1,
      loop: 1,
      playlist: videoId,
    };
    if (startSeconds > 0) {
      playerVars.start = startSeconds;
    }
    if (typeof location !== "undefined" && location.origin) {
      playerVars.origin = location.origin;
    }

    const player = new YT.Player(hostId, {
      videoId,
      playerVars,
      events: {
        onReady: (e) => {
          try {
            e.target.mute();
            if (startSeconds > 0) {
              e.target.seekTo(startSeconds, true);
            }
          } catch (_) {}
        },
      },
    });

    players.set(index, { player });
  });

  observeVideos();
}

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

function buildShowcaseDOM() {
  const stack = document.getElementById("video-stack");
  stack.innerHTML = "";
  players.clear();
  playerConfigs = [];

  if (!showcaseHasClips()) {
    stack.innerHTML =
      '<p class="video-stack__empty">Add groups and clips under <code>SITE.showcase</code> in <code>js/main.js</code>.</p>';
    return;
  }

  let playerIndex = 0;

  SITE.showcase.forEach((group) => {
    const section = document.createElement("section");
    section.className = "showcase-group";

    const head = document.createElement("header");
    head.className = "showcase-group__header";

    if (group.logo) {
      const logoWrap = document.createElement("div");
      logoWrap.className = "showcase-group__logo-wrap";
      const logo = document.createElement("img");
      logo.className = "showcase-group__logo";
      logo.src = group.logo;
      logo.alt = group.logoAlt || "";
      logo.width = 200;
      logo.height = 48;
      logo.loading = "lazy";
      logo.decoding = "async";
      logo.onerror = () => logoWrap.remove();
      logoWrap.appendChild(logo);
      head.appendChild(logoWrap);
    }

    const titles = document.createElement("div");
    titles.className = "showcase-group__titles";
    const orgWebsiteHtml = group.companyUrl
      ? (() => {
          try {
            const host = new URL(group.companyUrl).host.replace(/^www\./, "");
            return `<a class="showcase-group__org-site" href="${escapeHtml(
              group.companyUrl
            )}" target="_blank" rel="noopener noreferrer">(Company Website) - ${escapeHtml(
              host
            )}</a>`;
          } catch {
            return "";
          }
        })()
      : "";

    titles.innerHTML = `
      <h3 class="showcase-group__org">${escapeHtml(group.org)}${orgWebsiteHtml}</h3>
      <p class="showcase-group__role">${escapeHtml(group.role)} · ${escapeHtml(group.dates)}</p>
      ${
        group.summary
          ? `<p class="showcase-group__summary">${formatInlineBoldHtml(
              group.summary
            )}</p>`
          : ""
      }
    `;
    head.appendChild(titles);
    section.appendChild(head);

    if (group.relatedEmbed && group.relatedEmbed.url) {
      const embedEl = createRelatedEmbedElement({
        ...group.relatedEmbed,
        fallbackLinkText:
          group.relatedEmbed.fallbackLinkText || "open the article on CMU SCS",
      });
      if (embedEl) section.appendChild(embedEl);
    }

    const clipsRoot = document.createElement("div");
    clipsRoot.className = "showcase-group__clips";

    function appendClipBlock(clip, parentEl) {
      const ytId = youtubeIdFromInput(clip.youtube);
      const block = document.createElement("article");
      block.className = "video-block";

      const title = clip.title != null ? String(clip.title).trim() : "";
      const desc =
        clip.description != null ? String(clip.description).trim() : "";

      const mediaCol = document.createElement("div");
      mediaCol.className = "video-block__media";

      if (ytId) {
        const pi = playerIndex;
        playerIndex += 1;
        playerConfigs.push({
          videoId: ytId,
          startSeconds: clipYoutubeStartSeconds(clip),
        });
        block.dataset.videoIndex = String(pi);

        const embedWrap = document.createElement("div");
        embedWrap.className = "video-block__embed-wrap";

        const playerHost = document.createElement("div");
        playerHost.className = "video-block__embed";
        playerHost.id = `yt-player-${pi}`;

        embedWrap.appendChild(playerHost);
        mediaCol.appendChild(embedWrap);
      } else {
        const pending = document.createElement("div");
        pending.className = "video-block__pending";
        pending.innerHTML =
          '<p class="video-block__pending-text"><strong>Placeholder.</strong> Add a YouTube URL in <code>main.js</code>.</p>';

        mediaCol.appendChild(pending);
      }

      if (title || desc) {
        const cap = document.createElement("div");
        cap.className = "video-block__caption";
        if (title) {
          const h = document.createElement("p");
          h.className = "video-block__caption-title";
          h.textContent = title;
          cap.appendChild(h);
        }
        if (desc) {
          const p = document.createElement("p");
          p.className = "video-block__caption-desc";
          p.textContent = desc;
          cap.appendChild(p);
        }
        mediaCol.appendChild(cap);
      }

      block.appendChild(mediaCol);
      parentEl.appendChild(block);
    }

    if (group.clipGroups && group.clipGroups.length) {
      group.clipGroups.forEach((cg) => {
        const wrap = document.createElement("div");
        wrap.className = "clip-group";
        const subh = document.createElement("h4");
        subh.className = "clip-group__heading";
        subh.textContent = cg.heading || "";
        wrap.appendChild(subh);
        const groupDesc =
          cg.description != null ? String(cg.description).trim() : "";
        const rawLink = cg.descriptionLink;
        const linkUrl =
          rawLink &&
          rawLink.url != null &&
          String(rawLink.url).trim()
            ? String(rawLink.url).trim()
            : "";
        if (groupDesc || linkUrl) {
          const details = document.createElement("details");
          details.className = "clip-group__details";
          const summaryEl = document.createElement("summary");
          summaryEl.className = "clip-group__details-summary";
          const toggleLabel =
            cg.descriptionToggleLabel != null &&
            String(cg.descriptionToggleLabel).trim()
              ? String(cg.descriptionToggleLabel).trim()
              : "Context & role";

          const textCol = document.createElement("span");
          textCol.className = "clip-group__details-summary-text";

          const labelSpan = document.createElement("span");
          labelSpan.className = "clip-group__details-label";
          labelSpan.textContent = toggleLabel;

          const hintClosed = document.createElement("span");
          hintClosed.className =
            "clip-group__details-hint clip-group__details-hint--when-closed";
          hintClosed.textContent = "Show full description";

          const hintOpen = document.createElement("span");
          hintOpen.className =
            "clip-group__details-hint clip-group__details-hint--when-open";
          hintOpen.textContent = "Hide";

          textCol.appendChild(labelSpan);
          textCol.appendChild(hintClosed);
          textCol.appendChild(hintOpen);

          const chevron = document.createElement("span");
          chevron.className = "clip-group__details-chevron";
          chevron.setAttribute("aria-hidden", "true");

          summaryEl.appendChild(textCol);
          summaryEl.appendChild(chevron);
          details.appendChild(summaryEl);

          const detailsBody = document.createElement("div");
          detailsBody.className = "clip-group__details-body";
          if (groupDesc) {
            const descEl = document.createElement("div");
            descEl.className = "clip-group__description";
            descEl.innerHTML = formatInlineBoldHtml(groupDesc);
            detailsBody.appendChild(descEl);
          }
          if (linkUrl) {
            const linkP = document.createElement("p");
            linkP.className = "clip-group__description";
            const lead =
              rawLink && rawLink.lead != null ? String(rawLink.lead) : "";
            if (lead) {
              linkP.appendChild(document.createTextNode(lead));
            }
            const a = document.createElement("a");
            a.className = "clip-group__description-link";
            a.href = linkUrl;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            let label =
              rawLink && rawLink.text != null
                ? String(rawLink.text).trim()
                : "";
            if (!label) {
              try {
                label = new URL(linkUrl).hostname.replace(/^www\./, "");
              } catch {
                label = linkUrl;
              }
            }
            a.textContent = label;
            linkP.appendChild(a);
            detailsBody.appendChild(linkP);
          }
          details.appendChild(detailsBody);
          wrap.appendChild(details);
        }
        const inner = document.createElement("div");
        inner.className = "clip-group__clips";
        (cg.clips || []).forEach((clip) => {
          appendClipBlock(clip, inner);
        });
        wrap.appendChild(inner);
        clipsRoot.appendChild(wrap);
      });
    } else {
      (group.clips || []).forEach((clip) => appendClipBlock(clip, clipsRoot));
    }

    section.appendChild(clipsRoot);
    stack.appendChild(section);
  });
}

function observeVideos() {
  const blocks = document.querySelectorAll(".video-block[data-video-index]");
  if (!blocks.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        const idx = Number(en.target.dataset.videoIndex);
        const entry = players.get(idx);
        if (!entry) return;
        const p = entry.player;
        try {
          if (en.isIntersecting && en.intersectionRatio >= 0.45) {
            p.mute();
            p.playVideo();
          } else if (!en.isIntersecting || en.intersectionRatio < 0.2) {
            p.pauseVideo();
          }
        } catch (_) {}
      });
    },
    { threshold: [0, 0.2, 0.45, 0.6, 1] }
  );

  blocks.forEach((b) => io.observe(b));
}

function initProjectsCarousel() {
  const root = document.querySelector("[data-projects-carousel]");
  if (!root) return;

  const live = root.querySelector(".projects-carousel__live");
  const status = root.querySelector("[data-projects-status]");
  const btnPrev = root.querySelector(".projects-carousel__btn--prev");
  const btnNext = root.querySelector(".projects-carousel__btn--next");
  const slides = [...root.querySelectorAll(".projects-carousel__slide")];
  if (!btnPrev || !btnNext || slides.length === 0) return;

  const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
  const transitionMs = () => (motionMq.matches ? 0 : 560);
  const autoAdvanceMs = 10000;

  if (slides.length === 1) {
    btnPrev.hidden = true;
    btnNext.hidden = true;
    slides[0].classList.add("is-active");
    return;
  }

  let index = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (index < 0) index = 0;
  let animating = false;
  let autoTimer = 0;

  function announce(titleEl) {
    if (!live || !titleEl) return;
    const t = titleEl.textContent.replace(/\s+/g, " ").trim();
    live.textContent = t ? `Showing: ${t}` : "";
  }

  function setLinkState(slide, isActive) {
    const link = slide.querySelector(".project-slide__github");
    if (!link) return;
    if (isActive) {
      link.removeAttribute("tabindex");
      slide.removeAttribute("aria-hidden");
    } else {
      link.setAttribute("tabindex", "-1");
      slide.setAttribute("aria-hidden", "true");
    }
  }

  function resetSlide(slide) {
    slide.classList.remove(
      "is-active",
      "is-entering-from-right",
      "is-entering-from-left",
      "is-leaving-to-left",
      "is-leaving-to-right"
    );
  }

  function renderStatic() {
    slides.forEach((slide, i) => {
      resetSlide(slide);
      if (i === index) {
        slide.classList.add("is-active");
        setLinkState(slide, true);
        announce(slide.querySelector(".project-slide__title"));
      } else {
        setLinkState(slide, false);
      }
    });
    if (status) status.textContent = `${index + 1} / ${slides.length}`;
  }

  function clearAutoAdvance() {
    window.clearTimeout(autoTimer);
  }

  function scheduleAutoAdvance() {
    clearAutoAdvance();
    autoTimer = window.setTimeout(() => {
      go(1);
    }, autoAdvanceMs);
  }

  function finishTransition(fromSlide) {
    resetSlide(fromSlide);
    setLinkState(fromSlide, false);
    animating = false;
    renderStatic();
    scheduleAutoAdvance();
  }

  function go(delta) {
    if (animating) return;

    clearAutoAdvance();
    const prevIndex = index;
    const nextIndex = (index + delta + slides.length) % slides.length;
    if (prevIndex === nextIndex) {
      scheduleAutoAdvance();
      return;
    }

    const fromSlide = slides[prevIndex];
    const toSlide = slides[nextIndex];
    const enteringClass =
      delta > 0 ? "is-entering-from-right" : "is-entering-from-left";
    const leavingClass =
      delta > 0 ? "is-leaving-to-left" : "is-leaving-to-right";

    animating = true;
    index = nextIndex;

    slides.forEach((slide, i) => {
      resetSlide(slide);
      setLinkState(slide, i === nextIndex);
    });

    fromSlide.classList.add("is-active");
    toSlide.classList.add(enteringClass);
    setLinkState(fromSlide, false);
    setLinkState(toSlide, true);

    const complete = () => finishTransition(fromSlide);
    if (transitionMs() === 0) {
      complete();
      return;
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        fromSlide.classList.remove("is-active");
        fromSlide.classList.add(leavingClass);
        toSlide.classList.remove(enteringClass);
        toSlide.classList.add("is-active");
      });
    });

    window.setTimeout(complete, transitionMs() + 40);
  }

  btnPrev.addEventListener("click", () => go(-1));
  btnNext.addEventListener("click", () => go(1));
  root.addEventListener("mouseenter", clearAutoAdvance);
  root.addEventListener("mouseleave", scheduleAutoAdvance);
  root.addEventListener("focusin", clearAutoAdvance);
  root.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (!root.contains(document.activeElement)) scheduleAutoAdvance();
    }, 0);
  });

  renderStatic();
  scheduleAutoAdvance();
}

renderLists();
renderOtherHighlights();
initEducationSpeechEmbeds();
buildShowcaseDOM();
initProjectsCarousel();
document.getElementById("year").textContent = String(new Date().getFullYear());

if (countValidYoutubeClips() > 0) {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  tag.async = true;
  document.body.appendChild(tag);
}
