import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITEMS_PER_PAGE, discountedPrice } from "./../../../app/constants";
import {EyeIcon, PencilIcon} from "@heroicons/react/24/outline"
import {
  fetchAllOrdersAsync,
  selectOrders,
  selectTotalOrders,
  updateOrderAsync,
} from "../../order/orderSlice";
import Pagination from "../../common/Pagination";
import { fetchAllProductsAsync } from "../../product-list/productSlice";

const AdminOrders = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const totalOrders = useSelector(selectTotalOrders);
  const [editableOrderId, setEditableOrderId] = useState(-1);


  

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync(pagination));
  }, [dispatch, page]);

  const handleEdit = (item)=>{
    if(editableOrderId !== item.id){
      setEditableOrderId(item.id);
    } else {
      setEditableOrderId(-1);
    }
  }

  const chooseColor = (status)=>{
    switch(status){
      case 'pending': 
        return 'bg-purple-200 text-purple-600';
      case "dispatched": 
        return 'bg-green-200 text-green-600';
      case "delivered": 
        return 'bg-yellow-200 text-yellow-600';
      case "cancelled": 
        return 'bg-red-200 text-red-600';

      default: 
      return ''
    }
  }

  const handleUpdate = (e, order)=>{
    const updatedOrder = {
      ...order, 
      status: e.target.value
    };
    dispatch(updateOrderAsync(updatedOrder))
    setEditableOrderId(-1);
  }

  const handleShow = ()=>{

  }

  const handlePagination = (newPage)=>{
    setPage(newPage);
    const pagination = {
      _page : newPage,
      _limit: ITEMS_PER_PAGE
    }
    console.log(pagination);
    dispatch(fetchAllProductsAsync(pagination));
  }

  useEffect(()=>{
    const pagination = {_page: page, _limit: ITEMS_PER_PAGE};
    dispatch(fetchAllOrdersAsync(pagination))
  },[dispatch, page])

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-screen bg-gray-100 bg-gray-100 flex justify-center font-sans overflow-hidden">
          <div className="">
            <div className="bg-white shadow-md rounded my-6">
              <table classNaminme=" w-full table-auto">
                <thead>
                  <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 pr-20 text-left">Order Number</th>
                    <th className="py-3 px-6 pr-20 text-left">Items</th>
                    <th className="py-3 px-6 pr-20 text-center">
                      Total Amount
                    </th>
                    <th className="py-3 px-6 pr-20 text-center">
                      Address
                    </th>
                    <th className="py-3 px-6 pr-20 text-center">Status</th>
                    <th className="py-3 px-6 pr-20 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {orders.map((order) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width={24}
                              height={24}
                              viewBox="0 0 48 48"
                              style={{ fill: "#000000" }}
                            >
                              <path
                                fill="#80deea"
                                d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                              />
                              <path
                                fill="#80deea"
                                d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                              />
                              <path
                                fill="#80deea"
                                d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                              />
                              <circle cx={24} cy={24} r={4} fill="#80deea" />
                            </svg>
                          </div>
                          <span className="font-medium">{order.id}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        {
                          order.items.map((item)=><div className="flex items-center">
                          <div className="mr-2">
                            <img
                              className="w-6 h-6 rounded-full"
                              src={item.thumbnail}
                            />
                          </div>
                          <span>{item.title} - {item.quantity} - ${discountedPrice(item)}</span>
                        </div>)
                        }
                      </td>
                      <td className="py-3 px-6 text-center">
                        {order.totalAmount}
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div>{order.selectedAddress.name}</div>
                        <div>{order.selectedAddress.street}</div>
                        <div>{order.selectedAddress.city}</div>
                        <div>{order.selectedAddress.country}</div>
                        <div>{order.selectedAddress.pinCode}</div>
                        <div>Phone : {order.selectedAddress.phone}</div>
                      </td>
                      <td className="py-3 px-6 text-center">
                       

                      {
                        order.id === editableOrderId ?
                        <select onChange={e => handleUpdate(e, order)}>
                          <option value={"pending"}>Pending</option>
                          <option value={"dispatched"}>Dispatched</option>
                          <option value={"delivered"}>Delivered</option>
                          <option value={"cancelled"}>Cancelled</option>
                        </select> :
                        <span className={`${chooseColor(order.status)} bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs`}>
                          {order.status}
                        </span>
                      }
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className=" mr-4 transform hover:text-purple-500 hover:scale-110">
                            <EyeIcon className="w-5 h-5" onClick={(e) => handleShow}></EyeIcon>
                          </div>
                          <div className="mr-2 transform hover:text-purple-500 hover:scale-110">
                            <PencilIcon className="w-5 h-5" onClick={(e) => handleEdit(order)}></PencilIcon>
                          </div>
                        
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Pagination page={page} setPage={setPage} totalItems={totalOrders} handlePagination={handlePagination}></Pagination>
    </div>
  );
};

export default AdminOrders;
