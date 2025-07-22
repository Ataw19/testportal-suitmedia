export const fetchIdeas = async ({ page, size, sort = "-published_at" }) => {
  const API_BASE_URL = import.meta.env.DEV
    ? "/api"
    : "https://suitmedia-backend.suitdev.com/api";

  try {
    const params = new URLSearchParams({
      "page[number]": page,
      "page[size]": size,
      sort: sort,
    });

    const appendData = ["small_image", "medium_image"];
    appendData.forEach((item) => params.append("append[]", item));

    const response = await fetch(`${API_BASE_URL}/ideas?${params.toString()}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("Server Response Error:", response.status, errorData);
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch ideas:", error);
    return { data: [], meta: { total: 0 } };
  }
};
