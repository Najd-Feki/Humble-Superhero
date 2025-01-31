import { useEffect, useState } from "react";
import { ISuperhero } from "../../types/ISuperhero";

const useSuperHeroes = () => {
  const endpoint = import.meta.env.VITE_API;
  const [superheroes, setSuperheroes] = useState<ISuperhero[]>([]);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [serverResponse, setServerResponse] = useState<{
    success: string;
    error: string;
  }>({ success: "", error: "" });
  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setSuperheroes(data));
  }, [endpoint]);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  const submitForm = (formData: Omit<ISuperhero, "id">) => {
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || `HTTP error! Status: ${response.status}`
          );
        }

        return data;
      })
      .then((data) => {
        setSuperheroes(data);
        closeForm();
        setServerResponse({
          success: "Superhero added successfully",
          error: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error.message);
        setServerResponse({ success: "", error: error.message });
      });
  };
  const closeServerResponse = () => {
    setServerResponse({ success: "", error: "" });
  };
  return {
    superheroes,
    isFormOpen,
    openForm,
    closeForm,
    submitForm,
    serverResponse,
    closeServerResponse,
  };
};
export default useSuperHeroes;
