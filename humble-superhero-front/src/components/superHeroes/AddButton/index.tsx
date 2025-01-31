import "./index.css";

const AddButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="Btn">
      <div className="sign">+</div>

      <div className="text">Add Superhero</div>
    </button>
  );
};

export default AddButton;
