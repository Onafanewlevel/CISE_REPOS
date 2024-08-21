import axiosInstance from "./axiosInstance";

// Define an Article interface
interface Article {
  title: string;
  content: string;
  author: string;
  // Add more fields if needed
}

// Fetch all articles
export const fetchArticles = async (): Promise<Article[]> => {
  try {
    const response = await axiosInstance.get<Article[]>("api/article");
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};

// Submit a new article
export const submitNewArticle = async (article: Article): Promise<void> => {
  try {
    await axiosInstance.post("/articles", article);
  } catch (error) {
    console.error("Error submitting new article:", error);
  }
};
