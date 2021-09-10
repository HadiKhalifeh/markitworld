import { create } from "apisauce";

const api = create({
  baseURL: "https://app.markitworld.com/api/v2/user",
  headers: {
    UserAddressId: "2378",
    StoreId: 1,
    Authorization: "446a6828200604377695aa034cf57e36",
  },
});

export default api;
