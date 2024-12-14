function film() {
  return {
    searchQuery: "",
    aksi: [],
    drama: [],
    horor: [],
    komedi: [],

    filteredFilms: [],
    selectedFilm: null,
    init() {
      //
      fetch("https://FebrianiDwi.github.io/dbFilm/filmAksi.json")
        .then((response) => response.json())
        .then((data) => {
          this.aksi = data;
        });
      fetch("https://FebrianiDwi.github.io/dbFilm/filmDrama.json")
        .then((response) => response.json())
        .then((data) => {
          this.drama = data;
        });
      fetch("https://FebrianiDwi.github.io/dbFilm/filmHoror.json")
        .then((response) => response.json())
        .then((data) => {
          this.horor = data;
        });
      fetch("https://FebrianiDwi.github.io/dbFilm/filmKomedi.json")
        .then((response) => response.json())
        .then((data) => {
          this.komedi = data;
        })

        .catch((error) => console.error("Error fetching data:", error));
      this.filteredFilms = [...this.aksi, ...this.drama, ...this.horor, ...this.komedi];
    },

    filterFilms() {
      const query = this.searchQuery.toLowerCase();

      if (query === "") {
        this.filteredFilms = null;
      } else {
        this.filteredFilms = [...this.aksi, ...this.drama, ...this.horor, ...this.komedi].filter((film) => film.title.toLowerCase().startsWith(query)).sort((a, b) => a.title.localeCompare(b.title));
      }
    },
    openModal(film) {
      this.selectedFilm = film;
    },
  };
}
