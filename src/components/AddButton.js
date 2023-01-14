import styles from "./css/AddButton.module.css";
import addIcon from "../assets/images/Add.svg";
const AddButton = () => {
  const openForm = () => {
    document.getElementById("createNoteForm").style.display = "flex";
  };

  return (
    <div className={styles.addButtonBG} onClick={openForm}>
      <img src={addIcon} alt="Add New Note" className={styles.addIcon} />
    </div>
  );
};

export default AddButton;
