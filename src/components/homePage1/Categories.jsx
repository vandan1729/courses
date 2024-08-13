import { useDispatch, useSelector } from 'react-redux';
import { setCardValue } from '../../redux/features/cardSlice';
import '/src/styling/Categories.css';

function Categories() {
  const dispatch = useDispatch();
  const cardValue = useSelector((state) => state.card.cardValue);

  const handleClick = (category) => {
    dispatch(setCardValue(category));
  };

  const categories = [
    'All Recommendation',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'UI Design',
    'Web Programming',
    'Mobile Programming',
    'Backend Development',
    'Vue JS',
  ];

  return (
    <div className="categoriesText">
      {categories.map((category, index) => (
        <span
          key={index}
          className={`categoriesSpan ${cardValue === category ? 'selected' : ''}`}
          onClick={() => handleClick(category)}
        >
          {category}
        </span>
      ))}
    </div>
  );
}

export default Categories;