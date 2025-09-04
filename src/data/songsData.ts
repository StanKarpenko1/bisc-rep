//#region imports
import shesGotTheLookLyrics from '../assets/structure/shes-got-the-look.md?raw';
import iWantToBreakFreeLyrics from '../assets/structure/i-want-to-break-free.md?raw';
import fromTheInsideLyrics from '../assets/structure/from-the-inside.md?raw';
import letMeFreeLyrics from '../assets/structure/let-me-free.md?raw';
import mustHaveBeenLoveLyrics from '../assets/structure/must-have-been-love.md?raw';
import ghostLyrics from '../assets/structure/ghost.md?raw';
import livingOnAPrayerLyrics from '../assets/structure/living-on-a-prayer.md?raw';
import sleepingInMyCarLyrics from '../assets/structure/sleeping-in-my.md?raw';
import lostLyrics from '../assets/structure/lost.md?raw';
import comeTogetherLyrics from '../assets/structure/come-together.md?raw';
import proudMaryLyrics from '../assets/structure/proud-mary.md?raw';
import heartOfGlassLyrics from '../assets/structure/heart-of-glass.md?raw';
import nbtuLyrics from '../assets/structure/nbtu.md?raw';
import holdingOutLyrics from '../assets/structure/holding-out.md?raw';
import manIFeelLyrics from '../assets/structure/man-i-feel.md?raw';
import itsMyLifeLyrics from '../assets/structure/its-my-life.md?raw';
import highwayToHellLyrics from '../assets/structure/highway-to-hell.md?raw';
import showMustGoOnLyrics from '../assets/structure/show-must-go-on.md?raw';
//#endregion imports

