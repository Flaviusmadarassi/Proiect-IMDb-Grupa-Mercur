export function getMoveCssClass(moveRight, moveLeft) {
  if (moveRight) {
    return " custom-carousel-move-right";
  }
  if (moveLeft) {
    return " custom-carousel-move-left";
  }
  return "";
}

export function disableButtonLeft(movieIndex, movieList) {
  if (movieIndex === 0) {
    return " disable-carousel-nav-button";
  }
  return "";
}
export function disableButtonRight(movieIndex, movieList) {
  if (movieList.length - 4 === movieIndex) {
    return " disable-carousel-nav-button";
  }
  return "";
}

export function changeImg(moveRight, moveLeft) {
  if (moveRight || moveLeft) return " change-img-opacity";

  return "";
}
