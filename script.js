const list = document.getElementById('infi-list');
let page = 1;

// Function to add new items to the list
function addItems() {
  for (let i = 0; i < 2; i++) {
    const li = document.createElement('li');
    li.textContent = `List Item ${page * 10 + i + 1}`;
    list.appendChild(li);
  }
  page++;
}

// Add initial items to the list
for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.textContent = `List Item ${i + 1}`;
  list.appendChild(li);
}

// Add event listener to detect when user reaches the end of the list
list.addEventListener('scroll', function() {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems();
  }
});
