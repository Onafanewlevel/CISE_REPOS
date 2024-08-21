import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import { Article, DefaulEmptyArticle } from "./Article";

const CreateArticle = () => {
  const [article, setArticle] = useState<Article>(DefaulEmptyArticle);
  const router = useRouter(); // Initialize useRouter

  const handleTitleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setArticle({ ...article, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(article);
    fetch("https://localhost:8082/api/article", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    })
      .then((res) => {
        console.log(res);
        setArticle(DefaulEmptyArticle);
        // Navigate to the home page
        router.push("/");
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  return (
    <div>
      <h1>Create Article</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={article.title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="content"
            value={article.toString()}
            onChange={handleTitleChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default CreateArticle;
