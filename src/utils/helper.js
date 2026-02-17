export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
};

export const getInitials = (name) => {
  if(!name) return "";
  const words = name.trim().split(/\s+/);
  const initials = words.slice(0,2).map(word => word[0].toUpperCase()).join('');
  return initials;
};

export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";
  
  const [integerPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return fractionalPart ? `${formattedInteger}.${fractionalPart}` : formattedInteger;
}

export const prepareExpenseBarChartData = (data =  []) => {
  const chartData = data.map((item) => ({
    category: item?.category,
    amount: item?.amount,
  }));
  
  return chartData;
}




