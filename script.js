/* =========================================================
   NEMUSUB - SCRIPT.JS
========================================================= */


/* =========================================================
   ANİME VERİLERİ
========================================================= */

const animeData = {

  rezero: {
    title: "Re:Zero − Starting Life in Another World",

    description:
      "Subaru Natsuki'nin gizemli bir şekilde başka bir dünyaya çağrılmasıyla başlayan macerası. Subaru, karşılaştığı olayları değiştirmek için özel bir güce sahip olduğunu keşfeder.",

    seasons: [25, 25, 16, 19],

    cover:
      "https://i.pinimg.com/736x/db/3d/db/db3ddbe641f0868455ee9eb549b1e44b.jpg",

    seasonCovers: [
      "rezero-season-1",
      "rezero-season-2",
      "rezero-season-3",
      "rezero-season-4"
    ]
  },


  sao: {
    title: "Sword Art Online",

    description:
      "Oyuncuların sanal gerçeklik MMORPG dünyasında mahsur kaldığı ve hayatta kalmak için oyunu tamamlamak zorunda olduğu macera.",

    seasons: [25, 24, 24, 23],

    cover:
      "https://images-s.kinorium.com/movie/poster/639188/w1500_52922771.jpg",

    seasonCovers: []
  },


  slime: {
    title: "That Time I Got Reincarnated as a Slime",

    description:
      "Öldükten sonra başka bir dünyada slime olarak yeniden doğan Rimuru Tempest'in yeni dünyadaki macerası ve yükselişi.",

    seasons: [29, 25, 26, 21],

    cover:
      "https://play-lh.googleusercontent.com/Ej4Bj_4UmCnS2Xhl6WgdhtG82QSFydC8OnF2099TAXapr3rYR2d0te2DJsCHixpitFKIb2ucvagOkrzXE8P2",

    seasonCovers: []
  },


  konosuba: {
    title: "KonoSuba",

    description:
      "Kazuma'nın başka bir dünyaya gönderilmesinden sonra Aqua, Megumin ve Darkness ile yaşadığı komik ve kaotik maceralar.",

    seasons: [11, 11, 13],

    cover:
      "https://i.pinimg.com/736x/34/19/90/341990579c278c06ae6039a9ffc5e641.jpg",

    seasonCovers: []
  },


  eminence: {
    title: "The Eminence in Shadow",

    description:
      "Gölge lideri olmayı hayal eden Cid Kagenou'nun başka bir dünyada kurduğu gizli organizasyon ve yaşadığı maceralar.",

    seasons: [20, 12],

    cover:
      "https://image.tmdb.org/t/p/original/7JKYmtLydAwo9ZsEmAknZiO4U8g.jpg",

    seasonCovers: []
  },


  overlord: {
    title: "Overlord",

    description:
      "Bir sanal oyun dünyasında mahsur kalan Momonga'nın güçlü bir büyücü olarak yeni dünyadaki macerası.",

    seasons: [13, 13, 13, 13],

    cover:
      "https://i.pinimg.com/originals/5e/4d/2b/5e4d2b2a4b40d988c970e16c9dcb829c.jpg?nii=t",

    seasonCovers: []
  }

};


/* =========================================================
   VİDEO LİNKLERİ
========================================================= */

const videoLinks = {

  /* =========================
     RE:ZERO - SEZON 1
  ========================= */

  "rezero-1-1":
    "https://www.image2url.com/r2/default/videos/1787418290718-6f7ba207-de61-488d-9250-7cad66df06dd.mp4",

  "rezero-1-2":
    "https://www.youtube.com/watch?v=IiN2m3pEdEs",

  "rezero-1-3":
    "https://docs.google.com/videos/d/1kY-e8zTCtl-b4Gw3c22mMKHGkIDao1AZELQsqUH7Wx0/play",

  "rezero-1-4": "",
  "rezero-1-5": "",
  "rezero-1-6": "",
  "rezero-1-7": "",
  "rezero-1-8": "",
  "rezero-1-9": "",
  "rezero-1-10": "",
  "rezero-1-11": "",
  "rezero-1-12": "",
  "rezero-1-13": "",
  "rezero-1-14": "",
  "rezero-1-15": "",
  "rezero-1-16": "",
  "rezero-1-17": "",
  "rezero-1-18": "",
  "rezero-1-19": "",
  "rezero-1-20": "",
  "rezero-1-21": "",
  "rezero-1-22": "",
  "rezero-1-23": "",
  "rezero-1-24": "",
  "rezero-1-25": "",


  /* =========================
     RE:ZERO - SEZON 2
  ========================= */

  "rezero-2-1": "",
  "rezero-2-2": "",
  "rezero-2-3": "",
  "rezero-2-4": "",
  "rezero-2-5": "",
  "rezero-2-6": "",
  "rezero-2-7": "",
  "rezero-2-8": "",
  "rezero-2-9": "",
  "rezero-2-10": "",
  "rezero-2-11": "",
  "rezero-2-12": "",
  "rezero-2-13": "",
  "rezero-2-14": "",
  "rezero-2-15": "",
  "rezero-2-16": "",
  "rezero-2-17": "",
  "rezero-2-18": "",
  "rezero-2-19": "",
  "rezero-2-20": "",
  "rezero-2-21": "",
  "rezero-2-22": "",
  "rezero-2-23": "",
  "rezero-2-24": "",
  "rezero-2-25": "",


  /* =========================
     RE:ZERO - SEZON 3
  ========================= */

  "rezero-3-1": "",
  "rezero-3-2": "",
  "rezero-3-3": "",
  "rezero-3-4": "",
  "rezero-3-5": "",
  "rezero-3-6": "",
  "rezero-3-7": "",
  "rezero-3-8": "",
  "rezero-3-9": "",
  "rezero-3-10": "",
  "rezero-3-11": "",
  "rezero-3-12": "",
  "rezero-3-13": "",
  "rezero-3-14": "",
  "rezero-3-15": "",
  "rezero-3-16": "",


  /* =========================
     RE:ZERO - SEZON 4
  ========================= */

  "rezero-4-1": "",
  "rezero-4-2": "",
  "rezero-4-3": "",
  "rezero-4-4": "",
  "rezero-4-5": "",
  "rezero-4-6": "",
  "rezero-4-7": "",
  "rezero-4-8": "",
  "rezero-4-9": "",
  "rezero-4-10": "",
  "rezero-4-11": "",
  "rezero-4-12": "",

  "rezero-4-13":
    "https://docs.google.com/videos/d/1kY-e8zTCtl-b4Gw3c22mMKHGkIDao1AZELQsqUH7Wx0/play",

  "rezero-4-14": "",
  "rezero-4-15": "",
  "rezero-4-16": "",
  "rezero-4-17": "",
  "rezero-4-18": "",
  "rezero-4-19": "",


  /* =========================
     SAO - SEZON 1
  ========================= */

  "sao-1-1": "",
  "sao-1-2": "",
  "sao-1-3": "",
  "sao-1-4": "",
  "sao-1-5": "",
  "sao-1-6": "",
  "sao-1-7": "",
  "sao-1-8": "",
  "sao-1-9": "",
  "sao-1-10": "",
  "sao-1-11": "",
  "sao-1-12": "",
  "sao-1-13": "",
  "sao-1-14": "",
  "sao-1-15": "",
  "sao-1-16": "",
  "sao-1-17": "",
  "sao-1-18": "",
  "sao-1-19": "",
  "sao-1-20": "",
  "sao-1-21": "",
  "sao-1-22": "",
  "sao-1-23": "",
  "sao-1-24": "",
  "sao-1-25": "",


  /* =========================
     SAO - SEZON 2
  ========================= */

  "sao-2-1": "",
  "sao-2-2": "",
  "sao-2-3": "",
  "sao-2-4": "",
  "sao-2-5": "",
  "sao-2-6": "",
  "sao-2-7": "",
  "sao-2-8": "",
  "sao-2-9": "",
  "sao-2-10": "",
  "sao-2-11": "",
  "sao-2-12": "",
  "sao-2-13": "",
  "sao-2-14": "",
  "sao-2-15": "",
  "sao-2-16": "",
  "sao-2-17": "",
  "sao-2-18": "",
  "sao-2-19": "",
  "sao-2-20": "",
  "sao-2-21": "",
  "sao-2-22": "",
  "sao-2-23": "",
  "sao-2-24": "",


  /* =========================
     SAO - SEZON 3
  ========================= */

  "sao-3-1": "",
  "sao-3-2": "",
  "sao-3-3": "",
  "sao-3-4": "",
  "sao-3-5": "",
  "sao-3-6": "",
  "sao-3-7": "",
  "sao-3-8": "",
  "sao-3-9": "",
  "sao-3-10": "",
  "sao-3-11": "",
  "sao-3-12": "",
  "sao-3-13": "",
  "sao-3-14": "",
  "sao-3-15": "",
  "sao-3-16": "",
  "sao-3-17": "",
  "sao-3-18": "",
  "sao-3-19": "",
  "sao-3-20": "",
  "sao-3-21": "",
  "sao-3-22": "",
  "sao-3-23": "",
  "sao-3-24": "",


  /* =========================
     SAO - SEZON 4
  ========================= */

  "sao-4-1": "",
  "sao-4-2": "",
  "sao-4-3": "",
  "sao-4-4": "",
  "sao-4-5": "",
  "sao-4-6": "",
  "sao-4-7": "",
  "sao-4-8": "",
  "sao-4-9": "",
  "sao-4-10": "",
  "sao-4-11": "",
  "sao-4-12": "",
  "sao-4-13": "",
  "sao-4-14": "",
  "sao-4-15": "",
  "sao-4-16": "",
  "sao-4-17": "",
  "sao-4-18": "",
  "sao-4-19": "",
  "sao-4-20": "",
  "sao-4-21": "",
  "sao-4-22": "",
  "sao-4-23": "",


  /* =========================
     SLIME - SEZON 1
  ========================= */

  "slime-1-1": "",
  "slime-1-2": "",
  "slime-1-3": "",
  "slime-1-4": "",
  "slime-1-5": "",
  "slime-1-6": "",
  "slime-1-7": "",
  "slime-1-8": "",
  "slime-1-9": "",
  "slime-1-10": "",
  "slime-1-11": "",
  "slime-1-12": "",
  "slime-1-13": "",
  "slime-1-14": "",
  "slime-1-15": "",
  "slime-1-16": "",
  "slime-1-17": "",
  "slime-1-18": "",
  "slime-1-19": "",
  "slime-1-20": "",
  "slime-1-21": "",
  "slime-1-22": "",
  "slime-1-23": "",
  "slime-1-24": "",
  "slime-1-25": "",
  "slime-1-26": "",
  "slime-1-27": "",
  "slime-1-28": "",
  "slime-1-29": "",


  /* =========================
     SLIME - SEZON 2
  ========================= */

  "slime-2-1": "",
  "slime-2-2": "",
  "slime-2-3": "",
  "slime-2-4": "",
  "slime-2-5": "",
  "slime-2-6": "",
  "slime-2-7": "",
  "slime-2-8": "",
  "slime-2-9": "",
  "slime-2-10": "",
  "slime-2-11": "",
  "slime-2-12": "",
  "slime-2-13": "",
  "slime-2-14": "",
  "slime-2-15": "",
  "slime-2-16": "",
  "slime-2-17": "",
  "slime-2-18": "",
  "slime-2-19": "",
  "slime-2-20": "",
  "slime-2-21": "",
  "slime-2-22": "",
  "slime-2-23": "",
  "slime-2-24": "",
  "slime-2-25": "",


  /* =========================
     SLIME - SEZON 3
  ========================= */

  "slime-3-1": "",
  "slime-3-2": "",
  "slime-3-3": "",
  "slime-3-4": "",
  "slime-3-5": "",
  "slime-3-6": "",
  "slime-3-7": "",
  "slime-3-8": "",
  "slime-3-9": "",
  "slime-3-10": "",
  "slime-3-11": "",
  "slime-3-12": "",
  "slime-3-13": "",
  "slime-3-14": "",
  "slime-3-15": "",
  "slime-3-16": "",
  "slime-3-17": "",
  "slime-3-18": "",
  "slime-3-19": "",
  "slime-3-20": "",
  "slime-3-21": "",
  "slime-3-22": "",
  "slime-3-23": "",
  "slime-3-24": "",
  "slime-3-25": "",
  "slime-3-26": "",


  /* =========================
     SLIME - SEZON 4
  ========================= */

  "slime-4-1": "",
  "slime-4-2": "",
  "slime-4-3": "",
  "slime-4-4": "",
  "slime-4-5": "",
  "slime-4-6": "",
  "slime-4-7": "",
  "slime-4-8": "",
  "slime-4-9": "",
  "slime-4-10": "",
  "slime-4-11": "",
  "slime-4-12": "",
  "slime-4-13": "",
  "slime-4-14": "",
  "slime-4-15": "",
  "slime-4-16": "",
  "slime-4-17": "",
  "slime-4-18": "",
  "slime-4-19": "",
  "slime-4-20": "",
  "slime-4-21": "",


  /* =========================
     KONOSUBA - SEZON 1
  ========================= */

  "konosuba-1-1": "",
  "konosuba-1-2": "",
  "konosuba-1-3": "",
  "konosuba-1-4": "",
  "konosuba-1-5": "",
  "konosuba-1-6": "",
  "konosuba-1-7": "",
  "konosuba-1-8": "",
  "konosuba-1-9": "",
  "konosuba-1-10": "",
  "konosuba-1-11": "",


  /* =========================
     KONOSUBA - SEZON 2
  ========================= */

  "konosuba-2-1": "",
  "konosuba-2-2": "",
  "konosuba-2-3": "",
  "konosuba-2-4": "",
  "konosuba-2-5": "",
  "konosuba-2-6": "",
  "konosuba-2-7": "",
  "konosuba-2-8": "",
  "konosuba-2-9": "",
  "konosuba-2-10": "",
  "konosuba-2-11": "",


  /* =========================
     KONOSUBA - SEZON 3
  ========================= */

  "konosuba-3-1": "",
  "konosuba-3-2": "",
  "konosuba-3-3": "",
  "konosuba-3-4": "",
  "konosuba-3-5": "",
  "konosuba-3-6": "",
  "konosuba-3-7": "",
  "konosuba-3-8": "",
  "konosuba-3-9": "",
  "konosuba-3-10": "",
  "konosuba-3-11": "",
  "konosuba-3-12": "",
  "konosuba-3-13": "",


  /* =========================
     EMINENCE - SEZON 1
  ========================= */

  "eminence-1-1": "",
  "eminence-1-2": "",
  "eminence-1-3": "",
  "eminence-1-4": "",
  "eminence-1-5": "",
  "eminence-1-6": "",
  "eminence-1-7": "",
  "eminence-1-8": "",
  "eminence-1-9": "",
  "eminence-1-10": "",
  "eminence-1-11": "",
  "eminence-1-12": "",
  "eminence-1-13": "",
  "eminence-1-14": "",
  "eminence-1-15": "",
  "eminence-1-16": "",
  "eminence-1-17": "",
  "eminence-1-18": "",
  "eminence-1-19": "",
  "eminence-1-20": "",


  /* =========================
     EMINENCE - SEZON 2
  ========================= */

  "eminence-2-1": "",
  "eminence-2-2": "",
  "eminence-2-3": "",
  "eminence-2-4": "",
  "eminence-2-5": "",
  "eminence-2-6": "",
  "eminence-2-7": "",
  "eminence-2-8": "",
  "eminence-2-9": "",
  "eminence-2-10": "",
  "eminence-2-11": "",
  "eminence-2-12": "",


  /* =========================
     OVERLORD - SEZON 1
  ========================= */

  "overlord-1-1": "",
  "overlord-1-2": "",
  "overlord-1-3": "",
  "overlord-1-4": "",
  "overlord-1-5": "",
  "overlord-1-6": "",
  "overlord-1-7": "",
  "overlord-1-8": "",
  "overlord-1-9": "",
  "overlord-1-10": "",
  "overlord-1-11": "",
  "overlord-1-12": "",
  "overlord-1-13": "",


  /* =========================
     OVERLORD - SEZON 2
  ========================= */

  "overlord-2-1": "",
  "overlord-2-2": "",
  "overlord-2-3": "",
  "overlord-2-4": "",
  "overlord-2-5": "",
  "overlord-2-6": "",
  "overlord-2-7": "",
  "overlord-2-8": "",
  "overlord-2-9": "",
  "overlord-2-10": "",
  "overlord-2-11": "",
  "overlord-2-12": "",
  "overlord-2-13": "",


  /* =========================
     OVERLORD - SEZON 3
  ========================= */

  "overlord-3-1": "",
  "overlord-3-2": "",
  "overlord-3-3": "",
  "overlord-3-4": "",
  "overlord-3-5": "",
  "overlord-3-6": "",
  "overlord-3-7": "",
  "overlord-3-8": "",
  "overlord-3-9": "",
  "overlord-3-10": "",
  "overlord-3-11": "",
  "overlord-3-12": "",
  "overlord-3-13": "",


  /* =========================
     OVERLORD - SEZON 4
  ========================= */

  "overlord-4-1": "",
  "overlord-4-2": "",
  "overlord-4-3": "",
  "overlord-4-4": "",
  "overlord-4-5": "",
  "overlord-4-6": "",
  "overlord-4-7": "",
  "overlord-4-8": "",
  "overlord-4-9": "",
  "overlord-4-10": "",
  "overlord-4-11": "",
  "overlord-4-12": "",
  "overlord-4-13": ""

};


