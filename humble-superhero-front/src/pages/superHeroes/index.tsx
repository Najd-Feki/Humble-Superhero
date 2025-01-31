import Dialog from "../../components/Dialog";
import AddButton from "../../components/superHeroes/AddButton";
import Form from "../../components/superHeroes/Form";
import SuperHeroesContainer from "../../containers/SuperHeroes";
import useSuperHeroes from "./useSuperHeroes";
import "./index.css";
const SuperHeroes = () => {
  const {
    superheroes,
    isFormOpen,
    openForm,
    closeForm,
    submitForm,
    serverResponse,
    closeServerResponse,
  } = useSuperHeroes();
  return (
    <>
      <AddButton onClick={openForm} />
      {superheroes?.length ? (
        <SuperHeroesContainer superheroes={superheroes} />
      ) : (
        <button onClick={openForm} className="add-superhero-title ">
          Add Superhero
        </button>
      )}
      <Dialog isOpen={isFormOpen} onClose={closeForm}>
        <Form submitForm={submitForm} />
      </Dialog>
      <Dialog
        isOpen={!!serverResponse.error}
        onClose={closeServerResponse}
        color="red"
        position="top"
      >
        {serverResponse.error}
      </Dialog>
      <Dialog
        isOpen={!!serverResponse.success}
        onClose={closeServerResponse}
        color="green"
        position="top"
      >
        {serverResponse.success}
      </Dialog>
    </>
  );
};

export default SuperHeroes;
