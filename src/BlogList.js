import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    console.log(blogs); // Check if blogs are being passed correctly

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs && blogs.length > 0 ? (
                blogs.map((blog) => (
                    <div className="blog-preview" key={ blog.id }>
                        <Link to={ `/blogs/${ blog.id }` }>
                            <h2>{ blog.title }</h2>
                            <p>Written by { blog.author }</p>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No blogs available</p>
            )}
        </div>
    );
}
 
export default BlogList;