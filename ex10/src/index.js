function myFunction(){
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Mettalica",
            title: "Nothing else matters",
            release_year: 1999,
            formats: {
                1: "DVD",
                2: "MP3",
                3: "AAC"
            },
        },
    };
    return myMusic;
}

myFunction()[2];
module.exports = myFunction;