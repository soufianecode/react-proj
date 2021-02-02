import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum...', author:'Mario', id: 1},
        {title: 'Welcome party!', body: 'Lorem ipsum...', author:'Wario', id: 2},
        {title: 'Web dev tips', body: 'Lorem ipsum...', author:'Waluigi', id: 3}
    ]);


    return ( 
        <div className="Home">
            <BlogList blogs={blogs} />
        </div>
     );
}
 
export default Home;