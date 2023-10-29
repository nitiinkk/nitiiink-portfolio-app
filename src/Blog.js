import Post from './posts/index.js';

function Blog() {
    return (
        <div>
            <h1> Blog </h1>
            <ul>
                <li>
                    <a href="/Post">
                        Sample title1
                    </a>
                </li>
                <p>29th October, 2023</p>
                <Post/>
            </ul>
        </div>
    );
}

export default Blog;