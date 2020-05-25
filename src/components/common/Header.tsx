import React from 'react'

const Header = () => (
    <header className="site-header" data-test="site-header">
        <h1>
            <span>
                Local Search
            </span>
        </h1>
    </header>
)

export default React.memo(Header)
