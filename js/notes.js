/*==================================================
  Concept Quizzer
  Notes Logic
  Package 3C — Global Metadata Visibility Fix
  Flexible Topic-Based Universal Renderer
==================================================*/

"use strict";

const titleElement=
document.getElementById("chapterTitle");

const pathElement=
document.getElementById("chapterPath");

const headingElement=
document.getElementById("notesHeading");

const descriptionElement=
document.getElementById("notesDescription");

const notesContainer=
document.getElementById("notesContent");

const importantContainer=
document.getElementById("importantPoints");

const termsContainer=
document.getElementById("keyTermsContainer");

const summaryContainer=
document.getElementById("chapterSummary");

const progressText =
document.getElementById("progressText");

const progressFill =
document.getElementById("progressFill");

const urlChapter =
  new URLSearchParams(window.location.search).get("chapter");

const chapterKey =
  urlChapter ||
  localStorage.getItem("cq-current-chapter") ||
  "";

if (urlChapter) {
  localStorage.setItem("cq-current-chapter", urlChapter);
}

let activeChapter = null;

/*==================================================
  PACKAGE 13.1.3 — PERMANENT NOTES CHAPTER LOADER

  IMPORTANT:
  notes.html loads notesData.js first. That file contains
  the old/default ChapterData (Patterns in Mathematics).

  Therefore we MUST NOT use ChapterData directly here.

  Instead:
  1. Read cq-current-chapter.
  2. Find that chapter in ChapterRegistry.
  3. Fetch the chapter's own JS file.
  4. Convert its `const ChapterData = ...` into a
     private window object.
  5. Render THAT chapter.

  This makes Chapter 3 → Number Play show Number Play,
  not Chapter 1 → Patterns in Mathematics.
==================================================*/


function installClass10MathRegistry(){

  const class10Math = [
    [1,"real-numbers","Real Numbers"],
    [2,"polynomials","Polynomials"],
    [3,"pair-of-linear-equations-in-two-variables","Pair of Linear Equations in Two Variables"],
    [4,"quadratic-equations","Quadratic Equations"],
    [5,"arithmetic-progressions","Arithmetic Progressions"],
    [6,"triangles","Triangles"],
    [7,"coordinate-geometry","Coordinate Geometry"],
    [8,"introduction-to-trigonometry","Introduction to Trigonometry"],
    [9,"some-applications-of-trigonometry","Some Applications of Trigonometry"],
    [10,"circles","Circles"],
    [11,"areas-related-to-circles","Areas Related to Circles"],
    [12,"surface-areas-and-volumes","Surface Areas and Volumes"],
    [13,"statistics","Statistics"],
    [14,"probability","Probability"]
  ];

  if (!Array.isArray(window.ChapterRegistry)) {
    window.ChapterRegistry = [];
  }

  /* Preserve every other class/subject; replace only Class 10 Mathematics. */
  window.ChapterRegistry = window.ChapterRegistry.filter(function(item){
    return !(
      item &&
      Number(item.class) === 10 &&
      String(item.subject || "").trim().toLowerCase() === "mathematics"
    );
  });

  class10Math.forEach(function(item){
    const num = item[0];
    const slug = item[1];
    const title = item[2];

    window.ChapterRegistry.push({
      id: "class10-math-" + slug,
      class: 10,
      subject: "Mathematics",
      chapterNumber: num,
      title: title,
      file: "js/notes/class10/math/" + slug + ".js",
      enabled: true,
      gradeLock: 10,
      aliases: [
        "10-mathematics-" + slug,
        "class10-mathematics-" + slug,
        "10-math-" + slug,
        "10-mathematics-" + num + "-" + slug,
        "10-math-" + num + "-" + slug
      ]
    });
  });
}

