document.addEventListener('DOMContentLoaded', function() {
    let addNoteButton = document.getElementById('addNote');
    let noteInput = document.getElementById('noteInput');
    let noteList = document.getElementById('noteList');
  
    addNoteButton.addEventListener('click', function() {
      let noteText = noteInput.value;
      if (noteText !== '') {
        // Add note to the list and save it to storage
        addNoteToList(noteText);
        saveNoteToStorage(noteText);
        noteInput.value = ''; // Clear the input field after adding the note
      }
    });
  
    // Function to add note to the list
    function addNoteToList(note) {
      let noteItem = document.createElement('div');
      noteItem.textContent = note;
      noteItem.classList.add('note');
      noteList.appendChild(noteItem);
  
      // Add delete functionality
      noteItem.addEventListener('click', function() {
        noteList.removeChild(noteItem);
        // Handle deleting the note from storage as well
        deleteNoteFromStorage(note);
      });
    }
  
    // Function to save note to Chrome storage
    function saveNoteToStorage(note) {
      // Use Chrome Storage API to save the note
      // chrome.storage.sync.set(/* Your storage logic here */);
    }
  
    // Function to delete note from Chrome storage
    function deleteNoteFromStorage(note) {
      // Use Chrome Storage API to delete the note
      // chrome.storage.sync.remove(/* Your storage logic here */);
    }
  });
  