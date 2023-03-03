function CreateJokes() {
    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <div className="button">
        <button onClick={refreshPage}>ANOTHER ONE</button>
        </div>
    )
}

export default CreateJokes;