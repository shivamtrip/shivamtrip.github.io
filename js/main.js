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
      detail:
        "Swartz Entrepreneurial Fellow (2022) · TA: Systems Engineering for Robotics (2024). Coursework: ML, Robot Planning, Computer Vision, Robot Learning, Visual Learning, SLAM.",
      cmuSpeech: {
        label: "Selected as Student Commencement Speaker for CMU Computer Science (2024)",
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
   * Each group = one employer or highlight. Use clips[] OR clipGroups[{ heading, description?, descriptionLink?, clips }].
   * Optional description = short blurb under that subheading (purpose/context). Supports \n for line breaks.
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
        "1 of 3 engineers in a 10-member drone company (rest business and operations), building autonomous power-wash and spray-painting UAVs — commercial and US Army deployments in 20+ countries. Worked on Visual localization / SLAM in GPS-denied flight, flight software stack, and Ground Control Station product features.",
      clipGroups: [
        {
          heading: "Project 1: Autonomous decontamination of military vehicles",
          description:
            "This work is a part of an ongoing contract between Apellix and the US Army to develop autonomous decontamination drones. The drones autonomously detect a target vehicle, navigate to it, create a spray plan and spray a decontaminant agent on the drones, to eliminate any CBRN (Chemical, Biological, Radiological, Nuclear) hazards that occur on the battlefield.",
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
          heading: "Project 2: GPS-denied navigation using visual-inertial odometry",
          description:
            "This project extends our work with the US Army to enable GPS-denied navigation. We integrated VIO, SLAM and target detection capabilities to enable an Apellix drone to scan for a target vehicle, revolve around it and position itself behind the vehicle, ready to start a cleaning mission.",
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
          heading: "Spray Painting & Power Washing Drones",
          description:
            "Industrial spray painting and pressure washing drones designed and manufactured in Jacksonville, FL. Commercial drones operating in 20+ countries.",
          descriptionLink: {
            lead: " More info — ",
            url: "https://apellix.com",
            text: "apellix.com",
          },
          clips: [
            {
              youtube: "https://youtube.com/shorts/v-rld8KODUc?si=prq5Otw-d8eXHueU",
              description: "Demo for Georgia Department of Transportation (Apellix customer)",
            },
            {
              youtube: "https://youtube.com/shorts/4xjOmPAK4Zc?si=HDwP_jajW7zy3mjf",
              description: "Testing at our in-house facility in Jacksonville, FL",
            },
            {
              youtube: "https://youtube.com/shorts/_cBYUEBe5VM?si=R_W5aKDoRou5TMwX",
              description: "More testing at Jacksonville, FL",
            },

          ],
        },
        {
          heading: "Apellix Intelligence (AI) - Autonomous Drone Cleaning",
          description:
            "Product-focused autonomous cleaning: the drone plans coverage and executes washing on vertical or hard-to-reach surfaces with minimal manual stick time.",
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
        "Autonomous object fetch-and-retrieval for an assistive mobile manipulator (SLAM with LiDAR + stereo + IMU, A*/DWA path planning, 3D obstacle avoidance). Cloud LLM agent linking natural language to HRI, navigation, and manipulation — deployed in a Pittsburgh care facility.\n\nUse case: a user asks Alfred (the Stretch RE1) by voice to bring an object. Alfred interprets the request, plans a route to the object's area, and drives there. It then searches for the object, lines up to grasp it, plans and executes the arm motion to pick it up, and returns to the user with the item.",
      relatedEmbed: {
        url: "https://www.cs.cmu.edu/news/2023/care-home-robot",
        title: "CMU Team Explores Future of Caregiving With Assistive Robot",
      },
      clips: [
        {
          youtube: "https://youtu.be/Km9_RogBT0A?si=v1B3SXMm8bXKXM04",
          description: "Assistive robot at CMU — deployment and autonomy (1 of 3).",
        },
        {
          youtube: "https://youtu.be/epFzxcuik8c?si=kuqQcMOShwoySZsC",
          description: "Assistive robot at CMU (2 of 3).",
        },
        {
          youtube: "https://youtu.be/Q8ZKP0MZZpU?si=ByVSCJcS0ZU-c8So",
          description: "Assistive robot at CMU (3 of 3).",
        },
      ],
    },
  ],
  /**
   * Logo + short narrative. Optional: meta (role · dates), url (external link on title).
   */
  otherHighlights: {
    internships: [
      {
        name: "Defence Research and Development Organisation (DRDO)",
        meta: "Summer internship · robotics / systems",
        logo: "assets/logos/drdo.svg",
        logoAlt: "DRDO",
        description:
          "Hands-on work with defense R&D teams on experimental systems. Focused on integrating hardware and software for field trials, documentation, and supporting test campaigns alongside scientists and engineers.",
        url: "https://www.drdo.gov.in/",
      },
      {
        name: "SUN Mobility",
        meta: "Internship · energy / EV infrastructure",
        logo: "assets/logos/sun-mobility.svg",
        logoAlt: "SUN Mobility",
        description:
          "Contributed to engineering efforts around battery-swapping and energy solutions for electric fleets. Supported design reviews, prototyping workflows, and cross-functional coordination between mechanical, electrical, and software workstreams.",
        url: "https://sunmobility.com/",
      },
    ],
    projects: [
      {
        name: "Symbol Robotics",
        meta: "Humanoid mobile manipulation · early technical hire",
        logo: "assets/logos/symbol-robotics.svg",
        logoAlt: "Symbol Robotics",
        description:
          "Helped stand up software for a high–DoF humanoid mobile manipulator: baseline architecture, bring-up of core autonomy components, and tooling so the team could iterate quickly on whole-body behaviors.",
        url: "https://www.symbolrobotics.com/",
      },
      {
        name: "Undergraduate capstone — MIT World Peace University",
        meta: "B.Tech Mechanical Engineering",
        logo: "assets/logos/mit-wpu.svg",
        logoAlt: "MIT World Peace University",
        description:
          "Applied mechanics and systems project tying coursework to a built prototype: design, analysis, fabrication, and validation — with emphasis on rigorous documentation and advisor milestones typical of a final-year capstone.",
      },
    ],
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

  const speech =
    e.cmuSpeech && (e.cmuSpeech.body || e.cmuSpeech.videoId)
      ? `
      <details class="edu-speech" open>
        <summary>
          <span class="edu-speech__summary-label">${escapeHtml(
            e.cmuSpeech.label || "CMU Speech Video"
          )}</span>
          <span class="edu-speech__summary-hint"></span>
        </summary>
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

function highlightCardToHtml(item) {
  const logo = item.logo
    ? `<div class="highlight-card__logo-wrap"><img class="highlight-card__logo" src="${escapeHtml(
        item.logo
      )}" alt="${escapeHtml(item.logoAlt || "")}" width="200" height="56" loading="lazy" decoding="async" onerror="this.closest('.highlight-card__logo-wrap')?.remove()" /></div>`
    : "";
  const titleInner = escapeHtml(item.name || "");
  const title = item.url
    ? `<a class="highlight-card__title" href="${escapeHtml(
        item.url
      )}" target="_blank" rel="noopener noreferrer">${titleInner}</a>`
    : `<span class="highlight-card__title">${titleInner}</span>`;
  const metaRaw = item.meta != null ? String(item.meta).trim() : "";
  const meta = metaRaw
    ? `<p class="highlight-card__meta">${escapeHtml(metaRaw)}</p>`
    : "";
  const descRaw =
    item.description != null ? String(item.description).trim() : "";
  const desc = descRaw
    ? `<p class="highlight-card__desc">${escapeHtml(descRaw)}</p>`
    : "";
  return `<li class="highlight-card">${logo}<div class="highlight-card__body">${title}${meta}${desc}</div></li>`;
}

