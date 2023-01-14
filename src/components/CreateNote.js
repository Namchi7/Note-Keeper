import styles from "./css/CreateNote.module.css";
import stylesD from "./css/Note.module.css";

import closeIcon from "../assets/images/Close.svg";
import deleteIcon from "../assets/images/Delete.svg";

const CreateNote = () => {
  const closeForm = () => {
    document.getElementById("createNoteForm").style.display = "none";
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeForm();
    }
  });

  let noteData = JSON.parse(window.localStorage.getItem("notes")) || [];

  const showNotes = () => {
    const addNotes = document.getElementById("addNotesHere");

    while (addNotes.firstChild) addNotes.removeChild(addNotes.firstChild);

    // console.log(noteData.length);
    if (addNotes !== null)
      if (noteData.length !== 0) {
        addNotes.style.justifyContent = "left";
        addNotes.style.alignItems = "";

        noteData.forEach((note, index) => {
          // console.log(note, index);
          const noteAll = `
                          <div class=${stylesD.note} id=${index}>
                            <div
                                 class="${stylesD.noteHead} noteId"
                                >
                              <div class=${stylesD.noteTitle}>
                                ${note.title}
                              </div>
                              <img
                                id="deleteIcon"
                                class=${stylesD.deleteIcon}
                                src=${deleteIcon}
                                alt="Delete Note"
                              ></img>
                            </div>
                            <div class=${stylesD.noteBody}>
                              <p>
                                ${note.description}
                              </p>
                            </div>
                        </div>
                      `;
          addNotes.insertAdjacentHTML("afterbegin", noteAll);
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

  const updateLS = (t, d) => {
    const note = {
      title: t,
      description: d,
    };

    noteData.push(note);

    window.localStorage.setItem("notes", JSON.stringify(noteData));

    showNotes();
  };

  const saveData = () => {
    const title = document.getElementById("titleId").value;
    const description = document.getElementById("bodyId").value;
    if (title || description) {
      updateLS(title, description);
      closeForm();
      document.getElementById("titleId").value = "";
      document.getElementById("bodyId").value = "";
    }
  };

  return (
    <div className={styles.createNoteContainer} id="createNoteForm">
      <div className={styles.darkBG} />
      <div className={styles.createNote}>
        <div className={styles.createNoteHead}>
          <div className={styles.headText}>Add New Note</div>
          <img
            className={styles.closeIcon}
            src={closeIcon}
            alt="Close Form"
            onClick={closeForm}
          />
        </div>
        <div className={styles.formDetails}>
          <div className={styles.titleFields}>
            <label className={styles.formLabels} for="titleText">
              Title:{" "}
            </label>
            <input
              className={styles.titleInput}
              id="titleId"
              name="titletext"
              type="text"
            />
          </div>
          <div className={styles.bodyFields}>
            <label className={styles.formLabels} for="bodyText">
              Body:{" "}
            </label>
            <textarea
              className={styles.bodyInput}
              id="bodyId"
              name="bodytext"
            />
          </div>
        </div>
        <div id="saveNote" className={styles.addNoteBtn} onClick={saveData}>
          SAVE NOTE
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
