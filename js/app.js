/*==================================================
  Concept Quizzer — Main Navigation
  Keeps the normal Class → Subject → Chapter flow separate
  Keeps the normal Class → Subject → Chapter flow.
==================================================*/
"use strict";

const App = {
  currentClass: null,
  currentSubject: null,
  currentChapter: null
};

function byId(id){ return document.getElementById(id); }
function escapeHTML(value){
  return String(value ?? "")
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}

const preloader=byId("preloader");
const classScreen=byId("classScreen");
const subjectScreen=byId("subjectScreen");
const chapterScreen=byId("chapterScreen");
const dashboardScreen=byId("dashboardScreen");
const subjectGrid=byId("subjectGrid");
const chapterGrid=byId("chapterGrid");
const selectedClassTitle=byId("selectedClassTitle");
const selectedSubjectTitle=byId("selectedSubjectTitle");
const chapterTitle=byId("chapterTitle");
const chapterSubtitle=byId("chapterSubtitle");
const searchInput=byId("searchInput");

function getData(){
  try { if(typeof ConceptQuizzerData!=="undefined") return ConceptQuizzerData; } catch(e){}
  return window.ConceptQuizzerData || null;
}
function getClasses(){
  const source=getData()?.classes;
  if(!source) return [];
  if(Array.isArray(source)) return source;
  return Object.keys(source).map(k=>{
    const item=source[k]; if(!item) return null;
    if(item.id==null) item.id=Number(k); return item;
  }).filter(Boolean);
}
function getClassById(id){ return getClasses().find(x=>Number(x.id)===Number(id)) || null; }
function getSubjects(cls){
  if(!cls?.subjects) return [];
  if(Array.isArray(cls.subjects)) return cls.subjects.map((data,i)=>({key:data.id||String(i),data}));
  return Object.keys(cls.subjects).map(key=>({key,data:cls.subjects[key]}));
}

function scrollTop(){ window.scrollTo(0,0); }
function hideLoader(){
  if(!preloader) return;
  preloader.style.opacity="0"; preloader.style.visibility="hidden";
  setTimeout(()=>preloader?.remove(),500);
}

function hideAllScreens(){
  [classScreen,subjectScreen,chapterScreen,dashboardScreen]
    .forEach(x=>x?.classList.add("hidden"));
}
function showHome(){
  hideAllScreens();
  classScreen?.classList.remove("hidden");
  scrollTop();
}
function setScreen(screen){
  hideAllScreens();
  if(screen) screen.classList.remove("hidden");
  scrollTop();
}

