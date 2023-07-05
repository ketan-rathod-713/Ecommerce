import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../auth/authSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleEdit = ()=>{

  }

  const handleRemove = ()=>{

  }

  return (
    <div>
      <div className="mx-auto my-6 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-3xl text-left font-bold tracking-tight text-gray-900 mb-10 mt-5">
            Name: {user.name ? user.name : "New User"}
          </h1>
          <h3 className="text-2xl text-left font-bold tracking-tight text-gray-900 mb-10 mt-5 text-red-500">
            Email Address : {user.email}
          </h3>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-left mt-6 font-bold"> Your Address : </h1>

          {user.addresses.map((address) => (
            
              <li className="flex flex-col md:flex-row sm:flex justify-between gap-x-6 py-5 px-7">
                <div className="flex gap-x-4 font-bold">
                  <div className="min-w-0 flex-auto">
                    <p className="text-left text-sm font-semibold leading-6 text-gray-900">
                      {address.name}
                    </p>
                    <p className="text-left mt-1 truncate text-xs leading-5 text-gray-500">
                      {address.street}
                    </p>
                    <p className="text-left mt-1 truncate text-xs leading-5 text-gray-500">
                      {address.pinCode}
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-left sm:flex sm:flex-col font-bold">
                  <p className="text-left md:text-right text-sm leading-6 text-gray-500">
                    {address.phone}
                  </p>

                  <p className="text- md:text-right text-sm leading-6 text-gray-500">
                    {address.city}
                  </p>
                </div>

                <div className="mt-4 md:mt-0 text-left sm:flex sm:flex-col font-bold">
                <button
                        onClick={(e)=> handleEdit(e, address.id)}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Edit
                </button>
                <button
                        onClick={(e)=> handleRemove(e, address.id)}
                          type="button"
                          className="font-medium text-red-600 hover:text-red-500"
                        >
                          Remove
                        </button>
                </div>
              </li>
           
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
