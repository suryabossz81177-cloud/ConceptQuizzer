/* Concept Quizzer account: Google Auth + per-user Firestore backup.
   This is disabled safely until js/firebase-config.js has real project values. */
(function(){
"use strict";
const $=id=>document.getElementById(id);
const modal=$("accountModal"), btn=$("accountButton"), label=$("accountButtonLabel");
if(!modal||!btn) return;
const err=$("accountError"), signedIn=$("signedInPanel"), signedOut=$("signedOutPanel");
let auth=null, db=null, currentUser=null, ready=false;
const config=window.CQ_FIREBASE_CONFIG||{};
const configured=!!(config.apiKey && !config.apiKey.startsWith("PASTE_") &&
  config.projectId && !config.projectId.startsWith("PASTE_") &&
  config.appId && !config.appId.startsWith("PASTE_"));
function showError(message){ if(err) err.textContent=message||""; }
function openModal(){modal.classList.add("is-open");modal.setAttribute("aria-hidden","false");showError("");}
function closeModal(){modal.classList.remove("is-open");modal.setAttribute("aria-hidden","true");}
btn.addEventListener("click",openModal);
$("closeAccountModal")?.addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
function setUserUI(user){
 currentUser=user||null;
 if(user){
   label.textContent=user.displayName ? user.displayName.split(/\s+/)[0] : "My Account";
   btn.innerHTML="";
   if(user.photoURL){const im=document.createElement("img");im.src=user.photoURL;im.alt="";btn.appendChild(im);}
   const span=document.createElement("span");span.id="accountButtonLabel";span.textContent=user.displayName?user.displayName.split(/\s+/)[0]:"My Account";btn.appendChild(span);
   signedIn.hidden=false;signedOut.hidden=true;
   $("accountName").textContent=user.displayName||"Google user";
   $("accountEmail").textContent=user.email||"";
   const photo=$("accountPhoto");
   if(user.photoURL){photo.src=user.photoURL;photo.hidden=false;}else photo.hidden=true;
   $("accountModalMessage").textContent="Your account is signed in. You can back up this browser's learning progress to your account.";
   restoreThenBackup();
 } else {
   btn.innerHTML='<span class="material-icons-round">login</span><span id="accountButtonLabel">Login with Google</span>';
   signedIn.hidden=true;signedOut.hidden=false;
   $("accountModalMessage").textContent="Sign in with Google to back up your learning progress and access it when you return.";
 }
}
function localLearningData(){
 const data={};
 try{
   for(let i=0;i<localStorage.length;i++){
     const key=localStorage.key(i);
     if(key && (key.startsWith("cq-")||key.startsWith("cq_"))) data[key]=localStorage.getItem(key);
   }
 }catch(e){}
 return data;
}
function status(text){const el=$("cloudSyncStatus");if(el)el.textContent=text;}
async function restoreThenBackup(){
 if(!currentUser||!db)return;
 try{
   status("Checking your saved account progress…");
   const ref=db.collection("users").doc(currentUser.uid);
   const snap=await ref.get();
   if(snap.exists){
     const remote=snap.data().progress||{};
     let restored=0;
     // Preserve current device values; restore only keys that are absent locally.
     Object.keys(remote).forEach(key=>{
       try{if(localStorage.getItem(key)===null && typeof remote[key]==="string"){localStorage.setItem(key,remote[key]);restored++;}}catch(e){}
     });
     status(restored ? "Restored "+restored+" saved progress item(s) from your account." : "Account connected. Your current browser progress is preserved.");
   }else{
     status("New account backup. Use Back up my progress to save this browser's progress.");
   }
   await syncProgress(false);
 }catch(e){
   console.error("Concept Quizzer restore failed",e);
   status("Could not read cloud progress. Check Firebase setup and Firestore rules.");
 }
}
async function syncProgress(showFeedback=true){
 if(!currentUser||!db)return;
 try{
   status("Backing up progress…");
   const ref=db.collection("users").doc(currentUser.uid);
   const snapshot=await ref.get();
   const existing=snapshot.exists?snapshot.data():{};
   await ref.set({
     profile:{displayName:currentUser.displayName||"",email:currentUser.email||"",photoURL:currentUser.photoURL||""},
     progress:localLearningData(),
     lastBackupAt:firebase.firestore.FieldValue.serverTimestamp(),
     termsAcceptedAt:existing.termsAcceptedAt||firebase.firestore.FieldValue.serverTimestamp(),
     schemaVersion:1
   },{merge:true});
   status("Progress backup updated.");
   if(showFeedback)showError("Your progress backup is saved to your Google-linked account.");
 }catch(e){
   console.error("Concept Quizzer backup failed",e);
   status("Backup failed. Check Firebase setup and Firestore rules.");
   if(showFeedback)showError("Could not back up progress. Check the Firebase setup and try again.");
 }
}
$("syncNowButton")?.addEventListener("click",()=>syncProgress(true));
$("googleSignInButton")?.addEventListener("click",async()=>{
 if(!configured||!ready){showError("Google login is not configured yet. Follow FIREBASE_SETUP.txt and add your Firebase web config first.");return;}
 if(!$("termsConsentCheckbox").checked){showError("Please agree to the Terms & Conditions and Privacy Notice before signing in.");return;}
 try{
   showError("");
   const provider=new firebase.auth.GoogleAuthProvider();
   const result=await auth.signInWithPopup(provider);
   if(result.user){
     await db.collection("users").doc(result.user.uid).set({
       profile:{displayName:result.user.displayName||"",email:result.user.email||"",photoURL:result.user.photoURL||""},
       termsAcceptedAt:firebase.firestore.FieldValue.serverTimestamp(),
       schemaVersion:1
     },{merge:true});
     await syncProgress(false);
   }
 }catch(e){
   console.error(e);
   showError(e.code==="auth/popup-closed-by-user"?"Sign-in was cancelled.":(e.message||"Google sign-in failed."));
 }
});
$("signOutButton")?.addEventListener("click",async()=>{try{await auth.signOut();showError("");}catch(e){showError("Sign-out failed. Please try again.");}});
if(!configured){
 console.warn("Firebase is not configured. Google sign-in is disabled until js/firebase-config.js is completed.");
} else if(!window.firebase){
 showError("Firebase SDK did not load. Check your internet connection.");
} else {
 try{
   firebase.initializeApp(config);auth=firebase.auth();db=firebase.firestore();ready=true;
   auth.onAuthStateChanged(setUserUI);
   // Keep account backup fresh after meaningful local changes, with modest debounce.
   let backupTimer;
   window.addEventListener("storage",()=>{clearTimeout(backupTimer);backupTimer=setTimeout(()=>syncProgress(false),1500);});
   // localStorage changes made by this same page do not emit a storage event;
   // periodically compare a small snapshot and back up changes while signed in.
   let lastSnapshot="";
   setInterval(()=>{
     if(!currentUser)return;
     let snapshot="";
     try{snapshot=JSON.stringify(localLearningData());}catch(e){}
     if(snapshot && snapshot!==lastSnapshot){lastSnapshot=snapshot;syncProgress(false);}
   },20000);
   window.addEventListener("beforeunload",()=>{if(currentUser){try{localStorage.setItem("cq-last-cloud-backup-request",String(Date.now()));}catch(e){}}});
 }catch(e){console.error(e);showError("Firebase could not initialize. Check js/firebase-config.js.");}
}
})();