function registerClassCards(){
  document.querySelectorAll(".classCard").forEach(card=>{
    if(card.dataset.cqBound==="true") return;
    card.dataset.cqBound="true";
    card.addEventListener("click",e=>{
      e.preventDefault();
      const selected=getClassById(card.dataset.class);
      if(!selected) return;
      document.querySelectorAll(".classCard").forEach(x=>x.classList.remove("active"));
      card.classList.add("active");
      App.currentClass=selected; App.currentSubject=null; App.currentChapter=null;
      localStorage.setItem("cq-current-class",String(selected.id));
      loadSubjects();
    });
  });
}
function loadSubjects(){
  if(!App.currentClass||!subjectGrid) return;
  selectedClassTitle.textContent=App.currentClass.name||(`Class ${App.currentClass.id}`);
  subjectGrid.innerHTML="";
  getSubjects(App.currentClass).forEach(entry=>{
    const s=entry.data; if(!s) return;
    const card=document.createElement("button"); card.type="button"; card.className="subjectCard";
    const count=Array.isArray(s.chapters)?s.chapters.length:0;
    card.innerHTML=`<div class="subjectIcon">${s.icon||"📚"}</div><h3>${escapeHTML(s.name||entry.key)}</h3><p>${count} Chapters</p>`;
    card.addEventListener("click",()=>{
      App.currentSubject=s; App.currentChapter=null;
      localStorage.setItem("cq-current-subject",String(s.id||s.name||entry.key));
      loadChapters();
    });
    subjectGrid.appendChild(card);
  });
  setScreen(subjectScreen);
}
function loadChapters(){
  if(!App.currentSubject||!chapterGrid) return;
  selectedSubjectTitle.textContent=App.currentSubject.name||"Chapters";
  chapterGrid.innerHTML="";
  (Array.isArray(App.currentSubject.chapters)?App.currentSubject.chapters:[]).forEach((chapter,index)=>{
    const name=typeof chapter==="string"?chapter:(chapter?.title||chapter?.name||"Untitled Chapter");
    const card=document.createElement("button"); card.type="button"; card.className="chapterCard";
    card.innerHTML=`<div class="chapterNumber">Chapter ${index+1}</div><div class="chapterContent"><h3>${escapeHTML(name)}</h3><p>Open Chapter</p></div>`;
    card.addEventListener("click",()=>{
      App.currentChapter=name;
      localStorage.setItem("cq-current-chapter",makeChapterKeyFor(App.currentClass,App.currentSubject,name));
      openDashboard();
    });
    chapterGrid.appendChild(card);
  });
  setScreen(chapterScreen);
}
function makeChapterKeyFor(cls,sub,chapter){
  const clean=String(chapter||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
  const sid=sub?.id||sub?.name||"subject";
  return `${cls?.id||""}-${String(sid).toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${clean}`;
}
function makeChapterKey(){ return makeChapterKeyFor(App.currentClass,App.currentSubject,App.currentChapter); }

function openDashboard(){
  if(!App.currentClass||!App.currentSubject||!App.currentChapter) return;
  chapterTitle.textContent=App.currentChapter;
  chapterSubtitle.textContent=`${App.currentClass.name||`Class ${App.currentClass.id}`} • ${App.currentSubject.name||"Subject"}`;
  registerDashboardCards();
  setScreen(dashboardScreen);
}

function registerNavigation(){
  byId("backToClasses")?.addEventListener("click",()=>setScreen(classScreen));
  byId("backToSubjects")?.addEventListener("click",()=>setScreen(subjectScreen));
  byId("backToChapters")?.addEventListener("click",()=>setScreen(chapterScreen));
}
function registerTheme(){
  const b=byId("themeButton"); if(!b||b.dataset.cqBound==="true") return;
  b.dataset.cqBound="true";
  if(localStorage.getItem("cq-theme")==="dark") document.body.classList.add("dark");
  b.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    localStorage.setItem("cq-theme",document.body.classList.contains("dark")?"dark":"light");
  });
}
function registerSearch(){
  if(!searchInput||searchInput.dataset.cqBound==="true") return;
  searchInput.dataset.cqBound="true";
  searchInput.addEventListener("input",function(){
    const k=this.value.toLowerCase().trim();
    document.querySelectorAll("#subjectGrid .subjectCard").forEach(c=>c.style.display=c.innerText.toLowerCase().includes(k)?"":"none");
  });
}

function scienceChaptersForClass(classId){
  const cls=getClassById(classId); if(!cls) return [];
  const science=getSubjects(cls).find(e=>String(e.key||e.data?.id||e.data?.name||"").toLowerCase()==="science");
  return science?.data&&Array.isArray(science.data.chapters)?science.data.chapters:[];
}
function registerDashboardCards(){
  const notesCard=byId("notesCard"), quizCard=byId("quizCard");
  const isScience=String(App.currentSubject?.id||App.currentSubject?.name||"").toLowerCase()==="science";
  [notesCard,quizCard].forEach(card=>card?.classList.remove("dashboardHidden"));

  if(notesCard&&!notesCard.dataset.cqBound){
    notesCard.dataset.cqBound="true";
    notesCard.addEventListener("click",()=>{
      localStorage.setItem("cq-current-chapter",makeChapterKey());
      if(isScience&&Number(App.currentClass?.id)===6){
        const idx=(App.currentSubject?.chapters||[]).findIndex(c=>(typeof c==="string"?c:c?.title||c?.name)===App.currentChapter);
        if(idx===0){ location.href="js/chapters/science/class6/the-wonderful-world-of-science.html?tab=notes"; return; }
      }
      location.href="notes.html";
    });
  }
  if(quizCard&&!quizCard.dataset.cqBound){
    quizCard.dataset.cqBound="true";
    quizCard.addEventListener("click",()=>{
      localStorage.setItem("cq-current-chapter",makeChapterKey());
      const idx=(App.currentSubject?.chapters||[]).findIndex(c=>(typeof c==="string"?c:c?.title||c?.name)===App.currentChapter);
      if(isScience&&Number(App.currentClass?.id)===6&&idx===0){
        location.href="js/chapters/science/class6/the-wonderful-world-of-science.html?tab=quiz";
        return;
      }
      location.href="quiz.html";
    });
  }
}

function initApp(){
  if(!getData()?.classes){ hideLoader(); return; }
  registerClassCards(); registerNavigation(); registerTheme(); registerSearch(); registerDashboardCards();
  showHome();
  hideLoader();
}
document.addEventListener("DOMContentLoaded",initApp);
