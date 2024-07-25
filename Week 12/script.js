// Variables
const artistInput = document.getElementById("artist-input");
const albumInput = document.getElementById("album-input");
const addBtn = document.getElementById("add-btn");
const tableBody = document.getElementById("table-body");
const updateArtistInput = document.getElementById("update-artist-input");
const updateAlbumInput = document.getElementById("update-album-input");
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");
let entries = JSON.parse(localStorage.getItem("artists")) || [];
let currentEntryId = null;
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Functions
function renderTable() {
    tableBody.innerHTML = "";
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const tr = document.createElement("tr");
      const idTd = document.createElement("td");
      const artistTd = document.createElement("td");
      const albumTd = document.createElement("td");
      const actionsTd = document.createElement("td");
      const editBtn = document.createElement("button");
      editBtn.className = "edit-btn";
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      idTd.innerText = entry.id;
      artistTd.innerText = entry.artist;
      albumTd.innerText = entry.album;
      editBtn.innerText = "Edit";
      deleteBtn.innerText = "Delete";
      editBtn.addEventListener("click", () => {
        showUpdateForm(entry.id);
      });
      deleteBtn.addEventListener("click", () => {
        deleteEntry(entry.id);
      });
      actionsTd.appendChild(editBtn);
      actionsTd.appendChild(deleteBtn);
      tr.appendChild(idTd);
      tr.appendChild(artistTd);
      tr.appendChild(albumTd);
      tr.appendChild(actionsTd);
      tableBody.appendChild(tr);
    }
  }
  
  function addEntry() {
    const artist = artistInput.value.trim();
    const album = albumInput.value.trim();
    
    if(artist && album != null){
        var id = 1;
        var val = entries.map(function(entry){return entry.id; }).indexOf(id);
        while(val != -1){
            id++;
            val = entries.map(function(entry){return entry.id; }).indexOf(id);
        }
        const entry = {
            id: id,
            artist: artist,
            album: album,
        };
        entries.push(entry);
        localStorage.setItem("entries", JSON.stringify(entries));
        artistInput.value = "";
        albumInput.value = "";
        renderTable();
    }else{
        alert("Name is Required");
    }
    }
  
  function updateEntry() {
    const artist = updateArtistInput.value;
    const album = updateAlbumInput.value;
      const index = entries.findIndex((entry) => entry.id === currentEntryId);
      if (index !== -1) {
        entries[index].artist = artist;
        entries[index].album = album;
        localStorage.setItem("entries", JSON.stringify(entries));
        hideUpdateForm();
        renderTable();
      }
  }
  
  function showUpdateForm(entryId) {
    const entry = entries.find((entry) => entry.id === entryId);
    if (entry) {
      updateArtistInput.value = entry.name;
      updateAlbumInput.value = entry.email;
      currentEntryId = entry.id;
      updateBtn.addEventListener("click", updateEntry);
      cancelBtn.addEventListener("click", hideUpdateForm);
      updateBtn.style.display = "inline-block";
      cancelBtn.style.display = "inline-block";
      updateArtistInput.style.display = "inline-block";
      updateAlbumInput.style.display = "inline-block";
      document.getElementById("update-container").style.display = "block";
    }
  }
  
  function hideUpdateForm() {
    updateArtistInput.value = "";
    updateAlbumInput.value = "";
    currentEntryId = null;
    updateBtn.removeEventListener("click", updateEntry);
    cancelBtn.removeEventListener("click", hideUpdateForm);
    updateBtn.style.display = "none";
    cancelBtn.style.display = "none";
    updateArtistInput.style.display = "none";
    updateAlbumInput.style.display = "none";
    document.getElementById("update-container").style.display = "none";
  }
  
  function deleteEntry(entryId) {
    entries = entries.filter((entry) => entry.id !== entryId);
    localStorage.setItem("entries", JSON.stringify(entry));
    // if no entries hide the update form
    if (entries.length == 0){
      hideUpdateForm();
    };
    // redraw table
    renderTable();
  }
  
  // Event Listeners
  addBtn.addEventListener("click", addEntry);
  
  // Initialize table
  renderTable();