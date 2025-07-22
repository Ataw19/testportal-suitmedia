export const fetchIdeas = async ({ page, size, sort = "-published_at" }) => {
  try {
    // 1. Buat params untuk data non-array
    const params = new URLSearchParams({
      "page[number]": page,
      "page[size]": size,
      sort: sort,
    });

    // 2. Tambahkan parameter array secara manual dengan looping
    const appendData = ["small_image", "medium_image"];
    appendData.forEach((item) => params.append("append[]", item));

    // URL yang dihasilkan sekarang akan benar
    const response = await fetch(`/api/ideas?${params.toString()}`, {
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
