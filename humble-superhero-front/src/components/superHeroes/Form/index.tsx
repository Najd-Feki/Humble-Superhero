import { ISuperhero } from "../../../types/ISuperhero";
import Dialog from "../../Dialog";
import "./index.css";
import useForm from "./useForm";
const Form: React.FC<{
  submitForm: (superhero: Omit<ISuperhero, "id">) => void;
}> = ({ submitForm }) => {
  const { error, formData, handleInputChange, handleSubmit, cleanError } =
    useForm(submitForm);
  return (
    <form className="form">
      <p id="heading">Add Superhero</p>
      <div className="field">
        <input
          autoComplete="off"
          placeholder="Name"
          className="input-field"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <input
          autoComplete="off"
          placeholder="Super power"
          className="input-field"
          type="text"
          name="superpower"
          value={formData.superpower}
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <input
          name="humilityScore"
          value={formData.humilityScore}
          onChange={handleInputChange}
          placeholder="Humility Score"
          className="input-field"
          type="number"
        />
      </div>

      <button className="button3" onClick={handleSubmit}>
        Submit
      </button>
      <Dialog isOpen={!!error} onClose={cleanError} position="top" color="red">
        {error}
      </Dialog>
    </form>
  );
};

export default Form;
