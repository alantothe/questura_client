import apiConfig from "../apiConfig";

export default async function getLocation(params: string) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/location/${params}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
}
