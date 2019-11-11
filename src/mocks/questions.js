const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/3/3a/Francia.ogg`,
        genre: `rock`,
      },
      {
        src: `//upload.wikimedia.org/wikipedia/commons/d/de/United_States_Navy_Band_-_God_Save_the_Queen.ogg`,
        genre: `pop`,
      },
      {
        src: `///upload.wikimedia.org/wikipedia/commons/0/02/United_States_Navy_Band_-_Sweden.ogg`,
        genre: `jazz`,
      },
      {
        src: `//upload.wikimedia.org/wikipedia/commons/0/0b/Dance_of_the_Sugar_Plum_Fairies_%28ISRC_USUAN1100270%29.oga`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `//upload.wikimedia.org/wikipedia/commons/0/0b/Dance_of_the_Sugar_Plum_Fairies_%28ISRC_USUAN1100270%29.oga`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  },
];

export default questions;
