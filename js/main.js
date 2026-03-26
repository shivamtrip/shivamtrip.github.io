/**
 * Edit everything in SITE below. Use full YouTube URLs or just the video ID.
 */
const SITE = {
  skills: [
    "Storytelling",
    "Motion / video",
    "Your skill",
    "Tooling you use",
    "Collaboration",
  ],
  education: [
    {
      org: "University or school",
      meta: "Degree · Years",
      detail: "A line about focus, honors, or relevant coursework.",
    },
    {
      org: "Another program",
      meta: "Certificate · Year",
      detail: "Short description.",
    },
  ],
  achievements: [
    "Award, publication, or milestone — keep each item one clear sentence.",
    "Another highlight readers should remember.",
    "Optional third card for talks, exhibitions, or press.",
  ],
  /**
   * Paste full YouTube URLs or video IDs. Order = top to bottom on the page.
   * @example
   * videos: [
   *   {
   *     youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
   *     title: "Project title",
   *     description: "What this piece is about.",
   *   },
   * ],
   */
  videos: [],
};

function youtubeIdFromInput(input) {
  if (!input || typeof input !== "string") return null;
  const s = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(s)) return s;
  try {
    const u = new URL(s, "https://example.org");
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace(/^\//, "").slice(0, 11);
      return id || null;
    }
    if (u.searchParams.get("v")) return u.searchParams.get("v").slice(0, 11);
    const embed = u.pathname.match(/\/embed\/([^/?]+)/);
    return embed ? embed[1].slice(0, 11) : null;
  } catch {
    return null;
  }
}

function renderLists() {
  document.getElementById("skills-list").innerHTML = SITE.skills
    .map((t) => `<li>${escapeHtml(t)}</li>`)
    .join("");

  document.getElementById("education-list").innerHTML = SITE.education
    .map(
      (e) => `
    <li>
      <p class="timeline__org">${escapeHtml(e.org)}</p>
      <p class="timeline__meta">${escapeHtml(e.meta)}</p>
      <p class="timeline__detail">${escapeHtml(e.detail)}</p>
    </li>`
    )
    .join("");

  document.getElementById("achievements-list").innerHTML = SITE.achievements
    .map((a) => `<li>${escapeHtml(a)}</li>`)
    .join("");

  if (!SITE.videos.length) {
    document.getElementById("video-stack").innerHTML =
      '<p class="video-stack__empty">Add your first video in <code>js/main.js</code> (<code>SITE.videos</code>).</p>';
  }
}

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

const players = new Map();
let youtubeInitDone = false;

function onYouTubeIframeAPIReady() {
  if (youtubeInitDone) return;
  youtubeInitDone = true;
  if (!SITE.videos.length) return;
  buildVideoDOM();
  observeVideos();
}

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

renderLists();
document.getElementById("year").textContent = String(new Date().getFullYear());

if (SITE.videos.length > 0) {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  tag.async = true;
  document.body.appendChild(tag);
}

function buildVideoDOM() {
  const stack = document.getElementById("video-stack");
  stack.innerHTML = "";

  const items = SITE.videos
    .map((v) => ({ v, id: youtubeIdFromInput(v.youtube) }))
    .filter((x) => x.id);

  items.forEach(({ v, id }, index) => {
    const block = document.createElement("article");
    block.className = "video-block";
    block.dataset.videoIndex = String(index);

    const embedWrap = document.createElement("div");
    embedWrap.className = "video-block__embed-wrap";

    const playerHost = document.createElement("div");
    playerHost.className = "video-block__embed";
    playerHost.id = `yt-player-${index}`;

    embedWrap.appendChild(playerHost);

    const toolbar = document.createElement("div");
    toolbar.className = "video-block__toolbar";

    const unmute = document.createElement("button");
    unmute.type = "button";
    unmute.className = "unmute-btn";
    unmute.setAttribute("aria-pressed", "false");
    unmute.textContent = "Unmute";

    const hint = document.createElement("p");
    hint.className = "video-hint";
    hint.textContent = "Autoplay is muted in the browser until you unmute.";

    toolbar.append(unmute, hint);

    const copy = document.createElement("div");
    copy.className = "video-block__copy";
    copy.innerHTML = `
      <h3 class="video-block__title">${escapeHtml(v.title)}</h3>
      <p class="video-block__desc">${escapeHtml(v.description)}</p>
    `;

    const leftCol = document.createElement("div");
    leftCol.append(embedWrap, toolbar);

    block.append(leftCol, copy);
    stack.appendChild(block);

    const player = new YT.Player(playerHost.id, {
      videoId: id,
      playerVars: {
        playsinline: 1,
        rel: 0,
        modestbranding: 1,
      },
      events: {
        onReady: (e) => {
          try {
            e.target.mute();
          } catch (_) {}
        },
      },
    });

    players.set(index, { player, unmuted: false, unmuteBtn: unmute });

    unmute.addEventListener("click", () => {
      const entry = players.get(index);
      if (!entry) return;
      const { player: p, unmuteBtn: btn } = entry;
      try {
        if (entry.unmuted) {
          p.mute();
          entry.unmuted = false;
          btn.setAttribute("aria-pressed", "false");
          btn.textContent = "Unmute";
        } else {
          p.unMute();
          entry.unmuted = true;
          btn.setAttribute("aria-pressed", "true");
          btn.textContent = "Mute";
        }
      } catch (_) {}
    });
  });

  if (!items.length && SITE.videos.length) {
    stack.innerHTML =
      '<p class="video-stack__empty">No valid YouTube URLs in <code>SITE.videos</code>.</p>';
  }
}

function observeVideos() {
  const blocks = document.querySelectorAll(".video-block");
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
            entry.unmuted = false;
            entry.unmuteBtn.setAttribute("aria-pressed", "false");
            entry.unmuteBtn.textContent = "Unmute";
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
