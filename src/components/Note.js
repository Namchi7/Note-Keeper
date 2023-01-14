import styles from "./css/Note.module.css";
import deleteIcon from "../assets/images/Delete.svg";

const Note = () => {
  const noteData = {
    notes: [
      {
        title: "Heading 1",
        description: "Dummy data for the body of Note.",
      },
      {
        title: "Heading 2",
        description: "Dummy data for the body of Note.",
      },
    ],
  };

  /* 
  window.localStorage.setItem("noteData", JSON.stringify(noteData))
  const noteDataFetched = JSON.parse(window.localStorage.getItem("noteData"))
  */

  return (
    <div className={styles.note}>
      <div id={"noteNo" + noteData.notes[0].id} className={styles.noteHead}>
        <div className={styles.noteTitle}>
          {noteData.notes[0].title}
          {/* Title */}
        </div>
        <img
          className={styles.deleteIcon}
          src={deleteIcon}
          alt="Delete Note"
        ></img>
      </div>
      <div className={styles.noteBody}>
        <p>
          {noteData.notes[0].description}
          {/* Description */}
        </p>
      </div>
    </div>
  );
};

export default Note;
