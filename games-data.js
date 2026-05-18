const GAMES_DATA = [

    {
        title: "Project Jazzgame",
        image: "images/games/projectjazzgame.png",
        platform: "Mobile ,PC",
        genre: "Open World Action Adventure",
        status: "In Development",
        description: "Parkour Meets Combat in This Open World and Fully Dynamic and Interactable Environment...",
        features: [
            "In Depth Character customization",
            "Dynamic Parkour",
            "Free Flow Combat",
            "Satisfying Ragdoll",
        ],
        links: [
            { label: "📱 Google Play", url: "https://play.google.com/store/apps/details?id=com.VEETEEGames.JazzGame", class: "btn-playstore" },
            { label: "⭐ Wishlist", url: "https://store.steampowered.com/app/3965270/Project_Jazzgame/", class: "btn-wishlist" },
            { label: "📺 Trailer", url: "https://youtu.be/fk-5LRoLAfk?si=keXnG44Xh5RFqLGk", class: "btn-steam" }
        ]
    },
    {
        title: "Blob Dash",
        image: "images/games/blobdashicon.jpg",
        platform: "Mobile",
        genre: "Casual, Arcade, Endless",
        status: "Available Now",
        description: "Move Swipe and Dash your Way through Endless Fun Blobby Chaos...",
        features: [
            "Stunning visual effects",
            "Deep character customization",
            "Endless Gameplay",
            "Leader Boards",
            "Achievements",
            "Power ups"
        ],
        links: [
            { label: "📱 Google Play", url: "https://play.google.com/store/apps/details?id=com.VEETEEgames.BlobDash", class: "btn-playstore" }
            //{ label: "🍎 App Store", url: "https://apps.apple.com", class: "btn-appstore" },
            //{ label: "🎮 Steam", url: "https://store.steampowered.com", class: "btn-steam" }
        ]
    },
    {
        title: "Quad Ball",
        image: "images/games/quadball.jpg",
        platform: "Mobile",
        genre: "Casual, Sports",
        status: "Available Now",
        description: "Defend your Goal Post And Score Your Other opponents to Knock Them Out in a Fast Paced 4 Player Balls Filled Battle Ground...",
        features: [
            "In Depth Character customization",
            "Advanced Bot AI",
            "Online multiplayer up to 4 Players",
            "Toon Stylized Graphics",
        ],
        links: [
            { label: "📱 Google Play", url: "https://play.google.com/store/apps/details?id=com.VEETEEGames.QuadBall", class: "btn-playstore" }
            //{ label: "⭐ Wishlist", url: "https://store.steampowered.com", class: "btn-wishlist" },
           // { label: "📺 Trailer", url: "https://youtube.com", class: "btn-steam" }
        ]
    }
];
function getStatusClass(status)
{
    switch (status.toLowerCase())
    {
        case "available now":
            return "status-released";

        case "coming soon":
            return "status-upcoming";

        case "in development":
            return "status-development";

        default:
            return "";
    }
}