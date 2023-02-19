const player = new Gapless5({
    loadLimit: 1,
    useHTML5Audio: false,
    // useWebAudio: false,
  });
// You can add tracks by relative or absolute URL:
player.addTrack('./music/Intro.ogg');
let LastTrack = 0
let TotalTracks = 0
player.addTrack('./music/Loop1.ogg');
LastTrack = 1
TotalTracks = TotalTracks + 1
RandomAddTrack();
// player.addTrack('./music/Loop1.ogg');

// You can also let the user upload tracks from a file loader like this:
// const files = document.getElementById('my-file-input').files;
// files.forEach(file => {
//   player.addTrack(URL.createObjectURL(file)); // this creates a 'blob://' URL
// });
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function RandomAddTrack() {
    let ThisRandomInt = getRandomInt(6)
    if (ThisRandomInt == LastTrack) {
        ThisRandomInt = 999
    }
    if (ThisRandomInt == 0) {
        if (LastTrack == 5) {
            player.addTrack('./music/Intro.ogg');
        }
        else {
            ThisRandomInt = 999;
        }
    }
    if (ThisRandomInt == 1) {
        player.addTrack('./music/Loop1.ogg');
    }
    if (ThisRandomInt == 2) {
        player.addTrack('./music/Loop2.ogg');
    }
    if (ThisRandomInt == 3) {
        player.addTrack('./music/Loop3.ogg');
    }
    if (ThisRandomInt == 4) {
        player.addTrack('./music/Loop4.ogg');
    }
    if (ThisRandomInt == 5) {
        player.addTrack('./music/Outro1.ogg');
    }
    TotalTracks = TotalTracks + 1
    if (ThisRandomInt == 999) {
        TotalTracks = TotalTracks - 1
        console.log("Retrying...")
        RandomAddTrack();
    }
    else {
        console.log("Success Added")
        console.log(ThisRandomInt)
        LastTrack = ThisRandomInt
        // ChangeText();
    }
    // if (TotalTracks >= 3) {
    //     setTimeout(function () {
    //         player.removeTrack(TotalTracks - 3)
    //         console.log("remove track")
    //         console.log(TotalTracks - 3)
    //     }, 3000);
    // }

}
// function ChangeText() {
//     if (LastTrack == 0) {
//             document.getElementById("playingtext").innerHTML="Intro";
//     }
//     if (LastTrack == 1) {
//         document.getElementById("playingtext").innerHTML="Loop1";
//     }
//     if (LastTrack == 2) {
//         document.getElementById("playingtext").innerHTML="Loop2";
//     }
//     if (LastTrack == 3) {
//         document.getElementById("playingtext").innerHTML="Loop3";
//     }
//     if (LastTrack == 4) {
//         document.getElementById("playingtext").innerHTML="Loop4";
//     }
//     if (LastTrack == 5) {
//         document.getElementById("playingtext").innerHTML="Outro";
//     }
// }
player.onnext = function (track_path) { setTimeout(function () {
    RandomAddTrack();
        }, 3000);  };