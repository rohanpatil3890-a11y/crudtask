import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Imovie } from '../model/movie';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  imgUrl: any;

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }


  uuid = () => {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      character => {
        const random = (Math.random() * 16) | 0
        const value = character === 'x' ? random : (random & 0x3) | 0x8
        return value.toString(16)
      }
    )
  }

  movie: Array<Imovie> = [
    {
      title: "Inception",
      description: "A skilled thief enters people's dreams to steal secrets from their subconscious.",
      imgUrl: "https://wallpaperaccess.com/full/1264684.jpg",
      rating: 4,
      director: "Christopher Nolan",
      releaseYear: 2010,
      id: "123"
    },
    {
      title: "The Dark Knight",
      description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
      imgUrl: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/06/wp10441077-cropped.jpg",
      rating: 5,
      director: "Christopher Nolan",
      releaseYear: 2008,
      id: "124"
    },
    {
      title: "Interstellar",
      description: "Astronauts travel through a wormhole in space in an attempt to save humanity.",
      imgUrl: "https://wallpapercrafter.com/desktop/66240-interstellar-movies.jpg",
      rating: 4,
      director: "Christopher Nolan",
      releaseYear: 2014,
      id: "125"
    },
    {
      title: "Avengers: Endgame",
      description: "The Avengers assemble once more to reverse Thanos’ devastating actions.",
      imgUrl: "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
      rating: 3,
      director: "Anthony & Joe Russo",
      releaseYear: 2019,
      id: "126"
    },
    {
      title: "Titanic",
      description: "A romantic story set aboard the tragic maiden voyage of the Titanic.",
      imgUrl: "https://preview.redd.it/in-the-1997-film-titanic-directed-by-james-cameron-the-main-v0-aw0rl10k0uka1.png?auto=webp&s=8d62dabd4643529131bfcd62613c39e0e55c2fb7",
      rating: 4,
      director: "James Cameron",
      releaseYear: 1997,
      id: "127"
    },
    {
      title: "Joker",
      description: "A failed comedian descends into madness and becomes Gotham’s infamous Joker.",
      imgUrl: "https://wallpapercave.com/wp/wp10887007.jpg",
      rating: 3,
      director: "Todd Phillips",
      releaseYear: 2019,
      id: "128"
    },
    {
      title: "Forrest Gump",
      description: "The life journey of a simple man with a big heart and extraordinary experiences.",
      imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/5217d6fa076801fdbf3943960898e6665fcb2502ae06f7394b600b10d8894add._SX1080_FMjpg_.jpg",
      rating: 3,
      director: "Robert Zemeckis",
      releaseYear: 1994,
      id: "129"
    },
    {
      title: "Gladiator",
      description: "A Roman general seeks revenge after being betrayed and losing his family.",
      imgUrl: "https://img.freepik.com/premium-photo/gladiator-stands-stadium-with-large-crowd-him_256339-4105.jpg",
      rating: 4,
      director: "Ridley Scott",
      releaseYear: 2000,
      id: "130"
    },
    {
      title: "The Matrix",
      description: "A computer hacker learns about the true nature of his reality...",
      imgUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/02/the-matrix-casting-will-smith-as-neo-over-keanu-reeves-would-have-led-to-another-massive-change-from-what-we-got.jpg",
      rating: 4,
      director: "Lana & Lilly Wachowski",
      releaseYear: 1999,
      id: "131"
    },
    {
      title: "Toy Story",
      description: "A cowboy doll is profoundly threatened and jealous...",
      imgUrl: "https://cdn.kinocheck.com/i/fviyg44xlx.jpg",
      rating: 4,
      director: "John Lasseter",
      releaseYear: 1995,
      id: "132"
    }
  ];

  @ViewChild('movieTitle') movieTitle !: ElementRef;
  @ViewChild('movieDiscription') movieDiscription !: ElementRef;
  @ViewChild('movieUrl') movieUrl !: ElementRef;
  @ViewChild('movieRating') movieRating !: ElementRef;
  @ViewChild('movieDirector') movieDirector !: ElementRef

  EditId !: string;
  isonEditMode: boolean = false;

  addMovie() {

    if (this.movieTitle.nativeElement.value) {
      let MovieObj: Imovie = {
        title: this.movieTitle.nativeElement.value,
        description: this.movieDiscription.nativeElement.value,
        imgUrl: this.movieUrl.nativeElement.value,
        rating: this.movieRating.nativeElement.value,
        director: this.movieDirector.nativeElement.value,
        id: this.uuid()
      }

      this.movie.unshift(MovieObj);
      this.snackbar.open(`The movie with id ${MovieObj.id} is created successfully`, "Close", {
        horizontalPosition: "left",
        verticalPosition: "top",
        duration: 2000
      })
    }
    this.movieTitle.nativeElement.value = "";
    this.movieDiscription.nativeElement.value = "";
    this.movieUrl.nativeElement.value = "";
    this.movieRating.nativeElement.value = "";
    this.movieDirector.nativeElement.value = "";

  }

  trackById(index: number, movie: Imovie) {
    return movie.id
  }

  onRemove(id: string) {

    let gettIndex = this.movie.findIndex(m => m.id === id);
    this.movie.splice(gettIndex, 1)

    this.snackbar.open(`The movie with id ${id} is removed successfully`, "close", {
      horizontalPosition: "left",
      verticalPosition: "top",
      duration: 2000
    })
  }

  onEdit(movie: Imovie) {

    this.movieTitle.nativeElement.value = movie.title;
    this.movieDiscription.nativeElement.value = movie.description;
    this.movieUrl.nativeElement.value = movie.imgUrl;
    this.movieDirector.nativeElement.value = movie.director;
    this.movieRating.nativeElement.value = movie.rating
    this.EditId = movie.id;
    this.isonEditMode = true;
  }

  onUpdate() {

    let UPDATE_MOVIEOBJ: Imovie = {

      title: this.movieTitle.nativeElement.value,
      description: this.movieDiscription.nativeElement.value,
      imgUrl: this.movieUrl.nativeElement.value,
      rating: this.movieRating.nativeElement.value,
      director: this.movieDirector.nativeElement.value,
      id: this.EditId
    }

    let getIndex = this.movie.findIndex(m => m.id === UPDATE_MOVIEOBJ.id);
    this.movie[getIndex] = UPDATE_MOVIEOBJ;

    this.snackbar.open(`The movie with id ${UPDATE_MOVIEOBJ.id} is updated successfully`, "Close", {
      horizontalPosition: "left",
      verticalPosition: "top",
      duration: 2000
    })
    this.movieTitle.nativeElement.value = "";
    this.movieDiscription.nativeElement.value = "";
    this.movieUrl.nativeElement.value = "";
    this.movieRating.nativeElement.value = "";
    this.movieDirector.nativeElement.value = "";
    this.isonEditMode = false;

  }

}
