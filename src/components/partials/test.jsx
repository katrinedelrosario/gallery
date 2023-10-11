
const Hero = () => {

    return (
        <HeroContainer>
                <GenreList />
                <Outlet />
        </HeroContainer>
    )
}

const GenreList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const result = await client.getEntries({ content_type: 'homepage' })
            .then((response) => {
                if (response.items.length > 0) {
                  const image = response.items[0].fields.heroImage.fields.file.url
                  const title = response.items[0].fields.heroTitle
                  const description = response.items[0].fields.heroDescription
        
            setData(result.data);
        }
        getData()
    }, [setData])

    return (
        <div className="genre">
            <h2>Filtre</h2>
            <p>Genre</p>
            <ul>
                {data && data.map(genre => {
                    return (
                        <li key={genre.id}>
                            <Link to={`/posters/${genre.slug}`}>{genre.title}</Link></li>
                    )
                })}
            </ul>
        </div>
    )

}


export { Posters}