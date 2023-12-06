import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // Initial state for the form data
  const initialFormState = {
    name: "",
    category: "Produce",
  };

  // State to manage the form data
  const [formData, setFormData] = useState(initialFormState);

  // Event handler for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create a new item object
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category,
    };

    // Pass the new item to the parent component
    onItemFormSubmit(newItem);

    // Reset the form data to its initial state
    setFormData(initialFormState);
  };

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
