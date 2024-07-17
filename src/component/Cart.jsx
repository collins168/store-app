import{ useCart }from "react-use-cart"

export default function Cart() {
  const{
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  }=useCart()
  if (isEmpty) return<p className="text-center text-blue-600 pt-4 cursor-default">Your cart is empty</p>
return (
    <div className="bg-slate-200 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Grand Total: ksh {cartTotal}/=</h1>
        <h1 className="text-center text-2xl font-semibold mb-6">Cart ({totalUniqueItems})</h1>
        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.id} className="flex flex-col md:flex-row md:items-center p-4 bg-gray-100 rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <img src={item.img} alt="" className="w-32 h-32 rounded-full object-cover" />
              </div>
              <div className="flex flex-col md:flex-row md:flex-grow md:ml-4 mt-4 md:mt-0">
                <div className="flex-grow">
                  <h2 className="text-lg font-medium text-gray-900">{item.name}</h2>
                  <p className="text-gray-600">Quantity: {item.quantity}</p> 
                  <p className="text-gray-600">subTotal:ksh{item.price *item.quantity}</p>
                 
                </div>
                <div className="flex space-x-3 mt-4 md:mt-0">
                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
                  >Add
                  </button>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    className={`${
                      item.quantity === 1? 'bg-gray-400 cursor-not-allowed': 'bg-yellow-500 hover:bg-yellow-600'
                    } text-white font-semibold py-2 px-4 rounded-lg`}
                    disabled={item.quantity === 1}>Reduce
                  </button>
                  <button onClick={() => removeItem(item.id)}className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg">Cancel
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
