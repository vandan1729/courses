import "../styling/CartMenu.css";
import { RxCross1 } from "react-icons/rx";

const CartMenu = ({ isVisible, onClose }) => {
  return (
    <div className={`cartMenu ${isVisible ? "visible" : ""}`}>
        <div className="closeBtnDiv">
      <RxCross1 className="closeBtn" onClick={onClose} />
      </div>

      <div className="cartMenuData">
        <h2>Your Cart</h2>

        <div>
          <p>Items</p>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
