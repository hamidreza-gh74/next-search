
//  fetch data
export const Fetch_Data = async (addres, side_ren={}) => {
  const res = await fetch(addres, side_ren );
  const data = await res.json();
  return data;
};



// { cache: 'no-store' }