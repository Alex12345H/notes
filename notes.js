let notes = [];

function addNote() {
  let noteInput = document.getElementById('noteInput');
  let note = noteInput.value.trim();

  if (note !== '') {
    notes.push({ content: note, done: false });
    noteInput.value = '';
    showNotes();
    showAlert(`Notiz "${note}" erfolgreich gespeichert.`, 'success');
  } else {
    showAlert('Es wurde keine Notiz eingegeben.', 'error');
  }
}

function showAlert(message, type) {
  let alertMessage = document.getElementById('alertMessage');
  alertMessage.textContent = message;
  alertMessage.className = `alert ${type}`;

  setTimeout(() => {
    alertMessage.textContent = '';
    alertMessage.className = 'alert';
  }, 3000);
}

function deleteNote() {
  let checked = false;
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked = true;
      notes.splice(i, 1);
    }
  }

  if (!checked) {
    showAlert('Keine Notiz ausgewählt.', 'error');
  } else {
    showNotes();
  }
}

function strikeThrough() {
  let checked = false;
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked = true;
      let content = document.getElementById(`noteContent${i}`);
      content.style.textDecoration = 'line-through';
      notes[i].done = true;
    }
  }

  if (!checked) {
    showAlert('Keine Notiz ausgewählt.', 'error');
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
      noteList.innerHTML += `<div>
                                <input type="checkbox" id="checkbox${i}">
                                <label for="checkbox${i}" id="noteContent${i}" style="${textDecoration}">${note.content}</label>
                            </div>`;
    }
  }
}

document.getElementById('noteInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addNote();
  }
});

