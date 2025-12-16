// Retrieve initial state from localStorage if available
const getInitialCart = () => {
  const storedCart = localStorage.getItem("rentalCart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const handleCart = (state = getInitialCart(), action) => {
  const product = action.payload;
  let updatedCart;

  switch (action.type) {
    case "ADDITEM":
      // For rentals, each item is unique even if same equipment (different dates)
      // Check if product with same dates already exists
      const exist = state.find(
        (x) => 
          x.id === product.id && 
          x.startDate === product.startDate && 
          x.endDate === product.endDate
      );
      
      if (exist) {
        // Increase the quantity for same rental period
        updatedCart = state.map((x) =>
          x.id === product.id && 
          x.startDate === product.startDate && 
          x.endDate === product.endDate
            ? { ...x, qty: x.qty + 1 }
            : x
        );
      } else {
        // Add new rental with dates
        updatedCart = [
          ...state,
          {
            ...product,
            qty: 1,
            startDate: product.startDate || null,
            endDate: product.endDate || null,
            rentalDays: product.rentalDays || 1,
            rentalType: product.rentalType || 'weekly', // weekly, monthly
          },
        ];
      }
      // Update localStorage
      localStorage.setItem("rentalCart", JSON.stringify(updatedCart));
      return updatedCart;

    case "DELITEM":
      const exist2 = state.find(
        (x) => 
          x.id === product.id && 
          x.startDate === product.startDate && 
          x.endDate === product.endDate
      );
      
      if (exist2.qty === 1) {
        updatedCart = state.filter(
          (x) => !(
            x.id === exist2.id && 
            x.startDate === exist2.startDate && 
            x.endDate === exist2.endDate
          )
        );
      } else {
        updatedCart = state.map((x) =>
          x.id === product.id && 
          x.startDate === product.startDate && 
          x.endDate === product.endDate
            ? { ...x, qty: x.qty - 1 }
            : x
        );
      }
      // Update localStorage
      localStorage.setItem("rentalCart", JSON.stringify(updatedCart));
      return updatedCart;

    case "UPDATERENTALDATE":
      // Update rental dates for an item
      updatedCart = state.map((x) =>
        x.id === product.id && 
        x.startDate === product.oldStartDate && 
        x.endDate === product.oldEndDate
          ? { 
              ...x, 
              startDate: product.startDate,
              endDate: product.endDate,
              rentalDays: product.rentalDays,
              rentalType: product.rentalType
            }
          : x
      );
      localStorage.setItem("rentalCart", JSON.stringify(updatedCart));
      return updatedCart;

    case "CLEARCAR T":
      localStorage.setItem("rentalCart", JSON.stringify([]));
      return [];

    default:
      return state;
  }
};

export default handleCart;
