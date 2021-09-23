
export const series = [
  {
    image: "https://i.ibb.co/4NVP44v/9356d82490277928bc929a4f2c9a245e.jpg",
    title: "A Netflix opriginal series",
    Sname: "DARK",
    link: "https://www.netflix.com/in/title/80100172",
  },
  {
    image: "https://i.ibb.co/MSmZmQK/download.jpg",
    title: "An Amazon originals series",
    Sname: "The Vampire Diaries",
    link: "https://www.imdb.com/title/tt1405406/",
  },
  {
    image: "https://i.ibb.co/Rpj6R83/f-CJMHR0-Gm-R4layd4-KQXC1-HUPMlf.jpg",
    title: "An Amazon originals series",
    Sname: "Man with a Plan",
    link: "", 
  },
];

for (let index = 0; index < series.length; index++) {
    series[index].id = index;
}