function renderOtherHighlights() {
  const oh = SITE.otherHighlights;
  if (!oh) return;
  const internEl = document.getElementById("internships-list");
  const projEl = document.getElementById("projects-list");
  if (internEl) {
    internEl.innerHTML = (oh.internships || [])
      .map(highlightCardToHtml)
      .join("");
  }
  if (projEl) {
    projEl.innerHTML = (oh.projects || [])
      .map(highlightCardToHtml)
      .join("");
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
      ${group.summary ? `<p class="showcase-group__summary">${escapeHtml(group.summary)}</p>` : ""}
    `;
    head.appendChild(titles);
    section.appendChild(head);

    if (group.relatedEmbed && group.relatedEmbed.url) {
      const embedWrap = document.createElement("div");
      embedWrap.className = "related-embed";
      const bar = document.createElement("div");
      bar.className = "related-embed__bar";
      const outLink = document.createElement("a");
      outLink.className = "related-embed__link";
      outLink.href = group.relatedEmbed.url;
      outLink.target = "_blank";
      outLink.rel = "noopener noreferrer";
      outLink.textContent =
        group.relatedEmbed.title || group.relatedEmbed.url;
      bar.appendChild(outLink);
      embedWrap.appendChild(bar);
      const frame = document.createElement("iframe");
      frame.className = "related-embed__frame";
      frame.src = group.relatedEmbed.url;
      frame.title = group.relatedEmbed.title || "CMU SCS News";
      frame.loading = "lazy";
      frame.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      embedWrap.appendChild(frame);
      const fallback = document.createElement("p");
      fallback.className = "related-embed__fallback";
      fallback.append(
        document.createTextNode("If the page doesn’t load here, "),
        (() => {
          const a = document.createElement("a");
          a.href = group.relatedEmbed.url;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = "open the article on CMU SCS";
          return a;
        })(),
        document.createTextNode(".")
      );
      embedWrap.appendChild(fallback);
      section.appendChild(embedWrap);
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
          const descEl = document.createElement("p");
          descEl.className = "clip-group__description";
          if (groupDesc) {
            descEl.appendChild(document.createTextNode(groupDesc));
          }
          if (linkUrl) {
            const lead =
              rawLink && rawLink.lead != null ? String(rawLink.lead) : "";
            if (lead) {
              descEl.appendChild(document.createTextNode(lead));
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
            descEl.appendChild(a);
          }
          wrap.appendChild(descEl);
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

renderLists();
renderOtherHighlights();
initEducationSpeechEmbeds();
buildShowcaseDOM();
document.getElementById("year").textContent = String(new Date().getFullYear());

if (countValidYoutubeClips() > 0) {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  tag.async = true;
  document.body.appendChild(tag);
}
