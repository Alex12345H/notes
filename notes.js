let notes = [];

function addNote() {
  let noteInput = document.getElementById('noteInput');
  let note = noteInput.value.trim();

  if (note !== '') {
    notes.push({ content: note, done: false });
    noteInput.value = '';
  }
}

function showNotes() {
  let notesOutput = document.getElementById('notesOutput');
  notesOutput.innerHTML = '';

  if (notes.length === 0) {
    notesOutput.innerHTML = 'Keine Notizen vorhanden.';
  } else {
    for (let i = 0; i < notes.length; i++) {
      let note = notes[i];
      let checkbox = note.done ? 'checked' : '';
      notesOutput.innerHTML += `<div>
                                  <input type="checkbox" id="checkbox${i}" ${checkbox}>
                                  <label for="checkbox${i}">${note.content}</label>
                                </div>`;
    }
  }
}

function deleteNotes() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let updatedNotes = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      updatedNotes.push(notes[i]);
    }
  }

  notes = updatedNotes;
  showNotes();
}
