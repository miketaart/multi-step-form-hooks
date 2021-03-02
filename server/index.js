const { kMaxLength } = require('buffer');
const cors = require("cors");
const app = require('express')();
const http = require('http').Server(app);
const port = process.env.PORT || 5000;

const plants = [{
        "commonName": "Bird-of-paradise",
        "name": "Strelitzia reginae",
        "description": "Dit is een stukje over Strelitzia reginae",
        "waterAmount": "low",
        "maintenance": "easy",
        "size": "large",
        "imgUrl": "https://bs.floristic.org/image/o/893a4c8c0e3cd265c85b083536b6d8c128ad3186"
    },
    {
        "commonName": "Ari",
        "name": "Arabidopsis lyrata",
        "description": "Dit is een stukje over Arabidopsis lyrata",
        "waterAmount": "low",
        "maintenance": "easy",
        "size": "large",
        "imgUrl": "https://newfs.s3.amazonaws.com/taxon-images-239x239/Brassicaceae/arabidopsis-lyrata-ha-connherbarium.jpg"
        
    },
    {
        "commonName": "Edible banana",
        "name": "Musa acuminata",
        "description": "Dit is een stukje over Musa Dwarf Cavendish",
        "waterAmount": "low",
        "maintenance": "easy",
        "size": "large",
        "imgUrl": "https://bs.floristic.org/image/o/ce1c2346d03820c8545c9e68ee7a39139a75e83c"
    },
    {
        "commonName": "Zz plant",
        "name": "Zamioculcas zamiifolia",
        "description": "Dit is een stukje over Zamioculcas zamiifolia",
        "waterAmount": "low",
        "maintenance": "easy",
        "size": "large",
        "imgUrl": "https://bs.floristic.org/image/o/6de84e81df9c71bdfae240b26d013494dd4bf7ad"
    },
    {
        "commonName": "Canadian clearweed",
        "name": "Pilea pumila",
        "description": "Dit is een stukje over Pilea pumila",
        "waterAmount": "low",
        "maintenance": "easy",
        "size": "small",
        "imgUrl": "https://bs.floristic.org/image/o/475aa94b7ceb9a774ceb02251e582c8c3caee67e"
    },
    {
        "commonName": "Calathea",
        "name": "Goeppertia roseopicta",
        "description": "Dit is een stukje over Goeppertia roseopicta",
        "waterAmount": "low",
        "maintenance": "easy",
        "size": "large",
        "imgUrl": "https://bs.floristic.org/image/o/a009f74cc1cd79bb7e48f6a457d3b5db0b913b78"
    },
    {
        "commonName": "Yucca",
        "name": "Yucca gigantea",
        "description": "Dit is een stukje over Yucca gigantea",
        "waterAmount": "low",
        "maintenance": "hard",
        "size": "large",
        "imgUrl": "https://bs.floristic.org/image/o/cd8b732650c078f63c0cd1c6a49ec64d457a0d83"
    },
    {
        "commonName": "Spatheflower",
        "name": "Spathiphyllum cannifolium",
        "description": "Dit is een stukje over Spathiphyllum cannifolium",
        "waterAmount": "low",
        "maintenance": "hard",
        "size": "small",
        "imgUrl": "https://bs.floristic.org/image/o/e66d9175fa4dacce427554c6a3d6f2ca844486f6"
    },
    {
        "commonName": "Giuseppe",
        "name": "Goeppertia ornata",
        "description": "Dit is een stukje over Goeppertia ornata",
        "waterAmount": "high",
        "maintenance": "easy",
        "size": "small",
        "imgUrl": "https://bs.floristic.org/image/o/0afec55222dbe0a5ee48348865b57bae688e6f00"
    },
    {
        "commonName": "Devil's-ivy",
        "name": "Epipremnum aureum",
        "description": "Dit is een stukje over Epipremnum aureum",
        "waterAmount": "high",
        "maintenance": "hard",
        "size": "small",
        "imgUrl": "https://bs.floristic.org/image/o/d7281e26e4ae96c654c2f5ec4d8b2707ec09cbd3"
    },
    {
        "commonName": "Swordfern",
        "name": "Nephrolepis biserrata",
        "description": "Dit is een stukje over Nephrolepis biserrata",
        "waterAmount": "high",
        "maintenance": "hard",
        "size": "large",
        "imgUrl": "https://bs.floristic.org/image/o/12bc2ce34a31bfc2dc9f5bb244fb8900f1f00972"
    },
    {
        "commonName": "Afri",
        "name": "Dracaena trifasciata",
        "description": "Dit is een stukje over Dracaena trifasciata",
        "waterAmount": "high",
        "maintenance": "hard",
        "size": "small",
        "imgUrl": "https://bs.floristic.org/image/o/0a864ad583d95ce8e7b1af5cfddded16db142d3f"
    },
]

app.use(cors());

app.get('/', function (req, res) {
    res.json(plants);
});

http.listen(port, function () {
    console.log(`The Plantsome webserver is now listening on port :${port}`);
});