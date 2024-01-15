import React,{useState} from "react";
import "./payment.css";

export default function Payment() {
  const bill = {
    bill_id: 1,
    product_id: 1,
    quantity: 3,
    size: 30,
    price: 20,
    account_id: 1,
    name: "product1"
  };
  const [ConfirmButton, setConfirmButton] = useState(false);

  const handlebuybutton = () =>{
    setConfirmButton(true)
  }

  const handleRejectButton = () => {
    setConfirmButton(false)
  };

  const handleConfirmButton = () => {
    
  }

  const totalCost = bill.quantity * bill.price;

  return (
    <div className="payment">
        <div className="payment-container">
            <div>Shoes name: {bill.name}</div>
            <div>Size: {bill.size}</div>
            <div>Quantity: {bill.quantity}</div>
            <div>Price: {bill.price}</div>
            <div>Total: {totalCost}</div>
            
        </div>    

        {!ConfirmButton &&<button onClick={handlebuybutton}>Buy</button>}

        {ConfirmButton && (
          <div className="confirm-payment">
            <div>r u sure?</div>
            <div className="confirm-buttons">
              <button onClick={handleRejectButton}>Reject</button>
              <button onClick={handleConfirmButton}>Confirm</button>
            </div>
          </div>
      )}
    </div>
  );
}
