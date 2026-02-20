import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { fetchAllOrders, updateOrderStatus } from "../../services/orderService";
import { toast } from "react-toastify";
import "./Orders.css";

const Orders = () => {
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetchAllOrders();
      setData(response);
    } catch (error) {
      toast.error("Unable to display the orders. Please try again.");
    }
  };

  const updateStatus = async (event, orderId) => {
    const success = await updateOrderStatus(orderId, event.target.value);
    if (success) await fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const getStatusClass = (status) => {
    if (status === "Delivered") return "status-delivered";
    if (status === "Out for delivery") return "status-out";
    return "status-preparing";
  };

  return (
<div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-lg-10">

      {data.map((order, index) => (
        <div
          key={index}
          className="card order-card mb-4 border-0 rounded-4 p-3"
        >
          <div className="card-body">

            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={assets.parcel}
                  alt="parcel"
                  height={50}
                  width={50}
                />
                <div>
                  <h6 className="mb-1 fw-semibold text-dark">
                    Order #{order.id}
                  </h6>
                  <small className="text-muted">
                    {order.userAddress}
                  </small>
                </div>
              </div>

              <span className="fw-bold fs-5 text-primary">
                ₹{order.amount.toFixed(2)}
              </span>
            </div>

            <div className="mb-3 text-secondary">
              {order.orderedItems.map((item, i) =>
                i === order.orderedItems.length - 1
                  ? `${item.name} x ${item.quantity}`
                  : `${item.name} x ${item.quantity}, `
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <span className={`badge px-3 py-2 status-badge ${getStatusClass(order.orderStatus)}`}>
                {order.orderStatus}
              </span>

              <select
                className="form-select w-auto shadow-sm"
                onChange={(event) => updateStatus(event, order.id)}
                value={order.orderStatus}
              >
                <option value="Food Preparing">Food Preparing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>

          </div>
        </div>
      ))}

    </div>
  </div>
</div>
  );
};

export default Orders;
