document.addEventListener('DOMContentLoaded', _ => {
  
  const items = [...document.getElementsByClassName('list__item')];
  const containerElem = document.getElementById('gallery-wrapper');
  const leftSideOfContainer = containerElem.getBoundingClientRect().left;
  const listElem = document.getElementById('list');
  let currentLeftValue = 0;
  
  window.setInterval(animationLoop, 100);
  
  function animationLoop() {
    const firstListItem = listElem.querySelector('.list__item:first-child');
    
    let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;
    
    /* 
      If first list item is out of viewable area, move it to the end of the list. 
      Also, set the current left value to -1 so we won't stutter.
    */
    if(rightSideOfFirstItem == leftSideOfContainer){
      currentLeftValue = -1;
      listElem.appendChild(firstListItem);
    }
    
    // The part that keeps it all going: animating the margin left value of the list.
    listElem.style.marginLeft = `${currentLeftValue}px`;
    currentLeftValue--;
  }

  //Navbar Toggle Button
  let toggleBtn = document.querySelector(".nav-button");
  let closeBtn = document.querySelector(".close-btn");
  let navWrapper = document.querySelector(".nav-wrapper");
  toggleBtn.onclick = function () {
    navWrapper.classList.add("show");
  }
  closeBtn.onclick = function () {
    navWrapper.classList.remove("show");
  }


  
});