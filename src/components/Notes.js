import styles from "./css/Notes.module.css";

import deleteIcon from "../assets/images/Delete.svg";
// import Note from "./Note";

const Notes = () => {
  let noteData = JSON.parse(window.localStorage.getItem("notes")) || [];
  let count = 0;

  const showNotes = () => {
    const addNotes = document.getElementById("addNotesHere");

    //Clear the notes before updating
    while (addNotes.firstChild) addNotes.removeChild(addNotes.firstChild);

    if (noteData.length !== 0) {
      addNotes.style.justifyContent = "left";
      addNotes.style.alignItems = "";

      noteData.forEach((note, index) => {
        if (index === 0) {
          console.log("Index is zero here");
        }

        console.log("Count ==>>", (count += 1));

        console.log(note, index);

        const noteAll = `
                          <div class=${styles.note} id=${index}>
                            <div
                                 class="${styles.noteHead} noteId"
                                >
                              <div class=${styles.noteTitle}>
                                ${note.title}
                              </div>
                              <img
                                class=${styles.deleteIcon}
                                src=${deleteIcon}
                                alt="Delete Note"
                              ></img>
                            </div>
                            <div class=${styles.noteBody}>
                              <p>
                                ${note.description}
                              </p>
                            </div>
                        </div>
                      `;
        addNotes.insertAdjacentHTML("afterbegin", noteAll);
        // addNotes.innerHTML += noteAll;
      });

      const AllNotes = addNotes.children || [];

      for (let i = 0; i < AllNotes.length; i++) {
        AllNotes[i].addEventListener("click", () => {
          console.log(AllNotes[i].id);
          noteData.splice(AllNotes[i].id, 1);
          window.localStorage.setItem("notes", JSON.stringify(noteData));
          showNotes();
        });
      }
    } else {
      addNotes.style.justifyContent = "center";
      addNotes.style.alignItems = "center";
      const emptyMsg = `<div class=${styles.emptyMsg}>There no notes present.<br>Click the create note (+) button to add new notes.</div>`;
      addNotes.insertAdjacentHTML("afterbegin", emptyMsg);
    }
  };

  window.onload = showNotes;

  return (
    <div className={styles.notes} id="Notes">
      <div id="addNotesHere" className={styles.widthClass}>
        {/* <Note /> */}
      </div>
    </div>
  );
};

export default Notes;
