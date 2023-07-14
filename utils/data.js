const usernames = [
    "sparkleJumper",
    "midnightGazer",
    "whiskerWanderer",
    "lunaShimmer",
    "electricPixel",
    "dreamSailor",
    "cosmicChaser",
    "mysticRaven",
    "shadowBlaze",
    "emberGlimmer",
    "aquaDancer",
    "pixelProwler",
    "whisperingWillow",
    "starryEyes",
    "sereneMist",
    "radiantGlow",
    "thunderStrike",
    "enigmaSeeker",
    "crystalWave",
    "velvetWhisper",
    "frostbiteSoul",
    "seraphicGlimpse",
    "moonlitSorcerer",
    "secretWanderlust",
    "electricWhirlwind",
    "auroraBreeze",
    "ebonWanderer",
    "quicksilverGaze",
    "emberSpark",
    "luminousJourney"
];

const emails = [
    "user1@example.com",
    "user2@example.com",
    "user3@example.com",
    "user4@example.com",
    "user5@example.com",
    "user6@example.com",
    "user7@example.com",
    "user8@example.com",
    "user9@example.com",
    "user10@example.com",
    "user11@example.com",
    "user12@example.com",
    "user13@example.com",
    "user14@example.com",
    "user15@example.com",
    "user16@example.com",
    "user17@example.com",
    "user18@example.com",
    "user19@example.com",
    "user20@example.com",
    "user21@example.com",
    "user22@example.com",
    "user23@example.com",
    "user24@example.com",
    "user25@example.com",
    "user26@example.com",
    "user27@example.com",
    "user28@example.com",
    "user29@example.com",
    "user30@example.com"
];


const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () => `${getRandomArrItem(usernames)}`;

const getRandomEmail = () => `${getRandomArrItem(emails)}`;

module.exports = { getRandomUsername, getRandomEmail };