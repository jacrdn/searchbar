import Search from './search';
import { useState } from 'react';

const posts = [
    { id: '1', name: 'apple' },
    { id: '2', name: 'samsung' },
    { id: '3', name: 'bose' },
    { id: '4', name: 'trustmapp' },
    { id: '5', name: 'Tjx' },
    { id: '6', name: 'Covestone' },
    { id: '7', name: 'BLAZENEU' },
];

const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};

function App() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);

    return ( <div >
        <Search searchQuery = { searchQuery }
        setSearchQuery = { setSearchQuery }/> 
        <ul> {
            filteredPosts.map(post => ( <li key = { post.key } > { post.name } </li>
            ))
        } </ul> 
        
        </div>
    );
}


export default App;