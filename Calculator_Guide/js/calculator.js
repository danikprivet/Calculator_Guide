const operations = {
  sum: "+",
  substruct: "-",
  multiply: "*",
  division: "/"
};

function calculate ({a,b,operation}){
  let result = null;
  
  switch(operation){
    case operations.sum:
      result = sum(a, b);
      break;

    case operations.substruct:
      result = substruct(a, b);
      break;

    case operations.multiply:
      result = multiply(a, b);
      break;

    case operations.division:
      result = division(a,b);
      break;

    default:
      break;

  }
  
  return result;
}