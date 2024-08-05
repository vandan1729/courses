import { useContext, useState } from "react";
import "/src/components/styling/Categories.css";
import { CardContext } from "../profileContext/CardFilter";

function Categories() {
  const { newCardData } = useContext(CardContext);
  const [selectedCategory, setSelectedCategory] = useState("All Recommendation");

  const handleClick = (category) => {
    setSelectedCategory(category);
    newCardData(category);
  };

  const categories = [
    "All Recommendation",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "UI Design",
    "Web Programming",
    "Mobile Programming",
    "Backend Development",
    "Vue JS"
  ];

  return (
    <div className='categoriesText'>
      {categories.map((category, index) => (
        <span
          key={index}
          className={`categoriesSpan ${selectedCategory === category ? 'selected' : ''}`}
          onClick={() => handleClick(category)}
        >
          {category}
        </span>
      ))}
    </div>
  );
}

export default Categories;