async function loadChapter(key){

  try {

    if (!key) {
      throw new Error("No current chapter selected.");
    }

    /* Load registry if notes.html has not loaded it yet. */
    if (!Array.isArray(window.ChapterRegistry)) {
      await loadExternalScript("js/chapter-registry.js");
    }

    /* Class 10 Mathematics gets an explicit grade-locked registry. */
    installClass10MathRegistry();

    const registry = window.ChapterRegistry;

const normalizedKey = String(key || "")
  .trim()
  .toLowerCase()
  .replace(/_/g, "-")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");


/* ==================================================
   UNIVERSAL CHAPTER RESOLVER
   Works for Class 6 → Class 10
   Supports:
   - exact IDs
   - aliases
   - class prefixes
   - subject prefixes
   - different ID formats
================================================== */

function normalizeChapterKey(value) {

  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

}


function chapterKeyVariants(value) {

  const original = normalizeChapterKey(value);

  const variants = new Set();

  if (!original) {
    return [];
  }

  variants.add(original);

  /*
    Remove class prefix

    class10-math-real-numbers
    → math-real-numbers
  */

  variants.add(
    original.replace(/^class-?\d+-/, "")
  );

  /*
    Remove numeric class prefix

    10-mathematics-real-numbers
    → mathematics-real-numbers
  */

  variants.add(
    original.replace(/^\d+-/, "")
  );

  /* Remove class + subject prefix */

variants.add(
  original.replace(
    /^\d+-(?:math|mathematics|science|social-science|english|hindi|computer|history|geography|civics|economics|political-science|artificial-intelligence|information-technology)-/,
    ""
  )
);

variants.add(
  original.replace(
    /^class-?\d+-(?:math|mathematics|science|social-science|english|hindi|computer|history|geography|civics|economics|political-science|artificial-intelligence|information-technology)-/,
    ""
  )
);
  /*
    Remove class + subject prefix

    class10-math-real-numbers
    → real-numbers

    10-mathematics-real-numbers
    → real-numbers
  */

  variants.add(
    original
      .replace(/^class-?\d+-(?:math|mathematics)-/, "")
  );

  variants.add(
    original
      .replace(/^\d+-(?:math|mathematics)-/, "")
  );

  return Array.from(variants)
    .filter(Boolean);

}


/* --------------------------------------------------
   1. Exact ID / alias match
-------------------------------------------------- */

let entry = registry.find(function (chapter) {

  if (!chapter || chapter.enabled === false) {
    return false;
  }

  const id = normalizeChapterKey(chapter.id);

  if (id === normalizedKey) {
    return true;
  }

  const aliases = Array.isArray(chapter.aliases)
    ? chapter.aliases
    : [];

  return aliases.some(function (alias) {

    return normalizeChapterKey(alias) === normalizedKey;

  });

});


/* --------------------------------------------------
   2. Universal normalized match
-------------------------------------------------- */

if (!entry) {

  const requestedVariants =
    chapterKeyVariants(normalizedKey);

  entry = registry.find(function (chapter) {

    if (!chapter || chapter.enabled === false) {
      return false;
    }

    const chapterValues = [

      chapter.id,

      ...(Array.isArray(chapter.aliases)
        ? chapter.aliases
        : [])

    ];

    const chapterVariants = [];

    chapterValues.forEach(function (value) {

      chapterKeyVariants(value)
        .forEach(function (variant) {

          chapterVariants.push(variant);

        });

    });

    return requestedVariants.some(function (variant) {

      return chapterVariants.includes(variant);

    });

  });

}


/* --------------------------------------------------
   3. Final title-based fallback
   Useful when localStorage contains a chapter title
   instead of the registry ID.
-------------------------------------------------- */

if (!entry) {

  const requestedTitle =
    String(key || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");

  entry = registry.find(function (chapter) {

    if (!chapter || chapter.enabled === false) {
      return false;
    }

    const title =
      String(chapter.title || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

    return title === requestedTitle;

  });

}


/* --------------------------------------------------
   Debug information
-------------------------------------------------- */

if (entry) {

  console.log(
    "✅ Chapter resolved:",
    key,
    "→",
    entry.id,
    "→",
    entry.file
  );

} else {

  console.error(
    "❌ Chapter could not be resolved:",
    key
  );

}

    if (!entry || entry.enabled === false) {
      throw new Error(
        "Chapter was not found in ChapterRegistry: " + key
      );
    }

    /* Never allow a Class 9 Mathematics entry to satisfy a Class 10 request. */
    const requestedClass10Math =
      /^10-(?:mathematics|math)-/i.test(normalizedKey) ||
      /^class10-(?:mathematics|math)-/i.test(normalizedKey);

    if (
      requestedClass10Math &&
      (
        Number(entry.class) !== 10 ||
        String(entry.subject || "").trim().toLowerCase() !== "mathematics"
      )
    ) {
      throw new Error(
        "Class 10 Mathematics routing mismatch: " + key
      );
    }

    if (!entry.file) {
      throw new Error(
        "Notes file is missing for: " + entry.title
      );
    }

    const response =
      await fetch(entry.file, {
        cache: "no-store"
      });

    if (!response.ok) {
      throw new Error(
        "Could not load notes file: " + entry.file
      );
    }

    let source = await response.text();

    /*
      Chapter files use:
        const ChapterData = {...}

      Do NOT execute that as a global const because
      notesData.js already has ChapterData.

      Convert only the declaration into:
        window.CQ_LOADED_CHAPTER = {...}
    */
    let converted = source;

    converted = converted.replace(
      /(^|\n)\s*(const|let|var)\s+ChapterData\s*=/,
      "$1window.CQ_LOADED_CHAPTER ="
    );

    converted = converted.replace(
      /window\.ChapterData\s*=/g,
      "window.CQ_LOADED_CHAPTER ="
    );

    converted = converted.replace(
      /(^|\n)\s*(const|let|var)\s+chapterData\s*=/,
      "$1window.CQ_LOADED_CHAPTER ="
    );

    converted = converted.replace(
      /window\.ChapterData\s*=/,
      "window.CQ_LOADED_CHAPTER ="
    );

    if (!/window\.CQ_LOADED_CHAPTER\s*=/.test(converted)) {
      throw new Error(
        "Invalid chapter notes file. Expected ChapterData declaration in: " +
        entry.file
      );
    }

    window.CQ_LOADED_CHAPTER = null;

    const executeChapter =
      new Function(
        "window",
        converted + "\n//# sourceURL=" + entry.file
      );

    executeChapter(window);

    let chapter = window.CQ_LOADED_CHAPTER;

    /*
      IMPORTANT: Different chapter packages have historically used
      sections, lessons, topics, units, blocks, contentSections or even
      direct content objects.  The old loader rejected everything that
      did not contain `sections`, which is why valid chapters appeared
      empty/invalid. Normalize every supported shape into sections while
      preserving the original data.
    */
    chapter = normalizeChapterData(chapter, entry);

    if (!chapter || !Array.isArray(chapter.sections) || !chapter.sections.length) {
      throw new Error(
        "Chapter data is empty or invalid: " + entry.title
      );
    }

    activeChapter = chapter;

    /* Start the math renderer without changing chapter loading behaviour. */
    loadMathRenderer();

    /*
      Keep the active chapter available to the AI/search
      features without touching the old ChapterData.
    */
    window.CQ_ACTIVE_CHAPTER = chapter;

    renderChapter(chapter);

  } catch (error) {

    console.error(
      "Concept Quizzer Notes Loader:",
      error
    );

    showNotesLoadError(
      error && error.message
        ? error.message
        : "Unknown notes loading error"
    );

  }

}

function loadExternalScript(src){

  return new Promise(function(resolve, reject){

    const existing =
      document.querySelector(
        'script[src="' + src + '"]'
      );

    if (existing) {
      if (Array.isArray(window.ChapterRegistry)) {
        resolve();
        return;
      }

      existing.addEventListener(
        "load",
        resolve,
        { once: true }
      );

      existing.addEventListener(
        "error",
        reject,
        { once: true }
      );

      return;
    }

    const script =
      document.createElement("script");

    script.src = src;

    script.onload = resolve;

    script.onerror = function(){
      reject(
        new Error(
          "Could not load " + src
        )
      );
    };

    document.head.appendChild(script);

  });

}

function showNotesLoadError(message){

  if (!notesContainer) return;

  notesContainer.innerHTML = `
    <div class="errorBox">
      <div class="icon">⚠️</div>
      <h3>Notes could not be loaded</h3>
      <p>${String(message)}</p>
      <p>Please refresh once after the file is replaced.</p>
    </div>
  `;

}

/* Start the permanent chapter loader. */
loadChapter(chapterKey);

function normalizeChapterData(raw, entry){

  if(!raw || typeof raw !== "object") return null;

  const chapter = raw;

  if(!chapter.title && entry && entry.title) chapter.title = entry.title;
  if(!chapter.description && entry && entry.description) chapter.description = entry.description;

  const candidates = [
    chapter.sections,
    chapter.lessons,
    chapter.topics,
    chapter.units,
    chapter.contentSections
  ];

  let sections = candidates.find(v => Array.isArray(v) && v.length);

  if(!sections && Array.isArray(chapter.blocks) && chapter.blocks.length){
    sections = [{ title:"", blocks:chapter.blocks }];
  }

  if(!sections && Array.isArray(chapter.contentBlocks) && chapter.contentBlocks.length){
    sections = [{ title:"", blocks:chapter.contentBlocks }];
  }

  if(!sections && chapter.content !== undefined && chapter.content !== null){
    sections = [{ title:"", content:chapter.content }];
  }

  /*
    Preserve the chapter's complete top-level learning payload too.
    Physics packages keep large board-preparation arrays outside `content`
    (practice, revision, board_preparation). Older renderers silently
    ignored those arrays. Append them to the same continuous learner flow
    without changing or deleting the original data.
  */
  if(!Array.isArray(sections)) sections=[];

  const topLevelFlowFields = [
    ["practice", "Practice & Application"],
    ["revision", "Revision & Self-Check"],
    ["board_preparation", "Board Preparation"]
  ];

  topLevelFlowFields.forEach(([key,title])=>{
    const value=chapter[key];
    if(value === undefined || value === null || value === "") return;
    if(Array.isArray(value) && value.length){
      sections.push({title, blocks:value});
    }else if(typeof value === "object") {
      sections.push({title, blocks:[value]});
    }else{
      sections.push({title, content:value});
    }
  });

  /* Some older files keep the educational fields directly on ChapterData. */
  if(!sections){
    const directKeys = [
      "explanation","conceptExpansion","definitions","keyPoints",
      "figures","maps","tables","data","workedExamples",
      "examples","activities","practice","questions","timeline",
      "importantPoints","keyTerms"
    ];
    const direct = [];
    for(const key of directKeys){
      const value = chapter[key];
      if(value === undefined || value === null || value === "") continue;
      if(Array.isArray(value)) direct.push(...value.map(v =>
        typeof v === "object" ? v : {type:"paragraph",text:String(v)}
      ));
      else if(typeof value === "object") direct.push(value);
      else direct.push({type:"paragraph",title:key,text:String(value)});
    }
    if(direct.length) sections = [{title:"",blocks:direct}];
  }

  chapter.sections = Array.isArray(sections) ? sections : [];
  return chapter;
}

function renderChapter(chapter){

titleElement.textContent=

chapter.title;

headingElement.textContent=

chapter.title;

descriptionElement.textContent=

chapter.description;

summaryContainer.textContent=

chapter.summary;

notesContainer.innerHTML="";

/* Reset interactive visual registries for this chapter. */
window.CQ_MAP_DATA = {};
window.CQ_EARTH_DATA = {};

importantContainer.innerHTML="";

termsContainer.innerHTML="";

renderSections(chapter.sections);

/* Maps / globes are mounted after their HTML containers exist. */
initCQInteractiveVisuals();

renderImportantPoints(

chapter.importantPoints

);

renderKeyTerms(

chapter.keyTerms

);

  updateProgress(chapter);

  const lastRead = localStorage.getItem("cq-last-read-" + chapterKey);

if (lastRead !== null) {
  const card = document.querySelector(
    `.noteCard[data-index="${lastRead}"]`
  );

  if (card) {
    setTimeout(() => {
      card.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      card.classList.add("lastRead");

      setTimeout(() => {
        card.classList.remove("lastRead");
      }, 2000);
    }, 300);
  }
}
  
}

/*==================================================
  FLEXIBLE CHAPTER CONTENT RENDERER
  --------------------------------------------------
  No fixed chapter template.
  Supports sections/topics/lessons/units, direct blocks,
  plain content, arrays and mixed/custom structures.

  Section numbers are intentionally NOT rendered.
==================================================*/

function getFlexibleChapterUnits(chapter){

  if(!chapter || typeof chapter !== "object") return [];

  const candidates = [
    chapter.sections,
    chapter.topics,
    chapter.lessons,
    chapter.units,
    chapter.contentSections,
    chapter.contentBlocks
  ];

  for(const value of candidates){
    if(Array.isArray(value) && value.length) return value;
  }

  if(Array.isArray(chapter.blocks) && chapter.blocks.length){
    return [{title:"",blocks:chapter.blocks}];
  }

  if(chapter.content !== undefined && chapter.content !== null){
    return [{title:"",content:chapter.content}];
  }

  return [];
}

function normalizeUnitBlocks(unit){

  if(unit === null || unit === undefined) return [];

  if(Array.isArray(unit)) return unit;

  if(typeof unit !== "object"){
    return [{type:"paragraph",text:String(unit)}];
  }

  const direct=[];

  /* Prefer an explicit block array. */
  for(const key of ["blocks","scienceBlocks","contentBlocks"]){
    if(Array.isArray(unit[key]) && unit[key].length) return unit[key];
  }

  if(Array.isArray(unit.content) && unit.content.length) return unit.content;

  if(unit.type || unit.kind){
    /* A typed object is already a renderable block. */
    return [unit];
  }

  /* Convert direct educational fields into renderable blocks instead of
     dropping them into an opaque object card. */
  if(unit.explanation) direct.push({type:"concept",title:"Concept Explained",text:unit.explanation});

  if(Array.isArray(unit.conceptExpansion)){
    unit.conceptExpansion.forEach((v,i)=>{
      if(v && typeof v === "object") direct.push(v);
      else if(v !== undefined && v !== null && String(v).trim()) direct.push({type:"paragraph",title:i===0?"Concept Expansion":"",text:String(v)});
    });
  }

  if(Array.isArray(unit.definitions)){
    unit.definitions.forEach(v=>{
      if(!v) return;
      if(typeof v !== "object") direct.push({type:"definition",text:String(v)});
      else direct.push({type:"definition",title:v.term||v.title||v.name||"Definition",text:v.definition??v.text??v.content??v.description??""});
    });
  }

  for(const key of ["keyPoints","importantPoints"]){
    if(Array.isArray(unit[key]) && unit[key].length) direct.push({type:"keypoint",title:key==="keyPoints"?"Key Points":"Important Points",items:unit[key]});
  }

  for(const key of ["figures","maps","tables","data","workedExamples","examples","activities","practice","questions","timeline"]){
    const value=unit[key];
    if(value===undefined || value===null || value==="") continue;
    if(Array.isArray(value)) value.forEach(v=>{
      if(v && typeof v === "object") direct.push(normalizeSpecialObject(v,key));
      else direct.push({type:key==="maps"?"map":key==="figures"?"figure":key==="tables"?"table":key==="data"?"data":key==="practice"||key==="questions"?"practice":key==="activities"?"activity":key==="timeline"?"timeline":"example",text:String(v)});
    });
    else if(typeof value === "object") direct.push(normalizeSpecialObject(value,key));
    else direct.push({type:"paragraph",title:humanizeFieldName(key),text:String(value)});
  }

  if(unit.content !== undefined && unit.content !== null && !Array.isArray(unit.content)){
    if(typeof unit.content === "object") direct.push(unit.content);
    else direct.push({type:"paragraph",title:unit.title||unit.heading||"",text:String(unit.content)});
  }

  if(direct.length) return direct;

  return [{type:"generic",title:unit.title || unit.heading || unit.name || "",data:unit}];
}

function normalizeSpecialObject(value,key){
  if(!value || typeof value !== "object") return {type:"paragraph",text:String(value)};
  const copy=Object.assign({},value);
  if(!copy.type && !copy.kind){
    copy.type = key==="maps"?"map":key==="figures"?"figure":key==="tables"?"table":key==="data"?"data":key==="practice"||key==="questions"?"practice":key==="activities"?"activity":key==="timeline"?"timeline":"example";
  }
  return copy;
}

function renderSections(sections){

  const safeSections=Array.isArray(sections) ? sections : [];

  /* ONE continuous learner-facing chapter. */
  const card=document.createElement("div");
  card.className="noteCard chapterFlowCard";
  card.dataset.index="0";

  let html="";
  let renderedAnything=false;

  safeSections.forEach((section)=>{
    if(section === null || section === undefined) return;

    const title = section && typeof section === "object"
      ? (section.title || section.heading || section.name || "")
      : "";

    /* Do not render empty exporter/debug headings such as Figures or Worked Examples. */
    if(isEmptyMetadataHeading(section)) return;

    /* Meaningful topic heading only; never show id/section/render metadata. */
    if(title){
      html += `
        <div class="chapterTopicHeader">
          <h3>${escapeRenderHTML(title)}</h3>
        </div>
      `;
    }

    const blocks=normalizeUnitBlocks(section);
    blocks.forEach((block,blockIndex)=>{
      const rendered=renderUniversalBlock(block,blockIndex);
      if(rendered){ html += rendered; renderedAnything=true; }
    });

    if(!blocks.length && section && typeof section === "object" && section.content){
      html += `<div class="cqBlock cqParagraph"><div>${renderText(section.content)}</div></div>`;
      renderedAnything=true;
    }
  });

  if(!renderedAnything && !html){
    html=`<div class="cqBlock cqParagraph"><p>Chapter content is loading...</p></div>`;
  }

  card.innerHTML=html;
  notesContainer.appendChild(card);

  card.addEventListener("click",()=>{
    localStorage.setItem("cq-last-read-" + chapterKey,"0");
  });

  bindUniversalInteractions();

  loadMathRenderer().then(function(){
    if(window.MathJax && typeof window.MathJax.typesetPromise === "function"){
      window.MathJax.typesetPromise([card]).catch(()=>{});
    }
  });

  const searchInput=document.getElementById("chapterSearch");
  if(searchInput && !searchInput.dataset.bound){
    searchInput.dataset.bound="true";
    searchInput.addEventListener("input",function(){
      const query=this.value.toLowerCase().trim();
      const chapterCard=document.querySelector(".chapterFlowCard");
      if(!chapterCard) return;
      const parts=chapterCard.querySelectorAll(".cqBlock,.chapterTopicHeader");
      if(!query){
        chapterCard.style.display="";
        parts.forEach(el=>el.style.display="");
        return;
      }
      let anyMatch=false;
      parts.forEach(el=>{
        const match=el.textContent.toLowerCase().includes(query);
        el.style.display=match ? "" : "none";
        if(match) anyMatch=true;
      });
      chapterCard.style.display=anyMatch ? "" : "none";
    });
  }
}

/*==================================================
  UNIVERSAL CONTENT RENDERER
  Supports current + future Maths, Science, History,
  Civics, Geography, AI, IT and Class 6–10 content.
  Unknown block types are NEVER silently discarded.
==================================================*/

function escapeRenderHTML(value){
  return String(value ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}

/*==================================================
  PHYSICS / MATH RENDERING LAYER — NON-DESTRUCTIVE
  --------------------------------------------------
  Keeps the existing universal renderer intact, but makes
  equations embedded inside normal Physics prose render as
  real mathematical notation.  MathJax is loaded lazily;
  if it cannot load, the original text remains visible.
==================================================*/

let CQ_MATH_READY = null;

function loadMathRenderer(){
  if(window.MathJax && typeof window.MathJax.typesetPromise === "function"){
    return Promise.resolve();
  }

  if(CQ_MATH_READY) return CQ_MATH_READY;

  window.MathJax = window.MathJax || {};
  window.MathJax.tex = window.MathJax.tex || {};
  window.MathJax.tex.inlineMath = [["\\(","\\)"]];
  window.MathJax.tex.displayMath = [["\\[","\\]"]];
  window.MathJax.options = window.MathJax.options || {};
  window.MathJax.options.skipHtmlTags = ["script","noscript","style","textarea","pre","code"];

  CQ_MATH_READY = new Promise(function(resolve){
    const existing=document.querySelector('script[data-cq-mathjax="true"]');
    if(existing){
      existing.addEventListener("load",()=>resolve(),{once:true});
      existing.addEventListener("error",()=>resolve(),{once:true});
      return;
    }

    const script=document.createElement("script");
    script.async=true;
    script.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    script.dataset.cqMathjax="true";
    script.onload=()=>resolve();
    script.onerror=()=>resolve();
    document.head.appendChild(script);
  });

  return CQ_MATH_READY;
}

/* Convert common school-Physics notation to TeX without changing
   ordinary prose.  This is intentionally conservative. */
function physicsTex(value){
  let s=String(value ?? "");

  if(!s.trim()) return s;
  if(/\\\(|\\\[/.test(s)) return s;

  /* Protect HTML tags while detecting equations. */
  const parts=s.split(/(<[^>]+>)/g);

  const symbolMap={
    "ρ":"\\rho","λ":"\\lambda","μ":"\\mu","Ω":"\\Omega",
    "π":"\\pi","θ":"\\theta","α":"\\alpha","β":"\\beta",
    "γ":"\\gamma","Δ":"\\Delta","δ":"\\delta","∞":"\\infty",
    "√":"\\sqrt{}","×":"\\times","÷":"\\div","→":"\\to",
    "∝":"\\propto","≤":"\\le","≥":"\\ge","≠":"\\ne"
  };

  function convertText(t){
    if(!t || /^(?:\\s*)$/.test(t)) return t;

    /* Normalize a few common Unicode scientific symbols. */
    Object.keys(symbolMap).forEach(sym=>{
      const replacement=symbolMap[sym];
      if(sym!=="√") t=t.split(sym).join(replacement);
    });

    /* Formula-looking runs: equations, ratios and common Physics units.
       Avoid converting ordinary hyphenated prose. */
    const formulaPattern=/((?:[0-9]+\s*\/\s*)?(?:[A-Za-zΔρλμΩαβγθ][A-Za-z0-9_²³⁻⁺]*|[0-9]+)\s*(?:=|≈|∝)\s*[^.;,:!?<>()]{1,90})|(?:\b\d+\s*\/\s*\d+\b)|(?:\b(?:m|cm|mm|km|s|min|h|A|V|W|J|N|Pa|Hz|Ω|ohm|Ωm|m\/s|m\/s²|kg|C|F|T|D)\b)/g;

    return t.replace(formulaPattern,function(match){
      let m=match.trim();
      if(!m) return match;

      /* Units alone should not become ugly math islands. */
      if(/^[A-Za-zΩ]+(?:\s*m(?:\/s)?(?:²)?|\/s(?:²)?|\.?m)?$/.test(m) && !/[=≈∝]/.test(m)) return match;

      m=m.replace(/²/g,"^2").replace(/³/g,"^3");
      m=m.replace(/([A-Za-z])([₀-₉])/g,(a,b,c)=>b+"_"+String.fromCharCode(c.charCodeAt(0)-0x2080+48));
      m=m.replace(/([A-Za-z])\s*\/\s*([A-Za-z0-9]+)/g,"\\frac{$1}{$2}");
      m=m.replace(/×/g,"\\times").replace(/÷/g,"\\div");
      m=m.replace(/rho/g,"\\rho");
      return "\\("+m+"\\)";
    });
  }

  return parts.map((part,i)=>i%2===1 ? part : convertText(part)).join("");
}

function renderText(value){
  return physicsTex(value).replace(/\n/g,"<br>");
}

function renderFormula(value){
  /* Chemistry formula/equation cards intentionally use normal, responsive text.
     This prevents long equations from being clipped on narrow mobile screens. */
  let raw=String(value ?? "").trim();
  if(!raw) return "";
  raw=raw.replace(/\\mathrm\{([^}]*)\}/g,"$1")
         .replace(/\\text\{([^}]*)\}/g,"$1")
         .replace(/\\quad/g,"   ")
         .replace(/\\;/g," ")
         .replace(/\\,/g," ")
         .replace(/\\!/g,"")
         .replace(/\\log/g,"log");
  /* If a formula was supplied with TeX delimiters, remove only the delimiters. */
  raw=raw.replace(/^\\\[/,"").replace(/\\\]$/ ,"")
         .replace(/^\\\(/,"").replace(/\\\)$/ ,"");
  return escapeRenderHTML(raw);
}

function blockTitle(block, fallback){
  return escapeRenderHTML(block && (block.title || block.heading) || fallback);
}

function getBlockText(block){
  if (!block) return "";
  return block.text ?? block.content ?? block.description ?? block.explanation ?? "";
}

function renderList(items, ordered=false){
  if (!Array.isArray(items) || !items.length) return "";
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map(x => `<li>${renderText(typeof x === "object" ? (x.text ?? x.content ?? JSON.stringify(x)) : x)}</li>`).join("")}</${tag}>`;
}

/*==================================================
  UNIVERSAL ARBITRARY DATA SUPPORT
  --------------------------------------------------
  Any future/custom field is rendered rather than lost.
==================================================*/

function humanizeFieldName(name){
  return String(name || "")
    .replace(/([a-z])([A-Z])/g,"$1 $2")
    .replace(/[_-]+/g," ")
    .replace(/\s+/g," ")
    .trim()
    .replace(/\b\w/g,c=>c.toUpperCase());
}

function normaliseRenderFieldKey(key){
  return String(key ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function isRenderMetaField(key){
  const normalised = normaliseRenderFieldKey(key);

  return new Set([
    "colour","color","accentcolor","accent","theme","variant",
    "style","class","classname","palette","tone",
    "cardstyle","renderas","renderstyle",
    "renderasvalue","cardstylevalue"
  ]).has(normalised);
}

function isMetadataOnlyBlock(block){
  if(!block || typeof block !== "object" || Array.isArray(block)) return false;

  const keys = Object.keys(block).filter(key =>
    block[key] !== undefined &&
    block[key] !== null &&
    block[key] !== ""
  );

  if(!keys.length) return false;

  /* Internal chapter-export fields must never become learner-facing cards. */
  const hidden = new Set([
    "id","difficulty","answerHidden","answer_hidden","position",
    "figures","workedExamples","worked_examples","renderPosition",
    "sectionType","blockType","displayOrder","order"
  ]);

  return keys.every(key =>
    isRenderMetaField(key) || hidden.has(key) ||
    hidden.has(String(key).replace(/[^a-zA-Z0-9_]/g,""))
  );
}

function isEmptyMetadataHeading(block){
  if(!block || typeof block !== "object" || Array.isArray(block)) return false;

  const title = String(block.title || block.heading || block.name || "").trim().toLowerCase();
  if(!title) return false;

  const headingNames = new Set([
    "figures","worked examples","worked example","practice","application"
  ]);

  if(!headingNames.has(title)) return false;

  const realContentKeys = [
    "text","content","description","explanation","question","answer",
    "steps","solution","questions","items","options","html","svg",
    "figure","image","src","url","caption","formula","rows","code",
    "blocks","children"
  ];

  return !realContentKeys.some(key => {
    const value = block[key];
    return value !== undefined && value !== null &&
      (Array.isArray(value) ? value.length > 0 : String(value).trim() !== "");
  });
}

function renderAnyValue(value,depth=0){

  if(value === null || value === undefined) return "";

  if(depth > 7){
    return `<div>${renderText(JSON.stringify(value))}</div>`;
  }

  if(typeof value !== "object"){
    return `<div>${renderText(String(value))}</div>`;
  }

  if(Array.isArray(value)){
    return `
      <div class="cqAnyList">
        ${value.map((item,i)=>{
          if(item && typeof item === "object"){
            return renderUniversalBlock(item,i);
          }
          return `<div class="cqAnyListItem">${renderText(String(item))}</div>`;
        }).join("")}
      </div>
    `;
  }

  return Object.entries(value)
    .filter(([key,val]) => {
      if(isRenderMetaField(key)) return false;
      if(["id","renderAs","render_as","renderStyle","render_style"].includes(key)) return false;
      return val !== undefined && val !== null && val !== "";
    })
    .map(([key,val])=>{
      if(val === undefined || val === null || val === "") return "";

      /* Known visual payloads get their dedicated renderer inside generic data. */
      const nk=normaliseRenderFieldKey(key);
      if(["figures","figure","maps","map","geographyMap","geographymap"].includes(nk)) {
        const arr=Array.isArray(val)?val:[val];
        return arr.map((item,i)=>renderUniversalBlock(normalizeSpecialObject(item,nk.includes("map")?"maps":"figures"),i)).join("");
      }

      return `
        <div class="cqAnyField">
          <h5>${escapeRenderHTML(humanizeFieldName(key))}</h5>
          ${renderAnyValue(val,depth+1)}
        </div>
      `;
    }).join("");
}

function renderExtraBlockFields(block){

  if(!block || typeof block !== "object") return "";

  /* Styling/meta fields are renderer instructions, never visible content. */
  const used=new Set([
    "type","kind","title","heading","name",
    "id","difficulty","answerHidden","answer_hidden","position",
    "figures","workedExamples","worked_examples","renderPosition",
    "sectionType","blockType","displayOrder","order",
    "text","content","description","explanation",
    "question","answer","steps","solution","questions",
    "items","options","assertion","reason",
    "aim","materials","procedure","observation",
    "result","conclusion","html","svg","figure",
    "image","src","url","caption","labels",
    "formula","formulas","expression","rows","headers","columns","cells","code","output","prompt",
    "example","front","back","quote","author","source","license","alt",
    "branches","points","data","blocks","children",
    "items","questions","answer","steps","solution",
    /* Interactive geography metadata is renderer-only and must never appear
       as raw Lat/Lon/Model/Render-As cards. */
    "mapMode","markers","highlightRegions","routes","legend","mapCenter","zoom","showStates",
    "model","layers","interactive","earthCenter","earthZoom",
    "colour","color","accentColor","accent","theme","variant",
    "style","class","className","palette","tone",
    "cardStyle","card_style","renderAs","render_as",
    "renderStyle","render_style",
    /* Comic payload fields are handled by the dedicated comic renderer. */
    "dialogues","dialogue","character","speaker","role","lines"
  ]);

  const extras=Object.entries(block).filter(([key,val])=>{
    return !used.has(key) &&
           !isRenderMetaField(key) &&
           val !== undefined &&
           val !== null &&
           val !== "";
  });

  if(!extras.length) return "";

  return `
    <div class="cqExtraFields">
      ${extras.map(([key,val])=>`
        <div class="cqExtraField">
          <h5>📌 ${escapeRenderHTML(humanizeFieldName(key))}</h5>
          ${renderAnyValue(val)}
        </div>
      `).join("")}
    </div>
  `;
}

/*==================================================
  AUTOMATIC COLOUR SYSTEM
  - colour/color fields are styling metadata only.
  - Every content block receives a visual palette.
  - Explicit colours are respected; otherwise palettes
    rotate automatically so long chapters stay colourful.
==================================================*/

const CQ_PALETTES = [
  "cqPalettePurple",
  "cqPaletteBlue",
  "cqPaletteGreen",
  "cqPaletteOrange",
  "cqPalettePink",
  "cqPaletteCyan",
  "cqPaletteYellow",
  "cqPaletteRed"
];

function normalisePaletteName(value){
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z]/g,"");
}

function getBlockPalette(block,index,type){
  const explicit = normalisePaletteName(
    block && (block.colour || block.color || block.accentColor || block.palette || block.tone)
  );

  const explicitMap = {
    purple:"cqPalettePurple", violet:"cqPalettePurple", indigo:"cqPalettePurple",
    blue:"cqPaletteBlue", sky:"cqPaletteBlue",
    green:"cqPaletteGreen", emerald:"cqPaletteGreen",
    orange:"cqPaletteOrange", amber:"cqPaletteOrange",
    pink:"cqPalettePink", rose:"cqPalettePink",
    cyan:"cqPaletteCyan", teal:"cqPaletteCyan",
    yellow:"cqPaletteYellow", gold:"cqPaletteYellow",
    red:"cqPaletteRed", coral:"cqPaletteRed"
  };

  if(explicitMap[explicit]) return explicitMap[explicit];

  /* Give common educational block types a stable visual identity. */
  const typeMap = {
    definition:"cqPaletteCyan",
    definitionbox:"cqPaletteCyan",
    concept:"cqPalettePurple",
    conceptcard:"cqPalettePurple",
    concept_card:"cqPalettePurple",
    keypoint:"cqPaletteGreen",
    key_point:"cqPaletteGreen",
    important:"cqPaletteYellow",
    example:"cqPaletteOrange",
    workedexample:"cqPaletteOrange",
    worked_example:"cqPaletteOrange",
    solvedexample:"cqPaletteOrange",
    activity:"cqPaletteGreen",
    experiment:"cqPaletteGreen",
    diagram:"cqPaletteBlue",
    figure:"cqPaletteBlue",
    map:"cqPaletteBlue",
    timeline:"cqPalettePink",
    formula:"cqPalettePurple",
    theorem:"cqPalettePurple",
    table:"cqPaletteCyan",
    comparison:"cqPaletteCyan",
    compare:"cqPaletteCyan",
    comparetable:"cqPaletteCyan",
    fact:"cqPaletteYellow",
    tip:"cqPaletteGreen",
    warning:"cqPaletteRed",
    examtip:"cqPaletteOrange",
    exam_tip:"cqPaletteOrange",
    application:"cqPaletteBlue",
    summary:"cqPalettePurple",
    ai:"cqPalettePurple",
    aiconcept:"cqPalettePurple",
    aitool:"cqPalettePurple",
    code:"cqPaletteCyan",
    program:"cqPaletteCyan",
    algorithm:"cqPaletteCyan"
  };

  return typeMap[type] || CQ_PALETTES[Math.abs(Number(index) || 0) % CQ_PALETTES.length];
}

function applyPaletteToBlock(html,palette){
  if(!html) return "";
  return `<div class="cqPaletteWrap ${palette}">${html}</div>`;
}

function renderUniversalBlock(block,blockIndex){

  if(block === null || block === undefined) return "";

  /* Renderer metadata is never a visible chapter block.
     This protects every chapter even when metadata is supplied
     as a standalone object such as { "Card Style": "colorful" }
     or { "Render As": "card" }. */
  if(isMetadataOnlyBlock(block)) return "";

  if(Array.isArray(block)){
    return block.map((item,i)=>renderUniversalBlock(item,i)).join("");
  }

  if(typeof block !== "object"){
    return `<div class="cqBlock cqParagraph">${renderText(String(block))}</div>`;
  }

  const html=renderUniversalBlockCore(block,blockIndex);
  const type=String(block.type || block.kind || "").toLowerCase().trim();

  const nested =
    Array.isArray(block.blocks) ? block.blocks :
    (Array.isArray(block.children) ? block.children :
    (Array.isArray(block.content) &&
     !["paragraph","text","intro"].includes(type)
      ? block.content
      : null));

  const nestedHTML=nested
    ? nested.map((item,i)=>renderUniversalBlock(item,i)).join("")
    : "";

  const extraHTML=renderExtraBlockFields(block);

  /*
    `colour` / `color` is styling metadata only.
    It is converted into a visual palette class and NEVER rendered as text.
  */
  const palette = getBlockPalette(block,blockIndex,type);
  const colouredHTML = applyPaletteToBlock(html,palette);

  if(!nestedHTML && !extraHTML) return colouredHTML;

  return `
    <div class="cqCompositeBlock ${palette}">
      ${colouredHTML}
      ${nestedHTML}
      ${extraHTML}
    </div>
  `;
}

function renderUniversalBlockCore(block, blockIndex){

  if (block === null || block === undefined) {
    return "";
  }

  if (Array.isArray(block)) {
    return block.map((item,i)=>renderUniversalBlock(item,i)).join("");
  }

  if (typeof block !== "object") {
    return `<div class="cqBlock cqParagraph">${renderText(String(block))}</div>`;
  }

  const type = String(block.type || block.kind || "paragraph").toLowerCase().trim();
  const text = getBlockText(block);

  const nestedBlocks =
    Array.isArray(block.blocks) ? block.blocks :
    (Array.isArray(block.children) ? block.children :
    (Array.isArray(block.content) &&
     !["paragraph","text","intro"].includes(type)
       ? block.content
       : null));

  /* ---------- TEXT / BASIC ---------- */

  if(type === "paragraph" || type === "text" || type === "intro"){
    return `<div class="cqBlock cqParagraph">${renderText(text)}</div>`;
  }

  if(type === "heading" || type === "subheading"){
    return `<div class="cqBlock cqHeading"><h4>${blockTitle(block,"Key Idea")}</h4>${text ? `<p>${renderText(text)}</p>` : ""}</div>`;
  }

  if(type === "concept" || type === "conceptcard" || type === "concept_card"){
    return `
      <div class="cqBlock cqConcept">
        <div class="cqIcon">💡</div>
        <div><h4>${blockTitle(block,"Concept")}</h4><div>${renderText(text)}</div></div>
      </div>`;
  }

  if(type === "definition" || type === "definitionbox"){
    return `
      <div class="cqBlock cqDefinition">
        <h4>📖 ${blockTitle(block,"Definition")}</h4>
        <div>${renderText(text)}</div>
      </div>`;
  }

  if(type === "keypoint" || type === "key_point" || type === "important"){
    const keyItems = Array.isArray(block.items) ? block.items : [];
    return `
      <div class="cqBlock cqImportant">
        <h4>⭐ ${blockTitle(block,"Important Point")}</h4>
        ${text ? `<div>${renderText(text)}</div>` : ""}
        ${keyItems.length ? renderList(keyItems) : ""}
      </div>`;
  }

  /* ---------- EXAMPLES ---------- */

  if(type === "example" || type === "workedexample" || type === "worked_example" || type === "solvedexample"){
    const steps = Array.isArray(block.steps) ? block.steps :
                  Array.isArray(block.solution) ? block.solution : [];

    return `
      <div class="cqBlock cqExample">
        <div class="cqBadge">🧮 Solved Example</div>
        <h4>${blockTitle(block,"Example")}</h4>
        ${block.question ? `<div class="cqQuestion"><strong>❓ Question</strong><div>${renderText(block.question)}</div></div>` : ""}
        ${text ? `<div class="cqExplanation">${renderText(text)}</div>` : ""}
        ${steps.length ? `<div class="cqSteps"><strong>📝 Step-by-step</strong>${renderList(steps,true)}</div>` : ""}
        ${block.answer !== undefined ? `<div class="cqAnswer"><strong>✅ Answer</strong><div>${renderText(block.answer)}</div></div>` : ""}
      </div>`;
  }

  /* ---------- QUESTIONS / ASSESSMENT ---------- */

  if(type === "practice" || type === "questions" || type === "question" || type === "exercise"){
    const questions = Array.isArray(block.questions) ? block.questions :
                      Array.isArray(block.items) ? block.items :
                      (block.question ? [block] : []);
    return `
      <div class="cqBlock cqPractice">
        <h4>✏️ ${blockTitle(block,"Practice Questions")}</h4>
        ${renderQuestionList(questions)}
      </div>`;
  }

  if(type === "mcq" || type === "quiz" || type === "multiplechoice" || type === "multiple_choice"){
    const questions = Array.isArray(block.questions) ? block.questions : [block];
    return `
      <div class="cqBlock cqQuiz">
        <h4>🎯 ${blockTitle(block,"MCQ Challenge")}</h4>
        ${questions.map((q,i)=>renderMCQ(q,i)).join("")}
      </div>`;
  }

  if(type === "truefalse" || type === "true_false"){
    const items = Array.isArray(block.questions) ? block.questions :
                  Array.isArray(block.items) ? block.items : [block];
    return `
      <div class="cqBlock cqQuiz">
        <h4>✔️ ${blockTitle(block,"True or False")}</h4>
        ${items.map((q,i)=>`
          <div class="cqQ">
            <strong>${i+1}. ${renderText(q.question || q.text || "")}</strong>
            ${q.answer !== undefined ? `<details><summary>Show answer</summary><b>${renderText(q.answer)}</b></details>` : ""}
          </div>`).join("")}
      </div>`;
  }

  if(type === "fillblank" || type === "fill_blank"){
    const items = Array.isArray(block.questions) ? block.questions :
                  Array.isArray(block.items) ? block.items : [block];
    return `
      <div class="cqBlock cqQuiz">
        <h4>📝 ${blockTitle(block,"Fill in the Blanks")}</h4>
        ${items.map((q,i)=>`
          <div class="cqQ">
            <strong>${i+1}. ${renderText(q.question || q.text || "")}</strong>
            ${q.answer !== undefined ? `<details><summary>Show answer</summary><b>${renderText(q.answer)}</b></details>` : ""}
          </div>`).join("")}
      </div>`;
  }

  if(type === "assertionreason" || type === "assertion_reason"){
    return `
      <div class="cqBlock cqQuiz">
        <h4>🧠 ${blockTitle(block,"Assertion & Reason")}</h4>
        ${block.assertion ? `<p><b>Assertion:</b> ${renderText(block.assertion)}</p>` : ""}
        ${block.reason ? `<p><b>Reason:</b> ${renderText(block.reason)}</p>` : ""}
        ${block.options ? renderList(block.options) : ""}
        ${block.answer !== undefined ? `<details><summary>Show answer</summary><div>${renderText(block.answer)}</div></details>` : ""}
      </div>`;
  }

  if(type === "casestudy" || type === "case_study"){
    return `
      <div class="cqBlock cqCase">
        <h4>📚 ${blockTitle(block,"Case Study")}</h4>
        ${text ? `<div>${renderText(text)}</div>` : ""}
        ${block.questions ? `<div class="cqCaseQuestions">${renderQuestionList(block.questions)}</div>` : ""}
      </div>`;
  }

  /* ---------- PHYSICS-SPECIFIC LEARNING BLOCKS ---------- */

  if(type === "opening" || type === "overview" || type === "introduction") {
    return `
      <div class="cqBlock cqOpening">
        <div class="cqBadge">🌟 Chapter Journey</div>
        ${block.title || block.heading ? `<h4>${blockTitle(block,"Introduction")}</h4>` : ""}
        ${text ? `<div>${renderText(text)}</div>` : ""}
      </div>`;
  }

  if(type === "information-block" || type === "information" || type === "info" || type === "info-block") {
    return `
      <div class="cqBlock cqInformation">
        <h4>📘 ${blockTitle(block,"Important Information")}</h4>
        ${text ? `<div>${renderText(text)}</div>` : ""}
      </div>`;
  }

  if(type === "think" || type === "think-prompt" || type === "thinking") {
    return `
      <div class="cqBlock cqThink">
        <div class="cqBadge">🤔 Think About It</div>
        ${block.title || block.heading ? `<h4>${blockTitle(block,"Think About It")}</h4>` : ""}
        ${block.question ? `<div class="cqQuestion"><strong>Question</strong><div>${renderText(block.question)}</div></div>` : (text ? `<div>${renderText(text)}</div>` : "")}
        ${block.answer !== undefined ? `<details><summary>Show reasoning</summary><div>${renderText(block.answer)}</div></details>` : ""}
      </div>`;
  }

  if(type === "short" || type === "short-answer" || type === "short_answer") {
    return `
      <div class="cqBlock cqShortAnswer">
        <h4>✍️ ${blockTitle(block,"Short Answer")}</h4>
        ${block.question ? `<div class="cqQuestion"><b>Question:</b><div>${renderText(block.question)}</div></div>` : ""}
        ${text && !block.question ? `<div>${renderText(text)}</div>` : ""}
        ${block.answer !== undefined ? `<details><summary>Show answer</summary><div>${renderText(block.answer)}</div></details>` : ""}
      </div>`;
  }

  if(type === "reasoning" || type === "reasoning-question" || type === "reasoning_question") {
    return `
      <div class="cqBlock cqReasoning">
        <h4>🧠 ${blockTitle(block,"Reasoning Question")}</h4>
        ${block.question ? `<div class="cqQuestion"><b>Question:</b><div>${renderText(block.question)}</div></div>` : ""}
        ${text && !block.question ? `<div>${renderText(text)}</div>` : ""}
        ${block.answer !== undefined ? `<details><summary>Show reasoning</summary><div>${renderText(block.answer)}</div></details>` : ""}
      </div>`;
  }

  if(type === "exam" || type === "board-application" || type === "board_application" || type === "boardpractice" || type === "board-practice") {
    const label = type === "exam" ? "🎯 Board Exam Practice" : "📝 Board Application";
    return `
      <div class="cqBlock cqBoardExam">
        <div class="cqBadge">${label}</div>
        ${block.title || block.heading ? `<h4>${blockTitle(block,"Board Practice")}</h4>` : ""}
        ${block.question ? `<div class="cqQuestion"><strong>Question</strong><div>${renderText(block.question)}</div></div>` : ""}
        ${text && !block.question ? `<div>${renderText(text)}</div>` : ""}
        ${block.answer !== undefined ? `<details><summary>Show answer / marking idea</summary><div>${renderText(block.answer)}</div></details>` : ""}
      </div>`;
  }

  if(type === "numerical-reasoning" || type === "numerical_reasoning" || type === "numerical-question" || type === "numerical_question") {
    return `
      <div class="cqBlock cqNumericalReasoning">
        <div class="cqBadge">🧮 Numerical Reasoning</div>
        ${block.title || block.heading ? `<h4>${blockTitle(block,"Numerical Reasoning")}</h4>` : ""}
        ${block.question ? `<div class="cqQuestion"><strong>Problem</strong><div>${renderText(block.question)}</div></div>` : ""}
        ${text && !block.question ? `<div>${renderText(text)}</div>` : ""}
        ${block.formula ? `<div class="formulaContent">${renderFormula(block.formula)}</div>` : ""}
        ${block.steps ? `<div class="cqSteps"><strong>Method</strong>${renderList(block.steps,true)}</div>` : ""}
        ${block.answer !== undefined ? `<details><summary>Show reasoning</summary><div>${renderText(block.answer)}</div></details>` : ""}
      </div>`;
  }

  if(type === "numerical-method" || type === "numerical_method" || type === "method") {
    return `
      <div class="cqBlock cqNumericalMethod">
        <h4>🧮 ${blockTitle(block,"Numerical Solving Method")}</h4>
        ${text ? `<div>${renderText(text)}</div>` : ""}
        ${block.steps ? renderList(block.steps,true) : ""}
      </div>`;
  }

  if(type === "common-mistakes" || type === "common_mistakes" || type === "mistakes") {
    const items = Array.isArray(block.items) ? block.items : [];
    return `
      <div class="cqBlock cqMistakes">
        <h4>⚠️ ${blockTitle(block,"Common Mistakes")}</h4>
        ${text ? `<div>${renderText(text)}</div>` : ""}
        ${items.length ? renderList(items) : ""}
      </div>`;
  }

  if(type === "case" || type === "case-study" || type === "case_study") {
    return `
      <div class="cqBlock cqCase">
        <div class="cqBadge">📚 Case-Based Question</div>
        ${block.title || block.heading ? `<h4>${blockTitle(block,"Case Study")}</h4>` : ""}
        ${text ? `<div>${renderText(text)}</div>` : ""}
        ${block.question ? `<div class="cqQuestion"><strong>Question</strong><div>${renderText(block.question)}</div></div>` : ""}
        ${block.questions ? renderQuestionList(block.questions) : ""}
        ${block.answer !== undefined ? `<details><summary>Show answer</summary><div>${renderText(block.answer)}</div></details>` : ""}
      </div>`;
  }

  if(type === "hots" || type === "HOTS".toLowerCase() || type === "higher-order-thinking" || type === "higher_order_thinking") {
    return `
      <div class="cqBlock cqHOTS">
        <div class="cqBadge">🔥 HOTS</div>
        ${block.title || block.heading ? `<h4>${blockTitle(block,"Higher Order Thinking")}</h4>` : ""}
        ${block.question ? `<div class="cqQuestion"><strong>Challenge</strong><div>${renderText(block.question)}</div></div>` : ""}
        ${text && !block.question ? `<div>${renderText(text)}</div>` : ""}
        ${block.answer !== undefined ? `<details><summary>Show solution idea</summary><div>${renderText(block.answer)}</div></details>` : ""}
      </div>`;
  }

  /* ---------- SCIENCE ---------- */

  if(type === "experiment" || type === "activity" || type === "activitycard"){
    return `
      <div class="cqBlock cqActivity">
        <div class="cqBadge">🧪 Activity / Experiment</div>
        <h4>${blockTitle(block,"Try It Yourself")}</h4>
        ${block.aim ? `<p><b>🎯 Aim:</b> ${renderText(block.aim)}</p>` : ""}
        ${block.materials ? `<div><b>🧰 Materials</b>${renderList(block.materials)}</div>` : ""}
        ${block.procedure || block.steps ? `<div><b>🔬 Procedure</b>${renderList(block.procedure || block.steps,true)}</div>` : ""}
        ${block.observation ? `<p><b>👀 Observation:</b> ${renderText(block.observation)}</p>` : ""}
        ${block.result || block.conclusion ? `<p><b>✅ Conclusion:</b> ${renderText(block.result || block.conclusion)}</p>` : ""}
        ${text ? `<div>${renderText(text)}</div>` : ""}
      </div>`;
  }

  if(type === "observation"){
    return `<div class="cqBlock cqObservation"><h4>👀 ${blockTitle(block,"Observation")}</h4>${renderText(text)}</div>`;
  }

  if(type === "hypothesis"){
    return `<div class="cqBlock cqHypothesis"><h4>🔬 ${blockTitle(block,"Hypothesis")}</h4>${renderText(text)}</div>`;
  }

  /* ---------- FIGURES / DIAGRAMS / MAPS ---------- */

  if(type === "embeddedimage" || type === "embedded_image" || type === "inlineimage" || type === "svgimage") {
    const visual = block.svg || block.html || block.content || block.figure || "";
    const image = block.image || block.src || block.url || "";
    const alt = escapeRenderHTML(block.alt || block.caption || block.title || "Biology figure");
    return `
      <div class="cqBlock cqFigure cqEmbeddedFigure" data-cq-related-topic="${alt}">
        <h4>🖼️ ${blockTitle(block,"Related visual")}</h4>
        ${image ? `<figure class="cqFigureMedia"><img src="${escapeRenderHTML(image)}" alt="${alt}" loading="eager" decoding="async"></figure>` : ""}
        ${visual ? `<div class="cqVisual">${visual}</div>` : ""}
        ${block.caption ? `<p class="cqCaption">${renderText(block.caption)}</p>` : ""}
      </div>`;
  }

  if(type === "diagram" || type === "figure" || type === "sciencefigure" || type === "illustration" || type === "image" || type === "photo"){
    const visual = block.html || block.svg || block.content || block.figure || "";
    const image = block.image || block.src || block.url || "";
    const alt = escapeRenderHTML(block.alt || block.caption || block.title || "Physics figure");
    const fallback = escapeRenderHTML(block.fallback || "Embedded chapter diagram could not be displayed.");
    return `
      <div class="cqBlock cqFigure" data-cq-related-topic="${alt}">
        <h4>🖼️ ${blockTitle(block,"Figure / Diagram")}</h4>
        ${image ? `<figure class="cqFigureMedia"><img src="${escapeRenderHTML(image)}" alt="${alt}" loading="eager" decoding="async" referrerpolicy="no-referrer" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><div class="cqImageFallback" style="display:none">⚠️ ${fallback}</div></figure>` : ""}
        ${visual ? `<div class="cqVisual">${visual}</div>` : ""}
        ${block.caption ? `<p class="cqCaption">${renderText(block.caption)}</p>` : ""}
      </div>`;
  }

  if(type === "map" || type === "mapactivity" || type === "geography_map"){
    const id = "cq-map-" + Math.random().toString(36).slice(2,10);
    window.CQ_MAP_DATA = window.CQ_MAP_DATA || {};
    window.CQ_MAP_DATA[id] = block;
    const markers = Array.isArray(block.markers) ? block.markers : [];
    return `
      <div class="cqBlock cqInteractiveGeo cqMap">
        <div class="cqBadge">🗺️ Interactive Map</div>
        <h4>${blockTitle(block,"Map Study")}</h4>
        ${text ? `<p class="cqGeoIntro">${renderText(text)}</p>` : ""}
        <div class="cqMapToolbar" aria-label="Map controls">
          <button type="button" data-cq-map-in="${id}">＋</button>
          <button type="button" data-cq-map-out="${id}">−</button>
          <button type="button" data-cq-map-reset="${id}">↺ Reset</button>
          <button type="button" data-cq-map-locate="${id}">🇮🇳 India</button>
        </div>
        <div id="${id}" class="cqInteractiveMap" role="application" aria-label="Interactive India map"></div>
        <div id="${id}-info" class="cqMapInfo">👆 Tap a marker to see the place and its geography clue.</div>
        ${markers.length ? `<div class="cqMapMarkerList"><b>📍 Places in this map:</b>${markers.map((m,i)=>`<button type="button" data-cq-marker="${id}" data-cq-marker-index="${i}">${escapeRenderHTML(m.label || m.name || "Place")}</button>`).join("")}</div>` : ""}
      </div>`;
  }

  if(type === "earthmodel" || type === "earth_model" || type === "globe" || type === "3d-earth"){
    const id = "cq-earth-" + Math.random().toString(36).slice(2,10);
    window.CQ_EARTH_DATA = window.CQ_EARTH_DATA || {};
    window.CQ_EARTH_DATA[id] = block;
    const layers = Array.isArray(block.layers) ? block.layers : [];
    return `
      <div class="cqBlock cqInteractiveGeo cqEarthModel">
        <div class="cqBadge">🌍 Interactive 3D Earth</div>
        <h4>${blockTitle(block,"Earth Model")}</h4>
        ${text ? `<p class="cqGeoIntro">${renderText(text)}</p>` : ""}
        <div class="cqEarthToolbar">
          <button type="button" data-cq-earth-reset="${id}">↺ Reset view</button>
          <span>🖱️ Drag to rotate • Pinch / wheel to zoom</span>
        </div>
        <div id="${id}" class="cqInteractiveEarth" role="application" aria-label="Interactive 3D Earth"></div>
        ${layers.length ? `<div class="cqEarthSequence"><b>🌏 Study sequence:</b>${layers.map((x,i)=>`<span>${i+1}. ${escapeRenderHTML(x)}</span>`).join("")}</div>` : ""}
      </div>`;
  }

  /* ---------- MATHS / FORMULAS / TABLES / DATA ---------- */

  if(type === "formula" || type === "equation" || type === "theorem"){
    return `
      <div class="cqBlock cqFormula">
        <h4>📐 ${blockTitle(block,type === "theorem" ? "Theorem" : "Formula")}</h4>
        <div class="formulaContent">${renderFormula(block.formula || text)}</div>
        ${block.explanation ? `<p>${renderText(block.explanation)}</p>` : ""}
      </div>`;
  }

  if(type === "comparison-table" || type === "comparison_table" || type === "comparisonTable"){
    const headers = Array.isArray(block.headers) ? block.headers : [];
    const rows = Array.isArray(block.rows) ? block.rows : [];
    return `
      <div class="cqBlock cqComparisonTable">
        <h4>📊 ${blockTitle(block,"Comparison")}</h4>
        <div class="cqTableScroll">
          <table class="cqComparison">
            ${headers.length ? `<thead><tr>${headers.map(h=>`<th>${renderText(h)}</th>`).join("")}</tr></thead>` : ""}
            <tbody>${rows.map(row=>`<tr>${(Array.isArray(row)?row:[row]).map(cell=>`<td>${renderText(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
      </div>`;
  }

  if(type === "formula-bank" || type === "formula_bank" || type === "formulabank"){
    const formulas = Array.isArray(block.formulas) ? block.formulas : (Array.isArray(block.items) ? block.items : []);
    return `
      <div class="cqBlock cqFormulaBank">
        <h4>📐 ${blockTitle(block,"Formula Bank")}</h4>
        ${block.text ? `<p>${renderText(block.text)}</p>` : ""}
        ${formulas.length ? `<div class="cqFormulaBankGrid">${formulas.map((x,i)=>{
          const f = typeof x === "object" ? (x.formula || x.text || x.expression || "") : x;
          const label = typeof x === "object" ? (x.title || x.name || `Formula ${i+1}`) : `Formula ${i+1}`;
          const exp = typeof x === "object" ? (x.explanation || x.note || "") : "";
          return `<div class="cqFormulaBankItem"><b>${escapeRenderHTML(label)}</b><div class="formulaContent">${renderFormula(f)}</div>${exp ? `<p>${renderText(exp)}</p>` : ""}</div>`;
        }).join("")}</div>` : ""}
      </div>`;
  }

  if(type === "table" || type === "numbertable" || type === "comparison" ||
     type === "compare" || type === "comparetable" || type === "compare_table"){
    const rows = Array.isArray(block.rows) ? block.rows : [];
    const headers = Array.isArray(block.headers) ? block.headers : [];
    if(!rows.length && !headers.length){
      return `<div class="cqBlock cqTable"><h4>📊 ${blockTitle(block,"Table")}</h4>${text ? renderText(text) : ""}</div>`;
    }
    return `
      <div class="cqBlock cqTable">
        <h4>📊 ${blockTitle(block,"Table")}</h4>
        <div class="cqTableScroll">
          <table>
            ${headers.length ? `<thead><tr>${headers.map(cell=>`<th>${renderText(cell)}</th>`).join("")}</tr></thead>` : ""}
            <tbody>
              ${rows.map(row=>`
                <tr>
                  ${(Array.isArray(row) ? row : [row]).map(cell => `<td>${renderText(cell)}</td>`).join("")}
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>`;
  }

  if(type === "data" || type === "dataset" || type === "graph" || type === "chart"){
    const rows = Array.isArray(block.rows) ? block.rows : [];
    return `
      <div class="cqBlock cqData">
        <h4>📊 ${blockTitle(block,"Data / Graph")}</h4>
        ${rows.length ? `<div class="cqTableScroll"><table><tbody>${rows.map((r,i)=>`<tr>${(Array.isArray(r)?r:[r]).map(c=>i===0?`<th>${renderText(c)}</th>`:`<td>${renderText(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : ""}
        ${block.html || block.svg || block.content ? `<div class="cqVisual">${block.html || block.svg || block.content}</div>` : ""}
        ${text ? `<p>${renderText(text)}</p>` : ""}
      </div>`;
  }

  /* ---------- CIVICS / HISTORY COMICS ---------- */

  if(type === "comic" || type === "comicstory" || type === "comic_story"){
    const dialogueItems =
      Array.isArray(block.dialogues) ? block.dialogues :
      Array.isArray(block.dialogueLines) ? block.dialogueLines :
      Array.isArray(block.lines) ? block.lines :
      Array.isArray(block.items) ? block.items :
      (Array.isArray(block.scenes) ? block.scenes : []);

    const linesHTML = dialogueItems.map((item)=>{
      if(item === null || item === undefined) return "";

      if(typeof item !== "object"){
        return `<div class="cqComicLine">${renderText(item)}</div>`;
      }

      const speaker =
        item.character ||
        item.speaker ||
        item.name ||
        item.role ||
        "";

      const dialogue =
        item.dialogue ??
        item.text ??
        item.content ??
        "";

      if(!speaker && !dialogue) return "";

      return `
        <div class="cqComicLine">
          ${speaker ? `<strong class="cqComicSpeaker">${escapeRenderHTML(speaker)}:</strong> ` : ""}
          <span class="cqComicSpeech">${renderText(dialogue)}</span>
        </div>
      `;
    }).join("");

    return `
      <div class="cqBlock cqComic">
        <div class="cqBadge">🎬 Comic Story</div>
        ${block.title || block.heading
          ? `<h4>${blockTitle(block,"Comic Story")}</h4>`
          : ""}
        <div class="cqComicStory">
          ${linesHTML}
        </div>
      </div>`;
  }

  /* ---------- SOCIAL SCIENCE ---------- */

  if(type === "timeline"){
    const items = Array.isArray(block.items) ? block.items : [];
    return `
      <div class="cqBlock cqTimeline">
        <h4>⏳ ${blockTitle(block,"Timeline")}</h4>
        ${items.map((item,i)=>`
          <div class="cqTimelineItem">
            <div class="cqTimelineDot">${i+1}</div>
            <div><b>${renderText(item.year || item.date || "")}</b><p>${renderText(item.text || item.event || item.description || item)}</p></div>
          </div>`).join("")}
      </div>`;
  }

  if(type === "process" || type === "flowchart" || type === "steps"){
    const steps = Array.isArray(block.steps) ? block.steps :
                  Array.isArray(block.items) ? block.items : [];
    return `
      <div class="cqBlock cqProcess">
        <h4>🔄 ${blockTitle(block,"Process")}</h4>
        ${steps.map((s,i)=>`
          <div class="cqProcessStep">
            <span>${i+1}</span>
            <div>${renderText(typeof s === "object" ? (s.text || s.title || s.description || "") : s)}</div>
          </div>`).join("")}
      </div>`;
  }

  if(type === "mindmap" || type === "mind_map"){
    const items = block.items || block.branches || block.points || [];
    return `
      <div class="cqBlock cqMindMap">
        <h4>🧠 ${blockTitle(block,"Mind Map")}</h4>
        ${Array.isArray(items) ? renderList(items) : renderText(items)}
      </div>`;
  }

  /* ---------- DIGITAL / AI / IT ---------- */

  if(type === "code" || type === "program" || type === "algorithm"){
    return `
      <div class="cqBlock cqCode">
        <h4>💻 ${blockTitle(block,"Code / Algorithm")}</h4>
        <pre><code>${escapeRenderHTML(block.code || text)}</code></pre>
        ${block.output ? `<div class="cqOutput"><b>Output:</b><br>${renderText(block.output)}</div>` : ""}
        ${block.explanation ? `<p>${renderText(block.explanation)}</p>` : ""}
      </div>`;
  }

  if(type === "ai" || type === "aiconcept" || type === "aitool"){
    return `
      <div class="cqBlock cqAI">
        <div class="cqBadge">🤖 AI / Digital Learning</div>
        <h4>${blockTitle(block,"AI Concept")}</h4>
        ${text ? `<p>${renderText(text)}</p>` : ""}
        ${block.prompt ? `<div class="cqPrompt"><b>Prompt:</b><br>${renderText(block.prompt)}</div>` : ""}
        ${block.example ? `<div class="cqExampleMini"><b>Example:</b><br>${renderText(block.example)}</div>` : ""}
      </div>`;
  }

  if(type === "ict" || type === "it" || type === "digital"){
    return `
      <div class="cqBlock cqDigital">
        <h4>💻 ${blockTitle(block,"Digital / IT Concept")}</h4>
        ${renderText(text)}
        ${block.steps ? renderList(block.steps,true) : ""}
      </div>`;
  }

  /* ---------- UNIVERSAL SPECIAL BLOCKS ---------- */

  if(type === "tip"){
    return `<div class="cqBlock cqTip"><h4>🧠 ${blockTitle(block,"Tip")}</h4>${renderText(text)}</div>`;
  }

  if(type === "fact"){
    return `<div class="cqBlock cqFact"><h4>✨ ${blockTitle(block,"Did You Know?")}</h4>${renderText(text)}</div>`;
  }

  if(type === "warning"){
    return `<div class="cqBlock cqWarning"><h4>⚠️ ${blockTitle(block,"Important")}</h4>${renderText(text)}</div>`;
  }

  if(type === "examtip" || type === "exam_tip"){
    return `<div class="cqBlock cqExam"><h4>🎯 ${blockTitle(block,"Exam Tip")}</h4>${renderText(text)}</div>`;
  }

  if(type === "application"){
    return `<div class="cqBlock cqApplication"><h4>🔎 ${blockTitle(block,"Real-Life Application")}</h4>${renderText(text)}</div>`;
  }

  if(type === "summary"){
    return `<div class="cqBlock cqSummary"><h4>📌 ${blockTitle(block,"Summary")}</h4>${renderText(text)}</div>`;
  }

  if(type === "flashcard"){
    return `
      <div class="cqBlock cqFlashcard">
        <h4>🃏 ${blockTitle(block,"Flashcard")}</h4>
        <p><b>Front:</b> ${renderText(block.front || block.question || "")}</p>
        <details><summary>Reveal</summary><p>${renderText(block.back || block.answer || text)}</p></details>
      </div>`;
  }

  if(type === "quote"){
    return `<blockquote class="cqBlock cqQuote">${renderText(block.quote || text)}${block.author ? `<footer>— ${renderText(block.author)}</footer>` : ""}</blockquote>`;
  }

  if(type === "checklist"){
    const items = Array.isArray(block.items) ? block.items : [];
    return `<div class="cqBlock cqChecklist"><h4>☑️ ${blockTitle(block,"Checklist")}</h4>${items.map(x=>`<label><input type="checkbox"> ${renderText(x)}</label>`).join("")}</div>`;
  }

  if(type === "html" || type === "rawhtml"){
    return `<div class="cqBlock cqRawHTML">${block.content || block.html || ""}</div>`;
  }

  /* ---------- GENERIC / DATA OBJECTS ---------- */
  if(type === "generic" || type === "custom" || type === "object") {
    const payload = block.data !== undefined ? block.data : block;
    const payloadHTML = renderAnyValue(payload);
    return `
      <div class="cqBlock cqCustomContent">
        ${block.title || block.heading ? `<h4>${blockTitle(block,"Content")}</h4>` : ""}
        ${payloadHTML || "<p>Content is available but has no renderable fields.</p>"}
      </div>`;
  }

  /* ---------- UNKNOWN / CUSTOM ---------- */
  /* Do not expose renderer/debug metadata such as id, Card Style, etc. */
  const nestedHTML = nestedBlocks
    ? nestedBlocks.map((item,i)=>renderUniversalBlock(item,i)).join("")
    : "";
  const extraHTML=renderExtraBlockFields(block);
  const titleHTML = block.title || block.heading ? `<h4>${blockTitle(block,"Content")}</h4>` : "";
  const textHTML = text ? `<div>${renderText(text)}</div>` : "";
  const questionHTML = block.question ? `<div class="cqQuestion"><b>❓ Question</b><p>${renderText(block.question)}</p></div>` : "";
  const answerHTML = block.answer !== undefined ? `<details><summary>Show answer</summary><div>${renderText(block.answer)}</div></details>` : "";
  const itemsHTML = Array.isArray(block.items) ? renderList(block.items) : "";

  return `
    <div class="cqBlock cqCustomContent">
      ${titleHTML}
      ${textHTML}
      ${questionHTML}
      ${answerHTML}
      ${itemsHTML}
      ${nestedHTML}
      ${extraHTML}
    </div>`;
}

function renderQuestionList(questions){
  if(!Array.isArray(questions) || !questions.length) return "";
  return `<ol>${questions.map(q=>{
    if(typeof q === "string") return `<li>${renderText(q)}</li>`;
    return `<li>
      ${renderText(q.question || q.text || q.prompt || "")}
      ${Array.isArray(q.options) ? `<div class="cqOptions">${q.options.map((o,i)=>`<span>${String.fromCharCode(65+i)}. ${renderText(o)}</span>`).join("")}</div>` : ""}
      ${q.answer !== undefined ? `<details><summary>Show answer</summary><div>${renderText(q.answer)}</div></details>` : ""}
    </li>`;
  }).join("")}</ol>`;
}

function renderMCQ(q,i){
  return `
    <div class="cqQ">
      <strong>${i+1}. ${renderText(q.question || q.text || q.prompt || "")}</strong>
      ${Array.isArray(q.options) ? `<div class="cqOptions">${q.options.map((o,j)=>`<span><b>${String.fromCharCode(65+j)}.</b> ${renderText(o)}</span>`).join("")}</div>` : ""}
      ${q.answer !== undefined ? `<details><summary>Show answer</summary><div><b>${renderText(q.answer)}</b>${q.explanation ? `<p>${renderText(q.explanation)}</p>` : ""}</div></details>` : ""}
    </div>`;
}

function bindUniversalInteractions(){
  document.querySelectorAll(".cqChecklist input").forEach(input=>{
    input.addEventListener("change",()=>{
      try{
        localStorage.setItem(
          "cq-check-"+chapterKey+"-"+Array.from(document.querySelectorAll(".cqChecklist input")).indexOf(input),
          input.checked ? "1" : "0"
        );
      }catch(e){}
    });
  });
}


/*==================================================
  INTERACTIVE GEOGRAPHY ENGINE
  --------------------------------------------------
  - Leaflet + OpenStreetMap for real pan/zoom India maps.
  - Three.js for a draggable/zoomable 3D Earth.
  - CDN loading is lazy so ordinary chapters stay lightweight.
==================================================*/

function cqLoadScript(src, globalName){
  if(globalName && window[globalName]) return Promise.resolve(window[globalName]);
  window.__CQ_SCRIPT_PROMISES = window.__CQ_SCRIPT_PROMISES || {};
  if(window.__CQ_SCRIPT_PROMISES[src]) return window.__CQ_SCRIPT_PROMISES[src];
  window.__CQ_SCRIPT_PROMISES[src] = new Promise((resolve,reject)=>{
    const existing=document.querySelector(`script[data-cq-src="${src}"]`);
    if(existing){
      existing.addEventListener("load",()=>resolve(globalName ? window[globalName] : true));
      existing.addEventListener("error",reject);
      return;
    }
    const script=document.createElement("script");
    script.src=src;
    script.async=true;
    script.dataset.cqSrc=src;
    script.onload=()=>resolve(globalName ? window[globalName] : true);
    script.onerror=reject;
    document.head.appendChild(script);
  });
  return window.__CQ_SCRIPT_PROMISES[src];
}

function cqLoadStyle(href){
  if(document.querySelector(`link[data-cq-href="${href}"]`)) return;
  const link=document.createElement("link");
  link.rel="stylesheet";
  link.href=href;
  link.dataset.cqHref=href;
  document.head.appendChild(link);
}

function ensureCQLeaflet(){
  cqLoadStyle("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");
  return cqLoadScript("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js","L");
}

function ensureCQThree(){
  return cqLoadScript("https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js","THREE");
}

function cqMarkerIcon(){
  return window.L.divIcon({
    className:"cqPinIcon",
    html:"<span>📍</span>",
    iconSize:[34,34],
    iconAnchor:[17,30],
    popupAnchor:[0,-28]
  });
}

function cqGetMapCenter(block){
  if(Array.isArray(block.mapCenter) && block.mapCenter.length>=2) return block.mapCenter;
  const ms=Array.isArray(block.markers) ? block.markers.filter(m=>Number.isFinite(Number(m.lat))&&Number.isFinite(Number(m.lon))) : [];
  if(ms.length){
    const lat=ms.reduce((a,m)=>a+Number(m.lat),0)/ms.length;
    const lon=ms.reduce((a,m)=>a+Number(m.lon),0)/ms.length;
    return [lat,lon];
  }
  return [22.5,79.0];
}

function mountCQMap(id,block){
  if(!window.L || !block) return;
  const el=document.getElementById(id);
  if(!el || el.dataset.cqMounted) return;
  el.dataset.cqMounted="true";
  const center=cqGetMapCenter(block);
  const zoom=Number(block.zoom || 4.5);
  const map=window.L.map(el,{zoomControl:false,scrollWheelZoom:true,dragging:true,touchZoom:true}).setView(center,zoom);
  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom:19,
    attribution:"© OpenStreetMap contributors"
  }).addTo(map);

  const markers=Array.isArray(block.markers) ? block.markers : [];

  /* Optional study routes: rivers, coastlines or conceptual travel lines. */
  const routes=Array.isArray(block.routes) ? block.routes : [];
  routes.forEach((route,ri)=>{
    const pts=Array.isArray(route.points) ? route.points
      .filter(p=>Array.isArray(p)&&p.length>=2&&Number.isFinite(Number(p[0]))&&Number.isFinite(Number(p[1])))
      .map(p=>[Number(p[0]),Number(p[1])]) : [];
    if(pts.length>=2){
      window.L.polyline(pts,{color:["#6d28d9","#2563eb","#059669","#ea580c"][ri%4],weight:4,opacity:.75,dashArray:"7 7"})
        .addTo(map)
        .bindTooltip(escapeRenderHTML(route.label||"Study route"));
    }
  });

  const leafletMarkers=[];
  markers.forEach((m,i)=>{
    const lat=Number(m.lat),lon=Number(m.lon);
    if(!Number.isFinite(lat)||!Number.isFinite(lon)) return;
    const mk=window.L.marker([lat,lon],{icon:cqMarkerIcon(),title:m.label||m.name||"Place"}).addTo(map);
    const clue=m.description || m.clue || "Tap this place to study its geographical significance.";
    mk.bindPopup(`<strong>${escapeRenderHTML(m.label||m.name||"Place")}</strong><br>${escapeRenderHTML(clue)}`);
    mk.on("click",()=>cqShowMapInfo(id,m));
    leafletMarkers.push(mk);
  });

  if(leafletMarkers.length){
    const group=window.L.featureGroup(leafletMarkers);
    if(!block.mapCenter) map.fitBounds(group.getBounds().pad(0.18),{maxZoom:Math.max(zoom,5)});
  }

  window.__CQ_LEAFLET_MAPS=window.__CQ_LEAFLET_MAPS||{};
  window.__CQ_LEAFLET_MAPS[id]={map,markers:leafletMarkers,center,zoom,block};

  document.querySelectorAll(`[data-cq-map-in="${id}"]`).forEach(b=>b.onclick=()=>map.zoomIn());
  document.querySelectorAll(`[data-cq-map-out="${id}"]`).forEach(b=>b.onclick=()=>map.zoomOut());
  document.querySelectorAll(`[data-cq-map-reset="${id}"]`).forEach(b=>b.onclick=()=>map.setView(center,zoom));
  document.querySelectorAll(`[data-cq-map-locate="${id}"]`).forEach(b=>b.onclick=()=>map.setView([22.5,79],4.5));
  document.querySelectorAll(`[data-cq-marker="${id}"]`).forEach(btn=>btn.onclick=()=>{
    const i=Number(btn.dataset.cqMarkerIndex);
    const m=markers[i];
    if(!m) return;
    const target=leafletMarkers[i];
    if(target){map.setView(target.getLatLng(),Math.max(map.getZoom(),6),{animate:true});target.openPopup();}
    cqShowMapInfo(id,m);
  });
  setTimeout(()=>map.invalidateSize(),80);
}

function cqShowMapInfo(id,m){
  const el=document.getElementById(id+"-info");
  if(!el||!m) return;
  el.innerHTML=`<b>📍 ${escapeRenderHTML(m.label||m.name||"Place")}</b><br>${escapeRenderHTML(m.description||m.clue||"Study this location on the physical map of India.")}`;
}

function mountCQEarth(id,block){
  if(!window.THREE || !block) return;
  const el=document.getElementById(id);
  if(!el || el.dataset.cqMounted) return;
  el.dataset.cqMounted="true";

  const THREE=window.THREE;
  const width=Math.max(280,el.clientWidth||600);
  const height=Math.max(300,Math.min(440,width*0.78));
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(35,width/height,0.1,100);
  camera.position.set(0,0,3.15);
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
  renderer.setSize(width,height);
  el.appendChild(renderer.domElement);

  const ambient=new THREE.AmbientLight(0xffffff,1.6); scene.add(ambient);
  const light=new THREE.DirectionalLight(0xffffff,1.5); light.position.set(4,3,5); scene.add(light);

  const loader=new THREE.TextureLoader();
  const earthTexture=loader.load("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg");
  const earth=new THREE.Mesh(
    new THREE.SphereGeometry(1,64,64),
    new THREE.MeshPhongMaterial({map:earthTexture,shininess:8})
  );
  scene.add(earth);

  const atmosphere=new THREE.Mesh(
    new THREE.SphereGeometry(1.035,48,48),
    new THREE.MeshBasicMaterial({color:0x66ccff,transparent:true,opacity:0.08,side:THREE.BackSide})
  );
  scene.add(atmosphere);

  /* India marker: approximate geographic position, used as a study aid. */
  const lat=22.5,lon=79.0;
  const phi=(90-lat)*Math.PI/180;
  const theta=(lon+180)*Math.PI/180;
  const r=1.025;
  const marker=new THREE.Mesh(new THREE.SphereGeometry(0.035,16,16),new THREE.MeshBasicMaterial({color:0xff3b30}));
  marker.position.set(-r*Math.sin(phi)*Math.cos(theta),r*Math.cos(phi),r*Math.sin(phi)*Math.sin(theta));
  earth.add(marker);

  let dragging=false,lastX=0,lastY=0,rx=0,ry=0;
  el.addEventListener("pointerdown",e=>{dragging=true;lastX=e.clientX;lastY=e.clientY;el.setPointerCapture?.(e.pointerId);});
  el.addEventListener("pointermove",e=>{
    if(!dragging)return;
    const dx=e.clientX-lastX,dy=e.clientY-lastY; lastX=e.clientX;lastY=e.clientY;
    ry += dx*0.008; rx += dy*0.008; rx=Math.max(-1.25,Math.min(1.25,rx));
  });
  el.addEventListener("pointerup",()=>dragging=false);
  el.addEventListener("pointercancel",()=>dragging=false);
  el.addEventListener("wheel",e=>{
    e.preventDefault(); camera.position.z=Math.max(2.0,Math.min(5.0,camera.position.z+e.deltaY*0.002));
  },{passive:false});

  const reset=()=>{rx=0;ry=0;camera.position.z=3.15;};
  document.querySelectorAll(`[data-cq-earth-reset="${id}"]`).forEach(b=>b.onclick=reset);
  const animate=()=>{
    requestAnimationFrame(animate);
    if(!dragging) ry += 0.0018;
    earth.rotation.x=rx;earth.rotation.y=ry;
    atmosphere.rotation.x=rx;atmosphere.rotation.y=ry;
    renderer.render(scene,camera);
  };
  animate();

  const resize=()=>{
    if(!el.isConnected)return;
    const w=Math.max(280,el.clientWidth||600),h=Math.max(300,Math.min(440,w*0.78));
    camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);
  };
  window.addEventListener("resize",resize,{passive:true});
  window.__CQ_EARTH_MODELS=window.__CQ_EARTH_MODELS||{};
  window.__CQ_EARTH_MODELS[id]={scene,camera,renderer,reset};
}

function initCQInteractiveVisuals(){
  const maps=window.CQ_MAP_DATA||{};
  const earths=window.CQ_EARTH_DATA||{};
  const mapIds=Object.keys(maps),earthIds=Object.keys(earths);
  if(mapIds.length){
    ensureCQLeaflet().then(()=>mapIds.forEach(id=>mountCQMap(id,maps[id]))).catch(err=>console.warn("ConceptQizzer map loader:",err));
  }
  if(earthIds.length){
    ensureCQThree().then(()=>earthIds.forEach(id=>mountCQEarth(id,earths[id]))).catch(err=>console.warn("ConceptQizzer 3D Earth loader:",err));
  }
}

/*==================================================
  UNIVERSAL RENDERER CSS
  Self-contained so new block types work even when
  notes.css has not been updated yet.
==================================================*/

function installUniversalRendererStyles(){

  if(document.getElementById("cqUniversalRendererStyles")) return;

  const style=document.createElement("style");
  style.id="cqUniversalRendererStyles";

  style.textContent=`
    /* Automatic colourful block system */
    .cqPaletteWrap{margin:22px 0;border-radius:28px;overflow:hidden}
    .cqPaletteWrap>.cqBlock{margin:0;box-shadow:0 10px 28px rgba(30,40,90,.10)}
    .cqPaletteWrap .cqBlock{border-top:5px solid transparent}
    .cqPalettePurple .cqBlock{background:linear-gradient(135deg,#f5efff 0%,#ebe8ff 52%,#f7f4ff 100%);border-color:#7c3aed}
    .cqPaletteBlue .cqBlock{background:linear-gradient(135deg,#edf7ff 0%,#e9f0ff 52%,#f4fbff 100%);border-color:#2563eb}
    .cqPaletteGreen .cqBlock{background:linear-gradient(135deg,#edfff6 0%,#e8f8f0 52%,#f5fff9 100%);border-color:#16a34a}
    .cqPaletteOrange .cqBlock{background:linear-gradient(135deg,#fff5e9 0%,#ffeedc 52%,#fff9f1 100%);border-color:#f97316}
    .cqPalettePink .cqBlock{background:linear-gradient(135deg,#fff0f7 0%,#ffeaf3 52%,#fff8fb 100%);border-color:#db2777}
    .cqPaletteCyan .cqBlock{background:linear-gradient(135deg,#eafcff 0%,#e7f7fb 52%,#f5feff 100%);border-color:#0891b2}
    .cqPaletteYellow .cqBlock{background:linear-gradient(135deg,#fffbea 0%,#fff5cf 52%,#fffdf4 100%);border-color:#eab308}
    .cqPaletteRed .cqBlock{background:linear-gradient(135deg,#fff0f0 0%,#ffe8e8 52%,#fff7f7 100%);border-color:#dc2626}
    .cqPaletteWrap .cqBadge{box-shadow:0 4px 12px rgba(30,40,90,.08)}
    .cqPaletteWrap .cqQuestion,.cqPaletteWrap .cqQ{background:rgba(255,255,255,.82)}
    .cqPaletteWrap .cqAnswer{background:rgba(236,253,245,.92)}
    .cqPaletteWrap .cqOptions span{background:rgba(255,255,255,.78)}
    .cqPaletteWrap .cqExtraFields{display:none}
    /* Renderer metadata must never be visible to students. */
    .cqRenderMeta,.cqMetadata,.cqMetaBlock,[data-cq-render-meta="true"]{display:none!important}

    .cqBlock{margin:20px 0;padding:20px;border-radius:22px;background:#fff;box-shadow:0 8px 24px rgba(30,40,90,.08);line-height:1.7}
    .cqBlock h4{margin:0 0 12px;font-size:21px}
    .cqParagraph{font-size:17px}
    .cqHeading{background:linear-gradient(135deg,#f7f4ff,#eef7ff)}
    .cqConcept{display:flex;gap:15px;background:linear-gradient(135deg,#eef5ff,#f8f1ff)}
    .cqIcon{font-size:34px}
    .cqDefinition{border-left:6px solid #5b4bea;background:#f4f1ff}
    .cqImportant{border-left:6px solid #f59e0b;background:#fff8e8}
    .cqExample{background:linear-gradient(135deg,#f4f0ff,#eef8ff);border:1px solid #ddd5ff}
    .cqBadge{display:inline-block;padding:7px 13px;border-radius:999px;background:#eee9ff;font-weight:800;margin-bottom:10px}
    .cqQuestion{padding:14px;border-radius:16px;background:#f8f8ff;margin:10px 0}
    .cqSteps{padding:14px;background:#fff;margin:10px 0;border-radius:16px}
    .cqAnswer{padding:14px;border-radius:16px;background:#eafbf1;margin-top:10px}
    .cqPractice,.cqQuiz{background:linear-gradient(135deg,#fff8ed,#f4f7ff)}
    .cqQ{padding:15px;margin:10px 0;background:#fff;border-radius:15px}
    .cqOptions{display:grid;gap:8px;margin-top:10px}
    .cqOptions span{padding:9px 12px;border-radius:12px;background:#f3f4ff}
    .cqActivity{background:linear-gradient(135deg,#effcf7,#f0f8ff);border-left:6px solid #10b981}
    .cqObservation{background:#f4fbff;border-left:6px solid #0ea5e9}
    .cqHypothesis{background:#faf5ff;border-left:6px solid #8b5cf6}
    .cqFigure,.cqMap{text-align:center;background:#fff}
    .cqFigure img,.cqMap img{display:block;max-width:100%;height:auto;max-height:520px;object-fit:contain;border-radius:16px;margin:10px auto}
    .cqFigureMedia{margin:8px 0;padding:8px;border-radius:18px;background:rgba(99,102,241,.05)}
    .cqImageFallback{display:none;padding:18px;border-radius:14px;background:#fff7ed;color:#7c2d12;font-weight:700}
    .cqComparisonTable{background:linear-gradient(135deg,#f5f3ff,#eef7ff)}
    .cqComparison{border-collapse:separate!important;border-spacing:0;width:100%;min-width:620px;overflow:hidden;border-radius:16px}
    .cqComparison thead th{background:#e9e6ff!important;font-weight:900}
    .cqComparison td,.cqComparison th{vertical-align:top}
    .cqFormulaBankGrid{display:grid;gap:12px}
    .cqFormulaBankItem{padding:12px;border-radius:16px;background:rgba(255,255,255,.72)}
    .cqVisual{overflow:auto;max-width:100%;margin:10px 0}
    .cqCaption{font-style:italic;opacity:.8}
    .cqFormula{background:linear-gradient(135deg,#eff6ff,#f5f3ff)}
    .formulaContent{font-size:20px;font-weight:700;padding:18px;border-radius:16px;background:#fff;text-align:center;overflow-wrap:anywhere;word-break:normal;white-space:normal;max-width:100%;box-sizing:border-box;line-height:1.55}
    .cqTableScroll{overflow-x:auto}
    .cqTable table,.cqData table{border-collapse:collapse;width:100%;min-width:500px}
    .cqTable th,.cqTable td,.cqData th,.cqData td{border:1px solid #ddd;padding:10px;text-align:left}
    .cqTable th,.cqData th{background:#eee9ff;font-weight:800}
    .cqData{background:#f7fbff}
    .cqTimelineItem{display:flex;gap:14px;padding:12px 0;border-bottom:1px solid #eee}
    .cqTimelineDot,.cqProcessStep>span{min-width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#5b4bea;color:#fff;font-weight:800}
    .cqProcessStep{display:flex;gap:12px;align-items:flex-start;padding:10px 0}
    .cqMindMap{background:linear-gradient(135deg,#f8f1ff,#eef8ff)}
    .cqCode pre{overflow:auto;background:#111827;color:#fff;padding:16px;border-radius:15px}
    .cqOutput,.cqPrompt,.cqExampleMini{padding:12px;border-radius:14px;background:#f4f4f8;margin-top:10px}
    .cqAI{background:linear-gradient(135deg,#f1edff,#edf9ff);border-left:6px solid #6366f1}
    .cqDigital{background:#eef8ff;border-left:6px solid #06b6d4}
    .cqTip{background:#effbf5;border-left:6px solid #22c55e}
    .cqFact{background:#fff8e8;border-left:6px solid #f59e0b}
    .cqWarning{background:#fff1f2;border-left:6px solid #ef4444}
    .cqExam{background:#f1efff;border-left:6px solid #7c3aed}
    .cqApplication{background:#eff9ff;border-left:6px solid #0284c7}
    .cqSummary{background:#f5f5ff;border-left:6px solid #6366f1;overflow:visible;max-width:100%;box-sizing:border-box}.cqSummary p,.cqSummary{overflow-wrap:anywhere;word-break:normal;white-space:normal}
    .cqFlashcard{background:linear-gradient(135deg,#fff7ed,#f4f0ff)}
    .cqQuote{background:#f8f8ff;border-left:6px solid #6366f1;font-size:18px}
    .cqComic{
      background:linear-gradient(135deg,#f5efff 0%,#ebe8ff 55%,#f8f6ff 100%);
      border:2px solid rgba(124,58,237,.18);
      overflow:hidden;
    }
    .cqComic .cqBadge{
      background:#eee9ff;
      color:#4c1d95;
    }
    .cqComicStory{
      margin-top:14px;
      border-radius:18px;
      background:rgba(255,255,255,.82);
      overflow:hidden;
      border:1px solid rgba(124,58,237,.12);
    }
    .cqComicLine{
      padding:15px 16px;
      font-size:17px;
      line-height:1.65;
      border-bottom:1px solid rgba(124,58,237,.10);
    }
    .cqComicLine:last-child{border-bottom:0}
    .cqComicLine:nth-child(even){background:rgba(124,58,237,.045)}
    .cqComicSpeaker{
      color:#4c1d95;
      font-weight:900;
    }
    .cqComicSpeech{font-weight:500}
    .cqChecklist label{display:block;padding:9px 0}
    .cqGeneric{background:#fafafa;border:1px dashed #aaa}
    .sectionHeader{display:flex;align-items:center;gap:12px;margin-bottom:12px;padding:4px 2px}
    .sectionHeader h3{margin:0;font-size:24px}
    .flexibleSectionHeader{border-bottom:1px solid rgba(120,120,150,.16);padding-bottom:10px}
    .sectionNumber{display:none}
    .cqCompositeBlock{display:block}
    .cqExtraFields{margin-top:12px;padding-top:8px}
    .cqExtraField{margin:10px 0;padding:12px 14px;border-radius:14px;background:rgba(120,120,150,.07)}
    .cqExtraField h5,.cqAnyField h5{margin:0 0 6px;font-size:15px}
    .cqAnyField{margin:8px 0;padding:8px 10px;border-radius:10px;background:rgba(120,120,150,.05)}
    .cqAnyList{display:grid;gap:7px;margin-top:7px}
    .cqAnyListItem{padding:8px 10px;border-radius:10px;background:rgba(120,120,150,.06)}
    .cqBlock details{margin-top:10px;padding:10px;border-radius:12px;background:#f7f7fb}
    .cqInteractiveGeo{overflow:hidden}
    .cqInteractiveMap{height:360px;width:100%;border-radius:22px;overflow:hidden;border:2px solid rgba(91,75,234,.18);background:#dff3ff;z-index:1}
    .cqMapToolbar,.cqEarthToolbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:10px 0}
    .cqMapToolbar button,.cqEarthToolbar button{border:0;border-radius:12px;padding:9px 13px;font-weight:800;background:#eee9ff;cursor:pointer}
    .cqMapToolbar button:active,.cqEarthToolbar button:active{transform:scale(.97)}
    .cqMapInfo{margin-top:10px;padding:13px 15px;border-radius:15px;background:rgba(255,255,255,.84);line-height:1.55}
    .cqMapMarkerList{display:flex;gap:7px;flex-wrap:wrap;margin-top:12px}
    .cqMapMarkerList button{border:0;border-radius:999px;padding:8px 11px;background:#eef6ff;cursor:pointer;font-weight:700}
    .cqPinIcon{background:transparent;border:0}
    .cqPinIcon span{display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:#fff;box-shadow:0 4px 12px rgba(0,0,0,.22);font-size:21px}
    .cqInteractiveEarth{height:360px;width:100%;border-radius:24px;overflow:hidden;background:radial-gradient(circle at 35% 25%,#253f72,#081022 58%,#02050c 100%);touch-action:none}
    .cqInteractiveEarth canvas{display:block;width:100%;height:100%;touch-action:none}
    .cqEarthToolbar span{font-size:13px;opacity:.72}
    .cqEarthSequence{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
    .cqEarthSequence span{padding:7px 10px;border-radius:999px;background:#eef7ff;font-weight:700;font-size:13px}
    .dark .cqMapInfo,.dark .cqMapMarkerList button,.dark .cqEarthSequence span,.dark .cqMapToolbar button,.dark .cqEarthToolbar button{background:#202638;color:#f5f7ff}

    .cqBlock summary{cursor:pointer;font-weight:800}
    .dark .cqBlock{background:#171b2a;color:#f5f7ff}
    .dark .cqQuestion,.dark .cqQ,.dark .cqSteps,.dark .cqAnswer,.dark .formulaContent,.dark .cqOptions span,.dark .cqBlock details{background:#202638;color:#f5f7ff}

    /* SCIENCE CHAPTER CLEAN FLOW PATCH */
    .chapterFlowCard{width:100%;max-width:none;box-sizing:border-box;padding:0;background:transparent;border:0;box-shadow:none;}
    .chapterTopicHeader{margin:28px 0 14px;padding:0 4px 12px;border-bottom:2px solid rgba(99,102,241,.12);}
    .chapterTopicHeader:first-child{margin-top:0}
    .chapterTopicHeader h3{margin:0;font-size:clamp(24px,4vw,34px);line-height:1.25;font-weight:800;}
    .chapterFlowCard .cqGeneric{background:transparent;border:0;}
    .chapterFlowCard .cqCustomContent{border-radius:24px;}
  `;

  document.head.appendChild(style);
}

installUniversalRendererStyles();

/*==================================================
  IMPORTANT POINTS
==================================================*/

function renderImportantPoints(points){

  const safePoints = Array.isArray(points) ? points : [];

  safePoints.forEach((point,index)=>{

    const item = document.createElement("li");
    item.className = "cqImportantListItem";

    if (typeof point === "object" && point !== null) {
      item.innerHTML =
        `<strong>${escapeRenderHTML(point.title || point.heading || "Important")}</strong>` +
        (point.text || point.content ? `<div>${renderText(point.text || point.content)}</div>` : "");
    } else {
      item.textContent = String(point);
    }

    importantContainer.appendChild(item);
  });

}

/*==================================================
  KEY TERMS
==================================================*/

function renderKeyTerms(terms){

  const safeTerms = Array.isArray(terms) ? terms : [];

  safeTerms.forEach(term=>{

    const chip = document.createElement("span");

    if (typeof term === "object" && term !== null) {
      chip.textContent = String(term.term || term.title || term.word || "");
      if (term.definition) chip.title = String(term.definition);
    } else {
      chip.textContent = String(term);
    }

    termsContainer.appendChild(chip);
  });

}

/*==================================================
  PACKAGE 3E
  Navigation + Integration
==================================================*/

const backButton=
document.getElementById("backButton");

const bookmarkButton=
document.getElementById("bookmarkButton");

const previousButton=
document.getElementById("previousChapter");

const nextButton=
document.getElementById("nextChapter");

/*==============================
  BACK
==============================*/

if(backButton){

backButton.addEventListener(

"click",

()=>{

window.location.href="index.html";

});

}

/*==============================
  BOOKMARK
==============================*/

if(bookmarkButton){

bookmarkButton.addEventListener(

"click",

()=>{

bookmarkButton.innerHTML=

`

<span class="material-icons-round">

bookmark

</span>

`;

localStorage.setItem(

"cq-bookmark",

chapterKey

);

});

}

/*==============================
  PREVIOUS
==============================*/

if(previousButton){

previousButton.addEventListener(

"click",

()=>{

alert(

"Previous Chapter feature will be available in Package 4."

);

});

}

/*==============================
  NEXT
==============================*/

if(nextButton){

nextButton.addEventListener(

"click",

()=>{

alert(

"Next Chapter feature will be available in Package 4."

);

});

}

/*==============================
  PACKAGE 1 INTEGRATION
==============================*/

/*
In app.js (Dashboard → Notes button),
save the selected chapter before opening notes.html

Example:

localStorage.setItem(
"cq-current-chapter",
chapterKey
);

window.location.href="notes.html";

*/

function updateProgress(chapter){

const sections = Array.isArray(chapter && chapter.sections) ? chapter.sections : [];
const total = sections.length;

if(!total){
  progressText.textContent = "0%";
  progressFill.style.width = "0%";
  return;
}

const completed = sections.filter(section => normalizeUnitBlocks(section).length > 0).length;
const percent = Math.round((completed / total) * 100);

progressText.textContent = percent + "%";
progressFill.style.width = percent + "%";

}

const themeBtn=document.getElementById("themeToggle");

if(themeBtn){

if(localStorage.getItem("cq-theme")==="dark"){

document.body.classList.add("dark");
themeBtn.textContent="☀️";

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("cq-theme","dark");
themeBtn.textContent="☀️";

}else{

localStorage.setItem("cq-theme","light");
themeBtn.textContent="🌙";

}

});  

}

/*==================================================
  PACKAGE 12
  AI DOUBT SOLVER — FINAL
  Chapter-aware browser solver
==================================================*/


function initPackage12AI() {

  const doubtQuestion = document.getElementById("doubtQuestion");
  const askDoubtBtn = document.getElementById("askDoubtBtn");
  const doubtAnswer = document.getElementById("doubtAnswer");

  if (!doubtQuestion || !askDoubtBtn || !doubtAnswer) return;
  if (askDoubtBtn.dataset.aiBound === "true") return;
  askDoubtBtn.dataset.aiBound = "true";

  const escapeHTML = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  const clean = value => String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();

  const lower = value => clean(value).toLowerCase();

  function showAnswer(html) {
    doubtAnswer.style.display = "block";
    doubtAnswer.style.visibility = "visible";
    doubtAnswer.style.opacity = "1";
    doubtAnswer.innerHTML = `<div class="answerContent">${html}</div>`;
    try { localStorage.setItem("cq-last-ai-answer", html); } catch (e) {}
  }

  function getNumbers(text) {
    const matches = String(text).match(/[-+]?(?:\d+(?:\.\d+)?|\.\d+)/g);
    return matches ? matches.map(Number).filter(Number.isFinite) : [];
  }

  function formatNumber(n) {
    if (!Number.isFinite(n)) return String(n);
    return Number(n.toFixed(8)).toString();
  }

  /* --------------------------------------------------
     MATH ENGINE
     Handles common Class 6–10 school-math problems
     without eval() or unsafe code execution.
  -------------------------------------------------- */

  function wordToNumber(text) {
    const map = {
      zero:0, one:1, two:2, three:3, four:4, five:5, six:6,
      seven:7, eight:8, nine:9, ten:10, eleven:11, twelve:12,
      thirteen:13, fourteen:14, fifteen:15, sixteen:16, seventeen:17,
      eighteen:18, nineteen:19, twenty:20, thirty:30, forty:40,
      fifty:50, sixty:60, seventy:70, eighty:80, ninety:90,
      hundred:100, thousand:1000
    };
    let t = lower(text).replace(/-/g, " ");
    for (const [word, value] of Object.entries(map)) {
      t = t.replace(new RegExp("\\b" + word + "\\b", "g"), String(value));
    }
    return t;
  }

  function solveArithmetic(text) {
    let q = wordToNumber(text);
    q = q.replace(/[?=]/g, " ");
    q = q.replace(/(\d)\s*[x×]\s*(\d)/g, "$1*$2");
    q = q.replace(/\bplus\b|\badd\b|\badded to\b/g, "+");
    q = q.replace(/\bminus\b|\bsubtract\b|\bless\b/g, "-");
    q = q.replace(/\bmultiplied by\b|\btimes\b/g, "*");
    q = q.replace(/\bdivided by\b|\bdivide by\b/g, "/");
    q = q.replace(/\s+/g, " ").trim();

    const match = q.match(/(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)/);
    if (!match) return null;

    const a = Number(match[1]), op = match[2], b = Number(match[3]);
    let result;
    if (op === "+") result = a + b;
    if (op === "-") result = a - b;
    if (op === "*") result = a * b;
    if (op === "/") {
      if (b === 0) return `<h2>⚠️ Cannot divide by zero</h2>`;
      result = a / b;
    }

    return `
      <div class="answerBox">
        <h3>🧮 Answer</h3>
        <p style="font-size:30px"><strong>${formatNumber(result)}</strong></p>
      </div>
      <div class="explanationBox">
        <h3>📝 Working</h3>
        <p>${formatNumber(a)} ${escapeHTML(op)} ${formatNumber(b)} = <strong>${formatNumber(result)}</strong></p>
      </div>`;
  }

  function solvePercentage(text) {
    const q = lower(text);
    const nums = getNumbers(q);
    if (nums.length < 2) return null;

    let result = null;
    let explanation = "";

    if (/what is|find|calculate|of/.test(q) && /%|percent|percentage/.test(q)) {
      const percent = nums[0];
      const value = nums[1];
      result = value * percent / 100;
      explanation = `${percent}% of ${value} = (${percent}/100) × ${value}`;
    }

    const discount = q.match(/(?:price|marked price|mrp)[^0-9]*([0-9.]+).*?(?:discount)[^0-9]*([0-9.]+)\s*%/);
    if (discount) {
      const price = Number(discount[1]);
      const pct = Number(discount[2]);
      const saved = price * pct / 100;
      result = price - saved;
      explanation = `Discount = ${pct}% of ${price} = ${saved}. Selling price = ${price} − ${saved}.`;
    }

    if (result === null) return null;

    return `
      <div class="answerBox">
        <h3>📊 Answer</h3>
        <p style="font-size:30px"><strong>${formatNumber(result)}</strong></p>
      </div>
      <div class="explanationBox">
        <h3>📝 Step-by-step</h3>
        <p>${escapeHTML(explanation)}</p>
      </div>`;
  }

  function solveAverage(text) {
    if (!/average|mean/.test(lower(text))) return null;
    const nums = getNumbers(text);
    if (nums.length < 2) return null;
    const sum = nums.reduce((a,b) => a+b, 0);
    const avg = sum / nums.length;
    return `
      <div class="answerBox">
        <h3>📊 Mean / Average</h3>
        <p style="font-size:30px"><strong>${formatNumber(avg)}</strong></p>
      </div>
      <p>Sum = ${nums.map(formatNumber).join(" + ")} = ${formatNumber(sum)}</p>
      <p>Average = ${formatNumber(sum)} ÷ ${nums.length} = <strong>${formatNumber(avg)}</strong></p>`;
  }

  function solveSimpleInterest(text) {
    if (!/simple interest|si\b|rate.*interest|interest.*rate/.test(lower(text))) return null;
    const nums = getNumbers(text);
    if (nums.length < 3) return null;
    const [p, r, t] = nums;
    const si = p * r * t / 100;
    const amount = p + si;
    return `
      <div class="answerBox">
        <h3>💰 Simple Interest</h3>
        <p>SI = <strong>${formatNumber(si)}</strong></p>
        <p>Amount = <strong>${formatNumber(amount)}</strong></p>
      </div>
      <p>Formula: SI = (P × R × T) / 100</p>
      <p>= (${formatNumber(p)} × ${formatNumber(r)} × ${formatNumber(t)}) / 100</p>`;
  }

  function solveProfitLoss(text) {
    const q = lower(text);
    if (!/profit|loss|selling price|cost price/.test(q)) return null;
    const nums = getNumbers(q);
    if (nums.length < 2) return null;

    let cp, sp;
    const cpMatch = q.match(/(?:cost price|cp)[^0-9]*([0-9.]+)/);
    const spMatch = q.match(/(?:selling price|sp)[^0-9]*([0-9.]+)/);
    if (cpMatch && spMatch) {
      cp = Number(cpMatch[1]); sp = Number(spMatch[1]);
    } else {
      cp = nums[0]; sp = nums[1];
    }

    const diff = sp - cp;
    const pct = cp === 0 ? NaN : Math.abs(diff) * 100 / cp;
    const type = diff >= 0 ? "Profit" : "Loss";

    return `
      <div class="answerBox">
        <h3>💵 ${type}</h3>
        <p>${type} = <strong>${formatNumber(Math.abs(diff))}</strong></p>
        <p>${type}% = <strong>${formatNumber(pct)}%</strong></p>
      </div>
      <p>${type} = SP − CP = ${formatNumber(sp)} − ${formatNumber(cp)}</p>`;
  }

  function solveSpeedDistance(text) {
    const q = lower(text);
    if (!/speed|distance|time/.test(q)) return null;
    const nums = getNumbers(q);
    if (nums.length < 2) return null;

    let result = null, label = "", formula = "";

    if (/speed/.test(q) && /distance/.test(q) && /time/.test(q)) {
      const distance = nums[0], time = nums[1];
      result = distance / time;
      label = "Speed";
      formula = "Speed = Distance ÷ Time";
    } else if (/distance/.test(q) && /speed/.test(q)) {
      result = nums[0] * nums[1];
      label = "Distance";
      formula = "Distance = Speed × Time";
    } else if (/distance/.test(q) && /time/.test(q)) {
      result = nums[0] / nums[1];
      label = "Speed";
      formula = "Speed = Distance ÷ Time";
    } else return null;

    return `
      <div class="answerBox">
        <h3>🚗 ${label}</h3>
        <p style="font-size:30px"><strong>${formatNumber(result)}</strong></p>
      </div>
      <p>Formula: ${formula}</p>`;
  }

  function solveGeometry(text) {
    const q = lower(text);
    const nums = getNumbers(q);
    if (!nums.length) return null;

    if (/area.*rectangle|rectangle.*area/.test(q) && nums.length >= 2) {
      const a = nums[0] * nums[1];
      return `<div class="answerBox"><h3>▣ Rectangle Area</h3><p style="font-size:30px"><strong>${formatNumber(a)}</strong></p></div><p>Area = length × breadth = ${nums[0]} × ${nums[1]}</p>`;
    }

    if (/perimeter.*rectangle|rectangle.*perimeter/.test(q) && nums.length >= 2) {
      const p = 2 * (nums[0] + nums[1]);
      return `<div class="answerBox"><h3>▣ Rectangle Perimeter</h3><p style="font-size:30px"><strong>${formatNumber(p)}</strong></p></div><p>Perimeter = 2(l + b)</p>`;
    }

    if (/area.*triangle|triangle.*area/.test(q) && nums.length >= 2) {
      const a = 0.5 * nums[0] * nums[1];
      return `<div class="answerBox"><h3>△ Triangle Area</h3><p style="font-size:30px"><strong>${formatNumber(a)}</strong></p></div><p>Area = ½ × base × height</p>`;
    }

    if (/area.*circle|circle.*area/.test(q) && nums.length >= 1) {
      const a = Math.PI * nums[0] * nums[0];
      return `<div class="answerBox"><h3>⭕ Circle Area</h3><p style="font-size:30px"><strong>${formatNumber(a)}</strong></p></div><p>Area = πr² (using π ≈ 3.14159265)</p>`;
    }

    if (/pythagoras|pythagorean|right triangle/.test(q) && nums.length >= 2) {
      const c = Math.sqrt(nums[0] ** 2 + nums[1] ** 2);
      return `<div class="answerBox"><h3>📐 Pythagorean Theorem</h3><p>Hypotenuse = <strong>${formatNumber(c)}</strong></p></div><p>c² = a² + b²</p>`;
    }

    return null;
  }

  function solveLinearEquation(text) {
    const q = lower(text).replace(/,/g, "");
    const m = q.match(/(-?\d+(?:\.\d+)?)\s*x\s*([+-])\s*(\d+(?:\.\d+)?)\s*=\s*(-?\d+(?:\.\d+)?)/);
    if (!m) return null;

    const a = Number(m[1]);
    const sign = m[2] === "+" ? 1 : -1;
    const b = sign * Number(m[3]);
    const c = Number(m[4]);

    if (a === 0) return null;
    const x = (c - b) / a;

    return `
      <div class="answerBox">
        <h3>✏️ Equation Solved</h3>
        <p style="font-size:30px"><strong>x = ${formatNumber(x)}</strong></p>
      </div>
      <div class="explanationBox">
        <h3>📝 Steps</h3>
        <p>${escapeHTML(m[0])}</p>
        <p>${formatNumber(a)}x = ${formatNumber(c - b)}</p>
        <p>x = ${formatNumber(c - b)} ÷ ${formatNumber(a)} = <strong>${formatNumber(x)}</strong></p>
      </div>`;
  }

  function solveNumberPattern(text) {
    const numbers = getNumbers(text);
    if (numbers.length < 2) return null;

    const differences = [];
    for (let i = 1; i < numbers.length; i++) differences.push(numbers[i] - numbers[i-1]);

    if (differences.length && differences.every(d => Math.abs(d - differences[0]) < 1e-9)) {
      const d = differences[0];
      const next = numbers[numbers.length - 1] + d;
      return `
        <div class="answerBox">
          <h3>🔢 Pattern Solved</h3>
          <p>${numbers.map(formatNumber).join(" → ")} → <strong>${formatNumber(next)}</strong></p>
        </div>
        <p>Rule: ${d >= 0 ? "add" : "subtract"} ${formatNumber(Math.abs(d))} each time.</p>`;
    }

    if (!numbers.includes(0)) {
      const ratios = [];
      for (let i = 1; i < numbers.length; i++) ratios.push(numbers[i] / numbers[i-1]);
      if (ratios.length && ratios.every(r => Math.abs(r - ratios[0]) < 1e-9)) {
        const r = ratios[0];
        const next = numbers[numbers.length - 1] * r;
        return `
          <div class="answerBox">
            <h3>🔢 Pattern Solved</h3>
            <p>Next number = <strong>${formatNumber(next)}</strong></p>
          </div>
          <p>Rule: multiply by ${formatNumber(r)} each time.</p>`;
      }
    }

    return null;
  }

  function mathAnswer(question) {
    const q = lower(question);

    return (
      solveLinearEquation(question) ||
      solvePercentage(question) ||
      solveAverage(question) ||
      solveSimpleInterest(question) ||
      solveProfitLoss(question) ||
      solveSpeedDistance(question) ||
      solveGeometry(question) ||
      solveNumberPattern(question) ||
      solveArithmetic(question)
    );
  }

  /* --------------------------------------------------
     KNOWLEDGE ENGINE
     Uses the actual chapter registry + chapter files.
     This lets the chatbot search the complete project
     knowledge base instead of only the current chapter.
  -------------------------------------------------- */

  let knowledgeCache = null;
  let knowledgePromise = null;

  function sourceToObject(source) {
    let converted = String(source);

    converted = converted.replace(
      /(^|\n)\s*(const|let|var)\s+ChapterData\s*=/,
      "$1window.__CQ_KNOWLEDGE_CHAPTER ="
    );

    converted = converted.replace(
      /(^|\n)\s*(const|let|var)\s+chapterData\s*=/,
      "$1window.__CQ_KNOWLEDGE_CHAPTER ="
    );

    converted = converted.replace(
      /window\.ChapterData\s*=/,
      "window.__CQ_KNOWLEDGE_CHAPTER ="
    );

    if (!/window\.__CQ_KNOWLEDGE_CHAPTER\s*=/.test(converted)) return null;

    try {
      window.__CQ_KNOWLEDGE_CHAPTER = null;
      new Function("window", converted)(window);
      const value = window.__CQ_KNOWLEDGE_CHAPTER;
      return value && Array.isArray(value.sections) ? value : null;
    } catch (e) {
      console.warn("Knowledge chapter skipped:", e);
      return null;
    }
  }

  async function buildKnowledgeBase() {
    if (knowledgeCache) return knowledgeCache;
    if (knowledgePromise) return knowledgePromise;

    knowledgePromise = (async () => {
      try {
        if (!Array.isArray(window.ChapterRegistry)) {
          if (typeof loadExternalScript === "function") {
            await loadExternalScript("js/chapter-registry.js");
          }
        }

        const registry = Array.isArray(window.ChapterRegistry)
          ? window.ChapterRegistry.filter(x => x && x.enabled !== false && x.file)
          : [];

        const results = [];

        for (const entry of registry) {
          try {
            const response = await fetch(entry.file, { cache: "no-store" });
            if (!response.ok) continue;
            const source = await response.text();
            const chapter = sourceToObject(source);
            if (!chapter) continue;

            results.push({
              id: entry.id || chapter.id || "",
              title: entry.title || chapter.title || "",
              subject: entry.subject || "",
              className: entry.class || entry.className || "",
              chapter
            });
          } catch (e) {
            console.warn("Could not index:", entry.file, e);
          }
        }

        knowledgeCache = results;
        return results;
      } finally {
        knowledgePromise = null;
      }
    })();

    return knowledgePromise;
  }

  function chapterText(chapter) {
    const parts = [];
    if (chapter.title) parts.push(chapter.title);
    if (chapter.description) parts.push(chapter.description);
    if (chapter.summary) parts.push(chapter.summary);

    (chapter.sections || []).forEach(section => {
      if (section.title) parts.push(section.title);
      if (section.content) parts.push(section.content);
      (section.blocks || []).forEach(block => {
        if (block.title) parts.push(block.title);
        if (block.text) parts.push(block.text);
      });
    });

    (Array.isArray(chapter.importantPoints) ? chapter.importantPoints : []).forEach(x => parts.push(typeof x === "object" ? (x.text || x.content || x.title || "") : x));
    (Array.isArray(chapter.keyTerms) ? chapter.keyTerms : []).forEach(x => parts.push(typeof x === "object" ? (x.definition || x.term || x.title || "") : x));

    return clean(parts.join(" "));
  }

  function makeTokens(question) {
    return lower(question)
      .replace(/[^a-z0-9]+/g, " ")
      .split(/\s+/)
      .filter(w => w.length >= 3 && ![
        "what","when","where","which","who","whom","why","how",
        "does","do","did","can","could","would","should","the",
        "this","that","about","explain","tell","give","please",
        "find","calculate","solve","answer","class","chapter"
      ].includes(w));
  }

  function scoreText(tokens, text) {
    const source = lower(text);
    let score = 0;
    tokens.forEach(token => {
      if (source.includes(token)) score += token.length >= 7 ? 3 : 1;
    });
    return score;
  }

  function knowledgeAnswer(question, knowledge) {
    const tokens = makeTokens(question);
    if (!tokens.length || !knowledge.length) return null;

    const candidates = [];

    knowledge.forEach(item => {
      (item.chapter.sections || []).forEach(section => {
        const searchable = [
          item.title,
          item.subject,
          item.className,
          section.title || "",
          section.content || "",
          ...(Array.isArray(section.blocks) ? section.blocks : []).flatMap(b => [b.title || "", b.text || b.content || b.description || ""])
        ].join(" ");

        const score = scoreText(tokens, searchable);
        if (score > 0) {
          candidates.push({ item, section, score });
        }
      });
    });

    candidates.sort((a,b) => b.score - a.score);

    const best = candidates[0];
    if (!best || best.score < 2) return null;

    const blocks = (best.section.blocks || []).slice(0, 4);

    return `
      <div class="answerBox">
        <h3>📚 ${escapeHTML(best.item.title || "Relevant Chapter")}</h3>
        ${best.item.className ? `<p><strong>Class:</strong> ${escapeHTML(best.item.className)}</p>` : ""}
        ${best.item.subject ? `<p><strong>Subject:</strong> ${escapeHTML(best.item.subject)}</p>` : ""}
      </div>
      <div class="explanationBox">
        <h3>💡 ${escapeHTML(best.section.title || "Explanation")}</h3>
        ${
          blocks.length
          ? blocks.map(b => `
              <div style="margin:12px 0">
                <strong>${escapeHTML(b.title || b.type || "Concept")}</strong>
                <p>${escapeHTML(b.text || "")}</p>
              </div>
            `).join("")
          : `<p>${escapeHTML(best.section.content || "")}</p>`
        }
      </div>
      <div class="tipBox">
        <h3>🧠 Study Tip</h3>
        <p>This answer is taken from the project's indexed Class 6–10 learning content.</p>
      </div>`;
  }

  function currentChapterAnswer(question) {
    if (!window.CQ_ACTIVE_CHAPTER) return null;
    return knowledgeAnswer(question, [{
      title: window.CQ_ACTIVE_CHAPTER.title,
      subject: "",
      className: "",
      chapter: window.CQ_ACTIVE_CHAPTER
    }]);
  }

  async function buildAnswer(question) {
    const q = clean(question);

    if (!q) {
      return `<h2>⚠️ Ask me something</h2><p>Type a maths problem, science concept, definition, word problem, or question from any subject.</p>`;
    }

    const math = mathAnswer(q);
    if (math) return math;

    const current = currentChapterAnswer(q);
    if (current) return current;

    const knowledge = await buildKnowledgeBase();
    const allSubjects = knowledgeAnswer(q, knowledge);
    if (allSubjects) return allSubjects;

    return `
      <div style="font-size:50px">🤔</div>
      <h2>I couldn't find a reliable answer yet.</h2>
      <p>I can solve many Class 6–10 school-math problems and search the project's indexed chapter content across subjects.</p>
      <div class="exampleBox">
        <h3>Try asking</h3>
        <p>• Solve: 3x + 5 = 20</p>
        <p>• What is 25% of 240?</p>
        <p>• Explain photosynthesis.</p>
        <p>• Why does a rainbow form?</p>
        <p>• What is democracy?</p>
        <p>• Explain the main idea of this chapter.</p>
      </div>`;
  }

  askDoubtBtn.addEventListener("click", async function(event) {
    event.preventDefault();

    const question = doubtQuestion.value.trim();

    if (!question) {
      showAnswer(`<h2>⚠️ Please type a question</h2><p>Ask me anything from your Class 6–10 learning content.</p>`);
      return;
    }

    askDoubtBtn.disabled = true;
    askDoubtBtn.innerHTML = "⏳ Thinking...";

    showAnswer(`
      <div style="font-size:50px">🤖</div>
      <h2>Thinking...</h2>
      <p>Checking maths, the current chapter, and the complete indexed syllabus.</p>
    `);

    try {
      const answer = await buildAnswer(question);
      showAnswer(answer);
    } catch (error) {
      console.error("Concept Quizzer AI Engine:", error);
      showAnswer(`
        <div style="font-size:50px">⚠️</div>
        <h2>Something went wrong</h2>
        <p>The question could not be processed. Please try again.</p>
      `);
    } finally {
      askDoubtBtn.disabled = false;
      askDoubtBtn.innerHTML = "🤖 Ask AI";
    }
  });

  try {
    const savedAnswer = localStorage.getItem("cq-last-ai-answer");
    if (savedAnswer) {
      doubtAnswer.style.display = "block";
      doubtAnswer.innerHTML = `<div class="answerContent">${savedAnswer}</div>`;
    }
  } catch (e) {}
}

document.addEventListener("DOMContentLoaded", initPackage12AI);
document.addEventListener("cq-ai-ready", initPackage12AI);

/*==================================================
  UNIVERSAL READER + AI UI
==================================================*/
document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector(".notesContainer");
  if (!main) return;

  if (!document.getElementById("chapterReader")) {
    const reader = document.createElement("section");
    reader.id = "chapterReader";
    reader.className = "readerCard";
    reader.innerHTML = `
      <h2>📖 Chapter Reader</h2>
      <p id="readerStatus">Listen to the chapter using your device voice.</p>
      <div class="readerControls">
        <button type="button" id="readerPlay">▶️ Read</button>
        <button type="button" id="readerPause">⏸️ Pause</button>
        <button type="button" id="readerStop">⏹️ Stop</button>
      </div>
    `;

    const searchBox = document.querySelector(".searchBox");
    if (searchBox) searchBox.insertAdjacentElement("afterend", reader);
    else main.prepend(reader);

    const getText = () => [
      "chapterTitle",
      "notesDescription",
      "notesContent",
      "importantPoints",
      "chapterSummary"
    ].map(id => {
      const el = document.getElementById(id);
      return el ? el.innerText : "";
    }).join(". ").trim();

    const status = document.getElementById("readerStatus");
    const playButton = document.getElementById("readerPlay");
    const pauseButton = document.getElementById("readerPause");
    const stopButton = document.getElementById("readerStop");

    let readerChunks = [];
    let readerIndex = 0;
    let readerStopped = false;

    function splitReaderText(text) {
      const clean = String(text || "").replace(/\s+/g, " ").trim();
      if (!clean) return [];

      const sentences = clean.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [clean];
      const chunks = [];
      let current = "";

      sentences.forEach(sentence => {
        const part = sentence.trim();
        if (!part) return;

        if ((current + " " + part).trim().length > 180) {
          if (current) chunks.push(current.trim());
          current = part;
        } else {
          current = (current + " " + part).trim();
        }
      });

      if (current) chunks.push(current.trim());
      return chunks;
    }

    function speakNextReaderChunk() {
      if (readerStopped || readerIndex >= readerChunks.length) {
        if (!readerStopped) status.textContent = "✅ Reading finished.";
        return;
      }

      const utterance = new SpeechSynthesisUtterance(readerChunks[readerIndex]);
      utterance.rate = 0.9;
      utterance.pitch = 1;

      utterance.onstart = () => {
        status.textContent =
          "🔊 Reading chapter... " +
          (readerIndex + 1) + "/" + readerChunks.length;
      };

      utterance.onend = () => {
        if (readerStopped) return;
        readerIndex++;
        setTimeout(speakNextReaderChunk, 60);
      };

      utterance.onerror = () => {
        if (!readerStopped) {
          status.textContent = "⚠️ Voice reading stopped. Tap Read to try again.";
        }
      };

      window.speechSynthesis.speak(utterance);
    }

    playButton.onclick = () => {
      if (!("speechSynthesis" in window)) {
        status.textContent = "Voice reading is not supported by this browser.";
        return;
      }

      const content = getText();

      if (!content) {
        status.textContent = "Chapter is still loading.";
        return;
      }

      window.speechSynthesis.cancel();
      readerStopped = false;
      readerChunks = splitReaderText(content);
      readerIndex = 0;

      if (!readerChunks.length) {
        status.textContent = "Chapter is still loading.";
        return;
      }

      speakNextReaderChunk();
    };

    pauseButton.onclick = () => {
      if ("speechSynthesis" in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        status.textContent = "⏸️ Reading paused.";
      }
    };

    stopButton.onclick = () => {
      if ("speechSynthesis" in window) {
        readerStopped = true;
        window.speechSynthesis.cancel();
        status.textContent = "⏹️ Reading stopped.";
      }
    };

  }

  if (!document.getElementById("doubtQuestion")) {
    const ai = document.createElement("section");
    ai.id = "aiDoubtSolver";
    ai.className = "aiCard";
    ai.innerHTML = `
      <h2>🤖 AI Doubt Solver</h2>
      <p>Ask a question about the current chapter.</p>
      <textarea id="doubtQuestion" rows="3"
        placeholder="Example: What is the main concept of this chapter?"></textarea>
      <button type="button" id="askDoubtBtn">🤖 Ask AI</button>
      <div id="doubtAnswer" class="answerBox" style="display:none;"></div>
    `;

    const summary = document.querySelector(".summaryCard");
    const nav = document.querySelector(".navigationButtons");

    if (summary) summary.insertAdjacentElement("afterend", ai);
    else if (nav) nav.insertAdjacentElement("beforebegin", ai);
    else main.appendChild(ai);

    /* Package 12 owns the AI button logic.
       Trigger it after the dynamic UI has been inserted. */
    document.dispatchEvent(new Event("cq-ai-ready"));
  }
});


/* ================================================================
   NON-DESTRUCTIVE REAL-IMAGE COMPATIBILITY ADDITION
   The complete previous Notes.js above is preserved. This addition
   only maps extra image aliases to the existing embedded renderer.
================================================================ */
(function(){
  try{
    const __cqPreviousRenderUniversalBlock = window.renderUniversalBlock || renderUniversalBlock;
    window.renderUniversalBlock = function(block,index){
      if(block && typeof block==='object' && !Array.isArray(block)){
        const t=String(block.type||block.kind||'').toLowerCase().trim();
        if(['realimage','real-image','wikimediaimage','commonsimage','mediaimage','photoimage'].includes(t)){
          return __cqPreviousRenderUniversalBlock(Object.assign({},block,{type:'embeddedImage',src:block.src||block.url||block.image||''}),index);
        }
      }
      return __cqPreviousRenderUniversalBlock(block,index);
    };
    renderUniversalBlock=window.renderUniversalBlock;
  }catch(e){ console.warn('Real-image compatibility addition failed:',e); }
})();
