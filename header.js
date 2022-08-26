import './header.css'

function Header(){
    return(
        <header>
            <div className='container'>
                <div className='header-wrapper'>
                    <h1 className='logo'>CAKE WORLD</h1>
                    <nav>
                        <a href='#'>signup</a>
                        <a href='#'>login</a>
                    </nav>

                </div>
            </div>
        </header>
    )
}

export default Header;