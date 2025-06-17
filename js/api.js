const API_BASE = "https://v2.api.noroff.dev";
const ENDPOINT = "/gamehub";

const options = {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRyaW5nOTMiLCJlbWFpbCI6ImFkcmluZzAzNDcyQHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNzQ5ODI1NDgyfQ.WD6fHl9drwhyGLLftcHlSZUboexTDRZfVubjP0OoHms",
    "X-Noroff-API-Key": "3da5c886-3530-4ebe-82f2-29b07af7606e"
  }
};

export async function getAllProducts() {
  try {
    const response = await fetch(`${API_BASE}${ENDPOINT}`, options);
    const data = await response.json();
    return data.data;
  } catch (error) {
    alert("Failed to load products");
    return [];
  }
}
export async function getProductById(id) {
  try {
    const response = await fetch(`https://v2.api.noroff.dev/gamehub/${id}`, options);
    const data = await response.json();
    return data.data;
  } catch (error) {
    alert("Failed to load product");
  }
}
