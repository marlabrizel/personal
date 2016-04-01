var annotated = window.location.href.indexOf("genius.it/") !== -1;

if (annotated) {
  window.location.href = window.location.href.replace("genius.it/", "")
}
