import searchResults from './searchResultsData';

const resultStyle = {
    marginBottom: '20px',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '4px'
};

const urlStyle = {
    color: '#006621',
    fontSize: '14px',
    marginBottom: '4px'
};

const titleStyle = {
    color: '#1a0dab',
    fontSize: '20px',
    margin: '0 0 4px 0'
};

const descriptionStyle = {
    fontSize: '13px',
    color: '#545454'
};


function SearchResults() {
    return (
        <div>
            <h2>Результати Пошуку</h2>
            {searchResults.map((result) => (
                <div key={result.id} style={resultStyle}>
                    <div style={urlStyle}>
                        {result.url}
                    </div>
                    <a href={result.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <h3 style={titleStyle}>
                            {result.title}
                        </h3>
                    </a>
                    <p style={descriptionStyle}>
                        {result.description}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default SearchResults;