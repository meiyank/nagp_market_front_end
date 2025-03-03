export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: "INR"
    }).format(price);
}

export const isLoggedIn = () => {
    const user = localStorage.getItem('user');
    return  user ? true : false
  };