/* =========================================================
   FIREBASE AYARLARI
========================================================= */

const firebaseConfig = {

  apiKey:
    "AIzaSyBgPZ-U8ZBrywxLubcWHaRUdzU7Ygmk4bo",

  authDomain:
    "nemusub-f65e6.firebaseapp.com",

  projectId:
    "nemusub-f65e6",

  storageBucket:
    "nemusub-f65e6.firebasestorage.app",

  messagingSenderId:
    "874975484834",

  appId:
    "1:874975484834:web:bd693e735cee3abc69b0fb",

  measurementId:
    "G-TKJN5318T2"

};


let firebaseAuth = null;

let firebaseAuthFunctions = null;

let firebaseUser = null;

let firebaseReadyPromise = null;


/* =========================================================
   FIREBASE BAŞLAT
========================================================= */

function initializeFirebaseAuth() {

  if (firebaseReadyPromise) {

    return firebaseReadyPromise;

  }


  firebaseReadyPromise =
    Promise.all([

      import(
        "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js"
      ),

      import(
        "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js"
      )

    ]).then(

      ([appModule, authModule]) => {


        const app =
          appModule.initializeApp(
            firebaseConfig
          );


        firebaseAuth =
          authModule.getAuth(
            app
          );


        firebaseAuthFunctions =
          authModule;


        authModule.onAuthStateChanged(

          firebaseAuth,

          function (user) {


            firebaseUser =
              user;


            updateAccountUI();


            renderContinueWatching();

            renderWatchHistory();


            if (activeEpisode) {

              loadComments();

            }

          }

        );


        return true;

      }

    ).catch(

      function (error) {

        console.error(
          "Firebase başlatılamadı:",
          error
        );


        throw error;

      }

    );


  return firebaseReadyPromise;

}


/* =========================================================
   DEĞİŞKENLER
========================================================= */

let currentAnime = null;

let currentSeason = 1;

let activeEpisode = null;

let selectedCommentImage = null;

let commentSpoilerActive = false;


/* =========================================================
   HTML ELEMENTLERİ
========================================================= */

const homePage =
  document.getElementById(
    "homePage"
  );

const animePage =
  document.getElementById(
    "animePage"
  );

const seasonPage =
  document.getElementById(
    "seasonPage"
  );

const videoPage =
  document.getElementById(
    "videoPage"
  );

const animeList =
  document.getElementById(
    "animeList"
  );

const seasonList =
  document.getElementById(
    "seasonList"
  );

const episodeList =
  document.getElementById(
    "episodeList"
  );

const animePageCover =
  document.getElementById(
    "animePageCover"
  );

const animePageTitle =
  document.getElementById(
    "animePageTitle"
  );

const animePageDescription =
  document.getElementById(
    "animePageDescription"
  );

const animeSeasonCount =
  document.getElementById(
    "animeSeasonCount"
  );

const animeEpisodeCount =
  document.getElementById(
    "animeEpisodeCount"
  );

const seasonAnimeName =
  document.getElementById(
    "seasonAnimeName"
  );

const seasonTitle =
  document.getElementById(
    "seasonTitle"
  );

const seasonCount =
  document.getElementById(
    "seasonCount"
  );

const videoTitle =
  document.getElementById(
    "videoTitle"
  );

const videoPlayer =
  document.getElementById(
    "videoPlayer"
  );

const videoSource =
  document.getElementById(
    "videoSource"
  );

const youtubePlayer =
  document.getElementById(
    "youtubePlayer"
  );

const googleVidsPlayer =
  document.getElementById(
    "googleVidsPlayer"
  );

const videoMessage =
  document.getElementById(
    "videoMessage"
  );


/* =========================================================
   SAYFALARI GİZLE
========================================================= */

function hideAllPages() {

  if (homePage) {
    homePage.style.display = "none";
  }

  if (animePage) {
    animePage.style.display = "none";
  }

  if (seasonPage) {
    seasonPage.style.display = "none";
  }

  if (videoPage) {
    videoPage.style.display = "none";
  }

}


/* =========================================================
   OYNATICILARI DURDUR
========================================================= */

function stopPlayers() {

  if (videoPlayer) {

    videoPlayer.pause();

    if (videoSource) {
      videoSource.src = "";
    }

    videoPlayer.load();

    videoPlayer.style.display =
      "none";

  }


  if (youtubePlayer) {

    youtubePlayer.src =
      "";

    youtubePlayer.style.display =
      "none";

  }


  if (googleVidsPlayer) {

    googleVidsPlayer.src =
      "";

    googleVidsPlayer.style.display =
      "none";

  }

}


/* =========================================================
   ANA SAYFA
========================================================= */

function goHome() {

  stopPlayers();

  hideAllPages();


  if (homePage) {

    homePage.style.display =
      "block";

  }


  closeSearch();


  window.scrollTo(
    0,
    0
  );

}


/* =========================================================
   ANİME LİSTESİ
========================================================= */

function createAnimeList() {

  if (!animeList) {
    return;
  }


  animeList.innerHTML =
    "";


  Object.entries(
    animeData
  ).forEach(

    function ([id, anime]) {


      const card =
        document.createElement(
          "article"
        );


      card.className =
        "anime-card";


      card.onclick =
        function () {

          openAnime(
            id
          );

        };


      const cover =
        document.createElement(
          "div"
        );


      cover.className =
        "anime-cover";


      if (anime.cover) {

        cover.style.backgroundImage =
          `url("${anime.cover}")`;

      }


      const badge =
        document.createElement(
          "span"
        );


      badge.className =
        "anime-badge";


      badge.textContent =
        anime.seasons.length +
        " SEZON";


      cover.appendChild(
        badge
      );


      const info =
        document.createElement(
          "div"
        );


      info.className =
        "anime-card-info";


      const title =
        document.createElement(
          "h3"
        );


      title.textContent =
        anime.title;


      const meta =
        document.createElement(
          "p"
        );


      const totalEpisodes =
        anime.seasons.reduce(

          function (
            total,
            count
          ) {

            return total + count;

          },

          0

        );


      meta.textContent =
        anime.seasons.length +
        " Sezon • " +
        totalEpisodes +
        " Bölüm";


      info.appendChild(
        title
      );

      info.appendChild(
        meta
      );

      card.appendChild(
        cover
      );

      card.appendChild(
        info
      );

      animeList.appendChild(
        card
      );

    }

  );

}


