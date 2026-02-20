import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";
import "./MyOrders.css";
import { fetchUserOrders } from "../../service/orderService";

const MyOrders = () => {
  const { token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await fetchUserOrders(token);
    setData(response);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
  <div className="orders-page">
    <div className="container py-5">
      <h2 className="orders-title mb-4">My Orders</h2>

      {data.length === 0 ? (
        <div className="empty-orders text-center">
          <img src={assets.delivery} alt="" height={80} />
          <h5 className="mt-3">No Orders Yet</h5>
          <p className="text-muted">
            Looks like you haven’t placed any orders yet.
          </p>
        </div>
      ) : (
        <div className="orders-wrapper">
          {data.map((order, index) => (
            <div key={index} className="order-card">
              <div className="order-left">
                <img
                  src={assets.delivery}
                  alt=""
                  className="order-icon"
                />
              </div>

              <div className="order-details">
                <h6 className="order-items">
                  {order.orderedItems.map((item, idx) =>
                    idx === order.orderedItems.length - 1
                      ? `${item.name} x ${item.quantity}`
                      : `${item.name} x ${item.quantity}, `
                  )}
                </h6>

                <div className="order-meta">
                  <span>Items: {order.orderedItems.length}</span>
                  <span>₹{order.amount.toFixed(2)}</span>
                </div>
              </div>

              <div className="order-right">
                <span
                  className={`status-badge status-${order.orderStatus
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  ● {order.orderStatus}
                </span>

                <button
                  className="refresh-btn"
                  onClick={fetchOrders}
                >
                  <i className="bi bi-arrow-clockwise"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
};

export default MyOrders;
