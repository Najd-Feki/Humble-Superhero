import { useState } from "react";
import { ISuperhero } from "../../../types/ISuperhero";

const useForm = (submitForm: (superhero: Omit<ISuperhero, "id">) => void) => {
  const [formData, setFormData] = useState<Omit<ISuperhero, "id">>({
    name: "",
    superpower: "",
    humilityScore: 0,
  });
  const [error, setError] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const score = formData.humilityScore;
    if (score < 1 || score > 10) {
      setError("Humility score must be between 1 and 10.");
      return;
    }
    console.log(formData);
    submitForm(formData);
    setError("");
  };
  const cleanError = () => setError("");
  return {
    formData,
    handleInputChange,
    handleSubmit,
    error,
    cleanError,
  };
};
export default useForm;
