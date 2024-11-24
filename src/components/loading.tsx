export default function Loading( {open}: {open: boolean} ) {
    return (
        <div className={`${open ? "" : "hidden"} fixed top-0 left-0 w-full h-screen bg-black bg-opacity-[0.7] z-[10000]`} >
            <h1 className="text-center p-2" >Loading...</h1>
        </div>
    )
}