export const songsData = {
  sets: [
    {
      id: "set1",
      name: "Set 1",
      songs: [
        {
          id: "song1",
          title: "She's Got The Look",
          artist: "Roxette",
          lyrics: shesGotTheLookLyrics,
          dropboxUrl: "https://www.dropbox.com/example/shes-got-the-look.mp3",
          tempo: 95
        },
        {
          id: "song2",
          title: "I Want to Break Free",
          artist: "Queen",
          lyrics: iWantToBreakFreeLyrics,
          dropboxUrl: "https://www.dropbox.com/example/i-want-to-break-free.mp3",
          tempo: 110
        },
        {
          id: "song3",
          title: "From the Inside",
          artist: "Linkin Park",
          lyrics: fromTheInsideLyrics,
          dropboxUrl: "https://www.dropbox.com/example/from-the-inside.mp3",
          tempo: 66
        },
        {
          id: "song4",
          title: "Let Me Free",
          artist: "Original",
          lyrics: letMeFreeLyrics,
          dropboxUrl: "https://www.dropbox.com/example/let-me-free.mp3",
          tempo: 97
        },
        {
          id: "song5",
          title: "Must Have Been Love",
          artist: "Roxette",
          lyrics: mustHaveBeenLoveLyrics,
          dropboxUrl: "https://www.dropbox.com/example/must-have-been-love.mp3",
          tempo: 75
        },
        {
          id: "song6",
          title: "Ghost (Original)",
          artist: "Original",
          lyrics: ghostLyrics,
          dropboxUrl: "https://www.dropbox.com/example/ghost-original.mp3",
          tempo: 78
        },
        {
          id: "song7",
          title: "Living On a Prayer",
          artist: "Bon Jovi",
          lyrics: livingOnAPrayerLyrics,
          dropboxUrl: "https://www.dropbox.com/example/living-on-a-prayer.mp3",
          tempo: 107
        }
      ]
    },
    {
      id: "set2",
      name: "Set 2",
      songs: [
        {
          id: "song8",
          title: "Sleeping in my car",
          artist: "Roxette",
          lyrics: sleepingInMyCarLyrics,
          dropboxUrl: "https://www.youtube.com/watch?v=S5fn1DfqPfA&list=RDS5fn1DfqPfA&start_radio=1",
          tempo: 128
        },
        {
          id: "song9",
          title: "Lost",
          artist: "Linkin Park",
          lyrics: lostLyrics,
          dropboxUrl: "https://www.youtube.com/watch?v=-JNzcweg7aQ",
          tempo: 103
        },
        {
          id: "song10",
          title: "Come together",
          artist: "The Beatles",
          lyrics: comeTogetherLyrics,
          dropboxUrl: "https://www.dropbox.com/example/come-together.mp3",
          tempo: 95
        },
        {
          id: "song11",
          title: "Proud Mary",
          artist: "Tina Turner",
          lyrics: proudMaryLyrics,
          dropboxUrl: "https://www.dropbox.com/scl/fi/emxvdqhjvk3ozcuwjfn0h/proud-mary-demo.mp3?rlkey=heyvye7v7m4zubtbh5xwwtiuz&e=1&st=juet32e4&dl=0",
          tempo: 85
        },
        {
          id: "song12",
          title: "Heart of Glass",
          artist: "Blondie",
          lyrics: heartOfGlassLyrics,
          dropboxUrl: "https://www.dropbox.com/example/heart-of-glass.mp3",
          tempo: 120
        },
        {
          id: "song13",
          title: "NBTU",
          artist: "Original",
          lyrics: nbtuLyrics,
          dropboxUrl: "https://www.dropbox.com/example/nbtu.mp3",
          tempo: 100
        },
        {
          id: "song14",
          title: "Holding Out for a Hero",
          artist: "Bonnie Tyler",
          lyrics: holdingOutLyrics,
          dropboxUrl: "https://www.dropbox.com/example/holding-out-for-a-hero.mp3",
          tempo: 134
        },
        {
          id: "song15",
          title: "Man I feel like a woman",
          artist: "Shania Twain",
          lyrics: manIFeelLyrics,
          dropboxUrl: "https://www.dropbox.com/example/man-i-feel-like-a-woman.mp3",
          tempo: 130
        },
        {
          id: "song16",
          title: "It's My Life",
          artist: "Bon Jovi",
          lyrics: itsMyLifeLyrics,
          dropboxUrl: "https://www.dropbox.com/scl/fi/69b4pn6frs1burhf9edr2/its-my-life.mp3?rlkey=egregdxdsons8q8069aci8m4u&e=1&st=b1uegoyf&dl=0",
          tempo: 120
        },
        {
          id: "song17",
          title: "Highway to Hell",
          artist: "AC/DC",
          lyrics: highwayToHellLyrics,
          dropboxUrl: "https://www.dropbox.com/example/highway-to-hell.mp3",
          tempo: 115
        }
      ]
    },
    {
      id: "set3",
      name: "Set 3",
      songs: [
        {
          id: "song18",
          title: "She's Got The Look",
          artist: "Roxette",
          lyrics: shesGotTheLookLyrics,
          dropboxUrl: "https://www.dropbox.com/example/shes-got-the-look.mp3",
          tempo: 95
        },
        {
          id: "song19",
          title: "I Want to Break Free",
          artist: "Queen",
          lyrics: iWantToBreakFreeLyrics,
          dropboxUrl: "https://www.dropbox.com/example/i-want-to-break-free.mp3",
          tempo: 110
        },
        {
          id: "song20",
          title: "From the Inside",
          artist: "Linkin Park",
          lyrics: fromTheInsideLyrics,
          dropboxUrl: "https://www.dropbox.com/example/from-the-inside.mp3",
          tempo: 66
        },
        {
          id: "song21",
          title: "Proud Mary",
          artist: "Tina Turner",
          lyrics: proudMaryLyrics,
          dropboxUrl: "https://www.dropbox.com/scl/fi/emxvdqhjvk3ozcuwjfn0h/proud-mary-demo.mp3?rlkey=heyvye7v7m4zubtbh5xwwtiuz&e=1&st=juet32e4&dl=0",
          tempo: 90
        },
        {
          id: "song22",
          title: "Holding Out for a Hero",
          artist: "Bonnie Tyler",
          lyrics: holdingOutLyrics,
          dropboxUrl: "https://www.dropbox.com/example/holding-out-for-a-hero.mp3",
          tempo: 134
        },
        {
          id: "song23",
          title: "Heart of Glass",
          artist: "Blondie",
          lyrics: heartOfGlassLyrics,
          dropboxUrl: "https://www.dropbox.com/example/heart-of-glass.mp3",
          tempo: 120
        },
        {
          id: "song24",
          title: "Ghost (Original)",
          artist: "Original",
          lyrics: ghostLyrics,
          dropboxUrl: "https://www.dropbox.com/example/ghost-original.mp3",
          tempo: 78
        },
        {
          id: "song25",
          title: "Lost",
          artist: "Linkin Park",
          lyrics: lostLyrics,
          dropboxUrl: "https://www.youtube.com/watch?v=-JNzcweg7aQ",
          tempo: 103
        },
        {
          id: "song26",
          title: "Must Have Been Love",
          artist: "Roxette",
          lyrics: mustHaveBeenLoveLyrics,
          dropboxUrl: "https://www.dropbox.com/example/must-have-been-love.mp3",
          tempo: 75
        },
        {
          id: "song27",
          title: "Sleeping in my car",
          artist: "Roxette",
          lyrics: sleepingInMyCarLyrics,
          dropboxUrl: "https://www.youtube.com/watch?v=S5fn1DfqPfA&list=RDS5fn1DfqPfA&start_radio=1",
          tempo: 128
        },
        {
          id: "song28",
          title: "Let Me Free",
          artist: "Original",
          lyrics: letMeFreeLyrics,
          dropboxUrl: "https://www.dropbox.com/example/let-me-free.mp3",
          tempo: 97
        },
        {
          id: "song29",
          title: "Living On a Prayer",
          artist: "Bon Jovi",
          lyrics: livingOnAPrayerLyrics,
          dropboxUrl: "https://www.dropbox.com/example/living-on-a-prayer.mp3",
          tempo: 107
        },
        {
          id: "song30",
          title: "Highway to Hell",
          artist: "AC/DC",
          lyrics: highwayToHellLyrics,
          dropboxUrl: "https://www.dropbox.com/example/highway-to-hell.mp3",
          tempo: 115
        },
        {
          id: "song31",
          title: "The Show Must Go On",
          artist: "Queen",
          lyrics: showMustGoOnLyrics,
          dropboxUrl: "https://www.dropbox.com/example/show-must-go-on.mp3",
          tempo: 100
        }
      ]
    }
  ]
};