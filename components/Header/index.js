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
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    header.classList.add('header');
    headerTitle.textContent = data.title;

    headerDate.classList.add('date');
    header.textContent = data.header;
    headerDate.textContent = data.date;
    headerTitle.textContent = data.title;
    headerTemp.textContent = data.temp;

    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);
}