/* =========================================================
   ANİME AÇ
========================================================= */

function openAnime(id) {

  const anime =
    animeData[id];


  if (!anime) {
    return;
  }


  currentAnime =
    id;


  stopPlayers();

  hideAllPages();

  closeSearch();


  if (animePage) {

    animePage.style.display =
      "block";

  }


  if (animePageTitle) {

    animePageTitle.textContent =
      anime.title;

  }


  if (animePageDescription) {

    animePageDescription.textContent =
      anime.description;

  }


  if (animeSeasonCount) {

    animeSeasonCount.textContent =
      anime.seasons.length;

  }


  const totalEpisodes =
    anime.seasons.reduce(

      function (
        total,
        count
      ) {

        return total + count;

      },

      0

    );


  if (animeEpisodeCount) {

    animeEpisodeCount.textContent =
      totalEpisodes;

  }


  if (animePageCover) {

    animePageCover.src =
      anime.cover;

    animePageCover.style.display =
      "block";

  }


  createSeasonList();


  window.scrollTo(
    0,
    0
  );

}


/* =========================================================
   SEZON LİSTESİ
========================================================= */

function createSeasonList() {

  const anime =
    animeData[
      currentAnime
    ];


  if (
    !anime ||
    !seasonList
  ) {

    return;

  }


  seasonList.innerHTML =
    "";


  anime.seasons.forEach(

    function (
      episodeCount,
      index
    ) {


      const seasonNumber =
        index + 1;


      const card =
        document.createElement(
          "article"
        );


      card.className =
        "season-card";


      card.onclick =
        function () {

          openSeason(
            seasonNumber
          );

        };


      const cover =
        document.createElement(
          "div"
        );


      cover.className =
        "season-cover";


      if (
        currentAnime ===
          "rezero" &&
        anime.seasonCovers[index]
      ) {

        cover.classList.add(
          anime.seasonCovers[
            index
          ]
        );

      }

      else {

        cover.style.backgroundImage =
          `
          linear-gradient(
            rgba(20,10,30,.35),
            rgba(5,5,8,.75)
          ),
          url("${anime.cover}")
          `;

      }


      const badge =
        document.createElement(
          "span"
        );


      badge.className =
        "season-badge";


      badge.textContent =
        seasonNumber +
        ". SEZON";


      cover.appendChild(
        badge
      );


      const info =
        document.createElement(
          "div"
        );


      info.className =
        "season-info";


      const title =
        document.createElement(
          "h3"
        );


      title.textContent =
        anime.title;


      const count =
        document.createElement(
          "p"
        );


      count.textContent =
        episodeCount +
        " Bölüm";


      info.appendChild(
        title
      );

      info.appendChild(
        count
      );

      card.appendChild(
        cover
      );

      card.appendChild(
        info
      );

      seasonList.appendChild(
        card
      );

    }

  );

}


/* =========================================================
   SEZON AÇ
========================================================= */

function openSeason(
  season
) {

  const anime =
    animeData[
      currentAnime
    ];


  if (!anime) {
    return;
  }


  currentSeason =
    season;


  stopPlayers();

  hideAllPages();


  if (seasonPage) {

    seasonPage.style.display =
      "block";

  }


  if (seasonAnimeName) {

    seasonAnimeName.textContent =
      anime.title;

  }


  if (seasonTitle) {

    seasonTitle.textContent =
      season +
      ". Sezon";

  }


  if (seasonCount) {

    seasonCount.textContent =
      anime.seasons[
        season - 1
      ] +
      " Bölüm";

  }


  if (!episodeList) {
    return;
  }


  episodeList.innerHTML =
    "";


  for (
    let episode = 1;

    episode <=
      anime.seasons[
        season - 1
      ];

    episode++
  ) {


    const item =
      document.createElement(
        "div"
      );


    item.className =
      "episode-item";


    item.textContent =
      episode +
      ". Bölüm";


    item.onclick =
      function () {

        openEpisode(
          season,
          episode
        );

      };


    episodeList.appendChild(
      item
    );

  }


  window.scrollTo(
    0,
    0
  );

}


/* =========================================================
   YOUTUBE ID
========================================================= */

function getYoutubeId(
  url
) {

  try {

    const parsedUrl =
      new URL(
        url
      );


    if (
      parsedUrl.hostname.includes(
        "youtube.com"
      )
    ) {


      if (
        parsedUrl.pathname ===
        "/watch"
      ) {

        return parsedUrl
          .searchParams
          .get(
            "v"
          );

      }


      if (
        parsedUrl.pathname.startsWith(
          "/embed/"
        )
      ) {

        return parsedUrl
          .pathname
          .split(
            "/embed/"
          )[1]
          .split(
            "/"
          )[0];

      }


      if (
        parsedUrl.pathname.startsWith(
          "/shorts/"
        )
      ) {

        return parsedUrl
          .pathname
          .split(
            "/shorts/"
          )[1]
          .split(
            "/"
          )[0];

      }

    }


    if (
      parsedUrl.hostname.includes(
        "youtu.be"
      )
    ) {

      return parsedUrl
        .pathname
        .replace(
          "/",
          ""
        )
        .split(
          "/"
        )[0];

    }

  }

  catch (error) {

    return null;

  }


  return null;

}


/* =========================================================
   GOOGLE VIDS ID
========================================================= */

