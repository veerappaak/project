const Spotifynavbar = () => {
    return (
        <div>
            <nav>
                <div id="logo">
                    <img src="https://myspotify-khaki.vercel.app/static/media/spo.d728c8c4f6b132765a2a.png" alt="" />
                    <h1>Spotify </h1>
                </div>

                <div id="search-bar">
                    <input type="search" placeholder="Search products" />
                    <button>search</button>
                </div>

                <div id="music">
                <i class="bi bi-universal-access-circle"></i>
                </div>
            </nav>
            <h1>All Music</h1>
        </div>
    );
}

export default Spotifynavbar;