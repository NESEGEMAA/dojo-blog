import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: 'Lorem Impsum....', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'Lorem Impsum....', author: 'yoshi', id: 2 },
        { title: 'Web Dev Top Tips', body: 'Lorem Impsum....', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="Home">
            <BlogList blogs={ blogs } title="All blogs!" handleDelete={ handleDelete } />
        </div>
    );
}
 
export default Home;