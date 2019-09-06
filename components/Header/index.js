// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(data) {
    const header = document.createElement("div");
    header.classList.add('header');

    const headerDate = document.createElement('span');
    header.appendChild(headerDate);
    headerDate.classList.add('date');
    headerDate.textContent = data.date;

    const headerTitle = document.createElement('h1');
    header.appendChild(headerTitle)
    headerDate.classList.add('temp');
    headerTitle.textContent = data.title;

    const headerTemp = document.createElement('span');
    header.appendChild(headerTemp);
    headerTemp.textContent = data.temp;

    const headerContainer =  document.querySelector(".header-container")
    headerContainer.appendChild(header);
}

Header({title: 'Lambda Times', date: 'SMARCH 28, 2019', temp: '98°'});