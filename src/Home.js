import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: 'Lorem Impsum....', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'Lorem Impsum....', author: 'yoshi', id: 2 },
        { title: 'Web Dev Top Tips', body: 'Lorem Impsum....', author: 'mario', id: 3 }
    ]);

    return (
        <div className="Home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;