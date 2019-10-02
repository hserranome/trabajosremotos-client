import Link from 'next/link';

const Header = (props) => (
    <div>
        <nav className="mobile top">
            <form method="get" id="searchform" action="">
                <img src="" alt="icono de busqueda" />
                <input type="hidden" name="post_type" value="trabajos-remotos" />
                <input type="text" className="field" name="s" id="s" placeholder="Encuentra tu próximo trabajo" />
            </form>
        </nav>

        <nav className="mobile bottom">
        </nav>

        <nav className="desktop">
            <div className="container big">
                <div className="logo"></div>

                <Link href="/about"><a>Test</a></Link>

                <div className="search"></div>
            </div>
        </nav>
    </div>
)

export default Header;