function getGoogleVidsId(
  url
) {

  const match =
    url.match(
      /docs\.google\.com\/videos\/d\/([^/?#]+)/
    );


  if (!match) {

    return null;

  }


  return match[1];

}


/* =========================================================
   BÖLÜM AÇ
========================================================= */

function openEpisode(
  season,
  episode
) {

  const anime =
    animeData[
      currentAnime
    ];


  if (!anime) {
    return;
  }


  const animeId =
    currentAnime;


  stopPlayers();

  hideAllPages();


  if (videoPage) {

    videoPage.style.display =
      "block";

  }


  if (videoTitle) {

    videoTitle.textContent =
      anime.title +
      " — " +
      season +
      ". Sezon " +
      episode +
      ". Bölüm";

  }


  activeEpisode = {

    anime:
      animeId,

    season:
      season,

    episode:
      episode

  };


  const key =
    animeId +
    "-" +
    season +
    "-" +
    episode;


  const videoUrl =
    videoLinks[
      key
    ];


  if (videoMessage) {

    videoMessage.textContent =
      "";

  }


  if (
    !videoUrl ||
    videoUrl.trim() ===
      ""
  ) {

    if (videoMessage) {

      videoMessage.textContent =
        "Bu bölüm için henüz video eklenmedi.";

    }

  }

  else if (
    videoUrl.includes(
      "docs.google.com/videos/d/"
    )
  ) {


    const googleVidsId =
      getGoogleVidsId(
        videoUrl
      );


    if (!googleVidsId) {

      if (videoMessage) {

        videoMessage.textContent =
          "Google Vids bağlantısı okunamadı.";

      }

    }

    else {

      googleVidsPlayer.src =
        "https://docs.google.com/videos/d/" +
        googleVidsId +
        "/play";


      googleVidsPlayer.style.display =
        "block";


      if (youtubePlayer) {

        youtubePlayer.style.display =
          "none";

      }


      if (videoPlayer) {

        videoPlayer.style.display =
          "none";

      }

    }

  }

  else if (
    videoUrl.includes(
      "youtube.com"
    ) ||
    videoUrl.includes(
      "youtu.be"
    )
  ) {


    const youtubeId =
      getYoutubeId(
        videoUrl
      );


    if (!youtubeId) {

      if (videoMessage) {

        videoMessage.textContent =
          "YouTube bağlantısı okunamadı.";

      }

    }

    else {

      youtubePlayer.src =
        "https://www.youtube.com/embed/" +
        youtubeId +
        "?rel=0";


      youtubePlayer.style.display =
        "block";


      if (googleVidsPlayer) {

        googleVidsPlayer.style.display =
          "none";

      }


      if (videoPlayer) {

        videoPlayer.style.display =
          "none";

      }

    }

  }

  else {


    if (
      videoSource &&
      videoPlayer
    ) {

      videoSource.src =
        videoUrl;


      videoPlayer.style.display =
        "block";


      if (youtubePlayer) {

        youtubePlayer.style.display =
          "none";

      }


      if (googleVidsPlayer) {

        googleVidsPlayer.style.display =
          "none";

      }


      videoPlayer.load();

    }

  }


  saveEpisodeToHistory(
    animeId,
    season,
    episode
  );


  updateEpisodeNavigation();

  loadComments();


  setTimeout(
    setupVideoProgressTracking,
    300
  );


  window.scrollTo(
    0,
    0
  );

}


/* =========================================================
   GERİ DÖN
========================================================= */

function backToAnime() {

  stopPlayers();

  hideAllPages();


  if (animePage) {

    animePage.style.display =
      "block";

  }


  window.scrollTo(
    0,
    0
  );

}


function backToSeason() {

  stopPlayers();

  hideAllPages();


  if (seasonPage) {

    seasonPage.style.display =
      "block";

  }


  window.scrollTo(
    0,
    0
  );

}


/* =========================================================
   TAM EKRAN
========================================================= */

function toggleFullscreen() {

  let player =
    null;


  if (
    videoPlayer &&
    videoPlayer.style.display !==
      "none"
  ) {

    player =
      videoPlayer;

  }

  else if (
    youtubePlayer &&
    youtubePlayer.style.display !==
      "none"
  ) {

    player =
      youtubePlayer;

  }

  else if (
    googleVidsPlayer &&
    googleVidsPlayer.style.display !==
      "none"
  ) {

    player =
      googleVidsPlayer;

  }


  if (!player) {

    return;

  }


  if (
    document.fullscreenElement
  ) {

    document.exitFullscreen();

    return;

  }


  if (
    player.requestFullscreen
  ) {

    player.requestFullscreen();

  }

}


/* =========================================================
   ARAMA
========================================================= */

function toggleSearch() {

  const searchBox =
    document.getElementById(
      "searchBox"
    );


  const input =
    document.getElementById(
      "animeSearchInput"
    );


  if (
    !searchBox ||
    !input
  ) {

    return;

  }


  searchBox.classList.toggle(
    "active"
  );


  if (
    searchBox.classList.contains(
      "active"
    )
  ) {

    setTimeout(

      function () {

        input.focus();

      },

      100

    );

  }

  else {

    closeSearch();

  }

}


function closeSearch() {

  const searchBox =
    document.getElementById(
      "searchBox"
    );


  const input =
    document.getElementById(
      "animeSearchInput"
    );


  const results =
    document.getElementById(
      "searchResults"
    );


  if (searchBox) {

    searchBox.classList.remove(
      "active"
    );

  }


  if (input) {

    input.value =
      "";

  }


  if (results) {

    results.innerHTML =
      "";

  }

}


function searchAnime() {

  const input =
    document.getElementById(
      "animeSearchInput"
    );


  const results =
    document.getElementById(
      "searchResults"
    );


  if (
    !input ||
    !results
  ) {

    return;

  }


  const query =
    input.value
      .toLocaleLowerCase(
        "tr-TR"
      )
      .trim();


  results.innerHTML =
    "";


  if (!query) {

    return;

  }


  const matchingAnime =
    Object.entries(
      animeData
    ).filter(

      function (
        [id, anime]
      ) {

        return anime.title
          .toLocaleLowerCase(
            "tr-TR"
          )
          .includes(
            query
          );

      }

    );


  if (
    matchingAnime.length ===
    0
  ) {

    results.innerHTML =
      `
      <div class="search-empty">
        Anime bulunamadı.
      </div>
      `;

    return;

  }


  matchingAnime.forEach(

    function (
      [id, anime]
    ) {


      const result =
        document.createElement(
          "div"
        );


      result.className =
        "search-result-item";


      result.innerHTML =
        `
        <img
          src="${anime.cover}"
          alt="${escapeCommentHtml(anime.title)}"
        >

        <div class="search-result-info">

          <strong>
            ${escapeCommentHtml(anime.title)}
          </strong>

          <small>
            ${anime.seasons.length}
            Sezon
          </small>

        </div>
        `;


      result.onclick =
        function () {

          openAnime(
            id
          );

          closeSearch();

        };


      results.appendChild(
        result
      );

    }

  );

}


/* =========================================================
   AKTİF FIREBASE KULLANICISI
========================================================= */

function getCurrentUser() {

  if (!firebaseUser) {

    return null;

  }


  return {

    uid:
      firebaseUser.uid,

    username:
      firebaseUser.displayName ||
      (
        firebaseUser.email
          ?
        firebaseUser.email.split(
          "@"
        )[0]
          :
        "Kullanıcı"
      ),

    email:
      firebaseUser.email ||
      ""

  };

}


/* =========================================================
   HESAP ARAYÜZÜ
========================================================= */

function updateAccountUI() {

  const user =
    getCurrentUser();


  const loginButton =
    document.getElementById(
      "loginButton"
    );


  const profileArea =
    document.getElementById(
      "profileArea"
    );


  if (
    !loginButton ||
    !profileArea
  ) {

    return;

  }


  if (user) {


    loginButton.style.display =
      "none";


    profileArea.style.display =
      "block";


    const navbarUsername =
      document.getElementById(
        "navbarUsername"
      );


    const profileMenuUsername =
      document.getElementById(
        "profileMenuUsername"
      );


    const profileMenuEmail =
      document.getElementById(
        "profileMenuEmail"
      );


    if (navbarUsername) {

      navbarUsername.textContent =
        user.username;

    }


    if (profileMenuUsername) {

      profileMenuUsername.textContent =
        user.username;

    }


    if (profileMenuEmail) {

      profileMenuEmail.textContent =
        user.email;

    }

  }

  else {


    loginButton.style.display =
      "flex";


    profileArea.style.display =
      "none";

  }

}


/* =========================================================
   GİRİŞ PENCERESİ
========================================================= */

function openLoginModal() {

  const modal =
    document.getElementById(
      "loginModal"
    );


  if (!modal) {

    return;

  }


  modal.classList.add(
    "active"
  );


  document.body.classList.add(
    "modal-open"
  );

}


function closeLoginModal() {

  const modal =
    document.getElementById(
      "loginModal"
    );


  if (!modal) {

    return;

  }


  modal.classList.remove(
    "active"
  );


  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   GİRİŞ / KAYIT SEKMELERİ
========================================================= */

function showLoginTab() {

  const loginForm =
    document.getElementById(
      "loginForm"
    );

  const registerForm =
    document.getElementById(
      "registerForm"
    );

  const loginTab =
    document.getElementById(
      "loginTabButton"
    );

  const registerTab =
    document.getElementById(
      "registerTabButton"
    );


  if (loginForm) {

    loginForm.style.display =
      "block";

  }


  if (registerForm) {

    registerForm.style.display =
      "none";

  }


  if (loginTab) {

    loginTab.classList.add(
      "active"
    );

  }


  if (registerTab) {

    registerTab.classList.remove(
      "active"
    );

  }

}


function showRegisterTab() {

  const loginForm =
    document.getElementById(
      "loginForm"
    );

  const registerForm =
    document.getElementById(
      "registerForm"
    );

  const loginTab =
    document.getElementById(
      "loginTabButton"
    );

  const registerTab =
    document.getElementById(
      "registerTabButton"
    );


  if (loginForm) {

    loginForm.style.display =
      "none";

  }


  if (registerForm) {

    registerForm.style.display =
      "block";

  }


  if (loginTab) {

    loginTab.classList.remove(
      "active"
    );

  }


  if (registerTab) {

    registerTab.classList.add(
      "active"
    );

  }

}


/* =========================================================
   FIREBASE HATALARINI TÜRKÇELEŞTİR
========================================================= */

function getFirebaseErrorMessage(
  error
) {

  const code =
    error &&
    error.code
      ?
    error.code
      :
    "";


  switch (code) {

    case "auth/email-already-in-use":

      return "Bu e-posta adresiyle zaten bir hesap var.";


    case "auth/invalid-email":

      return "Geçerli bir e-posta adresi yaz.";


    case "auth/weak-password":

      return "Şifre yeterince güçlü değil.";


    case "auth/invalid-credential":

      return "E-posta veya şifre yanlış.";


    case "auth/wrong-password":

      return "E-posta veya şifre yanlış.";


    case "auth/user-not-found":

      return "Bu e-posta adresiyle kayıtlı hesap bulunamadı.";


    case "auth/user-disabled":

      return "Bu hesap devre dışı bırakılmış.";


    case "auth/too-many-requests":

      return "Çok fazla giriş denemesi yapıldı. Daha sonra tekrar dene.";


    case "auth/popup-closed-by-user":

      return "Google giriş penceresi kapatıldı.";


    case "auth/popup-blocked":

      return "Tarayıcı Google giriş penceresini engelledi.";


    case "auth/unauthorized-domain":

      return "Bu site adresi Firebase tarafından yetkilendirilmemiş.";


    case "auth/network-request-failed":

      return "İnternet bağlantısı kurulamadı.";


    case "auth/operation-not-allowed":

      return "Bu giriş yöntemi Firebase'de etkin değil.";


    default:

      console.error(
        "Firebase hatası:",
        error
      );

      return "Bir hata oluştu. Tekrar dene.";

  }

}


/* =========================================================
   KAYIT OL
========================================================= */

async function registerUser() {

  const usernameInput =
    document.getElementById(
      "registerUsername"
    );

  const emailInput =
    document.getElementById(
      "registerEmail"
    );

  const passwordInput =
    document.getElementById(
      "registerPassword"
    );

  const passwordAgainInput =
    document.getElementById(
      "registerPasswordAgain"
    );


  if (
    !usernameInput ||
    !emailInput ||
    !passwordInput ||
    !passwordAgainInput
  ) {

    return;

  }


  const username =
    usernameInput.value.trim();


  const email =
    emailInput.value.trim();


  const password =
    passwordInput.value;


  const passwordAgain =
    passwordAgainInput.value;


  if (
    !username ||
    !email ||
    !password ||
    !passwordAgain
  ) {

    alert(
      "Tüm alanları doldur."
    );

    return;

  }


  if (
    username.length <
    3
  ) {

    alert(
      "Kullanıcı adı en az 3 karakter olmalı."
    );

    return;

  }


  if (
    username.length >
    25
  ) {

    alert(
      "Kullanıcı adı en fazla 25 karakter olabilir."
    );

    return;

  }


  if (
    password.length <
    6
  ) {

    alert(
      "Şifre en az 6 karakter olmalı."
    );

    return;

  }


  if (
    password !==
    passwordAgain
  ) {

    alert(
      "Şifreler aynı değil."
    );

    return;

  }


  try {


    await initializeFirebaseAuth();


    const result =
      await firebaseAuthFunctions
        .createUserWithEmailAndPassword(

          firebaseAuth,

          email,

          password

        );


    await firebaseAuthFunctions
      .updateProfile(

        result.user,

        {

          displayName:
            username

        }

      );


    firebaseUser =
      firebaseAuth.currentUser;


    updateAccountUI();


    usernameInput.value =
      "";

    emailInput.value =
      "";

    passwordInput.value =
      "";

    passwordAgainInput.value =
      "";


    closeLoginModal();


    alert(
      "Hesabın başarıyla oluşturuldu."
    );

  }

  catch (error) {


    alert(

      getFirebaseErrorMessage(
        error
      )

    );

  }

}


/* =========================================================
   E-POSTA / ŞİFRE İLE GİRİŞ
========================================================= */

async function loginUser() {

  const emailInput =
    document.getElementById(
      "loginEmail"
    );


  const passwordInput =
    document.getElementById(
      "loginPassword"
    );


  if (
    !emailInput ||
    !passwordInput
  ) {

    return;

  }


  const email =
    emailInput.value.trim();


  const password =
    passwordInput.value;


  if (
    !email ||
    !password
  ) {

    alert(
      "E-posta ve şifreyi yaz."
    );

    return;

  }


  try {


    await initializeFirebaseAuth();


    await firebaseAuthFunctions
      .signInWithEmailAndPassword(

        firebaseAuth,

        email,

        password

      );


    passwordInput.value =
      "";


    closeLoginModal();

  }

  catch (error) {


    alert(

      getFirebaseErrorMessage(
        error
      )

    );

  }

}


/* =========================================================
   GOOGLE İLE GİRİŞ
========================================================= */

async function loginWithGoogle() {

  try {


    await initializeFirebaseAuth();


    const provider =
      new firebaseAuthFunctions
        .GoogleAuthProvider();


    provider.setCustomParameters({

      prompt:
        "select_account"

    });


    await firebaseAuthFunctions
      .signInWithPopup(

        firebaseAuth,

        provider

      );


    closeLoginModal();

  }

  catch (error) {


    alert(

      getFirebaseErrorMessage(
        error
      )

    );

  }

}


/* =========================================================
   ÇIKIŞ YAP
========================================================= */

async function logoutUser() {

  try {


    await initializeFirebaseAuth();


    await firebaseAuthFunctions
      .signOut(
        firebaseAuth
      );


    const menu =
      document.getElementById(
        "profileMenu"
      );


    if (menu) {

      menu.classList.remove(
        "active"
      );

    }


    goHome();

  }

  catch (error) {


    console.error(
      error
    );


    alert(
      "Çıkış yapılırken bir hata oluştu."
    );

  }

}


/* =========================================================
   PROFİL MENÜ
========================================================= */

function toggleProfileMenu() {

  const menu =
    document.getElementById(
      "profileMenu"
    );


  if (!menu) {

    return;

  }


  menu.classList.toggle(
    "active"
  );

}


/* =========================================================
   KULLANICIYA ÖZEL LOCALSTORAGE
========================================================= */

function getUserStorageId() {

  const user =
    getCurrentUser();


  if (user) {

    return user.uid;

  }


  return "guest";

}


function getHistoryStorageKey() {

  return (
    "nemusubWatchHistory-" +
    getUserStorageId()
  );

}


function getLastEpisodeStorageKey() {

  return (
    "nemusubLastEpisode-" +
    getUserStorageId()
  );

}


function getProgressStorageKey() {

  return (
    "nemusubVideoProgress-" +
    getUserStorageId()
  );

}


/* =========================================================
   İZLEME GEÇMİŞİ
========================================================= */

function getWatchHistory() {

  try {

    return JSON.parse(

      localStorage.getItem(
        getHistoryStorageKey()
      )

    ) || [];

  }

  catch (error) {

    return [];

  }

}


function saveEpisodeToHistory(
  anime,
  season,
  episode
) {

  let history =
    getWatchHistory();


  history =
    history.filter(

      function (item) {

        return !(
          item.anime === anime &&
          item.season === season &&
          item.episode === episode
        );

      }

    );


  history.unshift({

    anime:
      anime,

    season:
      season,

    episode:
      episode,

    date:
      Date.now()

  });


  history =
    history.slice(
      0,
      20
    );


  localStorage.setItem(

    getHistoryStorageKey(),

    JSON.stringify(
      history
    )

  );


  localStorage.setItem(

    getLastEpisodeStorageKey(),

    JSON.stringify({

      anime:
        anime,

      season:
        season,

      episode:
        episode

    })

  );


  renderContinueWatching();

  renderWatchHistory();

}


/* =========================================================
   KALDIĞIN YERDEN DEVAM ET
========================================================= */

function renderContinueWatching() {

  const section =
    document.getElementById(
      "continueWatchingSection"
    );


  const card =
    document.getElementById(
      "continueWatchingCard"
    );


  if (
    !section ||
    !card
  ) {

    return;

  }


  let last =
    null;


  try {

    last =
      JSON.parse(

        localStorage.getItem(
          getLastEpisodeStorageKey()
        )

      );

  }

  catch (error) {

    last =
      null;

  }


  if (
    !last ||
    !animeData[
      last.anime
    ]
  ) {

    section.style.display =
      "none";

    return;

  }


  const anime =
    animeData[
      last.anime
    ];


  const progress =
    getEpisodeProgress(

      last.anime,
      last.season,
      last.episode

    );


  const percentage =
    progress.duration >
    0

      ?

    Math.min(

      100,

      Math.round(

        (
          progress.time /
          progress.duration
        ) *
        100

      )

    )

      :

    0;


  card.innerHTML =
    `
    <div
      class="continue-cover"
      style="background-image:url('${anime.cover}')"
    ></div>

    <div class="continue-info">

      <h3>
        ${escapeCommentHtml(anime.title)}
      </h3>

      <p>
        ${last.season}. Sezon
        •
        ${last.episode}. Bölüm
      </p>

      <div class="continue-progress">

        <div
          class="continue-progress-bar"
          style="width:${percentage}%"
        ></div>

      </div>

      <span class="continue-time">

        ${
          progress.time > 0
            ?
          formatVideoTime(
            progress.time
          ) +
          "'den devam et"
            :
          "Bölüme devam et"
        }

      </span>

      <button class="continue-button">

        <i class="fa-solid fa-play"></i>

        Devam Et

      </button>

    </div>
    `;


  card.onclick =
    function () {


      openAnime(
        last.anime
      );


      openSeason(
        last.season
      );


      openEpisode(
        last.season,
        last.episode
      );

    };


  section.style.display =
    "block";

}


/* =========================================================
   GEÇMİŞİ GÖSTER
========================================================= */

function renderWatchHistory() {

  const section =
    document.getElementById(
      "watchHistorySection"
    );


  const list =
    document.getElementById(
      "watchHistoryList"
    );


  if (
    !section ||
    !list
  ) {

    return;

  }


  const history =
    getWatchHistory();


  list.innerHTML =
    "";


  if (
    history.length ===
    0
  ) {

    section.style.display =
      "none";

    return;

  }


  history.forEach(

    function (item) {


      const anime =
        animeData[
          item.anime
        ];


      if (!anime) {

        return;

      }


      const card =
        document.createElement(
          "article"
        );


      card.className =
        "history-card";


      card.innerHTML =
        `
        <div
          class="history-cover"
          style="background-image:url('${anime.cover}')"
        ></div>

        <div class="history-info">

          <strong>
            ${escapeCommentHtml(anime.title)}
          </strong>

          <span>
            ${item.season}. Sezon
            •
            ${item.episode}. Bölüm
          </span>

        </div>
        `;


      card.onclick =
        function () {


          openAnime(
            item.anime
          );


          openSeason(
            item.season
          );


          openEpisode(
            item.season,
            item.episode
          );

        };


      list.appendChild(
        card
      );

    }

  );


  section.style.display =
    "block";

}


/* =========================================================
   GEÇMİŞİ TEMİZLE
========================================================= */

function clearWatchHistory() {

  if (
    !confirm(
      "İzleme geçmişi temizlensin mi?"
    )
  ) {

    return;

  }


  localStorage.removeItem(
    getHistoryStorageKey()
  );


  localStorage.removeItem(
    getLastEpisodeStorageKey()
  );


  localStorage.removeItem(
    getProgressStorageKey()
  );


  renderContinueWatching();

  renderWatchHistory();

}


/* =========================================================
   VİDEO İLERLEMESİ
========================================================= */

function getAllVideoProgress() {

  try {

    return JSON.parse(

      localStorage.getItem(
        getProgressStorageKey()
      )

    ) || {};

  }

  catch (error) {

    return {};

  }

}


function getEpisodeProgress(
  anime,
  season,
  episode
) {

  const all =
    getAllVideoProgress();


  const key =
    anime +
    "-" +
    season +
    "-" +
    episode;


  return all[key] || {

    time:
      0,

    duration:
      0

  };

}


function saveEpisodeProgress(
  time,
  duration
) {

  if (!activeEpisode) {

    return;

  }


  const all =
    getAllVideoProgress();


  const key =
    activeEpisode.anime +
    "-" +
    activeEpisode.season +
    "-" +
    activeEpisode.episode;


  all[key] = {

    time:
      Math.floor(
        time
      ),

    duration:
      Math.floor(
        duration
      )

  };


  localStorage.setItem(

    getProgressStorageKey(),

    JSON.stringify(
      all
    )

  );

}


function setupVideoProgressTracking() {

  if (
    !activeEpisode ||
    !videoPlayer ||
    videoPlayer.style.display ===
      "none"
  ) {

    return;

  }


  const saved =
    getEpisodeProgress(

      activeEpisode.anime,

      activeEpisode.season,

      activeEpisode.episode

    );


  const restore =
    function () {


      if (
        saved.time > 5 &&
        videoPlayer.duration &&
        saved.time <
          videoPlayer.duration -
          10
      ) {

        videoPlayer.currentTime =
          saved.time;

      }

    };


  if (
    videoPlayer.readyState >=
    1
  ) {

    restore();

  }

  else {

    videoPlayer.addEventListener(

      "loadedmetadata",

      restore,

      {
        once:
          true
      }

    );

  }


  videoPlayer.ontimeupdate =
    function () {


      if (
        videoPlayer.currentTime >
          0 &&
        videoPlayer.duration >
          0
      ) {

        saveEpisodeProgress(

          videoPlayer.currentTime,

          videoPlayer.duration

        );

      }

    };

}


/* =========================================================
   SÜRE FORMAT
========================================================= */

function formatVideoTime(
  seconds
) {

  seconds =
    Math.floor(
      seconds
    );


  const hours =
    Math.floor(
      seconds /
      3600
    );


  const minutes =
    Math.floor(
      (
        seconds %
        3600
      ) /
      60
    );


  const remain =
    seconds %
    60;


  if (
    hours >
    0
  ) {

    return (
      hours +
      ":" +
      String(
        minutes
      ).padStart(
        2,
        "0"
      ) +
      ":" +
      String(
        remain
      ).padStart(
        2,
        "0"
      )
    );

  }


  return (
    minutes +
    ":" +
    String(
      remain
    ).padStart(
      2,
      "0"
    )
  );

}


/* =========================================================
   ÖNCEKİ / SONRAKİ BÖLÜM
========================================================= */

function updateEpisodeNavigation() {

  if (!activeEpisode) {

    return;

  }


  const anime =
    animeData[
      activeEpisode.anime
    ];


  if (!anime) {

    return;

  }


  const previous =
    document.getElementById(
      "previousEpisodeButton"
    );


  const next =
    document.getElementById(
      "nextEpisodeButton"
    );


  if (previous) {

    previous.disabled =
      activeEpisode.season ===
        1 &&
      activeEpisode.episode ===
        1;

  }


  const lastSeason =
    anime.seasons.length;


  if (next) {

    next.disabled =
      activeEpisode.season ===
        lastSeason &&
      activeEpisode.episode ===
        anime.seasons[
          lastSeason - 1
        ];

  }

}


function goPreviousEpisode() {

  if (!activeEpisode) {

    return;

  }


  let season =
    activeEpisode.season;


  let episode =
    activeEpisode.episode -
    1;


  if (
    episode <
    1
  ) {

    season--;


    if (
      season <
      1
    ) {

      return;

    }


    episode =
      animeData[
        activeEpisode.anime
      ].seasons[
        season - 1
      ];

  }


  currentSeason =
    season;


  openEpisode(
    season,
    episode
  );

}


function goNextEpisode() {

  if (!activeEpisode) {

    return;

  }


  const anime =
    animeData[
      activeEpisode.anime
    ];


  if (!anime) {

    return;

  }


  let season =
    activeEpisode.season;


  let episode =
    activeEpisode.episode +
    1;


  if (
    episode >
    anime.seasons[
      season - 1
    ]
  ) {

    season++;

    episode =
      1;

  }


  if (
    season >
    anime.seasons.length
  ) {

    return;

  }


  currentSeason =
    season;


  openEpisode(
    season,
    episode
  );

}


/* =========================================================
   YORUM STORAGE KEY
========================================================= */

function getCommentStorageKey() {

  if (!activeEpisode) {

    return null;

  }


  return (
    "nemusub-comments-" +
    activeEpisode.anime +
    "-" +
    activeEpisode.season +
    "-" +
    activeEpisode.episode
  );

}


/* =========================================================
   SPOILER
========================================================= */

function toggleCommentSpoiler() {

  commentSpoilerActive =
    !commentSpoilerActive;


  const button =
    document.getElementById(
      "spoilerButton"
    );


  if (button) {

    button.classList.toggle(

      "active",

      commentSpoilerActive

    );

  }

}


/* =========================================================
   YORUMA RESİM EKLE
========================================================= */

function previewCommentImage(
  event
) {

  const file =
    event.target.files[
      0
    ];


  if (!file) {

    return;

  }


  if (
    !file.type.startsWith(
      "image/"
    )
  ) {

    alert(
      "Sadece resim seçebilirsin."
    );

    event.target.value =
      "";

    return;

  }


  if (
    file.size >
    2 *
    1024 *
    1024
  ) {

    alert(
      "En fazla 2 MB resim kullanabilirsin."
    );


    event.target.value =
      "";

    return;

  }


  const reader =
    new FileReader();


  reader.onload =
    function (
      loadEvent
    ) {


      selectedCommentImage =
        loadEvent.target.result;


      const preview =
        document.getElementById(
          "commentImagePreview"
        );


      const container =
        document.getElementById(
          "commentImagePreviewContainer"
        );


      if (preview) {

        preview.src =
          selectedCommentImage;

      }


      if (container) {

        container.style.display =
          "block";

      }

    };


  reader.readAsDataURL(
    file
  );

}


function removeCommentImage() {

  selectedCommentImage =
    null;


  const input =
    document.getElementById(
      "commentImageInput"
    );


  const container =
    document.getElementById(
      "commentImagePreviewContainer"
    );


  if (input) {

    input.value =
      "";

  }


  if (container) {

    container.style.display =
      "none";

  }

}


/* =========================================================
   YORUM GÖNDER
========================================================= */

function submitComment() {

  if (!activeEpisode) {

    return;

  }


  const user =
    getCurrentUser();


  if (!user) {

    alert(
      "Yorum yapmak için giriş yapmalısın."
    );


    openLoginModal();

    return;

  }


  const input =
    document.getElementById(
      "commentInput"
    );


  if (!input) {

    return;

  }


  const text =
    input.value.trim();


  if (
    !text &&
    !selectedCommentImage
  ) {

    return;

  }


  if (
    text.length >
    2000
  ) {

    alert(
      "Yorum en fazla 2000 karakter olabilir."
    );

    return;

  }


  const key =
    getCommentStorageKey();


  if (!key) {

    return;

  }


  let comments =
    [];


  try {

    comments =
      JSON.parse(

        localStorage.getItem(
          key
        )

      ) || [];

  }

  catch (error) {

    comments =
      [];

  }


  const commentId =
    typeof crypto !==
      "undefined" &&
    crypto.randomUUID

      ?

    crypto.randomUUID()

      :

    (
      Date.now() +
      "-" +
      Math.random()
        .toString(36)
        .slice(2)
    );


  comments.unshift({

    id:
      commentId,

    uid:
      user.uid,

    username:
      user.username,

    text:
      text,

    image:
      selectedCommentImage,

    spoiler:
      commentSpoilerActive,

    date:
      Date.now()

  });


  try {

    localStorage.setItem(

      key,

      JSON.stringify(
        comments
      )

    );

  }

  catch (error) {


    alert(
      "Yorum kaydedilemedi. Eklediğin resim çok büyük olabilir."
    );

    return;

  }


  input.value =
    "";


  commentSpoilerActive =
    false;


  const spoilerButton =
    document.getElementById(
      "spoilerButton"
    );


  if (spoilerButton) {

    spoilerButton.classList.remove(
      "active"
    );

  }


  removeCommentImage();

  loadComments();

}


/* =========================================================
   YORUMLARI GÖSTER
========================================================= */

function loadComments() {

  const list =
    document.getElementById(
      "commentsList"
    );


  const count =
    document.getElementById(
      "commentCount"
    );


  if (
    !activeEpisode ||
    !list ||
    !count
  ) {

    return;

  }


  let comments =
    [];


  try {

    comments =
      JSON.parse(

        localStorage.getItem(
          getCommentStorageKey()
        )

      ) || [];

  }

  catch (error) {

    comments =
      [];

  }


  count.textContent =
    comments.length;


  list.innerHTML =
    "";


  if (
    comments.length ===
    0
  ) {

    list.innerHTML =
      `
      <div class="search-empty">
        Henüz yorum yok.
      </div>
      `;

    return;

  }


  const currentUser =
    getCurrentUser();


  comments.forEach(

    function (
      comment,
      index
    ) {


      const item =
        document.createElement(
          "article"
        );


      item.className =
        "comment-item";


      const safeText =
        escapeCommentHtml(
          comment.text
        );


      const safeUsername =
        escapeCommentHtml(
          comment.username ||
          "Kullanıcı"
        );


      const image =
        comment.image

          ?

        `
        <img
          class="comment-uploaded-image"
          src="${comment.image}"
          alt="Yorum resmi"
        >
        `

          :

        "";


      let body =
        `
        <p class="comment-text">
          ${safeText}
        </p>

        ${image}
        `;


      if (
        comment.spoiler
      ) {

        body =
          `
          <div
            class="spoiler-box"
            onclick="revealSpoiler(this)"
          >

            <span
              class="spoiler-warning"
            >
              ⚠ Spoiler içeriyor —
              görmek için tıkla
            </span>

            <div
              class="spoiler-hidden-content"
              style="display:none;"
            >

              <p class="comment-text">
                ${safeText}
              </p>

              ${image}

            </div>

          </div>
          `;

      }


      const canDelete =
        currentUser &&
        comment.uid &&
        currentUser.uid ===
          comment.uid;


      const deleteButton =
        canDelete

          ?

        `
        <button
          type="button"
          class="comment-delete-button"
          onclick="deleteComment('${comment.id || ""}', ${index})"
        >

          <i class="fa-solid fa-trash"></i>

          Sil

        </button>
        `

          :

        "";


      item.innerHTML =
        `
        <div class="comment-user-avatar">

          <i class="fa-solid fa-user"></i>

        </div>


        <div class="comment-content">

          <div class="comment-user-row">

            <span class="comment-username">

              ${safeUsername}

            </span>


            <span class="comment-date">

              ${formatCommentDate(comment.date)}

            </span>


            ${deleteButton}

          </div>


          ${body}

        </div>
        `;


      list.appendChild(
        item
      );

    }

  );

}


/* =========================================================
   YORUM SİL
========================================================= */

function deleteComment(
  commentId,
  fallbackIndex
) {

  const user =
    getCurrentUser();


  if (!user) {

    alert(
      "Yorum silmek için giriş yapmalısın."
    );

    return;

  }


  const key =
    getCommentStorageKey();


  if (!key) {

    return;

  }


  let comments =
    [];


  try {

    comments =
      JSON.parse(

        localStorage.getItem(
          key
        )

      ) || [];

  }

  catch (error) {

    return;

  }


  let index =
    -1;


  if (commentId) {

    index =
      comments.findIndex(

        function (comment) {

          return (
            comment.id ===
            commentId
          );

        }

      );

  }


  if (
    index ===
    -1
  ) {

    index =
      fallbackIndex;

  }


  const comment =
    comments[index];


  if (!comment) {

    return;

  }


  if (
    !comment.uid ||
    comment.uid !==
      user.uid
  ) {

    alert(
      "Sadece kendi yorumunu silebilirsin."
    );

    return;

  }


  const approved =
    confirm(
      "Bu yorumu silmek istiyor musun?"
    );


  if (!approved) {

    return;

  }


  comments.splice(
    index,
    1
  );


  localStorage.setItem(

    key,

    JSON.stringify(
      comments
    )

  );


  loadComments();

}


/* =========================================================
   SPOILER GÖSTER
========================================================= */

function revealSpoiler(
  element
) {

  if (
    element.classList.contains(
      "revealed"
    )
  ) {

    return;

  }


  const warning =
    element.querySelector(
      ".spoiler-warning"
    );


  const hidden =
    element.querySelector(
      ".spoiler-hidden-content"
    );


  if (warning) {

    warning.style.display =
      "none";

  }


  if (hidden) {

    hidden.style.display =
      "block";

  }


  element.classList.add(
    "revealed"
  );

}


/* =========================================================
   YORUM TARİHİ
========================================================= */

function formatCommentDate(
  date
) {

  const difference =
    Date.now() -
    Number(
      date
    );


  const minutes =
    Math.floor(
      difference /
      60000
    );


  if (
    minutes <
    1
  ) {

    return "şimdi";

  }


  if (
    minutes <
    60
  ) {

    return (
      minutes +
      " dk"
    );

  }


  const hours =
    Math.floor(
      minutes /
      60
    );


  if (
    hours <
    24
  ) {

    return (
      hours +
      " sa"
    );

  }


  const days =
    Math.floor(
      hours /
      24
    );


  if (
    days <
    30
  ) {

    return (
      days +
      " gün"
    );

  }


  const dateObject =
    new Date(
      date
    );


  return dateObject
    .toLocaleDateString(
      "tr-TR"
    );

}


/* =========================================================
   HTML GÜVENLİĞİ
========================================================= */

function escapeCommentHtml(
  value
) {

  const div =
    document.createElement(
      "div"
    );


  div.textContent =
    value || "";


  return div.innerHTML;

}


/* =========================================================
   PROFİL KISAYOLLARI
========================================================= */

function scrollToContinueWatching() {

  goHome();


  setTimeout(

    function () {


      const section =
        document.getElementById(
          "continueWatchingSection"
        );


      if (
        section &&
        section.style.display !==
          "none"
      ) {

        section.scrollIntoView({

          behavior:
            "smooth"

        });

      }

    },

    100

  );

}


function scrollToWatchHistory() {

  goHome();


  setTimeout(

    function () {


      const section =
        document.getElementById(
          "watchHistorySection"
        );


      if (
        section &&
        section.style.display !==
          "none"
      ) {

        section.scrollIntoView({

          behavior:
            "smooth"

        });

      }

    },

    100

  );

}


/* =========================================================
   DIŞARI TIKLAMA
========================================================= */

document.addEventListener(

  "click",

  function (
    event
  ) {


    const searchBox =
      document.getElementById(
        "searchBox"
      );


    const searchButton =
      document.querySelector(
        ".search-button"
      );


    if (
      searchBox &&
      searchButton &&
      searchBox.classList.contains(
        "active"
      ) &&
      !searchBox.contains(
        event.target
      ) &&
      !searchButton.contains(
        event.target
      )
    ) {

      closeSearch();

    }


    const menu =
      document.getElementById(
        "profileMenu"
      );


    const profileArea =
      document.getElementById(
        "profileArea"
      );


    if (
      menu &&
      profileArea &&
      menu.classList.contains(
        "active"
      ) &&
      !profileArea.contains(
        event.target
      )
    ) {

      menu.classList.remove(
        "active"
      );

    }

  }

);


/* =========================================================
   ESC
========================================================= */

document.addEventListener(

  "keydown",

  function (
    event
  ) {


    if (
      event.key ===
      "Escape"
    ) {


      closeSearch();

      closeLoginModal();


      const menu =
        document.getElementById(
          "profileMenu"
        );


      if (menu) {

        menu.classList.remove(
          "active"
        );

      }

    }

  }

);


/* =========================================================
   SAYFA BAŞLANGICI
========================================================= */

document.addEventListener(

  "DOMContentLoaded",

  async function () {


    createAnimeList();


    goHome();


    try {


      await initializeFirebaseAuth();


    }

    catch (error) {


      console.error(
        "Firebase bağlantı hatası:",
        error
      );


      updateAccountUI();

      renderContinueWatching();

      renderWatchHistory();

    }

  }

);
/* =========================================================
   NEMUSUB - FIRESTORE ORTAK YORUM SİSTEMİ
   BU KOD SCRIPT.JS DOSYASININ EN ALTINDA KALACAK
========================================================= */

let firebaseDb = null;
let firebaseFirestoreFunctions = null;
let commentsUnsubscribe = null;


/* =========================================================
   FIREBASE + FIRESTORE BAŞLAT
========================================================= */

function initializeFirebaseAuth() {

  if (firebaseReadyPromise) {
    return firebaseReadyPromise;
  }

  firebaseReadyPromise = Promise.all([

    import(
      "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js"
    ),

    import(
      "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js"
    ),

    import(
      "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js"
    )

  ]).then(([appModule, authModule, firestoreModule]) => {

    const app =
      appModule.initializeApp(
        firebaseConfig
      );


    /* ==============================
       GİRİŞ SİSTEMİ
    ============================== */

    firebaseAuth =
      authModule.getAuth(
        app
      );

    firebaseAuthFunctions =
      authModule;


    /* ==============================
       FIRESTORE
    ============================== */

    firebaseDb =
      firestoreModule.getFirestore(
        app
      );

    firebaseFirestoreFunctions =
      firestoreModule;


    /* ==============================
       KULLANICI DURUMU
    ============================== */

    authModule.onAuthStateChanged(

      firebaseAuth,

      function (user) {

        firebaseUser =
          user;

        updateAccountUI();

        renderContinueWatching();

        renderWatchHistory();


        if (activeEpisode) {

          loadComments();

        }

      }

    );


    return true;

  }).catch(function (error) {

    console.error(
      "Firebase başlatılamadı:",
      error
    );

    throw error;

  });


  return firebaseReadyPromise;
}


/* =========================================================
   FIRESTORE'A YORUM GÖNDER
========================================================= */

async function submitComment() {

  if (!activeEpisode) {
    return;
  }


  const user =
    getCurrentUser();


  if (!user) {

    alert(
      "Yorum yapmak için giriş yapmalısın."
    );

    openLoginModal();

    return;
  }


  const input =
    document.getElementById(
      "commentInput"
    );


  if (!input) {
    return;
  }


  const text =
    input.value.trim();


  if (
    !text &&
    !selectedCommentImage
  ) {
    return;
  }


  if (text.length > 2000) {

    alert(
      "Yorum en fazla 2000 karakter olabilir."
    );

    return;
  }


  /*
     Firestore'a direkt resim kaydettiğimiz için
     çok büyük resimleri şimdilik engelliyoruz.
  */

  if (
    selectedCommentImage &&
    selectedCommentImage.length > 600000
  ) {

    alert(
      "Resim fazla büyük. Daha küçük bir resim seç."
    );

    return;
  }


  try {

    await initializeFirebaseAuth();


    const episodeKey =
      activeEpisode.anime +
      "-" +
      activeEpisode.season +
      "-" +
      activeEpisode.episode;


    await firebaseFirestoreFunctions.addDoc(

      firebaseFirestoreFunctions.collection(
        firebaseDb,
        "comments"
      ),

      {

        uid:
          user.uid,

        username:
          user.username,

        anime:
          activeEpisode.anime,

        season:
          activeEpisode.season,

        episode:
          activeEpisode.episode,

        episodeKey:
          episodeKey,

        text:
          text,

        image:
          selectedCommentImage || "",

        spoiler:
          commentSpoilerActive,

        createdAtMs:
          Date.now(),

        createdAt:
          firebaseFirestoreFunctions.serverTimestamp()

      }

    );


    /* ==============================
       YORUM KUTUSUNU TEMİZLE
    ============================== */

    input.value =
      "";


    commentSpoilerActive =
      false;


    const spoilerButton =
      document.getElementById(
        "spoilerButton"
      );


    if (spoilerButton) {

      spoilerButton.classList.remove(
        "active"
      );

    }


    removeCommentImage();

  }

  catch (error) {

    console.error(
      "Yorum gönderme hatası:",
      error
    );


    if (
      error.code ===
      "permission-denied"
    ) {

      alert(
        "Firestore yorum izni vermedi."
      );

      return;
    }


    alert(
      "Yorum gönderilemedi."
    );

  }

}


/* =========================================================
   FIRESTORE'DAN YORUMLARI GETİR
========================================================= */

async function loadComments() {

  const list =
    document.getElementById(
      "commentsList"
    );


  const count =
    document.getElementById(
      "commentCount"
    );


  if (
    !activeEpisode ||
    !list ||
    !count
  ) {
    return;
  }


  /*
     Önceki bölümün canlı bağlantısını kapat.
  */

  if (commentsUnsubscribe) {

    commentsUnsubscribe();

    commentsUnsubscribe =
      null;

  }


  list.innerHTML = `
    <div class="search-empty">
      Yorumlar yükleniyor...
    </div>
  `;


  try {

    await initializeFirebaseAuth();


    const episodeKey =
      activeEpisode.anime +
      "-" +
      activeEpisode.season +
      "-" +
      activeEpisode.episode;


    const commentsQuery =
      firebaseFirestoreFunctions.query(

        firebaseFirestoreFunctions.collection(
          firebaseDb,
          "comments"
        ),

        firebaseFirestoreFunctions.where(
          "episodeKey",
          "==",
          episodeKey
        )

      );


    /*
       onSnapshot sayesinde yorumlar
       ANLIK olarak güncellenir.
    */

    commentsUnsubscribe =
      firebaseFirestoreFunctions.onSnapshot(

        commentsQuery,

        function (snapshot) {

          const comments =
            [];


          snapshot.forEach(

            function (documentSnapshot) {

              comments.push({

                id:
                  documentSnapshot.id,

                ...documentSnapshot.data()

              });

            }

          );


          /*
             En yeni yorum üstte.
          */

          comments.sort(

            function (a, b) {

              return (
                Number(
                  b.createdAtMs || 0
                ) -
                Number(
                  a.createdAtMs || 0
                )
              );

            }

          );


          count.textContent =
            comments.length;


          list.innerHTML =
            "";


          if (
            comments.length ===
            0
          ) {

            list.innerHTML = `
              <div class="search-empty">
                Henüz yorum yok.
              </div>
            `;

            return;
          }


          const currentUser =
            getCurrentUser();


          comments.forEach(

            function (comment) {

              const item =
                document.createElement(
                  "article"
                );


              item.className =
                "comment-item";


              const safeText =
                escapeCommentHtml(
                  comment.text || ""
                );


              const safeUsername =
                escapeCommentHtml(
                  comment.username ||
                  "Kullanıcı"
                );


              /* ==============================
                 RESİM
              ============================== */

              const image =
                comment.image

                  ?

                `
                  <img
                    class="comment-uploaded-image"
                    src="${comment.image}"
                    alt="Yorum resmi"
                  >
                `

                  :

                "";


              /* ==============================
                 NORMAL YORUM
              ============================== */

              let body = `

                <p class="comment-text">
                  ${safeText}
                </p>

                ${image}

              `;


              /* ==============================
                 SPOILER
              ============================== */

              if (
                comment.spoiler
              ) {

                body = `

                  <div
                    class="spoiler-box"
                    onclick="revealSpoiler(this)"
                  >

                    <span
                      class="spoiler-warning"
                    >
                      ⚠ Spoiler içeriyor —
                      görmek için tıkla
                    </span>


                    <div
                      class="spoiler-hidden-content"
                      style="display:none;"
                    >

                      <p class="comment-text">
                        ${safeText}
                      </p>

                      ${image}

                    </div>

                  </div>

                `;

              }


              /* ==============================
                 YORUM SAHİBİ Mİ?
              ============================== */

              const canDelete =
                currentUser &&
                comment.uid &&
                currentUser.uid ===
                  comment.uid;


              /* ==============================
                 SİL BUTONU
              ============================== */

              const deleteButton =
                canDelete

                  ?

                `

                  <button
                    type="button"
                    class="comment-delete-button"
                    onclick="deleteComment('${comment.id}')"
                  >

                    <i class="fa-solid fa-trash"></i>

                    Sil

                  </button>

                `

                  :

                "";


              /* ==============================
                 YORUM HTML
              ============================== */

              item.innerHTML = `

                <div class="comment-user-avatar">

                  <i class="fa-solid fa-user"></i>

                </div>


                <div class="comment-content">

                  <div class="comment-user-row">

                    <span class="comment-username">

                      ${safeUsername}

                    </span>


                    <span class="comment-date">

                      ${formatCommentDate(
                        comment.createdAtMs
                      )}

                    </span>


                    ${deleteButton}

                  </div>


                  ${body}

                </div>

              `;


              list.appendChild(
                item
              );

            }

          );

        },


        function (error) {

          console.error(
            "Yorumları okuma hatası:",
            error
          );


          list.innerHTML = `

            <div class="search-empty">

              Yorumlar yüklenemedi.

            </div>

          `;

        }

      );

  }

  catch (error) {

    console.error(
      "Firestore yorum hatası:",
      error
    );


    list.innerHTML = `

      <div class="search-empty">

        Yorumlar yüklenemedi.

      </div>

    `;

  }

}


/* =========================================================
   FIRESTORE YORUM SİL
========================================================= */

async function deleteComment(
  commentId
) {

  const user =
    getCurrentUser();


  if (!user) {

    alert(
      "Yorum silmek için giriş yapmalısın."
    );

    return;
  }


  if (!commentId) {
    return;
  }


  const approved =
    confirm(
      "Bu yorumu silmek istiyor musun?"
    );


  if (!approved) {
    return;
  }


  try {

    await initializeFirebaseAuth();


    const commentReference =
      firebaseFirestoreFunctions.doc(

        firebaseDb,

        "comments",

        commentId

      );


    await firebaseFirestoreFunctions.deleteDoc(
      commentReference
    );

  }

  catch (error) {

    console.error(
      "Yorum silme hatası:",
      error
    );


    if (
      error.code ===
      "permission-denied"
    ) {

      alert(
        "Sadece kendi yorumunu silebilirsin."
      );

      return;
    }


    alert(
      "Yorum silinemedi."
    );

  }

}


/* =========================================================
   FIRESTORE HAZIR OLUNCA
   AÇIK BÖLÜMÜN YORUMLARINI YENİLE
========================================================= */

initializeFirebaseAuth()
  .then(function () {

    if (activeEpisode) {

      loadComments();

    }

  })
  .catch(function (error) {

    console.error(
      "Firestore başlangıç hatası:",
      error
    );

  });
/* =========================================================
   NEMUSUB - PROFİL SİSTEMİ
   CLOUDINARY + FIRESTORE
========================================================= */

const NEMUSUB_CLOUD_NAME = "omnmmxvh";
const NEMUSUB_UPLOAD_PRESET = "nemusub_profiles";

let currentProfileData = {
  username: "",
  bio: "",
  photoURL: "",
  bannerURL: ""
};


/* =========================================================
   TÜM SAYFALARI GİZLE
   PROFİL SAYFASINI DA DAHİL EDİYORUZ
========================================================= */

function hideAllPages() {

  const pages = [
    "homePage",
    "animePage",
    "seasonPage",
    "videoPage",
    "profilePage"
  ];

  pages.forEach(function (id) {

    const page =
      document.getElementById(id);

    if (page) {
      page.style.display = "none";
    }

  });

}


/* =========================================================
   PROFİL SAYFASINI AÇ
========================================================= */

async function openProfilePage() {

  const user =
    getCurrentUser();

  if (!user) {

    alert(
      "Profilini görüntülemek için giriş yapmalısın."
    );

    openLoginModal();

    return;
  }


  stopPlayers();

  hideAllPages();

  closeSearch();


  const profilePage =
    document.getElementById(
      "profilePage"
    );


  if (profilePage) {

    profilePage.style.display =
      "block";

  }


  const profileMenu =
    document.getElementById(
      "profileMenu"
    );


  if (profileMenu) {

    profileMenu.classList.remove(
      "active"
    );

  }


  await loadUserProfile();


  window.scrollTo(
    0,
    0
  );

}


/* =========================================================
   CLOUDINARY'YE RESİM YÜKLE
========================================================= */

async function uploadProfileImageToCloudinary(
  file
) {

  if (!file) {
    throw new Error(
      "Dosya seçilmedi."
    );
  }


  if (
    !file.type.startsWith(
      "image/"
    )
  ) {

    throw new Error(
      "Sadece resim yükleyebilirsin."
    );

  }


  if (
    file.size >
    5 * 1024 * 1024
  ) {

    throw new Error(
      "Resim en fazla 5 MB olabilir."
    );

  }


  const formData =
    new FormData();


  formData.append(
    "file",
    file
  );


  formData.append(
    "upload_preset",
    NEMUSUB_UPLOAD_PRESET
  );


  const response =
    await fetch(

      "https://api.cloudinary.com/v1_1/" +
      NEMUSUB_CLOUD_NAME +
      "/image/upload",

      {
        method: "POST",
        body: formData
      }

    );


  const data =
    await response.json();


  if (
    !response.ok ||
    !data.secure_url
  ) {

    console.error(
      "Cloudinary hatası:",
      data
    );

    throw new Error(
      "Resim Cloudinary'ye yüklenemedi."
    );

  }


  return data.secure_url;

}


/* =========================================================
   PROFİL FOTOĞRAFI DEĞİŞTİR
========================================================= */

async function changeProfileAvatar(
  event
) {

  const file =
    event.target.files &&
    event.target.files[0];


  if (!file) {
    return;
  }


  const user =
    getCurrentUser();


  if (!user) {

    alert(
      "Önce giriş yapmalısın."
    );

    event.target.value =
      "";

    return;
  }


  const avatar =
    document.getElementById(
      "profileAvatarImage"
    );


  const fallback =
    document.getElementById(
      "profileAvatarFallback"
    );


  try {

    const imageURL =
      await uploadProfileImageToCloudinary(
        file
      );


    currentProfileData.photoURL =
      imageURL;


    if (avatar) {

      avatar.src =
        imageURL;

      avatar.style.display =
        "block";

    }


    if (fallback) {

      fallback.style.display =
        "none";

    }


    await saveProfileToFirestore({
      photoURL: imageURL
    });


    updateProfileImages(
      imageURL
    );


    alert(
      "Profil fotoğrafın değiştirildi."
    );

  }

  catch (error) {

    console.error(
      "Profil fotoğrafı hatası:",
      error
    );

    alert(
      error.message ||
      "Profil fotoğrafı yüklenemedi."
    );

  }


  event.target.value =
    "";

}


/* =========================================================
   BANNER DEĞİŞTİR
========================================================= */

async function changeProfileBanner(
  event
) {

  const file =
    event.target.files &&
    event.target.files[0];


  if (!file) {
    return;
  }


  const user =
    getCurrentUser();


  if (!user) {

    alert(
      "Önce giriş yapmalısın."
    );

    event.target.value =
      "";

    return;
  }


  const banner =
    document.getElementById(
      "profileBanner"
    );


  try {

    const imageURL =
      await uploadProfileImageToCloudinary(
        file
      );


    currentProfileData.bannerURL =
      imageURL;


    if (banner) {

      banner.style.backgroundImage =
        `
        linear-gradient(
          180deg,
          rgba(5,5,8,.08),
          rgba(5,5,8,.35)
        ),
        url("${imageURL}")
        `;

    }


    await saveProfileToFirestore({
      bannerURL: imageURL
    });


    alert(
      "Banner değiştirildi."
    );

  }

  catch (error) {

    console.error(
      "Banner yükleme hatası:",
      error
    );

    alert(
      error.message ||
      "Banner yüklenemedi."
    );

  }


  event.target.value =
    "";

}


/* =========================================================
   NICK DEĞİŞTİR
========================================================= */

async function editProfileNickname() {

  const user =
    getCurrentUser();


  if (!user) {

    alert(
      "Önce giriş yapmalısın."
    );

    return;
  }


  const currentName =
    currentProfileData.username ||
    user.username ||
    "Kullanıcı";


  const newName =
    prompt(
      "Yeni kullanıcı adını yaz:",
      currentName
    );


  if (newName === null) {
    return;
  }


  const username =
    newName.trim();


  if (
    username.length < 3
  ) {

    alert(
      "Kullanıcı adı en az 3 karakter olmalı."
    );

    return;
  }


  if (
    username.length > 25
  ) {

    alert(
      "Kullanıcı adı en fazla 25 karakter olabilir."
    );

    return;
  }


  try {

    await initializeFirebaseAuth();


    await firebaseAuthFunctions.updateProfile(

      firebaseAuth.currentUser,

      {
        displayName: username
      }

    );


    currentProfileData.username =
      username;


    await saveProfileToFirestore({
      username: username
    });


    updateProfileUsernameUI(
      username
    );


    alert(
      "Kullanıcı adın değiştirildi."
    );

  }

  catch (error) {

    console.error(
      "Nick değiştirme hatası:",
      error
    );

    alert(
      "Kullanıcı adı değiştirilemedi."
    );

  }

}


/* =========================================================
   PROFİLİ KAYDET
========================================================= */

async function saveProfile() {

  const user =
    getCurrentUser();


  if (!user) {

    alert(
      "Önce giriş yapmalısın."
    );

    return;
  }


  const bioInput =
    document.getElementById(
      "profileBio"
    );


  const bio =
    bioInput
      ?
    bioInput.value.trim()
      :
    "";


  if (
    bio.length > 160
  ) {

    alert(
      "Hakkımda alanı en fazla 160 karakter olabilir."
    );

    return;
  }


  try {

    await saveProfileToFirestore({
      bio: bio
    });


    currentProfileData.bio =
      bio;


    alert(
      "Profilin kaydedildi."
    );

  }

  catch (error) {

    console.error(
      "Profil kaydetme hatası:",
      error
    );

    alert(
      "Profil kaydedilemedi."
    );

  }

}


/* =========================================================
   FIRESTORE'A PROFİL KAYDET
========================================================= */

async function saveProfileToFirestore(
  profileChanges
) {

  const user =
    getCurrentUser();


  if (!user) {

    throw new Error(
      "Kullanıcı girişi bulunamadı."
    );

  }


  await initializeFirebaseAuth();


  if (
    !firebaseDb ||
    !firebaseFirestoreFunctions
  ) {

    throw new Error(
      "Firestore hazır değil."
    );

  }


  const userRef =
    firebaseFirestoreFunctions.doc(

      firebaseDb,

      "users",

      user.uid

    );


  await firebaseFirestoreFunctions.setDoc(

    userRef,

    {
      ...profileChanges,

      uid:
        user.uid,

      updatedAt:
        firebaseFirestoreFunctions.serverTimestamp()
    },

    {
      merge: true
    }

  );

}


/* =========================================================
   FIRESTORE'DAN PROFİLİ GETİR
========================================================= */

async function loadUserProfile() {

  const user =
    getCurrentUser();


  if (!user) {

    clearProfileUI();

    return;
  }


  try {

    await initializeFirebaseAuth();


    const userRef =
      firebaseFirestoreFunctions.doc(

        firebaseDb,

        "users",

        user.uid

      );


    const snapshot =
      await firebaseFirestoreFunctions.getDoc(
        userRef
      );


    let profileData = {};


    if (snapshot.exists()) {

      profileData =
        snapshot.data();

    }


    const username =
      profileData.username ||
      user.username ||
      "Kullanıcı";


    currentProfileData = {

      username:
        username,

      bio:
        profileData.bio || "",

      photoURL:
        profileData.photoURL ||
        firebaseUser.photoURL ||
        "",

      bannerURL:
        profileData.bannerURL ||
        ""

    };


    /*
      Kullanıcının Firestore profil kaydı
      henüz yoksa temel kaydı oluştur.
    */

    if (!snapshot.exists()) {

      await saveProfileToFirestore({

        username:
          username,

        bio:
          "",

        photoURL:
          firebaseUser.photoURL ||
          "",

        bannerURL:
          ""

      });

    }


    renderProfileUI();

  }

  catch (error) {

    console.error(
      "Profil yükleme hatası:",
      error
    );

  }

}


/* =========================================================
   PROFİL ARAYÜZÜNÜ GÖSTER
========================================================= */

function renderProfileUI() {

  const nickname =
    document.getElementById(
      "profileNickname"
    );


  const usernameTag =
    document.getElementById(
      "profileUsernameTag"
    );


  const bio =
    document.getElementById(
      "profileBio"
    );


  const avatar =
    document.getElementById(
      "profileAvatarImage"
    );


  const fallback =
    document.getElementById(
      "profileAvatarFallback"
    );


  const banner =
    document.getElementById(
      "profileBanner"
    );


  if (nickname) {

    nickname.textContent =
      currentProfileData.username ||
      "Kullanıcı";

  }


  if (usernameTag) {

    const tag =
      createUsernameTag(
        currentProfileData.username
      );


    usernameTag.textContent =
      "@" + tag;

  }


  if (bio) {

    bio.value =
      currentProfileData.bio ||
      "";

  }


  if (
    currentProfileData.photoURL
  ) {

    if (avatar) {

      avatar.src =
        currentProfileData.photoURL;

      avatar.style.display =
        "block";

    }


    if (fallback) {

      fallback.style.display =
        "none";

    }

  }

  else {

    if (avatar) {

      avatar.removeAttribute(
        "src"
      );

      avatar.style.display =
        "none";

    }


    if (fallback) {

      fallback.style.display =
        "grid";

    }

  }


  if (
    banner &&
    currentProfileData.bannerURL
  ) {

    banner.style.backgroundImage =
      `
      linear-gradient(
        180deg,
        rgba(5,5,8,.08),
        rgba(5,5,8,.35)
      ),
      url("${currentProfileData.bannerURL}")
      `;

  }

  else if (banner) {

    banner.style.backgroundImage =
      `
      linear-gradient(
        180deg,
        rgba(5,5,8,.08),
        rgba(5,5,8,.35)
      ),
      linear-gradient(
        135deg,
        #211634,
        #0f0b18
      )
      `;

  }


  updateProfileUsernameUI(
    currentProfileData.username
  );


  updateProfileImages(
    currentProfileData.photoURL
  );

}


/* =========================================================
   KULLANICI ADINI ARAYÜZDE GÜNCELLE
========================================================= */

function updateProfileUsernameUI(
  username
) {

  const safeName =
    username ||
    "Kullanıcı";


  const navbarUsername =
    document.getElementById(
      "navbarUsername"
    );


  const menuUsername =
    document.getElementById(
      "profileMenuUsername"
    );


  const nickname =
    document.getElementById(
      "profileNickname"
    );


  const usernameTag =
    document.getElementById(
      "profileUsernameTag"
    );


  if (navbarUsername) {

    navbarUsername.textContent =
      safeName;

  }


  if (menuUsername) {

    menuUsername.textContent =
      safeName;

  }


  if (nickname) {

    nickname.textContent =
      safeName;

  }


  if (usernameTag) {

    usernameTag.textContent =
      "@" +
      createUsernameTag(
        safeName
      );

  }

}


/* =========================================================
   @KULLANICI ETİKETİ
========================================================= */

function createUsernameTag(
  username
) {

  return (
    username ||
    "kullanici"
  )

    .toLocaleLowerCase(
      "tr-TR"
    )

    .replace(
      /ı/g,
      "i"
    )

    .replace(
      /ğ/g,
      "g"
    )

    .replace(
      /ü/g,
      "u"
    )

    .replace(
      /ş/g,
      "s"
    )

    .replace(
      /ö/g,
      "o"
    )

    .replace(
      /ç/g,
      "c"
    )

    .replace(
      /[^a-z0-9_]/g,
      ""
    )

    .slice(
      0,
      25
    ) || "kullanici";

}


/* =========================================================
   NAVBARA PROFİL FOTOĞRAFI KOY
========================================================= */

function updateProfileImages(
  imageURL
) {

  const navbarAvatar =
    document.querySelector(
      ".profile-avatar"
    );


  if (!navbarAvatar) {
    return;
  }


  if (imageURL) {

    navbarAvatar.innerHTML =
      "";


    const img =
      document.createElement(
        "img"
      );


    img.src =
      imageURL;


    img.alt =
      "Profil";


    navbarAvatar.appendChild(
      img
    );

  }

  else {

    navbarAvatar.innerHTML =
      '<i class="fa-solid fa-user"></i>';

  }

}


/* =========================================================
   PROFİL ARAYÜZÜNÜ TEMİZLE
========================================================= */

function clearProfileUI() {

  currentProfileData = {
    username: "",
    bio: "",
    photoURL: "",
    bannerURL: ""
  };


  const profilePage =
    document.getElementById(
      "profilePage"
    );


  if (
    profilePage &&
    profilePage.style.display === "block"
  ) {

    goHome();

  }


  updateProfileImages(
    ""
  );

}


/* =========================================================
   KULLANICI GİRİŞ / ÇIKIŞ TAKİBİ
========================================================= */

initializeFirebaseAuth()

  .then(function () {

    firebaseAuthFunctions.onAuthStateChanged(

      firebaseAuth,

      async function (user) {

        if (user) {

          await loadUserProfile();

        }

        else {

          clearProfileUI();

        }

      }

    );

  })

  .catch(function (error) {

    console.error(
      "Profil sistemi başlatılamadı:",
      error
    );

  });