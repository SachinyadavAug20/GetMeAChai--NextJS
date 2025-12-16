async function Page({ params }) {

    const { username } = await params
    return <p>ID: {username}</p>
}
export default Page
