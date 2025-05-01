import { toast } from "react-toastify";

function getReadList() {
  const readListStr = localStorage.getItem("read-list");
  if (readListStr) {
    const readList = JSON.parse(readListStr);
    return readList;
  } else {
    return [];
  }
}
function setReadList(id) {
  const readListArr = getReadList();
  console.log(readListArr);
  if (readListArr.includes(id)) {
    toast.error("Already Exist in the List.");
  } else {
    readListArr.push(id);
    const readListStr = JSON.stringify(readListArr);
    localStorage.setItem("read-list", readListStr);
    toast.success("Added To the Read List.");
  }
}

function getWishList() {
  const wishListStr = localStorage.getItem("wish-list");
  if (wishListStr) {
    const wishListArr = JSON.parse(wishListStr);
    return wishListArr;
  } else {
    return [];
  }
}
function setWishList(id) {
  const wishListArr = getWishList();
  if (wishListArr.includes(id)) {
    toast.error("Already Exist in the list.");
  } else {
    wishListArr.push(id);
    const wishListStr = JSON.stringify(wishListArr);
    localStorage.setItem("wish-list", wishListStr);
    toast.success("Added to the WishList.");
  }
}
export { getReadList, getWishList, setReadList, setWishList };

