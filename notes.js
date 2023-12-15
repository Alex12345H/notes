let notes = [];

function addNote() {
  let noteInput = document.getElementById('noteInput');
  let note = noteInput.value.trim();

  if (note !== '') {
    notes.push({ content: note, done: false });
    noteInput.value = '';
    document.getElementById('notesOutput').innerHTML = `Notiz "${note}" wurde gespeichert`;
    showNotes();
  }
}

function addOnEnter(event) {
  if (event.key === 'Enter') {
    addNote();
  }
}

function showNotes() {
  let noteList = document.getElementById('noteList');
  noteList.innerHTML = '';

  if (notes.length === 0) {
    noteList.innerHTML = 'Keine Notizen vorhanden.';
  } else {
    for (let i = 0; i < notes.length; i++) {
      let note = notes[i];
      let textDecoration = note.done ? 'text-decoration: line-through;' : '';
      noteList.innerHTML += `<div style="${textDecoration}">
                                <input type="checkbox" id="checkbox${i}" onchange="toggleDone(${i})">
                                <label for="checkbox${i}">${note.content}</label>
                            </div>`;
    }
  }
}

function deleteSelectedNotes() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = checkboxes.length - 1; i >= 0; i--) {
    if (checkboxes[i].checked) {
      notes.splice(i, 1);
    }
  }
  showNotes();
}

function toggleDone(index) {
  notes[index].done = !notes[index].done;
  showNotes();
}
